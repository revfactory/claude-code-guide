# Security

## How We Approach Security

### Security Foundation

Claude Code is built with security as a core principle, developed according to Anthropic's comprehensive security program. More details are available at the [Anthropic Trust Center](https://trust.anthropic.com).

### Permission-Based Architecture

Claude Code uses strict read-only permissions by default. When additional actions are needed (like editing files or running commands), it:
- Requests explicit user permission
- Allows users to control action approvals
- Requires approval for `git` commands before execution

### Built-in Protections

To mitigate risks in agentic systems, Claude Code includes:
- **Folder access restriction**: Limited to the started folder and its subfolders
- **Prompt fatigue mitigation**: Allowlisting safe commands
- **Accept Edits mode**: Batch accepting edits while maintaining permission prompts

### Protect Against Prompt Injection

Claude Code includes multiple safeguards against prompt injection attacks:

#### Core Protections
- Permission system requiring explicit approvals
- Context-aware analysis of requests
- Input sanitization
- Command blocklist preventing risky web content fetching

#### Additional Safeguards
- Network request approval
- Isolated context windows
- Trust verification for new codebases
- Command injection detection
- Fail-closed matching for unrecognized commands
- Natural language command descriptions
- Secure credential storage

**Best Practices for Untrusted Content**:
1. Review suggested commands before approval
2. Avoid piping untrusted content directly
3. Verify changes to critical files
4. Use virtual machines for external interactions
5. Report suspicious behavior with `/bug`

### MCP Security

Claude Code allows configuring Model Context Protocol (MCP) servers. Users are encouraged to:
- Write their own MCP servers
- Use trusted MCP server providers
- Configure specific Claude Code permissions

### Security Best Practices

#### Working with Sensitive Code
- Review all suggested changes
- Use project-specific permission settings
- Consider using [devcontainers](/en/docs/claude-code/devcontainer)
- Regularly audit permissions with `/permissions`

#### Team Security
- Use enterprise managed policies
- Share approved permission configurations