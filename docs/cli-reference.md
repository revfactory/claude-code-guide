# CLI Reference for Claude Code

## CLI Commands

| Command | Description | Example |
|---------|-------------|---------|
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | Start REPL with initial prompt | `claude "explain this project"` |
| `claude -p "query"` | Query via SDK, then exit | `claude -p "explain this function"` |
| `cat file \| claude -p "query"` | Process piped content | `cat logs.txt \| claude -p "explain"` |
| `claude -c` | Continue most recent conversation | `claude -c` |
| `claude -r "<session-id>" "query"` | Resume session by ID | `claude -r "abc123" "Finish this PR"` |
| `claude update` | Update to latest version | `claude update` |
| `claude mcp` | Configure Model Context Protocol (MCP) servers | See MCP documentation |

## CLI Flags

| Flag | Description | Example |
|------|-------------|---------|
| `--add-dir` | Add additional working directories | `claude --add-dir ../apps ../lib` |
| `--allowedTools` | List of tools to allow without prompting | `"Bash(git log:*)" "Bash(git diff:*)" "Read"` |
| `--disallowedTools` | List of tools to disallow without prompting | `"Bash(git log:*)" "Bash(git diff:*)" "Edit"` |
| `--print`, `-p` | Print response without interactive mode | `claude -p "query"` |
| `--output-format` | Specify output format (text, json, stream-json) | `claude -p "query" --output-format json` |
| `--verbose` | Enable verbose logging | `claude --verbose` |
| `--model` | Set model for current session | `claude --model claude-sonnet-4-20250514` |

**Tip**: The `--output-format json` flag is useful for scripting and automation, allowing programmatic parsing of Claude's responses.

## See Also
- [Interactive mode](/en