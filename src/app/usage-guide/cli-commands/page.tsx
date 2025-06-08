export default function CLICommands() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
        <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <a href="/" className="text-xl font-bold text-slate-900 dark:text-white">Claude Code Korea</a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">홈</a>
                <a href="/getting-started" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">시작하기</a>
                <a href="/usage-guide" className="text-blue-600 dark:text-blue-400 font-medium">사용법 가이드</a>
                <a href="/tutorials" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">튜토리얼</a>
                <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">커뮤니티</a>
                <a href="/use-cases" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">활용 사례</a>
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <a href="/usage-guide" className="text-blue-600 dark:text-blue-400 hover:underline">사용법 가이드</a>
            <span className="mx-2 text-slate-500">/</span>
            <span className="text-slate-900 dark:text-white">CLI 명령어 & 제어</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              CLI 명령어 & 제어
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              명령행 인터페이스의 다양한 옵션과 제어 방법을 익혀 Claude Code를 완전히 마스터하세요.
            </p>
          </div>

          {/* Slash Commands */}
          <section id="slash-commands" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a1.994 1.994 0 01-1.414.586H7a4 4 0 01-4-4V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">슬래시 명령어</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                대화형 모드에서 사용할 수 있는 특수 명령어들입니다.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">/init</h3>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">/init</code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      프로젝트 분석 후 CLAUDE.md 파일을 자동 생성합니다.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">/help</h3>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">/help</code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      사용 가능한 명령어와 기능에 대한 도움말을 표시합니다.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">/memory</h3>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">/memory</code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      현재 프로젝트에 대한 Claude의 이해 상태를 확인합니다.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">/exit</h3>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">/exit</code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Claude Code 세션을 종료합니다.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">고급 슬래시 명령어</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">/model [모델명]</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">/model claude-3-5-sonnet-20241022</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        사용할 Claude 모델을 변경합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">/clear</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">/clear</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        대화 기록을 지우고 새로운 세션을 시작합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLI Flags */}
          <section id="cli-flags" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">플래그 옵션</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Claude Code 실행 시 사용할 수 있는 다양한 플래그와 옵션들입니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 플래그</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">-p, --print</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude -p "analyze this codebase"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        비대화형 모드로 실행합니다. 한 번의 명령 후 종료됩니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">--model</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude --model claude-3-5-sonnet-20241022 "help me debug this"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        특정 Claude 모델을 지정하여 실행합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">--version</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude --version</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Claude Code의 버전 정보를 표시합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">보안 제어 플래그</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">--allowedTools</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude -p "review code" --allowedTools "Read" "Grep"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Claude가 사용할 수 있는 도구를 제한합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">--disallowedTools</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude -p "analyze logs" --disallowedTools "Bash" "Write"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        특정 도구의 사용을 금지합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">도구별 세부 제어</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">Bash 명령어 제한</h4>
                    <div className="space-y-2">
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-sm">--allowedTools "Bash(git log:*)" "Bash(git diff:*)"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Git 명령어만 허용하고 다른 bash 명령은 차단
                      </p>
                    </div>

                    <div className="mt-4">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">패턴 예제</h5>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                        <li>• <code>"Bash(npm:*)"</code> - npm 명령어만 허용</li>
                        <li>• <code>"Bash(git:*)"</code> - git 명령어만 허용</li>
                        <li>• <code>"Bash(ls:*)"</code> - ls 명령어만 허용</li>
                        <li>• <code>"Bash(*test*)"</code> - test가 포함된 명령어만 허용</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Environment Variables */}
          <section id="environment-variables" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">환경 변수</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Claude Code의 동작을 제어하는 환경 변수들을 설정할 수 있습니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">인증 관련</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">ANTHROPIC_API_KEY</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">export ANTHROPIC_API_KEY=sk_...</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Anthropic API 키를 설정합니다. 비대화형 모드에서 주로 사용됩니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">ANTHROPIC_BASE_URL</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">export ANTHROPIC_BASE_URL=https://api.anthropic.com</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        API 엔드포인트 URL을 변경할 때 사용합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">모델 설정</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">ANTHROPIC_MODEL</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-sm">export ANTHROPIC_MODEL=claude-3-5-sonnet-20241022</code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      기본으로 사용할 Claude 모델을 설정합니다.
                    </p>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <p className="font-medium mb-1">사용 가능한 모델:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• claude-3-5-sonnet-20241022 (권장)</li>
                        <li>• claude-3-5-haiku-20241022</li>
                        <li>• claude-3-opus-20240229</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">디버깅 및 로깅</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">CLAUDE_DEBUG</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">export CLAUDE_DEBUG=true</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        디버그 모드를 활성화하여 상세한 로그를 출력합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">CLAUDE_LOG_LEVEL</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">export CLAUDE_LOG_LEVEL=info</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        로그 레벨을 설정합니다 (error, warn, info, debug).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Controls */}
          <section id="security-controls" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">보안 제어</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Claude Code의 권한과 접근을 안전하게 제어하는 방법들입니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">도구 권한 제한</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">읽기 전용 모드</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude -p "analyze codebase" --allowedTools "Read" "Grep" "LS"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        파일 읽기와 검색만 허용하고 수정은 차단합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">네트워크 차단</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude -p "review code" --disallowedTools "WebFetch" "WebSearch"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        외부 네트워크 접근을 차단합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">파일 시스템 보호</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                        <code className="text-green-400 font-mono text-sm">claude -p "suggest improvements" --disallowedTools "Write" "Edit" "MultiEdit"</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        파일 수정을 완전히 차단합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">CI/CD 환경 보안</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">GitHub Actions 예제</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-4">
                    <pre className="text-green-400 font-mono text-xs overflow-x-auto">
{`# 코드 리뷰 자동화 (안전한 설정)
- name: Automated Code Review
  run: |
    export ANTHROPIC_API_KEY=\${{ secrets.ANTHROPIC_API_KEY }}
    claude -p "review this PR for potential issues" \\
      --allowedTools "Read" "Grep" "LS" \\
      --disallowedTools "Bash" "Write" "Edit" "WebFetch"`}
                    </pre>
                    </div>
                    <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded">
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        <strong>보안 팁:</strong> CI/CD에서는 항상 최소 권한 원칙을 적용하고, 민감한 작업은 별도 승인 과정을 거치도록 설정하세요.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">권한 레벨별 설정</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">안전 모드</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm mb-2">읽기 전용 + 검색</p>
                      <code className="text-xs bg-green-100 dark:bg-green-800 px-2 py-1 rounded">Read, Grep, LS</code>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">개발 모드</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">편집 + Git</p>
                      <code className="text-xs bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">+ Edit, Bash(git:*)</code>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">전체 권한</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm mb-2">모든 도구 사용</p>
                      <code className="text-xs bg-red-100 dark:bg-red-800 px-2 py-1 rounded">제한 없음</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration Files */}
          <section>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">설정 파일 활용</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">스크립트 예제</h3>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-4">
                  <pre className="text-green-400 font-mono text-xs">
{`#!/bin/bash
# safe-review.sh
export ANTHROPIC_API_KEY=$API_KEY
claude -p "$1" \\
  --allowedTools "Read" "Grep" \\
  --disallowedTools "Bash" "Write"`}
                  </pre>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                    안전한 코드 리뷰를 위한 스크립트
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">별칭 설정</h3>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-4">
                  <pre className="text-green-400 font-mono text-xs">
{`# ~/.bashrc or ~/.zshrc
alias claude-safe='claude --allowedTools "Read" "Grep"'
alias claude-dev='claude --disallowedTools "WebFetch"'
alias claude-review='claude -p --allowedTools "Read"'`}
                  </pre>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                    자주 사용하는 설정의 별칭 생성
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}