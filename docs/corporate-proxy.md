# Corporate Proxy Configuration

Claude Code supports standard HTTP/HTTPS proxy configurations through environment variables, allowing you to route all traffic through your organization's proxy servers for security, compliance, and monitoring purposes.

## Environment Variables

Claude Code respects standard proxy environment variables:

```bash
# HTTPS proxy (recommended)
export HTTPS_PROXY=https://proxy.example.com:8080

# HTTP proxy (if HTTPS not available)
export HTTP_PROXY=http://proxy.example.com:8080
```

> Claude Code currently does not support the `NO_PROXY` environment variable. All traffic will be routed through the configured proxy.

> Claude Code does not support SOCKS proxies.

## Authentication

### Basic Authentication

If your proxy requires basic authentication, include credentials in the proxy URL:

```bash
export HTTPS_PROXY=http://username:password@proxy.example.com:8080
```

**Warning**: Avoid hardcoding passwords in scripts. Use environment variables or secure credential storage instead.

**Tip**: For proxies requiring advanced authentication (NTLM, Kerberos), consider using an LLM Gateway service.

## SSL Certificate Issues

If your proxy uses custom SSL certificates, set the correct certificate bundle path:

```bash
export SSL_CERT_FILE=/path/to/certificate-bundle.crt
export NODE_EXTRA_CA_CERTS=/path/to/certificate-bundle.crt
```

## Network Access Requirements

Claude Code requires access to these URLs:
- `api.anthropic.com` - Claude API endpoints
- `statsig.anthropic.com` - Telemetry and metrics
- `sentry.io` - Error reporting

Ensure these URLs are allowlisted in your proxy configuration and firewall rules, especially in containerized or restricted network environments.

## Additional Resources
- [Claude Code settings](/en/docs/claude-code/settings)
- [Environment variables reference](/en/docs/claude-code/settings#environment-variables)
- [Troubleshooting guide](/en/docs/claude-code/troubleshooting)