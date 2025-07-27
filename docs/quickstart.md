# Quickstart - Claude Code

## Before you begin

Make sure you have:
- A terminal or command prompt open
- [Node.js 18 or newer installed](https://nodejs.org/en/download/)
- A code project to work with

## Step 1: Install Claude Code

Install Claude Code using npm:

```sh
npm install -g @anthropic-ai/claude-code
```

## Step 2: Start your first session

Open your terminal in a project directory and start Claude Code:

```bash
cd /path/to/your/project
claude
```

You'll see the Claude Code prompt inside a new interactive session.

## Step 3: Ask your first question

Explore your codebase by asking questions like:
- "what does this project do?"
- "what technologies does this project use?"
- "where is the main entry point?"
- "explain the folder structure"

You can also ask about Claude Code's capabilities:
- "what can Claude Code do?"
- "how do I use slash commands in Claude Code?"
- "can Claude Code work with Docker?"

## Step 4: Make your first code change

Try adding a function to your main file:

```
> add a hello world function to the main file
```

Claude Code will:
1. Find the appropriate file
2. Show proposed changes
3. Ask for your approval
4. Make the edit

## Step 5: Use Git with Claude Code

Make Git operations conversational:
- "what files have I changed?"
- "commit my changes with a descriptive message"
- "create a new branch called feature/quickstart"
- "show me the last 5 commits"
- "help me resolve merge conflicts"

## Essential Commands

| Command | What it does | Example |
|---------|--------------|---------|
| `claude` | Start interactive mode | `claude` |
| `claude "task"` | Run a one-time task | `claude "fix the build error"` |
| `claude -p "query"` | Run one-off query, then exit | `claude -p "explain this function"` |
| `claude commit` | Create a Git commit | `claude commit`