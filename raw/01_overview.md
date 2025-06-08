---
title: Claude Code overview - Anthropic
url: https://docs.anthropic.com/en/docs/claude-code/overview
crawled_at: 2025-06-09 03:37:34
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

Claude Code overview

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

# Claude Code overview

Copy page

Learn about Claude Code, an agentic coding tool made by Anthropic.

Claude Code is an agentic coding tool that lives in your terminal, understands
your codebase, and helps you code faster through natural language commands. By
integrating directly with your development environment, Claude Code
streamlines your workflow without requiring additional servers or complex
setup.

    
    
    npm install -g @anthropic-ai/claude-code
    

Claude Code’s key capabilities include:

  * Editing files and fixing bugs across your codebase
  * Answering questions about your code’s architecture and logic
  * Executing and fixing tests, linting, and other commands
  * Searching through git history, resolving merge conflicts, and creating commits and PRs
  * Browsing documentation and resources from the internet using web search
  * Works with [Amazon Bedrock and Google Vertex AI](/en/docs/claude-code/bedrock-vertex-proxies) for enterprise deployments

##

​

Why Claude Code?

Claude Code operates directly in your terminal, understanding your project
context and taking real actions. No need to manually add files to context -
Claude will explore your codebase as needed.

###

​

Enterprise integration

Claude Code seamlessly integrates with enterprise AI platforms. You can
connect to [Amazon Bedrock or Google Vertex AI](/en/docs/claude-code/bedrock-
vertex-proxies) for secure, compliant deployments that meet your
organization’s requirements.

###

​

Security and privacy by design

Your code’s security is paramount. Claude Code’s architecture ensures:

  * **Direct API connection** : Your queries go straight to Anthropic’s API without intermediate servers
  * **Works where you work** : Operates directly in your terminal
  * **Understands context** : Maintains awareness of your entire project structure
  * **Takes action** : Performs real operations like editing files and creating commits

##

​

Getting started

To get started with Claude Code, follow our [installation
guide](/en/docs/claude-code/getting-started) which covers system requirements,
installation steps, and authentication process.

##

​

Quick tour

Here’s what you can accomplish with Claude Code:

###

​

From questions to solutions in seconds

    
    
    # Ask questions about your codebase
    claude
    > how does our authentication system work?
    
    # Create a commit with one command
    claude commit
    
    # Fix issues across multiple files
    claude "fix the type errors in the auth module"
    

###

​

Understand unfamiliar code

    
    
    > what does the payment processing system do?
    > find where user permissions are checked
    > explain how the caching layer works
    

###

​

Automate Git operations

    
    
    > commit my changes
    > create a pr
    > which commit added tests for markdown back in December?
    > rebase on main and resolve any merge conflicts
    

##

​

Next steps

[

## Getting started

Install Claude Code and get up and running

](/en/docs/claude-code/getting-started)[

## Core features

Explore what Claude Code can do for you

](/en/docs/claude-code/common-tasks)[

## Commands

Learn about CLI commands and controls

](/en/docs/claude-code/cli-usage)[

## Configuration

Customize Claude Code for your workflow

](/en/docs/claude-code/settings)

##

​

Additional resources

[

## Claude Code tutorials

Step-by-step guides for common tasks

](/en/docs/claude-code/tutorials)[

## Troubleshooting

Solutions for common issues with Claude Code

](/en/docs/claude-code/troubleshooting)[

## Bedrock & Vertex integrations

Configure Claude Code with Amazon Bedrock or Google Vertex AI

](/en/docs/claude-code/bedrock-vertex-proxies)[

## Reference implementation

Clone our development container reference implementation.

](https://github.com/anthropics/claude-code/tree/main/.devcontainer)

##

​

License and data usage

Claude Code is provided under Anthropic’s [Commercial Terms of
Service](https://www.anthropic.com/legal/commercial-terms).

###

​

How we use your data

We aim to be fully transparent about how we use your data. We may use feedback
to improve our products and services, but we will not train generative models
using your feedback from Claude Code. Given their potentially sensitive
nature, we store user feedback transcripts for only 30 days.

####

​

Feedback transcripts

If you choose to send us feedback about Claude Code, such as transcripts of
your usage, Anthropic may use that feedback to debug related issues and
improve Claude Code’s functionality (e.g., to reduce the risk of similar bugs
occurring in the future). We will not train generative models using this
feedback.

###

​

Privacy safeguards

We have implemented several safeguards to protect your data, including limited
retention periods for sensitive information, restricted access to user session
data, and clear policies against using feedback for model training.

For full details, please review our [Commercial Terms of
Service](https://www.anthropic.com/legal/commercial-terms) and [Privacy
Policy](https://www.anthropic.com/legal/privacy).

###

​

License

© Anthropic PBC. All rights reserved. Use is subject to Anthropic’s
[Commercial Terms of Service](https://www.anthropic.com/legal/commercial-
terms).

Was this page helpful?

YesNo

[Getting started](/en/docs/claude-code/getting-started)

[x](https://x.com/AnthropicAI)[linkedin](https://www.linkedin.com/company/anthropicresearch)[discord](https://www.anthropic.com/discord)

On this page

  * Why Claude Code?
  * Enterprise integration
  * Security and privacy by design
  * Getting started
  * Quick tour
  * From questions to solutions in seconds
  * Understand unfamiliar code
  * Automate Git operations
  * Next steps
  * Additional resources
  * License and data usage
  * How we use your data
  * Feedback transcripts
  * Privacy safeguards
  * License

