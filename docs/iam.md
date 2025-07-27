# Identity and Access Management

## Authentication Methods

Setting up Claude Code requires access to Anthropic models. Teams can set up access through three methods:

1. Anthropic API via the Anthropic Console
2. Amazon Bedrock
3. Google Vertex AI

### Anthropic API Authentication

To set up Claude Code access via Anthropic API:

1. Use or create an Anthropic Console account
2. Add users through:
   - Bulk invite from Console (Settings -> Members -> Invite)
   - [Set up Single Sign-On (SSO)](https://support.anthropic.com/en/articles/10280258-setting-up-single-sign-on-on-the-api-console)
3. Assign user roles:
   - "Claude Code" role: Can create Claude Code API keys
   - "Developer" role: Can create any API key
4. Each user must:
   - Accept Console invite
   - Check system requirements
   - Install Claude Code
   - Login with Console credentials

### Cloud Provider Authentication

To set up access via Bedrock or Vertex:

1. Follow [Bedrock](https://www.anthropic.com/en/docs/claude-code/amazon-bedrock) or [Vertex](https://www.anthropic.com/en/docs/claude-code/google-vertex-ai) documentation
2. Distribute cloud credential instructions to users
3. Users install Claude Code

## Access Control and Permissions

Claude Code offers fine-grained permissions to specify exactly what an agent can and cannot do.

### Permission System

| Tool Type | Example | Approval Required | "Yes, don't ask again" Behavior |
|-----------|----------|-------------------|----------------------------------|
| Read-only | File reads, LS, Grep | No | N/A |
| Bash Commands | Shell execution | Yes | Permanently per project directory and command |
| File Modification | Edit/write files | Yes | Until session end |

### Configuring Permissions

Manage tool permissions with `/permissions`:

- **Allow** rules: Use tool without manual approval
- **Deny** rules: Prevent tool use (takes precedence)
- **Additional directories**: