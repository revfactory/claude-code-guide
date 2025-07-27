# Get started with Claude Code hooks

Claude Code hooks are user-defined shell commands that execute at different points in Claude Code's lifecycle. They provide deterministic control over Claude Code's behavior, ensuring specific actions always happen.

## Hook Events Overview

Claude Code provides several hook events:
- **PreToolUse**: Runs before tool calls (can block them)
- **PostToolUse**: Runs after tool calls complete
- **Notification**: Runs when Claude Code sends notifications
- **Stop**: Runs when Claude Code finishes responding
- **Sub Agent Stop**: Runs when sub agent tasks complete

## Example Use Cases

Hooks can be used for:
- Notifications
- Automatic code formatting
- Logging executed commands
- Providing feedback on code conventions
- Blocking modifications to sensitive files

## Quickstart: Logging Shell Commands

### Prerequisites
- Install `jq` for JSON processing

### Steps
1. Run `/hooks` and select `PreToolUse` hook event
2. Add a "Bash" matcher
3. Add this hook command:
```bash
jq -r '"\(.tool_input.command) - \(.tool_input.description // "No description")"' >> ~/.claude/bash-command-log.txt
```

### Example Hook Configurations

#### Code Formatting Hook
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|MultiEdit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read file_path; if echo \"$file_path\" | grep -q '\\.ts$'; then npx prettier --write \"$file_path\"; fi; }"
          }
        ]
      }
    ]
  }
}
```

#### File Protection Hook
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|MultiEdit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "python3 -c \"import json, sys; data=json.load(sys.stdin); path=