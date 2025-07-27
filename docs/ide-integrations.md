# Add Claude Code to your IDE

Claude Code works great with any Integrated Development Environment (IDE) that has a terminal. Just run `claude`, and you're ready to go.

## Supported IDEs

Claude Code provides dedicated integrations for:
- **Visual Studio Code** (including forks like Cursor, Windsurf, and VSCodium)
- **JetBrains IDEs** (including IntelliJ, PyCharm, Android Studio, WebStorm, PhpStorm and GoLand)

## Features

- **Quick launch**: Use `Cmd+Esc` (Mac) or `Ctrl+Esc` (Windows/Linux) to open Claude Code directly from your editor
- **Diff viewing**: Code changes displayed in IDE diff viewer
- **Selection context**: Current selection/tab automatically shared with Claude Code
- **File reference shortcuts**: Use `Cmd+Option+K` (Mac) or `Alt+Ctrl+K` (Linux/Windows) to insert file references
- **Diagnostic sharing**: IDE diagnostic errors automatically shared with Claude

## Installation

### VS Code

1. Open VS Code
2. Open the integrated terminal
3. Run `claude` - the extension will auto-install

### JetBrains IDEs

1. Find and install the Claude Code plugin from the marketplace
2. Restart your IDE

## Usage

### From Your IDE
Run `claude` from your IDE's integrated terminal to activate all features.

### From External Terminals
Use the `/ide` command to connect Claude Code to your IDE.

## Configuration

1. Run `claude`
2. Enter the `/config` command
3. Adjust preferences (setting diff tool to `auto` enables automatic IDE detection)

## Troubleshooting

### VS Code Extension Issues
- Ensure running from VS Code's integrated terminal
- Verify CLI command is available (`code`, `cursor`, etc.)
- Check VS Code extension installation permissions

### JetBrains Plugin Issues
- Run from project root directory
- Ensure plugin is enabled
- Completely restart IDE
- For Remote Development, install plugin on remote host