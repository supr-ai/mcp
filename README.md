# Echo MCP Server

A simple Model Context Protocol (MCP) server that echoes back whatever message it is sent. Perfect for testing MCP functionality and as a starting point for building more complex MCP servers.

## Features

- Simple echo functionality that returns any message sent to it
- Handles empty messages, special characters, emojis, and long messages
- Includes comprehensive test suite
- Minimal dependencies
- Easy to understand and extend

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

## Extending

This server is designed to be simple and easy to understand. You can use it as a starting point for your own MCP servers:

1. Fork or clone this repository
2. Modify the `src/index.ts` file to add your own tools and functionality
3. Update the tests to cover your new functionality
4. Build and configure as described above

## License

MIT
