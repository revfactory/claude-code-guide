---
title: Monitoring usage - Anthropic
url: https://docs.anthropic.com/en/docs/claude-code/monitoring-usage
crawled_at: 2025-06-09 03:37:44
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

Monitoring usage

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

# Monitoring usage

Copy page

Monitor Claude Code usage with OpenTelemetry metrics

OpenTelemetry support is currently in beta and details are subject to change.

#

​

OpenTelemetry in Claude Code

Claude Code supports OpenTelemetry (OTel) metrics and events for monitoring
and observability. This document explains how to enable and configure OTel for
Claude Code.

All metrics are time series data exported via OpenTelemetry’s standard metrics
protocol, and events are exported via OpenTelemetry’s logs/events protocol. It
is the user’s responsibility to ensure their metrics and logs backends are
properly configured and that the aggregation granularity meets their
monitoring requirements.

##

​

Quick Start

Configure OpenTelemetry using environment variables:

    
    
    # 1. Enable telemetry
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    
    # 2. Choose exporters (both are optional - configure only what you need)
    export OTEL_METRICS_EXPORTER=otlp       # Options: otlp, prometheus, console
    export OTEL_LOGS_EXPORTER=otlp          # Options: otlp, console
    
    # 3. Configure OTLP endpoint (for OTLP exporter)
    export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
    export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
    
    # 4. Set authentication (if required)
    export OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer your-token"
    
    # 5. For debugging: reduce export intervals
    export OTEL_METRIC_EXPORT_INTERVAL=10000  # 10 seconds (default: 60000ms)
    export OTEL_LOGS_EXPORT_INTERVAL=5000     # 5 seconds (default: 5000ms)
    
    # 6. Run Claude Code
    claude
    

The default export intervals are 60 seconds for metrics and 5 seconds for
logs. During setup, you may want to use shorter intervals for debugging
purposes. Remember to reset these for production use.

For full configuration options, see the [OpenTelemetry
specification](https://github.com/open-telemetry/opentelemetry-
specification/blob/main/specification/protocol/exporter.md#configuration-
options).

##

​

Administrator Configuration

