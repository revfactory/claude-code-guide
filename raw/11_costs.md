---
title: Manage costs effectively - Anthropic
url: https://docs.anthropic.com/en/docs/claude-code/costs
crawled_at: 2025-06-09 03:37:45
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

Manage costs effectively

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

# Manage costs effectively

Copy page

Learn how to track and optimize token usage and costs when using Claude Code.

Claude Code consumes tokens for each interaction. The average cost is $6 per
developer per day, with daily costs remaining below $12 for 90% of users.

##

​

Track your costs

  * Use `/cost` to see current session usage
  * **Anthropic Console users** :
    * Check [historical usage](https://support.anthropic.com/en/articles/9534590-cost-and-usage-reporting-in-console) in the Anthropic Console (requires Admin or Billing role)
    * Set [workspace spend limits](https://support.anthropic.com/en/articles/9796807-creating-and-managing-workspaces) for the Claude Code workspace (requires Admin role)
  * **Pro and Max plan users** : Usage is included in your subscription

##

​

Reduce token usage

  * **Compact conversations:**

    * Claude uses auto-compact by default when context exceeds 95% capacity

    * Toggle auto-compact: Run `/config` and navigate to “Auto-compact enabled”

    * Use `/compact` manually when context gets large

    * Add custom instructions: `/compact Focus on code samples and API usage`

    * Customize compaction by adding to CLAUDE.md:
        
                # Summary instructions
        
        When you are using compact, please focus on test output and code changes
        

  * **Write specific queries:** Avoid vague requests that trigger unnecessary scanning

  * **Break down complex tasks:** Split large tasks into focused interactions

  * **Clear history between tasks:** Use `/clear` to reset context

Costs can vary significantly based on:

  * Size of codebase being analyzed
  * Complexity of queries
  * Number of files being searched or modified
  * Length of conversation history
  * Frequency of compacting conversations
  * Background processes (haiku generation, conversation summarization)

##

​

Background token usage

Claude Code uses tokens for some background functionality even when idle:

  * **Haiku generation** : Small creative messages that appear while you type (approximately 1 cent per day)
  * **Conversation summarization** : Background jobs that summarize previous conversations for the `claude --resume` feature
  * **Command processing** : Some commands like `/cost` may generate requests to check status

These background processes consume a small amount of tokens (typically under
$0.04 per session) even without active interaction.

For team deployments, we recommend starting with a small pilot group to
establish usage patterns before wider rollout.

Was this page helpful?

YesNo

[Monitoring usage](/en/docs/claude-code/monitoring-usage)[GitHub
Actions](/en/docs/claude-code/github-actions)

[x](https://x.com/AnthropicAI)[linkedin](https://www.linkedin.com/company/anthropicresearch)[discord](https://www.anthropic.com/discord)

On this page

  * Track your costs
  * Reduce token usage
  * Background token usage

