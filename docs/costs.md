# Manage Costs Effectively

Claude Code consumes tokens for each interaction. The average cost is $6 per developer per day, with daily costs remaining below $12 for 90% of users.

For team usage, Claude Code charges by API token consumption. On average, Claude Code costs ~$100-200/developer per month with Sonnet 4, though costs vary based on usage.

## Track Your Costs

- Use `/cost` to see current session usage
- **Anthropic Console users**:
  - Check [historical usage](https://support.anthropic.com/en/articles/9534590-cost-and-usage-reporting-in-console)
  - Set [workspace spend limits](https://support.anthropic.com/en/articles/9796807-creating-and-managing-workspaces)
- **Pro and Max plan users**: Usage is included in subscription

## Managing Costs for Teams

When using Anthropic API, you can limit the total Claude Code workspace spend. For Bedrock and Vertex, enterprises have used [LiteLLM](https://docs.litellm.ai/docs/proxy/virtual_keys#tracking-spend) to track spend.

### Rate Limit Recommendations

Team Size | TPM per User
--- | ---
1-5 users | 200k-300k
5-20 users | 100k-150k
20-50 users | 50k-75k
50-100 users | 25k-35k
100-500 users | 15k-20k
500+ users | 10k-15k

## Reduce Token Usage

- **Compact conversations**:
  - Auto-compact enabled by default
  - Use `/compact` manually when context gets large
  - Add custom compaction instructions
- Write specific queries
- Break down complex tasks
- Clear history between tasks

### Factors Affecting Costs

- Size of codebase analyzed
- Query complexity
- Number of files searched/modified
- Conversation history length
- Frequency of compacting
- Background processes

## Background Token Usage

Claude Code uses tokens for:
- Haiku generation (≈1 cent/day)
-