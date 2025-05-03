# sup.ai MCP Server

A simple Model Context Protocol (MCP) server for article administration.

## Features

- Handles empty messages, special characters, emojis, and long messages
- Includes test suite

## Available Tools

- `create-article`: Takes a topic parameter and creates an article
- `update-article`: Takes a slug parameter and updates an article

## Installation

```bash
git clone git@github.com:supr-ai/mcp.git
cd mcp
npm install
npm build
```

## Configuration

Add this into your chat client mcp server configuration.  

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
![create-article.png](images/create-article.png)

### Update Article
![update-article.png](images/update-article.png)

## Usage Examples With Google Search Console MCP

Add the configuration for the GSC MCP. 

```json
{
  "mcpServers": {
    "supai": {
      "command": "node",
      "args": ["/path/to/supai/mcp/build/index.js"],
      "disabled": false
    }
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
```

### Update Article With Clicks (not tested yet)

```
you:  Get all urls with more than 0 clicks and write to file urls-with-clicks.txt

ai:  Found 10 urls, created urls-with-clicks.txt

you: Update article for each url in urls-with-clicks.txt

ai:  10 articles updated



```