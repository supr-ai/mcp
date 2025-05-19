# sup.ai MCP Server

A powerful Model Context Protocol (MCP) server for efficient article administration and management.

## Overview

The sup.ai MCP server provides a seamless interface for creating and updating articles through a chat-based interface. It integrates with various tools and services to enhance content management workflows.

## Available Tools

| Tool | Description |
|------|-------------|
| `create-article` | Creates a new article based on a specified topic |
| `update-article` | Updates an existing article identified by its slug |

## Installation

### 1. Clone, install, and build sup.ai mcp project

```bash
git clone git@github.com:supr-ai/mcp.git
cd mcp
npm install
npm build
```

### 2. Installing MCP Tool in Popular Clients

To use the sup.ai MCP server in your workflow, install the appropriate MCP tool or plugin for your editor or client. Here’s how to get started with some popular platforms:

#### Windsurf
- Use the built-in MCP integration. Add your MCP server as a new provider using its settings/preferences interface.

#### Cursor
- Open settings, search for “MCP integration,” and add a new MCP server by specifying the command and configuration described below.

#### Claude Desktop
- Navigate to integrations, enable MCP, and register your MCP server details.

#### cline
- Use the configuration file or interactive setup to point to your MCP server as described in this README.

#### Codex
- Install the MCP extension if available. Add the MCP server via extension settings.

#### JetBrains IDEs (WebStorm, IntelliJ, etc.)
- Install the MCP plugin from the JetBrains Marketplace.
- Open plugin settings and register your MCP server details (command, path, and environment variables).

> For each client, refer to its official documentation for detailed instructions on MCP integration, if required.



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

