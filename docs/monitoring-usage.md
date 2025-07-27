# Monitoring - Claude Code OpenTelemetry Configuration

Claude Code supports OpenTelemetry (OTel) metrics and events for monitoring and observability. All metrics are exported via OpenTelemetry's standard protocols.

## Quick Start Configuration

Configure OpenTelemetry using environment variables:

```bash
# 1. Enable telemetry
export CLAUDE_CODE_ENABLE_TELEMETRY=1

# 2. Choose exporters (optional)
export OTEL_METRICS_EXPORTER=otlp       # Options: otlp, prometheus, console
export OTEL_LOGS_EXPORTER=otlp          # Options: otlp, console

# 3. Configure OTLP endpoint
export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317

# 4. Set authentication (if required)
export OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer your-token"

# 5. Debugging: reduce export intervals
export OTEL_METRIC_EXPORT_INTERVAL=10000  # 10 seconds
export OTEL_LOGS_EXPORT_INTERVAL=5000     # 5 seconds
```

## Key Configuration Variables

| Variable | Description | Example Values |
|----------|-------------|----------------|
| `CLAUDE_CODE_ENABLE_TELEMETRY` | Enables telemetry collection | `1` |
| `OTEL_METRICS_EXPORTER` | Metrics exporter types | `console`, `otlp`, `prometheus` |
| `OTEL_LOGS_EXPORTER` | Logs/events exporter types | `console`, `otlp` |
| `OTEL_EXPORTER_OTLP_PROTOCOL` | Protocol for OTLP exporter | `grpc`, `http/json` |

## Metrics Exported

Claude Code exports several key metrics:

- `claude_code.session.count`: CLI sessions started
- `claude_code.lines_of_code.count`: Lines of code modified
- `claude_