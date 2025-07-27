# Optimize your terminal setup

Claude Code works best when your terminal is properly configured. Follow these guidelines to optimize your experience.

## Themes and Appearance

Claude cannot control the terminal theme. That's handled by your terminal application. You can match Claude Code's theme to your terminal via the `/config` command.

## Line Breaks

You have several options for entering linebreaks into Claude Code:

- **Quick escape**: Type `\` followed by Enter to create a newline
- **Keyboard shortcut**: Set up a keybinding to insert a newline

### Set up Shift+Enter (VS Code or iTerm2)

Run `/terminal-setup` within Claude Code to automatically configure Shift+Enter.

### Set up Option+Enter (VS Code, iTerm2 or macOS Terminal.app)

**For Mac Terminal.app:**
1. Open Settings → Profiles → Keyboard
2. Check "Use Option as Meta Key"

**For iTerm2 and VS Code terminal:**
1. Open Settings → Profiles → Keys
2. Under General, set Left/Right Option key to "Esc+"

## Notification Setup

Never miss when Claude completes a task with proper notification configuration.

### Terminal Bell Notifications

Enable sound alerts when tasks complete:

```sh
claude config set --global preferredNotifChannel terminal_bell
```

**For macOS users**: Enable notification permissions in System Settings → Notifications → [Your Terminal App].

### iTerm 2 System Notifications

For iTerm 2 alerts when tasks complete:
1. Open iTerm 2 Preferences
2. Navigate to Profiles → Terminal
3. Enable "Silence bell" and Filter Alerts → "Send escape sequence-generated alerts"
4. Set your preferred notification delay

Note: These notifications are specific to iTerm 2.

### Custom Notification Hooks

For advanced notification handling, create [notification hooks](/en/docs/claude-code/hooks#notification) to run your own logic.

## Handling Large Inputs

When working with extensive code or long instructions:
- **Avoid direct pasting**: Claude Code may struggle with very long pasted content
- **Use file-based workflows**: Write content to a file and ask Claude to