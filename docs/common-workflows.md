# Common Workflows with Claude Code

Each task in this document includes clear instructions, example commands, and best practices to help you get the most from Claude Code.

## Understand New Codebases

### Get a Quick Codebase Overview

Suppose you've just joined a new project and need to understand its structure quickly.

1. Navigate to the project root directory
```bash
cd /path/to/project
```

2. Start Claude Code
```bash
claude
```

3. Ask for a high-level overview
```
> give me an overview of this codebase
```

4. Dive deeper into specific components
```
> explain the main architecture patterns used here
> what are the key data models?
> how is authentication handled?
```

**Tips:**
- Start with broad questions, then narrow down to specific areas
- Ask about coding conventions and patterns used in the project
- Request a glossary of project-specific terms

### Find Relevant Code

Suppose you need to locate code related to a specific feature or functionality.

1. Ask Claude to find relevant files
```
> find the files that handle user authentication
```

2. Get context on how components interact
```
> how do these authentication files work together?
```

3. Understand the execution flow
```
> trace the login process from front-end to database
```

**Tips:**
- Be specific about what you're looking for
- Use domain language from the project

## Fix Bugs Efficiently

Suppose you've encountered an error message and need to find and fix its source.

1. Share the error with Claude
```
> I'm seeing an error when I run npm test
```

2. Ask for fix recommendations
```
> suggest a few ways to fix the @ts-ignore in user.ts
```

3. Apply the fix
```
> update user.ts to add the null check you suggested
```

**Tips:**
- Tell Claude the command to reproduce the issue and get a stack trace
- Mention any steps to reproduce the error
- Let Claude know if the error is intermittent or consistent