# Slash Commands

Slash commands allow you to control Claude's behavior during an interactive session.

## Built-in Slash Commands

| Command | Purpose |
|---------|---------|
| `/add-dir` | Add additional working directories |
| `/agents` | Manage custom AI sub agents for specialized tasks |
| `/bug` | Report bugs (sends conversation to Anthropic) |
| `/clear` | Clear conversation history |
| `/compact [instructions]` | Compact conversation with optional focus instructions |
| `/config` | View/modify configuration |
| `/cost` | Show token usage statistics |
| `/doctor` | Checks the health of your Claude Code installation |
| `/help` | Get usage help |
| `/init` | Initialize project with CLAUDE.md guide |
| `/login` | Switch Anthropic accounts |
| `/logout` | Sign out from your Anthropic account |
| `/mcp` | Manage MCP server connections and OAuth authentication |
| `/memory` | Edit CLAUDE.md memory files |
| `/model` | Select or change the AI model |
| `/permissions` | View or update permissions |
| `/pr_comments` | View pull request comments |
| `/review` | Request code review |
| `/status` | View account and system statuses |
| `/terminal-setup` | Install Shift+Enter key binding for newlines |
| `/vim` | Enter vim mode for alternating insert and command modes |

## Custom Slash Commands

Custom slash commands let you define frequently-used prompts as Markdown files that Claude Code can execute.

### Syntax

```
/<command-name> [arguments]
```

### Command Types

#### Project Commands
- Stored in `.claude/commands/`
- Shared with team
- Shown with "(project)" in `/help`

#### Personal Commands
- Stored in `~/.claude/commands/`
- Available across all projects
- Shown with "(user)" in `/help`

### Features

#### Namespacing
- Organize commands in subdirectories
- Example: `.claude/commands/frontend/component.md` creates `/frontend:component`

#### Arguments
Pass dynamic values using `$