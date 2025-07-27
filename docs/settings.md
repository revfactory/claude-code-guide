# Claude Code Settings

Claude Code offers various configuration options to customize its behavior. You can configure settings through the `/config` command in the interactive REPL.

## Settings Files

Settings are managed through `settings.json` files with a hierarchical structure:

- **User settings**: `~/.claude/settings.json` (applies to all projects)
- **Project settings**:
  - `.claude/settings.json` (shared with team)
  - `.claude/settings.local.json` (personal preferences)
- **Enterprise managed settings** for system administrators

## Example Settings

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test:*)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl:*)"
    ]
  },
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
    "OTEL_METRICS_EXPORTER": "otlp"
  }
}
```

## Key Configuration Options

### Available Settings

| Key | Description | Example |
|-----|-------------|---------|
| `apiKeyHelper` | Custom script to generate authentication value | `/bin/generate_temp_api_key.sh` |
| `cleanupPeriodDays` | Retention period for chat transcripts | `20` |
| `env` | Environment variables for sessions | `{"FOO": "bar"}` |
| `permissions` | Tool usage permissions | See permissions table |
| `model` | Override default model | `"claude-3-5-sonnet-20241022"` |

### Permission Settings

| Key | Description | Example |
|-----|-------------|---------|
| `allow` | Permitted tool use rules | `[ "Bash(git diff:*)" ]` |
| `deny` | Denied tool use rules | `[ "WebFetch", "Bash(curl:*)" ]` |

## Configuration Commands

- List settings: `claude config list`
- View setting: `claude config get <key>`
- Set setting: