# Echo MCP Server

<img src="assets/echo-logo.png" width="256" height="256" alt="Echo Logo" />

A simple Model Context Protocol (MCP) server that echoes back whatever message it is sent. Perfect for testing MCP functionality

## Features

- Simple echo functionality that returns any message sent to it
- Handles empty messages, special characters, emojis, and long messages
- Includes test suite

## Available Tools

- `echo`: Takes a message parameter and echoes it back exactly as received

## Installation

```bash
git clone https://github.com/Garoth/echo-mcp.git
cd echo-mcp
npm install
```

## Configuration

Add the echo server to your Cline MCP settings file inside VSCode's settings (ex. ~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json):

```json
{
  "mcpServers": {
    "echo-server": {
      "command": "node",
      "args": ["/path/to/echo-server/build/index.js"],
      "disabled": false,
      "autoApprove": [
        "echo"
      ]
    }
  }
}
```

## Usage Examples

### Basic Echo

```
Input: "Hello, world!"
Output: "Hello, world!"
```

### Special Characters

```
Input: "Special chars: !@#$%^&*()_+{}[]|\\:;\"'<>,.?/"
Output: "Special chars: !@#$%^&*()_+{}[]|\\:;\"'<>,.?/"
```

### Emojis

```
Input: "Message with emojis: 😀 🚀 🌈 🎉"
Output: "Message with emojis: 😀 🚀 🌈 🎉"
```

## Development

### Running Tests

The tests verify the echo functionality works correctly with various types of input:

```bash
npm test
```

### Building

```bash
npm run build
```

## License

MIT
