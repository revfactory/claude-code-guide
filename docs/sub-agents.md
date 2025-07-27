# Sub Agents in Claude Code

## What are Sub Agents?

Sub agents are specialized AI assistants that can be invoked to handle specific types of tasks. Key characteristics include:

- Has a specific purpose and expertise area
- Uses its own context window separate from the main conversation
- Can be configured with specific tools
- Includes a custom system prompt that guides its behavior

## Key Benefits

1. **Context Preservation**: Each sub agent operates in its own context, preventing pollution of the main conversation.
2. **Specialized Expertise**: Can be fine-tuned with detailed instructions for specific domains.
3. **Reusability**: Can be used across different projects and shared with teams.
4. **Flexible Permissions**: Each sub agent can have different tool access levels.

## Quick Start to Creating a Sub Agent

1. Run `/agents` command
2. Select 'Create New Agent'
3. Define the sub agent:
   - Recommended: Generate with Claude first, then customize
   - Describe the sub agent's purpose
   - Select tools to grant access
   - Edit system prompt if needed

## Sub Agent Configuration

### File Locations

- **Project sub agents**: `.claude/agents/`
- **User sub agents**: `~/.claude/agents/`

### File Format Example

```markdown
---
name: code-reviewer
description: Expert code review specialist
tools: Read, Grep, Glob, Bash
---

You are a senior code reviewer ensuring high standards of code quality and security.

When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is simple and readable
- Functions and variables are well-named
- No duplicated code
- Proper error handling
```

## Best Practices

- Start with Claude-generated agents
- Design focused sub agents with clear responsibilities
- Write detailed system prompts
- Limit tool access
- Version control project sub agents

## Advanced Usage

- **Chaining Sub Agents**: Use multiple sub agents for complex workflows
- **Dynamic Selection**: Claude intelligently selects sub agents based on context

## Performance Considerations

- Helps preserve main context
- May