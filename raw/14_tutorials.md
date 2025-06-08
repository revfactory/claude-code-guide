---
title: Tutorials - Anthropic
url: https://docs.anthropic.com/en/docs/claude-code/tutorials
crawled_at: 2025-06-09 03:37:49
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

Tutorials

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

# Tutorials

Copy page

Practical examples and patterns for effectively using Claude Code in your
development workflow.

This guide provides step-by-step tutorials for common workflows with Claude
Code. Each tutorial includes clear instructions, example commands, and best
practices to help you get the most from Claude Code.

##

​

Table of contents

  * [Resume previous conversations](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#resume-previous-conversations)
  * [Understand new codebases](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#understand-new-codebases)
  * [Fix bugs efficiently](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#fix-bugs-efficiently)
  * [Refactor code](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#refactor-code)
  * [Work with tests](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#work-with-tests)
  * [Create pull requests](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#create-pull-requests)
  * [Handle documentation](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#handle-documentation)
  * [Work with images](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#work-with-images)
  * [Use extended thinking](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#use-extended-thinking)
  * [Set up project memory](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#set-up-project-memory)
  * [Set up Model Context Protocol (MCP)](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#set-up-model-context-protocol-mcp)
  * [Use Claude as a unix-style utility](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#use-claude-as-a-unix-style-utility)
  * [Create custom slash commands](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#create-custom-slash-commands)
  * [Run parallel Claude Code sessions with Git worktrees](/_sites/docs.anthropic.com/en/docs/claude-code/tutorials#run-parallel-claude-code-sessions-with-git-worktrees)

##

​

Resume previous conversations

###

​

Continue your work seamlessly

**When to use:** You’ve been working on a task with Claude Code and need to
continue where you left off in a later session.

Claude Code provides two options for resuming previous conversations:

  * `--continue` to automatically continue the most recent conversation
  * `--resume` to display a conversation picker

1

Continue the most recent conversation

    
    
    claude --continue
    

This immediately resumes your most recent conversation without any prompts.

2

Continue in non-interactive mode

    
    
    claude --continue --print "Continue with my task"
    

Use `--print` with `--continue` to resume the most recent conversation in non-
interactive mode, perfect for scripts or automation.

3

Show conversation picker

    
    
    claude --resume
    

This displays an interactive conversation selector showing:

  * Conversation start time
  * Initial prompt or conversation summary
  * Message count

Use arrow keys to navigate and press Enter to select a conversation.

**How it works:**

  1. **Conversation Storage** : All conversations are automatically saved locally with their full message history
  2. **Message Deserialization** : When resuming, the entire message history is restored to maintain context
  3. **Tool State** : Tool usage and results from the previous conversation are preserved
  4. **Context Restoration** : The conversation resumes with all previous context intact

**Tips:**

  * Conversation history is stored locally on your machine
  * Use `--continue` for quick access to your most recent conversation
  * Use `--resume` when you need to select a specific past conversation
  * When resuming, you’ll see the entire conversation history before continuing
  * The resumed conversation starts with the same model and configuration as the original

**Examples:**

    
    
    # Continue most recent conversation
    claude --continue
    
    # Continue most recent conversation with a specific prompt
    claude --continue --print "Show me our progress"
    
    # Show conversation picker
    claude --resume
    
    # Continue most recent conversation in non-interactive mode
    claude --continue --print "Run the tests again"
    

##

​

Understand new codebases

###

​

Get a quick codebase overview

**When to use:** You’ve just joined a new project and need to understand its
structure quickly.

1

Navigate to the project root directory

    
    
    cd /path/to/project 
    

2

Start Claude Code

    
    
    claude 
    

3

Ask for a high-level overview

    
    
    > give me an overview of this codebase 
    

4

Dive deeper into specific components

    
    
    > explain the main architecture patterns used here 
    
    
    
    > what are the key data models?
    
    
    
    > how is authentication handled?
    

**Tips:**

  * Start with broad questions, then narrow down to specific areas
  * Ask about coding conventions and patterns used in the project
  * Request a glossary of project-specific terms

###

​

Find relevant code

**When to use:** You need to locate code related to a specific feature or
functionality.

1

Ask Claude to find relevant files

    
    
    > find the files that handle user authentication 
    

2

Get context on how components interact

    
    
    > how do these authentication files work together? 
    

3

Understand the execution flow

    
    
    > trace the login process from front-end to database 
    

**Tips:**

  * Be specific about what you’re looking for
  * Use domain language from the project

* * *

##

​

Fix bugs efficiently

###

​

Diagnose error messages

**When to use:** You’ve encountered an error message and need to find and fix
its source.

1

Share the error with Claude

    
    
    > I'm seeing an error when I run npm test 
    

2

Ask for fix recommendations

    
    
    > suggest a few ways to fix the @ts-ignore in user.ts 
    

3

Apply the fix

    
    
    > update user.ts to add the null check you suggested 
    

**Tips:**

  * Tell Claude the command to reproduce the issue and get a stack trace
  * Mention any steps to reproduce the error
  * Let Claude know if the error is intermittent or consistent

* * *

##

​

Refactor code

###

​

Modernize legacy code

**When to use:** You need to update old code to use modern patterns and
practices.

1

Identify legacy code for refactoring

    
    
    > find deprecated API usage in our codebase 
    

2

Get refactoring recommendations

    
    
    > suggest how to refactor utils.js to use modern JavaScript features 
    

3

Apply the changes safely

    
    
    > refactor utils.js to use ES2024 features while maintaining the same behavior 
    

4

Verify the refactoring

    
    
    > run tests for the refactored code 
    

**Tips:**

  * Ask Claude to explain the benefits of the modern approach
  * Request that changes maintain backward compatibility when needed
  * Do refactoring in small, testable increments

* * *

##

​

Work with tests

###

​

Add test coverage

**When to use:** You need to add tests for uncovered code.

1

Identify untested code

    
    
    > find functions in NotificationsService.swift that are not covered by tests 
    

2

Generate test scaffolding

    
    
    > add tests for the notification service 
    

3

Add meaningful test cases

    
    
    > add test cases for edge conditions in the notification service 
    

4

Run and verify tests

    
    
    > run the new tests and fix any failures 
    

**Tips:**

  * Ask for tests that cover edge cases and error conditions
  * Request both unit and integration tests when appropriate
  * Have Claude explain the testing strategy

* * *

##

​

Create pull requests

###

​

Generate comprehensive PRs

**When to use:** You need to create a well-documented pull request for your
changes.

1

Summarize your changes

    
    
    > summarize the changes I've made to the authentication module 
    

2

Generate a PR with Claude

    
    
    > create a pr 
    

3

Review and refine

    
    
    > enhance the PR description with more context about the security improvements 
    

4

Add testing details

    
    
    > add information about how these changes were tested 
    

**Tips:**

  * Ask Claude directly to make a PR for you
  * Review Claude’s generated PR before submitting
  * Ask Claude to highlight potential risks or considerations

##

​

Handle documentation

###

​

Generate code documentation

**When to use:** You need to add or update documentation for your code.

1

Identify undocumented code

    
    
    > find functions without proper JSDoc comments in the auth module 
    

2

Generate documentation

    
    
    > add JSDoc comments to the undocumented functions in auth.js 
    

3

Review and enhance

    
    
    > improve the generated documentation with more context and examples 
    

4

Verify documentation

    
    
    > check if the documentation follows our project standards 
    

**Tips:**

  * Specify the documentation style you want (JSDoc, docstrings, etc.)
  * Ask for examples in the documentation
  * Request documentation for public APIs, interfaces, and complex logic

##

​

Work with images

###

​

Analyze images and screenshots

**When to use:** You need to work with images in your codebase or get Claude’s
help analyzing image content.

1

Add an image to the conversation

You can use any of these methods:

  1. Drag and drop an image into the Claude Code window
  2. Copy an image and paste it into the CLI with cmd+v (on Mac)
  3. Provide an image path claude “Analyze this image: /path/to/your/image.png”

2

Ask Claude to analyze the image

    
    
    > What does this image show? 
    > Describe the UI elements in this screenshot 
    > Are there any problematic elements in this diagram? 
    

3

Use images for context

    
    
    > Here's a screenshot of the error. What's causing it? 
    > This is our current database schema. How should we modify it for the new feature? 
    

4

Get code suggestions from visual content

    
    
    > Generate CSS to match this design mockup 
    > What HTML structure would recreate this component? 
    

**Tips:**

  * Use images when text descriptions would be unclear or cumbersome
  * Include screenshots of errors, UI designs, or diagrams for better context
  * You can work with multiple images in a conversation
  * Image analysis works with diagrams, screenshots, mockups, and more

* * *

##

​

Use extended thinking

###

​

Leverage Claude’s extended thinking for complex tasks

**When to use:** When working on complex architectural decisions, challenging
bugs, or planning multi-step implementations that require deep reasoning.

1

Provide context and ask Claude to think

    
    
    > I need to implement a new authentication system using OAuth2 for our API. Think deeply about the best approach for implementing this in our codebase. 
    

Claude will gather relevant information from your codebase and use extended
thinking, which will be visible in the interface.

2

Refine the thinking with follow-up prompts

    
    
    > think about potential security vulnerabilities in this approach 
    > think harder about edge cases we should handle 
    

**Tips to get the most value out of extended thinking:**

Extended thinking is most valuable for complex tasks such as:

  * Planning complex architectural changes
  * Debugging intricate issues
  * Creating implementation plans for new features
  * Understanding complex codebases
  * Evaluating tradeoffs between different approaches

The way you prompt for thinking results in varying levels of thinking depth:

  * “think” triggers basic extended thinking
  * intensifying phrases such as “think more”, “think a lot”, “think harder”, or “think longer” triggers deeper thinking

For more extended thinking prompting tips, see [Extended thinking
tips](/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips).

Claude will display its thinking process as italic gray text above the
response.

* * *

##

​

Set up project memory

###

​

Create an effective CLAUDE.md file

**When to use:** You want to set up a CLAUDE.md file to store important
project information, conventions, and frequently used commands.

1

Bootstrap a CLAUDE.md for your codebase

    
    
    > /init 
    

**Tips:**

  * Include frequently used commands (build, test, lint) to avoid repeated searches
  * Document code style preferences and naming conventions
  * Add important architectural patterns specific to your project
  * CLAUDE.md memories can be used for both instructions shared with your team and for your individual preferences.

* * *

##

​

Set up Model Context Protocol (MCP)

Model Context Protocol (MCP) is an open protocol that enables LLMs to access
external tools and data sources. For more details, see the [MCP
documentation](https://modelcontextprotocol.io/introduction).

Use third party MCP servers at your own risk. Make sure you trust the MCP
servers, and be especially careful when using MCP servers that talk to the
internet, as these can expose you to prompt injection risk.

###

​

Configure MCP servers

**When to use:** You want to enhance Claude’s capabilities by connecting it to
specialized tools and external servers using the Model Context Protocol.

1

Add an MCP Stdio Server

    
    
    # Basic syntax
    claude mcp add <name> <command> [args...]
    
    # Example: Adding a local server
    claude mcp add my-server -e API_KEY=123 -- /path/to/server arg1 arg2
    

2

Add an MCP SSE Server

    
    
    # Basic syntax
    claude mcp add --transport sse <name> <url>
    
    # Example: Adding an SSE server
    claude mcp add --transport sse sse-server https://example.com/sse-endpoint
    

3

Manage your MCP servers

    
    
    # List all configured servers
    claude mcp list
    
    # Get details for a specific server
    claude mcp get my-server
    
    # Remove a server
    claude mcp remove my-server
    

**Tips:**

  * Use the `-s` or `--scope` flag to specify where the configuration is stored:
    * `local` (default): Available only to you in the current project (was called `project` in older versions)
    * `project`: Shared with everyone in the project via `.mcp.json` file
    * `user`: Available to you across all projects (was called `global` in older versions)
  * Set environment variables with `-e` or `--env` flags (e.g., `-e KEY=value`)
  * Configure MCP server startup timeout using the MCP_TIMEOUT environment variable (e.g., `MCP_TIMEOUT=10000 claude` sets a 10-second timeout)
  * Check MCP server status any time using the `/mcp` command within Claude Code
  * MCP follows a client-server architecture where Claude Code (the client) can connect to multiple specialized servers

###

​

Understanding MCP server scopes

**When to use:** You want to understand how different MCP scopes work and how
to share servers with your team.

1

Local-scoped MCP servers

The default scope (`local`) stores MCP server configurations in your project-
specific user settings. These servers are only available to you while working
in the current project.

    
    
    # Add a local-scoped server (default)
    claude mcp add my-private-server /path/to/server
    
    # Explicitly specify local scope
    claude mcp add my-private-server -s local /path/to/server
    

2

Project-scoped MCP servers (.mcp.json)

Project-scoped servers are stored in a `.mcp.json` file at the root of your
project. This file should be checked into version control to share servers
with your team.

    
    
    # Add a project-scoped server
    claude mcp add shared-server -s project /path/to/server
    

This creates or updates a `.mcp.json` file with the following structure:

    
    
    {
      "mcpServers": {
        "shared-server": {
          "command": "/path/to/server",
          "args": [],
          "env": {}
        }
      }
    }
    

3

User-scoped MCP servers

User-scoped servers are available to you across all projects on your machine,
and are private to you.

    
    
    # Add a user server
    claude mcp add my-user-server -s user /path/to/server
    

**Tips:**

  * Local-scoped servers take precedence over project-scoped and user-scoped servers with the same name
  * Project-scoped servers (in `.mcp.json`) take precedence over user-scoped servers with the same name
  * Before using project-scoped servers from `.mcp.json`, Claude Code will prompt you to approve them for security
  * The `.mcp.json` file is intended to be checked into version control to share MCP servers with your team
  * Project-scoped servers make it easy to ensure everyone on your team has access to the same MCP tools
  * If you need to reset your choices for which project-scoped servers are enabled or disabled, use the `claude mcp reset-project-choices` command

###

​

Connect to a Postgres MCP server

**When to use:** You want to give Claude read-only access to a PostgreSQL
database for querying and schema inspection.

1

Add the Postgres MCP server

    
    
    claude mcp add postgres-server /path/to/postgres-mcp-server --connection-string "postgresql://user:pass@localhost:5432/mydb"
    

2

Query your database with Claude

    
    
    # In your Claude session, you can ask about your database
    
    > describe the schema of our users table
    > what are the most recent orders in the system?
    > show me the relationship between customers and invoices
    

**Tips:**

  * The Postgres MCP server provides read-only access for safety
  * Claude can help you explore database structure and run analytical queries
  * You can use this to quickly understand database schemas in unfamiliar projects
  * Make sure your connection string uses appropriate credentials with minimum required permissions

###

​

Add MCP servers from JSON configuration

**When to use:** You have a JSON configuration for a single MCP server that
you want to add to Claude Code.

1

Add an MCP server from JSON

    
    
    # Basic syntax
    claude mcp add-json <name> '<json>'
    
    # Example: Adding a stdio server with JSON configuration
    claude mcp add-json weather-api '{"type":"stdio","command":"/path/to/weather-cli","args":["--api-key","abc123"],"env":{"CACHE_DIR":"/tmp"}}'
    

2

Verify the server was added

    
    
    claude mcp get weather-api
    

**Tips:**

  * Make sure the JSON is properly escaped in your shell
  * The JSON must conform to the MCP server configuration schema
  * You can use `-s global` to add the server to your global configuration instead of the project-specific one

###

​

Import MCP servers from Claude Desktop

**When to use:** You have already configured MCP servers in Claude Desktop and
want to use the same servers in Claude Code without manually reconfiguring
them.

1

Import servers from Claude Desktop

    
    
    # Basic syntax 
    claude mcp add-from-claude-desktop 
    

2

Select which servers to import

After running the command, you’ll see an interactive dialog that allows you to
select which servers you want to import.

3

Verify the servers were imported

    
    
    claude mcp list 
    

**Tips:**

  * This feature only works on macOS and Windows Subsystem for Linux (WSL)
  * It reads the Claude Desktop configuration file from its standard location on those platforms
  * Use the `-s global` flag to add servers to your global configuration
  * Imported servers will have the same names as in Claude Desktop
  * If servers with the same names already exist, they will get a numerical suffix (e.g., `server_1`)

###

​

Use Claude Code as an MCP server

**When to use:** You want to use Claude Code itself as an MCP server that
other applications can connect to, providing them with Claude’s tools and
capabilities.

1

Start Claude as an MCP server

    
    
    # Basic syntax
    claude mcp serve
    

2

Connect from another application

You can connect to Claude Code MCP server from any MCP client, such as Claude
Desktop. If you’re using Claude Desktop, you can add the Claude Code MCP
server using this configuration:

    
    
    {
      "command": "claude",
      "args": ["mcp", "serve"],
      "env": {}
    }
    

**Tips:**

  * The server provides access to Claude’s tools like View, Edit, LS, etc.
  * In Claude Desktop, try asking Claude to read files in a directory, make edits, and more.
  * Note that this MCP server is simply exposing Claude Code’s tools to your MCP client, so your own client is responsible for implementing user confirmation for individual tool calls.

* * *

##

​

Use Claude as a unix-style utility

###

​

Add Claude to your verification process

**When to use:** You want to use Claude Code as a linter or code reviewer.

**Steps:**

1

Add Claude to your build script

    
    
    // package.json
    {
        ...
        "scripts": {
            ...
            "lint:claude": "claude -p 'you are a linter. please look at the changes vs. main and report any issues related to typos. report the filename and line number on one line, and a description of the issue on the second line. do not return any other text.'"
        }
    }
    

###

​

Pipe in, pipe out

**When to use:** You want to pipe data into Claude, and get back data in a
structured format.

1

Pipe data through Claude

    
    
    cat build-error.txt | claude -p 'concisely explain the root cause of this build error' > output.txt
    

###

​

Control output format

**When to use:** You need Claude’s output in a specific format, especially
when integrating Claude Code into scripts or other tools.

1

Use text format (default)

    
    
    cat data.txt | claude -p 'summarize this data' --output-format text > summary.txt
    

This outputs just Claude’s plain text response (default behavior).

2

Use JSON format

    
    
    cat code.py | claude -p 'analyze this code for bugs' --output-format json > analysis.json
    

This outputs a JSON array of messages with metadata including cost and
duration.

3

Use streaming JSON format

    
    
    cat log.txt | claude -p 'parse this log file for errors' --output-format stream-json
    

This outputs a series of JSON objects in real-time as Claude processes the
request. Each message is a valid JSON object, but the entire output is not
valid JSON if concatenated.

**Tips:**

  * Use `--output-format text` for simple integrations where you just need Claude’s response
  * Use `--output-format json` when you need the full conversation log
  * Use `--output-format stream-json` for real-time output of each conversation turn

* * *

##

​

Create custom slash commands

Claude Code supports custom slash commands that you can create to quickly
execute specific prompts or tasks.

###

​

Create project-specific commands

**When to use:** You want to create reusable slash commands for your project
that all team members can use.

1

Create a commands directory in your project

    
    
    mkdir -p .claude/commands
    

2

Create a Markdown file for each command

    
    
    echo "Analyze the performance of this code and suggest three specific optimizations:" > .claude/commands/optimize.md 
    

3

Use your custom command in Claude Code

    
    
    claude > /project:optimize 
    

**Tips:**

  * Command names are derived from the filename (e.g., `optimize.md` becomes `/project:optimize`)
  * You can organize commands in subdirectories (e.g., `.claude/commands/frontend/component.md` becomes `/project:frontend:component`)
  * Project commands are available to everyone who clones the repository
  * The Markdown file content becomes the prompt sent to Claude when the command is invoked

###

​

Add command arguments with $ARGUMENTS

**When to use:** You want to create flexible slash commands that can accept
additional input from users.

1

Create a command file with the $ARGUMENTS placeholder

    
    
    echo "Find and fix issue #$ARGUMENTS. Follow these steps: 1.
    Understand the issue described in the ticket 2. Locate the relevant code in
    our codebase 3. Implement a solution that addresses the root cause 4. Add
    appropriate tests 5. Prepare a concise PR description" >
    .claude/commands/fix-issue.md 
    

2

Use the command with an issue number

    
    
    claude > /project:fix-issue 123 
    

This will replace $ARGUMENTS with “123” in the prompt.

**Tips:**

  * The $ARGUMENTS placeholder is replaced with any text that follows the command
  * You can position $ARGUMENTS anywhere in your command template
  * Other useful applications: generating test cases for specific functions, creating documentation for components, reviewing code in particular files, or translating content to specified languages

###

​

Create personal slash commands

**When to use:** You want to create personal slash commands that work across
all your projects.

1

Create a commands directory in your home folder

    
    
    mkdir -p ~/.claude/commands 
    

2

Create a Markdown file for each command

    
    
    echo "Review this code for security vulnerabilities, focusing on:" >
    ~/.claude/commands/security-review.md 
    

3

Use your personal custom command

    
    
    claude > /user:security-review 
    

**Tips:**

  * Personal commands are prefixed with `/user:` instead of `/project:`
  * Personal commands are only available to you and not shared with your team
  * Personal commands work across all your projects
  * You can use these for consistent workflows across different codebases

* * *

##

​

Run parallel Claude Code sessions with Git worktrees

###

​

Use worktrees for isolated coding environments

**When to use:** You need to work on multiple tasks simultaneously with
complete code isolation between Claude Code instances.

1

Understand Git worktrees

Git worktrees allow you to check out multiple branches from the same
repository into separate directories. Each worktree has its own working
directory with isolated files, while sharing the same Git history. Learn more
in the [official Git worktree documentation](https://git-scm.com/docs/git-
worktree).

2

Create a new worktree

    
    
    # Create a new worktree with a new branch 
    git worktree add ../project-feature-a -b feature-a
    
    # Or create a worktree with an existing branch
    git worktree add ../project-bugfix bugfix-123
    

This creates a new directory with a separate working copy of your repository.

3

Run Claude Code in each worktree

    
    
    # Navigate to your worktree 
    cd ../project-feature-a
    
    # Run Claude Code in this isolated environment
    claude
    

4

In another terminal:

    
    
    cd ../project-bugfix
    claude
    

5

Manage your worktrees

    
    
    # List all worktrees
    git worktree list
    
    # Remove a worktree when done
    git worktree remove ../project-feature-a
    

**Tips:**

  * Each worktree has its own independent file state, making it perfect for parallel Claude Code sessions
  * Changes made in one worktree won’t affect others, preventing Claude instances from interfering with each other
  * All worktrees share the same Git history and remote connections
  * For long-running tasks, you can have Claude working in one worktree while you continue development in another
  * Use descriptive directory names to easily identify which task each worktree is for
  * Remember to initialize your development environment in each new worktree according to your project’s setup. Depending on your stack, this might include:
    * JavaScript projects: Running dependency installation (`npm install`, `yarn`)
    * Python projects: Setting up virtual environments or installing with package managers
    * Other languages: Following your project’s standard setup process

* * *

##

​

Next steps

[

## Claude Code reference implementation

Clone our development container reference implementation.

](https://github.com/anthropics/claude-code/tree/main/.devcontainer)

Was this page helpful?

YesNo

[SDK](/en/docs/claude-code/sdk)[Troubleshooting](/en/docs/claude-
code/troubleshooting)

[x](https://x.com/AnthropicAI)[linkedin](https://www.linkedin.com/company/anthropicresearch)[discord](https://www.anthropic.com/discord)

On this page

  * Table of contents
  * Resume previous conversations
  * Continue your work seamlessly
  * Understand new codebases
  * Get a quick codebase overview
  * Find relevant code
  * Fix bugs efficiently
  * Diagnose error messages
  * Refactor code
  * Modernize legacy code
  * Work with tests
  * Add test coverage
  * Create pull requests
  * Generate comprehensive PRs
  * Handle documentation
  * Generate code documentation
  * Work with images
  * Analyze images and screenshots
  * Use extended thinking
  * Leverage Claude’s extended thinking for complex tasks
  * Set up project memory
  * Create an effective CLAUDE.md file
  * Set up Model Context Protocol (MCP)
  * Configure MCP servers
  * Understanding MCP server scopes
  * Connect to a Postgres MCP server
  * Add MCP servers from JSON configuration
  * Import MCP servers from Claude Desktop
  * Use Claude Code as an MCP server
  * Use Claude as a unix-style utility
  * Add Claude to your verification process
  * Pipe in, pipe out
  * Control output format
  * Create custom slash commands
  * Create project-specific commands
  * Add command arguments with $ARGUMENTS
  * Create personal slash commands
  * Run parallel Claude Code sessions with Git worktrees
  * Use worktrees for isolated coding environments
  * Next steps

