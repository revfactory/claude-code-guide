# Enterprise Deployment Overview

This page provides an overview of available deployment options for Claude Code and helps organizations choose the right configuration.

## Provider Comparison

| Feature | Anthropic | Amazon Bedrock | Google Vertex AI |
|---------|-----------|----------------|-----------------|
| Regions | Supported countries | Multiple AWS regions | Multiple GCP regions |
| Prompt Caching | Enabled by default | Enabled by default | Enabled by default |
| Authentication | API key | AWS credentials (IAM) | GCP credentials |
| Cost Tracking | Dashboard | AWS Cost Explorer | GCP Billing |
| Enterprise Features | Teams, usage monitoring | IAM policies, CloudTrail | IAM roles, Cloud Audit Logs |

## Deployment Options

### Cloud Providers
- **Amazon Bedrock**: Use Claude models through AWS infrastructure
- **Google Vertex AI**: Access Claude models via Google Cloud Platform

### Corporate Infrastructure
- **Corporate Proxy**: Configure network routing
- **LLM Gateway**: Centralized model access with tracking

## Configuration Overview

Claude Code supports flexible configuration combining different providers and infrastructure.

### Key Concepts
- **Corporate Proxy**: HTTP/HTTPS traffic routing
- **LLM Gateway**: Authentication and provider-compatible endpoints

### Configuration Examples

#### Using Bedrock with Corporate Proxy
```bash
# Enable Bedrock
export CLAUDE_CODE_USE_BEDROCK=1
export AWS_REGION=us-east-1

# Configure corporate proxy
export HTTPS_PROXY='https://proxy.example.com:8080'
```

#### Using Vertex AI with LLM Gateway
```bash
# Enable Vertex
export CLAUDE_CODE_USE_VERTEX=1

# Configure LLM gateway
export ANTHROPIC_VERTEX_BASE_URL='https://your-llm-gateway.com/vertex'
export CLAUDE_CODE_SKIP_VERTEX_AUTH=1  # If gateway handles GCP auth
```

## Choosing a Deployment Configuration

### Direct Provider Access
Best for organizations that:
- Want the simplest setup
- Have existing AWS or GCP infrastructure
- Need provider-native monitoring

### Corporate Proxy
Best for organizations that: