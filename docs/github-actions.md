# Claude Code GitHub Actions

Claude Code GitHub Actions brings AI-powered automation to your GitHub workflow. With a simple `@claude` mention in any PR or issue, Claude can analyze your code, create pull requests, implement features, and fix bugs.

## Key Features

- **Instant PR Creation**: Describe what you need, and Claude creates a complete PR
- **Automated Code Implementation**: Turn issues into working code with a single command
- **Follows Project Standards**: Respects `CLAUDE.md` guidelines and existing code patterns
- **Simple Setup**: Get started in minutes
- **Secure by Default**: Code stays on GitHub's runners

## Setup

### Quick Setup

1. Open Claude in the terminal
2. Run `/install-github-app`
3. Follow the guided setup for GitHub app and secrets

### Manual Setup

1. Install the Claude GitHub app to your repository
2. Add `ANTHROPIC_API_KEY` to repository secrets
3. Copy the workflow file from [examples/claude.yml](https://github.com/anthropics/claude-code-action/blob/main/examples/claude.yml)

## Example Use Cases

### Turn Issues into PRs

In an issue comment:
```
@claude implement this feature based on the issue description
```

### Get Implementation Help

In a PR comment:
```
@claude how should I implement user authentication for this endpoint?
```

### Fix Bugs Quickly

In an issue:
```
@claude fix the TypeError in the user dashboard component
```

## Best Practices

### CLAUDE.md Configuration

Create a `CLAUDE.md` file to define:
- Code style guidelines
- Review criteria
- Project-specific rules
- Preferred patterns

### Security Considerations

- Never commit API keys directly to the repository
- Use GitHub Secrets for API keys
- Limit action permissions
- Review Claude's suggestions before merging

## Supported Cloud Providers

- Direct Anthropic API
- AWS Bedrock
- Google Vertex AI

Detailed setup instructions are available in the [documentation](https://github.com/anthropics/claude-code-action).