# Data Usage

## Data Policies

### Data Training Policy

"By default, Anthropic does not train generative models using code or prompts that are sent to Claude Code."

Anthropic aims to be transparent about data usage. They may use feedback to improve products and services, but will not train generative models using Claude Code feedback.

### Development Partner Program

If users explicitly opt into providing training materials through the Development Partner Program, Anthropic may use those materials to train models. This is only available for Anthropic's first-party API, not for Bedrock or Vertex users.

### Feedback Transcripts

If users send feedback about Claude Code, Anthropic may use it to:
- Debug related issues
- Improve Claude Code functionality

Feedback transcripts are stored for only 30 days due to their potentially sensitive nature.

### Data Retention

- Users can use an API key from a zero data retention organization
- Claude Code will not retain chat transcripts on Anthropic's servers
- Local Claude Code clients may store sessions locally for up to 30 days (configurable)

### Privacy Safeguards

Anthropic has implemented safeguards including:
- Limited retention periods for sensitive information
- Restricted access to user session data
- Clear policies against using feedback for model training

## Data Flow and Dependencies

Claude Code:
- Installed from NPM
- Runs locally
- Sends data over network (user prompts and model outputs)
- Data encrypted in transit via TLS
- Compatible with most VPNs and LLM proxies

## Telemetry Services

### Statsig
- Logs operational metrics
- Does not include code or file paths
- Data encrypted in transit and at rest
- Can be disabled with `DISABLE_TELEMETRY` environment variable

### Sentry
- Operational error logging
- Data encrypted in transit and at rest
- Can be disabled with `DISABLE_ERROR_REPORTING` environment variable

### Bug Reporting
- `/bug` command sends conversation history to Anthropic
- Optional GitHub issue creation
- Can be disabled with `DISABLE_BUG_COMMAND` environment variable

## Default Behaviors by API Provider

Behaviors vary for Anthropic API,