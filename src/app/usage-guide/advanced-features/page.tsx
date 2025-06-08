export default function AdvancedFeatures() {
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
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">홈</a>
                <a href="/getting-started" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">시작하기</a>
                <a href="/usage-guide" className="text-blue-600 dark:text-blue-400 font-medium">사용법 가이드</a>
                <a href="/tutorials" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">튜토리얼</a>
                <a href="/community" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">커뮤니티</a>
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
            <span className="text-slate-900 dark:text-white">고급 기능</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              고급 기능
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Claude Code의 강력한 고급 기능들을 활용하여 개발 생산성을 극대화하세요.
            </p>
          </div>

          {/* Extended Thinking */}
          <section id="extended-thinking" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">확장된 사고 (Extended Thinking)</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                복잡한 문제 해결을 위해 Claude가 더 깊이 있게 분석하고 계획을 세우도록 유도합니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">확장된 사고 활성화</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">기본 사고 요청</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">think about how to architect this feature</code>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">깊은 사고 요청</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">think hard about the edge cases</code>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-3">
                    "think hard", "think deeply", "carefully consider" 등의 표현을 사용하면 더 깊은 분석을 유도할 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">실용적인 활용 예제</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">아키텍처 설계</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">think about how we should architect the new payment service</code>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">보안 검토</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">think hard about the security implications of this API</code>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">성능 최적화</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">think deeply about performance bottlenecks in this code</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🧠 확장된 사고 활용 팁</h4>
                  <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                    <li>• 먼저 컨텍스트를 제공한 후 "think" 요청</li>
                    <li>• 복잡한 문제는 단계별로 나누어 접근</li>
                    <li>• 사고 과정이 표시되므로 중간 결과 확인 가능</li>
                    <li>• 계획 수립 후 실행 단계로 진행</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Memory Management */}
          <section id="memory-management" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">메모리 관리</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                CLAUDE.md 파일을 통해 프로젝트 컨텍스트를 관리하고 Claude의 이해도를 향상시킵니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">CLAUDE.md 파일 관리</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">자동 생성</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">/init</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                        프로젝트 구조, 개발 명령어, 아키텍처 정보를 자동으로 분석하여 CLAUDE.md 파일을 생성합니다.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">메모리 확인</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">/memory</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                        현재 프로젝트에 대한 Claude의 이해 상태를 확인할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">CLAUDE.md 구성 요소</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-slate-900 dark:text-white">개발 명령어</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">빌드, 테스트, 린트 등 자주 사용하는 명령어</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-slate-900 dark:text-white">프로젝트 구조</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">디렉토리 구조와 주요 파일들의 역할</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-slate-900 dark:text-white">아키텍처 정보</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">데이터 플로우, 컴포넌트 관계, 설계 패턴</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-medium text-slate-900 dark:text-white">컨벤션</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">코딩 스타일, 네이밍 규칙, 프로젝트 규칙</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">메모리 최적화 팁</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">정기적 업데이트</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        프로젝트가 발전함에 따라 CLAUDE.md를 정기적으로 업데이트하세요.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">핵심 정보 우선</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        가장 중요한 정보를 상단에 배치하여 Claude가 쉽게 찾을 수 있도록 하세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Web Search */}
          <section id="web-search" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">웹 검색 및 문서 참조</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Claude가 자동으로 웹에서 관련 문서를 찾아 최신 정보를 참조합니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">자동 웹 검색</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">프레임워크 문서 참조</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">show me the latest React hooks best practices</code>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">라이브러리 사용법</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">how to use the latest version of axios for API calls</code>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">오류 해결</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                        <code className="text-white font-mono text-sm">find solutions for this TypeScript error</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">검색 최적화</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      Claude는 다음과 같은 경우에 자동으로 웹 검색을 수행합니다:
                    </p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        최신 API 또는 라이브러리 정보가 필요할 때
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        특정 오류나 문제에 대한 해결책을 찾을 때
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        베스트 프랙티스나 코딩 패턴을 확인할 때
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        기술 스택의 최신 동향을 파악할 때
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Non-interactive Mode */}
          <section id="non-interactive-mode" className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">비대화형 모드 & CI/CD 통합</h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                스크립트, 파이프라인, 자동화된 환경에서 Claude Code를 활용합니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 비대화형 모드</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-3">
                      <code className="text-green-400 font-mono text-sm">export ANTHROPIC_API_KEY=sk_...</code><br/>
                      <code className="text-green-400 font-mono text-sm">claude -p "update the README with the latest changes"</code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      환경 변수로 API 키를 설정하고 <code>-p</code> 플래그로 비대화형 실행
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">도구 제어</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">허용된 도구만 사용</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">claude -p "analyze git history" --allowedTools "Bash(git log:*)" "Bash(git diff:*)"</code>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">특정 도구 비활성화</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">claude -p "review code" --disallowedTools "WebFetch"</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">CI/CD 파이프라인 예제</h3>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">GitHub Actions 워크플로우</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-4">
                    <pre className="text-green-400 font-mono text-xs overflow-x-auto">
{`- name: Code Review with Claude
  run: |
    export ANTHROPIC_API_KEY=\${{ secrets.ANTHROPIC_API_KEY }}
    claude -p "review this PR for security issues" \\
      --allowedTools "Read" "Grep" \\
      --disallowedTools "Bash" "Write"`}
                    </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">일반적인 자동화 시나리오</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">코드 리뷰</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        PR 생성 시 자동으로 코드 품질 및 보안 검토
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">문서 업데이트</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        코드 변경 시 관련 문서 자동 업데이트
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">테스트 생성</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        새로운 기능에 대한 테스트 코드 자동 생성
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">릴리즈 노트</h4>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        버전 태그 생성 시 자동 릴리즈 노트 작성
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">고급 기능 활용 가이드</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">효과적인 활용 전략</h3>
                  <ol className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                      <span>복잡한 작업은 확장된 사고로 계획 수립</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                      <span>CLAUDE.md로 프로젝트 컨텍스트 관리</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                      <span>웹 검색으로 최신 정보 활용</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                      <span>CI/CD에서 비대화형 모드 활용</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">주의사항</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      비대화형 모드에서 도구 권한 제한
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      API 키 보안 관리 필수
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      확장된 사고는 처리 시간이 더 소요
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      CLAUDE.md 정기적 업데이트 필요
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}