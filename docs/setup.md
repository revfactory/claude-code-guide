# Set up Claude Code

## System Requirements

- **Operating Systems**: macOS 10.15+, Ubuntu 20.04+/Debian 10+, or Windows 10+ (with WSL 1, WSL 2, or Git for Windows)
- **Hardware**: 4GB+ RAM
- **Software**: [Node.js 18+](https://nodejs.org/en/download)
- **Network**: Internet connection required for authentication and AI processing
- **Shell**: Works best in Bash, Zsh or Fish
- **Location**: [Anthropic supported countries](https://www.anthropic.com/supported-countries)

## Standard Installation

To install Claude Code, run:

```bash
npm install -g @anthropic-ai/claude-code
```

> Do NOT use `sudo npm install -g` as this can lead to permission issues and security risks.

After installation, navigate to your project and start Claude Code:

```bash
cd your-awesome-project
claude
```

### Authentication Options

1. **Anthropic Console**: Default option. Connect through the Anthropic Console and complete OAuth. Requires active billing.
2. **Claude App (Pro or Max plan)**: Unified subscription including Claude Code and web interface.
3. **Enterprise platforms**: Configure with Amazon Bedrock or Google Vertex AI

## Windows Setup

### Option 1: Claude Code within WSL
- Both WSL 1 and WSL 2 are supported

### Option 2: Claude Code on native Windows with Git Bash
- Requires [Git for Windows](https://git-scm.com/downloads/win)
- For portable Git installations, specify bash path:
  ```powershell
  $env:CLAUDE_CODE_GIT_BASH_PATH="C:\Program Files\Git\bin\bash.exe"
  ```

## Updating Claude Code

### Auto Updates
- Performed on startup and periodically
- Downloads and installs automatically in background
- Notifications when updates are installed

### Disable Auto-updates
```bash
# Via configuration
claude config set autoUpdates false --global

# Or via environment variable
export DISABLE_AUTOUPDATER=1
```