Administrators can configure OpenTelemetry settings for all users through the
managed settings file. This allows for centralized control of telemetry
settings across an organization. See the [settings
precedence](/en/docs/claude-code/settings#settings-precedence) for more
information about how settings are applied.

The managed settings file is located at:

  * macOS: `/Library/Application Support/ClaudeCode/managed-settings.json`
  * Linux: `/etc/claude-code/managed-settings.json`

Example managed settings configuration:

    
    
    {
      "env": {
        "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
        "OTEL_METRICS_EXPORTER": "otlp",
        "OTEL_LOGS_EXPORTER": "otlp",
        "OTEL_EXPORTER_OTLP_PROTOCOL": "grpc",
        "OTEL_EXPORTER_OTLP_ENDPOINT": "http://collector.company.com:4317",
        "OTEL_EXPORTER_OTLP_HEADERS": "Authorization=Bearer company-token"
      }
    }
    

Managed settings can be distributed via MDM (Mobile Device Management) or
other device management solutions. Environment variables defined in the
managed settings file have high precedence and cannot be overridden by users.

##

​

Configuration Details

###

​

Common Configuration Variables

Environment Variable| Description| Example Values  
---|---|---  
`CLAUDE_CODE_ENABLE_TELEMETRY`| Enables telemetry collection (required)| `1`  
`OTEL_METRICS_EXPORTER`| Metrics exporter type(s) (comma-separated)|
`console`, `otlp`, `prometheus`  
`OTEL_LOGS_EXPORTER`| Logs/events exporter type(s) (comma-separated)|
`console`, `otlp`  
`OTEL_EXPORTER_OTLP_PROTOCOL`| Protocol for OTLP exporter (all signals)|
`grpc`, `http/json`, `http/protobuf`  
`OTEL_EXPORTER_OTLP_ENDPOINT`| OTLP collector endpoint (all signals)|
`http://localhost:4317`  
`OTEL_EXPORTER_OTLP_METRICS_PROTOCOL`| Protocol for metrics (overrides
general)| `grpc`, `http/json`, `http/protobuf`  
`OTEL_EXPORTER_OTLP_METRICS_ENDPOINT`| OTLP metrics endpoint (overrides
general)| `http://localhost:4318/v1/metrics`  
`OTEL_EXPORTER_OTLP_LOGS_PROTOCOL`| Protocol for logs (overrides general)|
`grpc`, `http/json`, `http/protobuf`  
`OTEL_EXPORTER_OTLP_LOGS_ENDPOINT`| OTLP logs endpoint (overrides general)|
`http://localhost:4318/v1/logs`  
`OTEL_EXPORTER_OTLP_HEADERS`| Authentication headers for OTLP|
`Authorization=Bearer token`  
`OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY`| Client key for mTLS authentication|
Path to client key file  
`OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE`| Client certificate for mTLS
authentication| Path to client cert file  
`OTEL_METRIC_EXPORT_INTERVAL`| Export interval in milliseconds (default:
60000)| `5000`, `60000`  
`OTEL_LOGS_EXPORT_INTERVAL`| Logs export interval in milliseconds (default:
5000)| `1000`, `10000`  
`OTEL_LOG_USER_PROMPTS`| Enable logging of user prompt content (default:
disabled)| `1` to enable  
  
###

​

Metrics Cardinality Control

The following environment variables control which attributes are included in
metrics to manage cardinality:

Environment Variable| Description| Default Value| Example to Disable  
---|---|---|---  
`OTEL_METRICS_INCLUDE_SESSION_ID`| Include session.id attribute in metrics|
`true`| `false`  
`OTEL_METRICS_INCLUDE_VERSION`| Include app.version attribute in metrics|
`false`| `true`  
`OTEL_METRICS_INCLUDE_ACCOUNT_UUID`| Include user.account_uuid attribute in
metrics| `true`| `false`  
  
These variables help control the cardinality of metrics, which affects storage
requirements and query performance in your metrics backend. Lower cardinality
generally means better performance and lower storage costs but less granular
data for analysis.

###

​

Example Configurations

    
    
    # Console debugging (1-second intervals)
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_METRICS_EXPORTER=console
    export OTEL_METRIC_EXPORT_INTERVAL=1000
    
    # OTLP/gRPC
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_METRICS_EXPORTER=otlp
    export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
    export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
    
    # Prometheus
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_METRICS_EXPORTER=prometheus
    
    # Multiple exporters
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_METRICS_EXPORTER=console,otlp
    export OTEL_EXPORTER_OTLP_PROTOCOL=http/json
    
    # Different endpoints/backends for metrics and logs
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_METRICS_EXPORTER=otlp
    export OTEL_LOGS_EXPORTER=otlp
    export OTEL_EXPORTER_OTLP_METRICS_PROTOCOL=http/protobuf
    export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT=http://metrics.company.com:4318
    export OTEL_EXPORTER_OTLP_LOGS_PROTOCOL=grpc
    export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT=http://logs.company.com:4317
    
    # Metrics only (no events/logs)
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_METRICS_EXPORTER=otlp
    export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
    export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
    
    # Events/logs only (no metrics)
    export CLAUDE_CODE_ENABLE_TELEMETRY=1
    export OTEL_LOGS_EXPORTER=otlp
    export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
    export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
    

##

​

Available Metrics and Events

###

​

Metrics

Claude Code exports the following metrics:

Metric Name| Description| Unit  
---|---|---  
`claude_code.session.count`| Count of CLI sessions started| count  
`claude_code.lines_of_code.count`| Count of lines of code modified| count  
`claude_code.pull_request.count`| Number of pull requests created| count  
`claude_code.commit.count`| Number of git commits created| count  
`claude_code.cost.usage`| Cost of the Claude Code session| USD  
`claude_code.token.usage`| Number of tokens used| tokens  
`claude_code.code_edit_tool.decision`| Count of code editing tool permission
decisions| count  
  
###

​

Metric Details

All metrics share these standard attributes:

  * `session.id`: Unique session identifier (controlled by `OTEL_METRICS_INCLUDE_SESSION_ID`)
  * `app.version`: Current Claude Code version (controlled by `OTEL_METRICS_INCLUDE_VERSION`)
  * `organization.id`: Organization UUID (when authenticated)
  * `user.account_uuid`: Account UUID (when authenticated, controlled by `OTEL_METRICS_INCLUDE_ACCOUNT_UUID`)

####

​

1\. Session Counter

Emitted at the start of each session.

####

​

2\. Lines of Code Counter

Emitted when code is added or removed.

  * Additional attribute: `type` (`"added"` or `"removed"`)

####

​

3\. Pull Request Counter

Emitted when creating pull requests via Claude Code.

####

​

4\. Commit Counter

Emitted when creating git commits via Claude Code.

####

​

5\. Cost Counter

Emitted after each API request.

  * Additional attribute: `model`

####

​

6\. Token Counter

Emitted after each API request.

  * Additional attributes: `type` (`"input"`, `"output"`, `"cacheRead"`, `"cacheCreation"`) and `model`

####

​

7\. Code Edit Tool Decision Counter

Emitted when user accepts or rejects Edit, MultiEdit, Write, or NotebookEdit
tool usage.

  * Additional attributes: `tool` (tool name: `"Edit"`, `"MultiEdit"`, `"Write"`, `"NotebookEdit"`) and `decision` (`"accept"`, `"reject"`)

###

​

Events

Claude Code exports the following events via OpenTelemetry logs/events (when
`OTEL_LOGS_EXPORTER` is configured):

####

​

1\. User Prompt Event

  * **Event Name** : `claude_code.user_prompt`
  * **Description** : Logged when a user submits a prompt
  * **Attributes** :
    * All standard attributes (user.id, session.id, etc.)
    * `event.name`: `"user_prompt"`
    * `event.timestamp`: ISO 8601 timestamp
    * `prompt_length`: Length of the prompt
    * `prompt`: Prompt content (redacted by default, enable with `OTEL_LOG_USER_PROMPTS=1`)

####

​

2\. Tool Result Event

  * **Event Name** : `claude_code.tool_result`
  * **Description** : Logged when a tool completes execution
  * **Attributes** :
    * All standard attributes
    * `event.name`: `"tool_result"`
    * `event.timestamp`: ISO 8601 timestamp
    * `name`: Name of the tool
    * `success`: `"true"` or `"false"`
    * `duration_ms`: Execution time in milliseconds
    * `error`: Error message (if failed)

####

​

3\. API Request Event

  * **Event Name** : `claude_code.api_request`
  * **Description** : Logged for each API request to Claude
  * **Attributes** :
    * All standard attributes
    * `event.name`: `"api_request"`
    * `event.timestamp`: ISO 8601 timestamp
    * `model`: Model used (e.g., “claude-3-5-sonnet-20241022”)
    * `cost_usd`: Estimated cost in USD
    * `duration_ms`: Request duration in milliseconds
    * `input_tokens`: Number of input tokens
    * `output_tokens`: Number of output tokens
    * `cache_read_tokens`: Number of tokens read from cache
    * `cache_creation_tokens`: Number of tokens used for cache creation

####

​

4\. API Error Event

  * **Event Name** : `claude_code.api_error`
  * **Description** : Logged when an API request to Claude fails
  * **Attributes** :
    * All standard attributes
    * `event.name`: `"api_error"`
    * `event.timestamp`: ISO 8601 timestamp
    * `model`: Model used (e.g., “claude-3-5-sonnet-20241022”)
    * `error`: Error message
    * `status_code`: HTTP status code (if applicable)
    * `duration_ms`: Request duration in milliseconds
    * `attempt`: Attempt number (for retried requests)

####

​

5\. Tool Decision Event

  * **Event Name** : `claude_code.tool_decision`
  * **Description** : Logged when a tool permission decision is made (accept/reject)
  * **Attributes** :
    * All standard attributes
    * `event.name`: `"tool_decision"`
    * `event.timestamp`: ISO 8601 timestamp
    * `tool_name`: Name of the tool (e.g., “Read”, “Edit”, “MultiEdit”, “Write”, “NotebookEdit”, etc.)
    * `decision`: Either `"accept"` or `"reject"`
    * `source`: Decision source - `"config"`, `"user_permanent"`, `"user_temporary"`, `"user_abort"`, or `"user_reject"`

##

​

Interpreting Metrics and Events Data

The metrics exported by Claude Code provide valuable insights into usage
patterns and productivity. Here are some common visualizations and analyses
you can create:

###

​

Usage Monitoring

Metric| Analysis Opportunity  
---|---  
`claude_code.token.usage`| Break down by `type` (input/output), user, team, or
model  
`claude_code.session.count`| Track adoption and engagement over time  
`claude_code.lines_of_code.count`| Measure productivity by tracking code
additions/removals  
`claude_code.commit.count` & `claude_code.pull_request.count`| Understand
impact on development workflows  
  
###

​

Cost Monitoring

The `claude_code.cost.usage` metric helps with:

  * Tracking usage trends across teams or individuals
  * Identifying high-usage sessions for optimization

Cost metrics are approximations. For official billing data, refer to your API
provider (Anthropic Console, AWS Bedrock, or Google Cloud Vertex).

###

​

Alerting and Segmentation

Common alerts to consider:

  * Cost spikes
  * Unusual token consumption
  * High session volume from specific users

All metrics can be segmented by `user.account_uuid`, `organization.id`,
`session.id`, `model`, and `app.version`.

###

​

Event Analysis

The event data provides detailed insights into Claude Code interactions:

  1. **Tool Usage Patterns** : Analyze tool result events to identify:

    * Most frequently used tools
    * Tool success rates
    * Average tool execution times
    * Error patterns by tool type
  2. **Performance Monitoring** : Track API request durations and tool execution times to identify performance bottlenecks.

##

​

Backend Considerations

Your choice of metrics and logs backends will determine the types of analyses
you can perform:

###

​

For Metrics:

  * **Time series databases (e.g., Prometheus)** : Rate calculations, aggregated metrics
  * **Columnar stores (e.g., ClickHouse)** : Complex queries, unique user analysis
  * **Full-featured observability platforms (e.g., Honeycomb, Datadog)** : Advanced querying, visualization, alerting

###

​

For Events/Logs:

  * **Log aggregation systems (e.g., Elasticsearch, Loki)** : Full-text search, log analysis
  * **Columnar stores (e.g., ClickHouse)** : Structured event analysis
  * **Full-featured observability platforms (e.g., Honeycomb, Datadog)** : Correlation between metrics and events

For organizations requiring Daily/Weekly/Monthly Active User (DAU/WAU/MAU)
metrics, consider backends that support efficient unique value queries.

##

​

Service Information

All metrics are exported with:

  * Service Name: `claude-code`
  * Service Version: Current Claude Code version
  * Meter Name: `com.anthropic.claude_code`

##

​

Security/Privacy Considerations

  * Telemetry is opt-in and requires explicit configuration
  * Sensitive information like API keys or file contents are never included in metrics or events
  * User prompt content is redacted by default - only prompt length is recorded. To enable user prompt logging, set `OTEL_LOG_USER_PROMPTS=1`

Was this page helpful?

YesNo

[Team setup](/en/docs/claude-code/team)[Costs](/en/docs/claude-code/costs)

[x](https://x.com/AnthropicAI)[linkedin](https://www.linkedin.com/company/anthropicresearch)[discord](https://www.anthropic.com/discord)

On this page

  * OpenTelemetry in Claude Code
  * Quick Start
  * Administrator Configuration
  * Configuration Details
  * Common Configuration Variables
  * Metrics Cardinality Control
  * Example Configurations
  * Available Metrics and Events
  * Metrics
  * Metric Details
  * 1\. Session Counter
  * 2\. Lines of Code Counter
  * 3\. Pull Request Counter
  * 4\. Commit Counter
  * 5\. Cost Counter
  * 6\. Token Counter
  * 7\. Code Edit Tool Decision Counter
  * Events
  * 1\. User Prompt Event
  * 2\. Tool Result Event
  * 3\. API Request Event
  * 4\. API Error Event
  * 5\. Tool Decision Event
  * Interpreting Metrics and Events Data
  * Usage Monitoring
  * Cost Monitoring
  * Alerting and Segmentation
  * Event Analysis
  * Backend Considerations
  * For Metrics:
  * For Events/Logs:
  * Service Information
  * Security/Privacy Considerations

