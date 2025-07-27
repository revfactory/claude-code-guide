# Claude Code SDK Documentation

## Overview

The Claude Code SDK enables running Claude Code as a subprocess, providing a way to build AI-powered coding assistants and tools that leverage Claude's capabilities. The SDK is available for command line, TypeScript, and Python usage.

## Authentication

### Anthropic API Key
1. Create an API key in the [Anthropic Console](https://console.anthropic.com/)
2. Set the `ANTHROPIC_API_KEY` environment variable

### Third-Party API Credentials
- **Amazon Bedrock**: Set `CLAUDE_CODE_USE_BEDROCK=1` and configure AWS credentials
- **Google Vertex AI**: Set `CLAUDE_CODE_USE_VERTEX=1` and configure Google Cloud credentials

## Basic Usage

### Command Line Examples
```bash
# Run a single prompt
$ claude -p "Write a function to calculate Fibonacci numbers"

# Using pipe input
$ echo "Explain this code" | claude -p

# Output in JSON format
$ claude -p "Generate a hello world function" --output-format json

# Stream JSON output
$ claude -p "Build a React component" --output-format stream-json
```

### TypeScript SDK
```typescript
import { query, type SDKMessage } from "@anthropic-ai/claude-code";

const messages: SDKMessage[] = [];

for await (const message of query({
  prompt: "Write a haiku about foo.py",
  abortController: new AbortController(),
  options: {
    maxTurns: 3,
  },
})) {
  messages.push(message);
}

console.log(messages);
```

### Python SDK
```python
import anyio
from claude_code_sdk import query, ClaudeCodeOptions, Message

async def main():
    messages: list[Message] = []
    
    async for message in query(
        prompt="Write a haiku about foo.py",
        options=ClaudeCodeOptions(max_turns=3)
    ):
        messages.append(message)
    
    print(messages)

anyio.run(main)
```

## Advanced Features

### Multi-Turn Conversations
```bash
# Continue the most recent conversation