# Manage Claude's memory

Claude Code can remember your preferences across sessions, like style guidelines and common commands in your workflow.

## Determine memory type

Claude Code offers three memory locations:

| Memory Type | Location | Purpose | Use Case Examples |
|------------|----------|---------|-------------------|
| **Project memory** | `./CLAUDE.md` | Team-shared instructions for the project | Project architecture, coding standards, common workflows |
| **User memory** | `~/.claude/CLAUDE.md` | Personal preferences for all projects | Code styling preferences, personal tooling shortcuts |
| **Project memory (local)** | `./CLAUDE.local.md` | *Deprecated* Personal project-specific preferences | Your sandbox URLs, preferred test data |

All memory files are automatically loaded into Claude Code's context when launched.

## CLAUDE.md imports

CLAUDE.md files can import additional files using `@path/to/import` syntax:

```
See @README for project overview and @package.json for available npm commands for this project.

# Additional Instructions
- git workflow @docs/git-instructions.md
```

Both relative and absolute paths are allowed. Imported files can recursively import additional files, with a max-depth of 5 hops.

## How Claude looks up memories

Claude Code reads memories recursively:
- Starts in the current working directory
- Recurses up to (but not including) the root directory
- Reads any CLAUDE.md or CLAUDE.local.md files found
- Discovers CLAUDE.md nested in subtrees, including them when reading files in those subtrees

## Quickly add memories

The fastest way to add a memory is to start your input with the `#` character:

```
# Always use descriptive variable names
```

You'll be prompted to select which memory file to store this in.

## Memory best practices

- **Be specific**: "Use 2-space indentation" is better than "Format code properly"
- **Use structure**: Format each memory as a bullet point and group related memories under descriptive markdown headings
- **Review periodically**: Update memories as your project evolves