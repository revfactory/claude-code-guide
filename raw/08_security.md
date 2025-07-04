---
title: Manage permissions and security - Anthropic
url: https://docs.anthropic.com/en/docs/claude-code/security
crawled_at: 2025-06-09 03:37:42
---

[Anthropic home page![light logo](https://mintlify.s3.us-
west-1.amazonaws.com/anthropic/logo/light.svg)![dark
logo](https://mintlify.s3.us-west-1.amazonaws.com/anthropic/logo/dark.svg)](/)

English

Search...

  * [Research](https://www.anthropic.com/research)
  * [Login](https://console.anthropic.com/login)
  * [Sign up](https://console.anthropic.com/login)
  * [Sign up](https://console.anthropic.com/login)

Search...

Navigation

Claude Code

Manage permissions and security

[Welcome](/en/home)[Developer Guide](/en/docs/welcome)[API
Guide](/en/api/overview)[Claude Code](/en/docs/claude-
code/overview)[Resources](/en/resources/overview)[Release Notes](/en/release-
notes/overview)

* [Documentation](/en/home)
* [Developer Discord](https://www.anthropic.com/discord)
* [Support](https://support.anthropic.com/)

##### Claude Code

  * [Overview](/en/docs/claude-code/overview)
  * [Getting started](/en/docs/claude-code/getting-started)
  * [Common tasks](/en/docs/claude-code/common-tasks)
  * [CLI usage](/en/docs/claude-code/cli-usage)
  * [IDE integrations](/en/docs/claude-code/ide-integrations)
  * [Memory management](/en/docs/claude-code/memory)
  * [Settings](/en/docs/claude-code/settings)
  * [Security](/en/docs/claude-code/security)
  * [Team setup](/en/docs/claude-code/team)
  * [Monitoring usage](/en/docs/claude-code/monitoring-usage)
  * [Costs](/en/docs/claude-code/costs)
  * [GitHub Actions](/en/docs/claude-code/github-actions)
  * [SDK](/en/docs/claude-code/sdk)
  * [Tutorials](/en/docs/claude-code/tutorials)
  * [Troubleshooting](/en/docs/claude-code/troubleshooting)

##### Third-party integrations

  * [Overview](/en/docs/claude-code/third-party-integrations)
  * [Amazon Bedrock](/en/docs/claude-code/amazon-bedrock)
  * [Google Vertex AI](/en/docs/claude-code/google-vertex-ai)
  * [Corporate proxy](/en/docs/claude-code/corporate-proxy)
  * [LLM gateway](/en/docs/claude-code/llm-gateway)

Claude Code

# Manage permissions and security

Copy page

Learn about Claude Code’s permission system, tools access, and security
safeguards.

Claude Code uses a tiered permission system to balance power and safety:

Tool Type| Example| Approval Required| ”Yes, don’t ask again” Behavior  
---|---|---|---  
Read-only| File reads, LS, Grep| No| N/A  
Bash Commands| Shell execution| Yes| Permanently per project directory and
command  
File Modification| Edit/write files| Yes| Until session end  
  
##

​

Tools available to Claude

Claude Code has access to a set of powerful tools that help it understand and
modify your codebase:

Tool| Description| Permission Required  
---|---|---  
 **Agent**|  Runs a sub-agent to handle complex, multi-step tasks| No  
 **Bash**|  Executes shell commands in your environment| Yes  
 **Edit**|  Makes targeted edits to specific files| Yes  
 **Glob**|  Finds files based on pattern matching| No  
 **Grep**|  Searches for patterns in file contents| No  
 **LS**|  Lists files and directories| No  
 **MultiEdit**|  Performs multiple edits on a single file atomically| Yes  
 **NotebookEdit**|  Modifies Jupyter notebook cells| Yes  
 **NotebookRead**|  Reads and displays Jupyter notebook contents| No  
 **Read**|  Reads the contents of files| No  
 **TodoRead**|  Reads the current session’s task list| No  
 **TodoWrite**|  Creates and manages structured task lists| No  
 **WebFetch**|  Fetches content from a specified URL| Yes  
 **WebSearch**|  Performs web searches with domain filtering| Yes  
 **Write**|  Creates or overwrites files| Yes  
  
Permission rules can be configured using `/allowed-tools` or in [permission
settings](/en/docs/claude-code/settings#permissions).

##

​

Protect against prompt injection

Prompt injection is a technique where an attacker attempts to override or
manipulate an AI assistant’s instructions by inserting malicious text. Claude
Code includes several safeguards against these attacks:

  * **Permission system** : Sensitive operations require explicit approval
  * **Context-aware analysis** : Detects potentially harmful instructions by analyzing the full request
  * **Input sanitization** : Prevents command injection by processing user inputs
  * **Command blocklist** : Blocks risky commands that fetch arbitrary content from the web like `curl` and `wget`

**Best practices for working with untrusted content** :

  1. Review suggested commands before approval
  2. Avoid piping untrusted content directly to Claude
  3. Verify proposed changes to critical files
  4. Report suspicious behavior with `/bug`

While these protections significantly reduce risk, no system is completely
immune to all attacks. Always maintain good security practices when working
with any AI tool.

##

​

Configure network access

Claude Code requires access to:

  * api.anthropic.com
  * statsig.anthropic.com
  * sentry.io

Allowlist these URLs when using Claude Code in containerized environments.

##

​

Development container reference implementation

Claude Code provides a development container configuration for teams that need
consistent, secure environments. This preconfigured [devcontainer
setup](https://code.visualstudio.com/docs/devcontainers/containers) works
seamlessly with VS Code’s Remote - Containers extension and similar tools.

The container’s enhanced security measures (isolation and firewall rules)
allow you to run `claude --dangerously-skip-permissions` to bypass permission
prompts for unattended operation. We’ve included a [reference
implementation](https://github.com/anthropics/claude-
code/tree/main/.devcontainer) that you can customize for your needs.

While the devcontainer provides substantial protections, no system is
completely immune to all attacks. Always maintain good security practices and
monitor Claude’s activities.

###

​

Key features

  * **Production-ready Node.js** : Built on Node.js 20 with essential development dependencies
  * **Security by design** : Custom firewall restricting network access to only necessary services
  * **Developer-friendly tools** : Includes git, ZSH with productivity enhancements, fzf, and more
  * **Seamless VS Code integration** : Pre-configured extensions and optimized settings
  * **Session persistence** : Preserves command history and configurations between container restarts
  * **Works everywhere** : Compatible with macOS, Windows, and Linux development environments

###

​

Getting started in 4 steps

  1. Install VS Code and the Remote - Containers extension
  2. Clone the [Claude Code reference implementation](https://github.com/anthropics/claude-code/tree/main/.devcontainer) repository
  3. Open the repository in VS Code
  4. When prompted, click “Reopen in Container” (or use Command Palette: Cmd+Shift+P → “Remote-Containers: Reopen in Container”)

###

​

Configuration breakdown

The devcontainer setup consists of three primary components:

  * [**devcontainer.json**](https://github.com/anthropics/claude-code/blob/main/.devcontainer/devcontainer.json): Controls container settings, extensions, and volume mounts
  * [**Dockerfile**](https://github.com/anthropics/claude-code/blob/main/.devcontainer/Dockerfile): Defines the container image and installed tools
  * [**init-firewall.sh**](https://github.com/anthropics/claude-code/blob/main/.devcontainer/init-firewall.sh): Establishes network security rules

###

​

Security features

The container implements a multi-layered security approach with its firewall
configuration:

  * **Precise access control** : Restricts outbound connections to whitelisted domains only (npm registry, GitHub, Anthropic API, etc.)
  * **Default-deny policy** : Blocks all other external network access
  * **Startup verification** : Validates firewall rules when the container initializes
  * **Isolation** : Creates a secure development environment separated from your main system

###

​

Customization options

The devcontainer configuration is designed to be adaptable to your needs:

  * Add or remove VS Code extensions based on your workflow
  * Modify resource allocations for different hardware environments
  * Adjust network access permissions
  * Customize shell configurations and developer tooling

Was this page helpful?

YesNo

[Settings](/en/docs/claude-code/settings)[Team setup](/en/docs/claude-
code/team)

[x](https://x.com/AnthropicAI)[linkedin](https://www.linkedin.com/company/anthropicresearch)[discord](https://www.anthropic.com/discord)

On this page

  * Tools available to Claude
  * Protect against prompt injection
  * Configure network access
  * Development container reference implementation
  * Key features
  * Getting started in 4 steps
  * Configuration breakdown
  * Security features
  * Customization options

