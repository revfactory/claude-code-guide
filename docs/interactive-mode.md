# Interactive Mode

## Keyboard Shortcuts

### General Controls

| Shortcut | Description | Context |
|----------|-------------|---------|
| `Ctrl+C` | Cancel current input or generation | Standard interrupt |
| `Ctrl+D` | Exit Claude Code session | EOF signal |
| `Ctrl+L` | Clear terminal screen | Keeps conversation history |
| Up/Down arrows | Navigate command history | Recall previous inputs |
| `Esc` + `Esc` | Edit previous message | Double-escape to modify |

### Multiline Input

| Method | Shortcut | Context |
|--------|----------|---------|
| Quick escape | `\` + `Enter` | Works in all terminals |
| macOS default | `Option+Enter` | Default on macOS |
| Terminal setup | `Shift+Enter` | After `/terminal-setup` |
| Paste mode | Paste directly | For code blocks, logs |

### Quick Commands

| Shortcut | Description | Notes |
|----------|-------------|-------|
| `#` at start | Memory shortcut - add to CLAUDE.md | Prompts for file selection |
| `/` at start | Slash command | See [slash commands](/en/docs/claude-code/slash-commands) |

## Vim Mode

Enable vim-style editing with `/vim` command or configure permanently via `/config`.

### Mode Switching

| Command | Action | From Mode |
|---------|--------|-----------|
| `Esc` | Enter NORMAL mode | INSERT |
| `i` | Insert before cursor | NORMAL |
| `I` | Insert at beginning of line | NORMAL |
| `a` | Insert after cursor | NORMAL |
| `A` | Insert at end of line | NORMAL |
| `o` | Open line below | NORMAL |
| `O` | Open line above | NORMAL |

### Navigation (NORMAL mode)

| Command | Action |
|---------|--------|
| `h`/`j`/`k`/`l` | Move left/down/up/right |
| `w` | Next word |
| `e`