#!/usr/bin/env node

import {Server} from "@modelcontextprotocol/sdk/server/index.js";
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fetch from "node-fetch";

const server = new Server(
    {
        name: "supai-mcp-server",
        version: "0.1.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "create-article",
                description: "Generate a new article in sup.ai",
                inputSchema: {
                    type: "object",
                    properties: {
                        topic: {
                            type: "string",
                            description: "The topic of the article to create"
                        }
                    },
                    required: ["topic"]
                }
            },
            {
                name: "delete-article",
                description: "Delete an article in sup.ai",
                inputSchema: {
                    type: "object",
                    properties: {
                        topic: {
                            type: "string",
                            description: "The slug of the article to delete"
                        }
                    },
                    required: ["slug"]
                }
            },
            {
                name: "update-article",
                description: "Update an article in sup.ai",
                inputSchema: {
                    type: "object",
                    properties: {
                        slug: {
                            type: "string",
                            description: "The slug of the article to update"
                        }
                    },
                    required: ["slug"]
                }
            }
        ]
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    switch (request.params.name) {
        case "update-article": {
            const slug = request.params.arguments?.slug
            const response = await fetch(`${process.env.SUPAI_ENDPOINT}/api/articles/update`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.SUPAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    slug: slug
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to update article: ${await response.text()}`);
            }
            const result = await response.json() as ArticleUpdateResult;

            return {
                content: [{
                    type: "text",
                    text: `Article updated ${process.env.SUPAI_ENDPOINT}/articles/${result.category}/${result.slug}`
                }]
            };
        }
        case "delete-article": {
            const slug = request.params.arguments?.slug
            const response = await fetch(`${process.env.SUPAI_ENDPOINT}/api/articles?slug=${slug}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${process.env.SUPAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to delete article: ${await response.text()}`);
            }
            const result = await response.json() as ArticleUpdateResult;

            return {
                content: [{
                    type: "text",
                    text: `Article deleted ${slug}`
                }]
            };
        }
        case "create-article": {
            const response = await fetch(`${process.env.SUPAI_ENDPOINT}/api/articles`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.SUPAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    topic: request.params.arguments?.topic
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to create article: ${await response.text()}`);
            }

            const result = await response.json() as ArticleCreationResult;

            return {
                content: [{
                    type: "text",
                    text: `Article created ${process.env.SUPAI_ENDPOINT}/articles/${result.category}/${result.article}`
                }]
            };
        }
        default:
            throw new Error("Unknown tool");
    }
});

interface ArticleUpdateResult {
    category: string
    slug: string
    bodies: BodyUpdateResult[]
}

interface BodyUpdateResult {}

interface ArticleCreationResult {
    category: string
    article: string
}
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("sup.ai MCP server running on stdio");
}

main().catch((error) => {
    console.error("Server error:", error);
    process.exit(1);
});
