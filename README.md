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

### 1. Dependencies

#### Windsurf
- Use the built-in MCP integration. Add your MCP server as a new provider using its settings/preferences interface.

#### node & npm

##### via homebrew for mac
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
``` 

### 2. Clone, install, and build sup.ai mcp project

```bash
mkdir supai
cd supai
mkdir work
git clone git@github.com:supr-ai/mcp.git
cd mcp
npm install
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

