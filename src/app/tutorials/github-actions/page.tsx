export default function GitHubActionsIntegration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div className="flex flex-col">
                <a href="/" className="text-xl font-bold text-slate-900 dark:text-white">Hello! Vibe</a>
                <span className="text-xs text-slate-600 dark:text-slate-400">Claude Code편</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">홈</a>
              <a href="/getting-started" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">시작하기</a>
              <a href="/usage-guide" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">사용법 가이드</a>
              <a href="/tutorials" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">튜토리얼</a>
              <a href="/community" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">커뮤니티</a>
              <a href="/use-cases" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">활용 사례</a>
              <a href="https://github.com/revfactory/claude-code-guide" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <a href="/" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">홈</a>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <a href="/tutorials" className="ml-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">튜토리얼</a>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-4 text-slate-900 dark:text-white font-medium">GitHub Actions 통합</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            GitHub Actions 통합 가이드
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Claude Code를 GitHub Actions와 통합하여 PR과 이슈에서 AI 기반 자동화를 구현하는 완전한 가이드입니다.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">📋 목차</h2>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li><a href="#quick-start" className="hover:underline">🚀 빠른 시작</a></li>
            <li><a href="#manual-setup" className="hover:underline">⚙️ 수동 설정</a></li>
            <li><a href="#basic-usage" className="hover:underline">💬 기본 사용법</a></li>
            <li><a href="#advanced-config" className="hover:underline">🔧 고급 설정</a></li>
            <li><a href="#automation-examples" className="hover:underline">🤖 자동화 예제</a></li>
            <li><a href="#security" className="hover:underline">🔒 보안 설정</a></li>
            <li><a href="#troubleshooting" className="hover:underline">🐛 트러블슈팅</a></li>
          </ul>
        </div>

        {/* Quick Start */}
        <section id="quick-start" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">🚀 빠른 시작</h2>
          
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
              ⚡ Claude Code CLI를 사용한 자동 설정 (권장)
            </h3>
            <p className="text-green-800 dark:text-green-200 mb-4">
              가장 쉬운 방법은 Claude Code CLI를 사용하는 것입니다:
            </p>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
              <code className="text-green-400 font-mono">
                claude
              </code>
              <br />
              <code className="text-green-400 font-mono">
                /install-github-app
              </code>
            </div>
            <p className="text-green-700 dark:text-green-300 text-sm mt-4">
              이 명령어는 GitHub 앱 설치와 필요한 시크릿 설정을 자동으로 안내합니다.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ 요구사항</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>• 저장소 관리자 권한 필요</li>
              <li>• Anthropic API 직접 사용자만 가능 (AWS Bedrock 사용자는 수동 설정 필요)</li>
            </ul>
          </div>
        </section>

        {/* Manual Setup */}
        <section id="manual-setup" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">⚙️ 수동 설정</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">1. GitHub 앱 설치</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Claude GitHub 앱을 저장소에 설치합니다:
              </p>
              <a 
                href="https://github.com/apps/claude" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Claude GitHub 앱 설치하기
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">2. API 키 시크릿 추가</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                저장소 설정에서 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">ANTHROPIC_API_KEY</code> 시크릿을 추가합니다:
              </p>
              <ol className="list-decimal list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>저장소 → Settings → Secrets and variables → Actions</li>
                <li>"New repository secret" 클릭</li>
                <li>Name: <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">ANTHROPIC_API_KEY</code></li>
                <li>Value: 여러분의 Anthropic API 키</li>
                <li>"Add secret" 클릭</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">3. 워크플로우 파일 생성</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">.github/workflows/claude.yml</code> 파일을 생성합니다:
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
{`name: Claude Assistant

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude-response:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          github_token: \${{ secrets.GITHUB_TOKEN }}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Usage */}
        <section id="basic-usage" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">💬 기본 사용법</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">📋 질문하기</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">PR이나 이슈에 댓글을 추가하세요:</p>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <code className="text-slate-700 dark:text-slate-300">
                  @claude 이 함수가 무엇을 하는지 설명해주세요
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🔧 수정 요청</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">구체적인 변경사항을 요청하세요:</p>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <code className="text-slate-700 dark:text-slate-300">
                  @claude 이 함수에 에러 처리를 추가해주세요
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🔍 코드 리뷰</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">포괄적인 리뷰를 요청하세요:</p>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <code className="text-slate-700 dark:text-slate-300">
                  @claude 이 PR을 리뷰하고 개선사항을 제안해주세요
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🐛 버그 수정</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">스크린샷과 함께 버그를 신고하세요:</p>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <code className="text-slate-700 dark:text-slate-300">
                  @claude 이 스크린샷의 버그를 수정해주세요 [이미지 첨부]
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Configuration */}
        <section id="advanced-config" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">🔧 고급 설정</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">커스텀 도구 허용</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                기본적으로 Claude는 파일 작업과 GitHub 작업만 수행할 수 있습니다. 추가 명령어를 허용하려면:
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
{`- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    allowed_tools: "Bash(npm install),Bash(npm test),Bash(pnpm build)"
    disallowed_tools: "TaskOutput,KillTask"`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">환경 변수 설정</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                테스트나 빌드를 위한 환경 변수를 설정할 수 있습니다:
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
{`- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    claude_env: |
      NODE_ENV: test
      CI: true
      DATABASE_URL: postgres://test:test@localhost:5432/test_db`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">커스텀 트리거 설정</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                기본 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">@claude</code> 대신 다른 트리거를 사용할 수 있습니다:
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
{`- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    trigger_phrase: "/claude"
    assignee_trigger: "claude-bot"`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Examples */}
        <section id="automation-examples" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">🤖 자동화 예제</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">자동 문서 업데이트</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                API 파일이 변경될 때 자동으로 문서를 업데이트합니다:
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
{`name: Auto Documentation Update

on:
  pull_request:
    paths:
      - "src/api/**/*.ts"

jobs:
  update-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          direct_prompt: |
            README.md의 API 문서를 이 PR의 API 엔드포인트 
            변경사항에 맞게 업데이트해주세요.`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">특정 작성자 PR 자동 리뷰</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                외부 기여자나 특정 개발자의 PR을 자동으로 리뷰합니다:
              </p>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
{`name: Auto Review External PRs

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review-external:
    if: |
      github.event.pull_request.user.login == 'external-contributor' ||
      github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          direct_prompt: |
            이 PR을 철저히 리뷰해주세요. 외부 기여자의 코드이므로
            코딩 표준, 보안 관행, 테스트 커버리지에 특별히 주의해주세요.`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">🔒 보안 설정</h2>
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
              ⚠️ 중요: API 키 보안
            </h3>
            <div className="space-y-4 text-red-800 dark:text-red-200">
              <p><strong>절대로 API 키를 워크플로우 파일에 직접 작성하지 마세요!</strong></p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">✅ 올바른 방법:</p>
                  <div className="bg-slate-900 rounded p-2">
                    <code className="text-green-400 text-sm">
                      anthropic_api_key: ${"{{ secrets.ANTHROPIC_API_KEY }}"}
                    </code>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">❌ 잘못된 방법:</p>
                  <div className="bg-slate-900 rounded p-2">
                    <code className="text-red-400 text-sm">
                      anthropic_api_key: "sk-ant-api03-..."
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">접근 제어</h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• 저장소 쓰기 권한이 있는 사용자만 트리거 가능</li>
                <li>• GitHub 앱과 봇은 액션을 트리거할 수 없음</li>
                <li>• 단기간 토큰만 사용</li>
                <li>• 저장소별로 범위 제한</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">GitHub 앱 권한</h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Pull Requests: 읽기/쓰기</li>
                <li>• Issues: 읽기/쓰기</li>
                <li>• Contents: 읽기/쓰기</li>
                <li>• 자동 커밋 서명</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">🐛 트러블슈팅</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Q: Claude가 댓글에 응답하지 않아요
              </h3>
              <div className="text-slate-600 dark:text-slate-300 space-y-2">
                <p><strong>확인사항:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>GitHub 앱이 설치되어 있는지 확인</li>
                  <li>ANTHROPIC_API_KEY 시크릿이 설정되어 있는지 확인</li>
                  <li>워크플로우 파일이 올바른 위치(.github/workflows/)에 있는지 확인</li>
                  <li>트리거 문구(@claude)를 정확히 사용했는지 확인</li>
                  <li>저장소에 쓰기 권한이 있는지 확인</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Q: API 키 관련 오류가 발생해요
              </h3>
              <div className="text-slate-600 dark:text-slate-300 space-y-2">
                <p><strong>해결방법:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>API 키가 올바른 형식(sk-ant-로 시작)인지 확인</li>
                  <li>시크릿 이름이 정확히 ANTHROPIC_API_KEY인지 확인</li>
                  <li>API 키가 만료되지 않았는지 확인</li>
                  <li>Anthropic 계정에 충분한 크레딧이 있는지 확인</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Q: Claude가 특정 명령어를 실행할 수 없어요
              </h3>
              <div className="text-slate-600 dark:text-slate-300 space-y-2">
                <p><strong>해결방법:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>allowed_tools 설정에 해당 명령어가 포함되어 있는지 확인</li>
                  <li>예: <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">allowed_tools: "Bash(npm install),Bash(npm test)"</code></li>
                  <li>보안상 기본적으로 파일 작업과 GitHub 작업만 허용됨</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-700">
          <a 
            href="/tutorials" 
            className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            튜토리얼 목록으로
          </a>
          
          <a 
            href="/community" 
            className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            커뮤니티로
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600 dark:text-slate-300">
          <p>© 2025 robin.hwang@kakaocorp.com. All rights reserved.</p>
          <p className="mt-2 text-xs">
            컨텐츠 무단 복제 및 상업적 재배포 금지 | 소스 코드는 MIT 라이선스
          </p>
        </div>
      </footer>
    </div>
  );
}