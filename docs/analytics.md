# Analytics

Claude Code provides an analytics dashboard to help organizations understand developer usage patterns, track productivity metrics, and optimize Claude Code adoption.

## Access Analytics

Navigate to the analytics dashboard at [console.anthropic.com/claude_code](https://console.anthropic.com/claude_code).

### Required Roles

Roles with access:
- Primary Owner
- Owner
- Billing
- Admin
- Developer

Users with "User", "Claude Code User", or "Membership Admin" roles cannot access analytics.

## Available Metrics

### Lines of Code Accepted

Total lines of code written by Claude Code that users have accepted in their sessions.

- Excludes rejected code suggestions
- Doesn't track subsequent deletions

### Suggestion Accept Rate

Percentage of times users accept code editing tool usage, including:
- Edit
- MultiEdit
- Write
- NotebookEdit

### Activity

- **Users**: Number of active users in a given day (left Y-axis)
- **Sessions**: Number of active sessions in a given day (right Y-axis)

### Spend

- **Users**: Number of active users in a given day (left Y-axis)
- **Spend**: Total dollars spent in a given day (right Y-axis)

### Team Insights

**Members**: All users who have authenticated to Claude Code
- API key users displayed by API key identifier
- OAuth users displayed by email address

**Avg daily spend**: Per-user average spend for the current month
**Avg lines/day**: Per-user average of accepted code lines for the current month

## Using Analytics Effectively

### Monitor Adoption

Track team member status to identify:
- Active users who can share best practices
- Overall adoption trends across your organization

### Measure Productivity

Tool acceptance rates and code metrics help you:
- Understand developer satisfaction with Claude Code suggestions
- Track code generation effectiveness
- Identify opportunities for training or process improvements

## Related Resources

- [Monitoring usage with OpenTelemetry](/en/docs/claude-code/monitoring-usage) for custom metrics and alerting
- [Identity and access management](/en/docs/claude-code/iam) for role configuration