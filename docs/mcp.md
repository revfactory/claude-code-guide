# Model Context Protocol (MCP)

Model Context Protocol (MCP) is an open protocol that enables Large Language Models (LLMs) to access external tools and data sources.

## Warning
> Use third party MCP servers at your own risk. Be especially careful when using MCP servers that talk to the internet.

## Configuring MCP Servers

### Adding an MCP stdio Server
```bash
# Basic syntax
claude mcp add <name> <command> [args...]

# Example: Adding a local server
claude mcp add my-server -e API_KEY=123 -- /path/to/server arg1 arg2
```

### Adding an MCP SSE Server
```bash
# Add an SSE server
claude mcp add --transport sse sse-server https://example.com/sse-endpoint

# Add an SSE server with custom headers
claude mcp add --transport sse api-server https://api.example.com/mcp --header "X-API-Key: your-key"
```

### Managing MCP Servers
```bash
# List all configured servers
claude mcp list

# Get details for a specific server
claude mcp get my-server

# Remove a server
claude mcp remove my-server
```

## Server Scopes

MCP servers can be configured at three scope levels:

1. **Local Scope**: Private to the current project
2. **Project Scope**: Shared with team via `.mcp.json`
3. **User Scope**: Available across all projects

### Example of Project Scope Configuration
```json
{
  "mcpServers": {
    "shared-server": {
      "command": "/path/to/server",
      "args": [],
      "env": {}
    }
  }
}
```

## Authentication

Many remote MCP servers require OAuth 2.0 authentication:

1. Add a remote server
2. Use `/mcp` command to authenticate
3. Complete OAuth flow in browser

## Practical Example: Postgres MCP Server

```bash
# Add a Postgres MCP server
claude mcp add postgres-server /path/to/postgres-mcp-server