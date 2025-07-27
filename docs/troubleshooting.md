# Troubleshooting

## Common Installation Issues

### Windows Installation Issues: Errors in WSL

You might encounter these issues in WSL:

**OS/platform detection issues**: If you receive an error during installation, WSL may be using Windows `npm`. Try:

- Run `npm config set os linux` before installation
- Install with `npm install -g @anthropic-ai/claude-code --force --no-os-check`

**Node not found errors**: If you see `exec: node: not found` when running `claude`, your WSL environment may be using a Windows installation of Node.js. 

To confirm:
- Check with `which npm` and `which node`
- These should point to Linux paths starting with `/usr/`

To fix:
- Install Node via your Linux distribution's package manager
- Or use [`nvm`](https://github.com/nvm-sh/nvm)

### Linux Installation Issues: Permission Errors

When installing Claude Code with npm, you may encounter permission errors if your npm global prefix is not user writable.

#### Recommended Solution: Migrate to Local Installation

The simplest solution is to migrate to a local installation:

```bash
claude migrate-installer
```

This moves Claude Code to `~/.claude/local/` and sets up an alias in your shell configuration.

After migration, restart your shell and verify:

```bash
which claude  # Should show an alias to ~/.claude/local/claude
claude doctor # Check installation health
```

## Auto-Updater Issues

If Claude Code can't update automatically:

### For Permission Errors

Options include:
1. Migrate to local installation (recommended)
2. Update manually with `claude update`
3. Fix npm permissions

### To Disable Auto-Updates

```bash
# Via configuration
claude config set autoUpdates false --global

# Or via environment variable
export DISABLE_AUTOUPDATER=1
```

## Permissions and Authentication

### Repeated Permission Prompts

Use the `/permissions` command to allow specific tools to run without approval.

### Authentication Issues

If experiencing authentication problems:
1. Run `/logout`
2. Close Claude Code
3. Restart with `claude`