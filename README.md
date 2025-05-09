# sup.ai MCP Server

A powerful Model Context Protocol (MCP) server for efficient article administration and management.

## Overview

The sup.ai MCP server provides a seamless interface for creating and updating articles through a chat-based interface. It integrates with various tools and services to enhance content management workflows.

## Features

- Robust message handling (empty messages, special characters, emojis, and long messages)
- Comprehensive test suite for reliability
- Simple integration with chat clients
- Support for Google Search Console integration

## Available Tools

| Tool | Description |
|------|-------------|
| `create-article` | Creates a new article based on a specified topic |
| `update-article` | Updates an existing article identified by its slug |

## Installation

```bash
# Clone the repository
git clone git@github.com:supr-ai/mcp.git

# Navigate to the project directory
cd mcp

# Install dependencies
npm install

# Build the project
npm build
```

## Configuration

Add the following configuration to your chat client MCP server settings:

```json
{
  "mcpServers": {
    "supai": {
      "command": "node",
      "args": ["/path/to/supai/mcp/build/index.js"],
      "disabled": false,
      "env": {
        "SUPAI_API_KEY": "****",
        "SUPAI_ENDPOINT": "https://sup.ai"
      }
    }
  }
}
```

## Usage Examples

### Create Article
This example demonstrates how to create a new article using the MCP server:

```
you: @supai create-article topic="Best practices for SEO optimization"

ai: Creating article on "Best practices for SEO optimization"...
   Article created successfully!
   URL: https://sup.ai/articles/best-practices-for-seo-optimization
```

### Update Article
This example shows how to update an existing article:

```
you: @supai update-article slug="best-practices-for-seo-optimization" 

ai: Updating article "best-practices-for-seo-optimization"...
   Article updated successfully!
   URL: https://sup.ai/articles/best-practices-for-seo-optimization
```

## Integration with Google Search Console

You can enhance your workflow by integrating with Google Search Console MCP. Add the following configuration:

```json
{
  "mcpServers": {
    "supai": {
      "command": "node",
      "args": ["/path/to/supai/mcp/build/index.js"],
      "disabled": false
    },
    "gsc": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-gsc"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/google-search-console-mcp.json"
      }
    }
  }
}
```

