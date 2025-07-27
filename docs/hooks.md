# Claude Code Hooks Reference

## Configuration

Claude Code hooks are configured in settings files:
- `~/.claude/settings.json` - User settings
- `.claude/settings.json` - Project settings
- `.claude/settings.local.json` - Local project settings
- Enterprise managed policy settings

### Hook Structure

Hooks are organized by matchers, where each matcher can have multiple hooks:

```json
{
  "hooks": {
    "EventName": [
      {
        "matcher": "ToolPattern",
        "hooks": [
          {
            "type": "command",
            "command": "your-command-here"
          }
        ]
      }
    ]
  }
}
```

Key components:
- **matcher**: Pattern to match tool names (case-sensitive)
  - Simple strings match exactly (e.g., `"Write"`)
  - Supports regex (e.g., `"Edit|Write"`, `"Notebook.*"`)
  - `"*"` matches all tools
- **hooks**: Array of commands to execute
  - `type`: Currently only `"command"` is supported
  - `command`: Bash command to execute
  - `timeout`: Optional timeout in seconds

## Hook Events

### PreToolUse
Runs after Claude creates tool parameters and before processing the tool call.

Common matchers:
- `Task` - Sub agent tasks
- `Bash` - Shell commands
- `Glob` - File pattern matching
- `Grep` - Content search
- `Read` - File reading
- `Edit`, `MultiEdit` - File editing
- `Write` - File writing
- `WebFetch`, `WebSearch` - Web operations

### Other Hook Events
- **PostToolUse**: Runs after a tool completes successfully
- **Notification**: Triggered for tool permission or idle notifications
- **UserPromptSubmit**: Runs before Claude processes a user prompt
- **Stop**: Runs when the main agent finishes responding
- **SubagentStop**: Runs when a sub agent finishes responding
- **PreCompact**: Runs before a compact operation

## Hook Input and Output

Hooks receive JSON input