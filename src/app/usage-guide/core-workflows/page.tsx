export default function CoreWorkflows() {
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
              <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">튜토리얼</a>
              <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">커뮤니티</a>
              <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">리소스</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <a href="/usage-guide" className="text-blue-600 dark:text-blue-400 hover:underline">사용법 가이드</a>
          <span className="mx-2 text-slate-500">/</span>
          <span className="text-slate-900 dark:text-white">핵심 워크플로우</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            핵심 워크플로우
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            일상적인 개발 작업에서 Claude Code를 활용하는 핵심 패턴들을 익혀보세요.
          </p>
        </div>

        {/* Understanding Code */}
        <section id="code-understanding" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">코드 이해하기</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              새로운 프로젝트나 복잡한 코드베이스를 빠르게 파악하고 이해합니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">프로젝트 전체 분석</h3>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 mb-3">
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                    <code className="text-white font-mono text-sm">summarize this project</code>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  프로젝트의 목적, 기술 스택, 주요 구조를 빠르게 파악할 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">특정 시스템 이해</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">인증 시스템</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">how does our authentication system work?</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">데이터베이스 구조</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">explain the database schema</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">API 엔드포인트</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">list all API endpoints and their purposes</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">결제 처리</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">explain the payment processing flow</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">코드 탐색</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">특정 기능 찾기</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">find where user permissions are checked</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">의존성 분석</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">what files depend on the User model?</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Editing */}
        <section id="code-editing" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">코드 편집하기</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              자연어 명령으로 정확하고 안전한 코드 수정을 수행합니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 편집 작업</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">기능 추가</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">add input validation to the signup form</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">오류 처리</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">add error handling to API calls</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">성능 개선</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">optimize the database queries</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">보안 강화</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">add CSRF protection to forms</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">리팩토링</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">코드 구조 개선</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">refactor the UserService to use dependency injection</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">중복 코드 제거</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">extract common validation logic into a helper</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">💡 편집 시 팁</h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• 구체적인 요구사항을 명시하세요</li>
                  <li>• 기존 코드 스타일을 유지하도록 요청하세요</li>
                  <li>• 큰 변경은 여러 단계로 나누어 진행하세요</li>
                  <li>• 변경 후 테스트 실행을 요청하세요</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Git Automation */}
        <section id="git-automation" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Git 자동화</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              커밋, 브랜치, 머지 등 Git 작업을 자연어로 쉽게 수행합니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 Git 작업</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">커밋 생성</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">commit my changes</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">브랜치 생성</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">create a feature branch for user settings</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">PR 생성</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">create a pr</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">히스토리 검색</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">which commit added tests for markdown?</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">고급 Git 작업</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">머지 충돌 해결</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">rebase on main and resolve any merge conflicts</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">변경사항 분석</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">analyze the changes since last release</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">전용 Git 명령어</h3>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    Claude Code는 Git 작업을 위한 전용 명령어를 제공합니다:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-blue-400 font-mono text-sm">claude commit</code>
                      <span className="text-slate-400 text-sm ml-2">- 스마트 커밋 메시지 생성</span>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-blue-400 font-mono text-sm">claude pr</code>
                      <span className="text-slate-400 text-sm ml-2">- PR 생성 및 설명 자동 작성</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Debugging */}
        <section id="testing-debugging" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">테스트 & 디버깅</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              테스트 실행, 오류 분석, 디버깅을 자동화하여 코드 품질을 향상시킵니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">테스트 실행</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">전체 테스트</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">run all tests and fix failures</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">특정 모듈</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">run tests for the auth module</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">테스트 작성</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">write tests for the new API endpoint</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">커버리지 확인</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">check test coverage and improve it</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">오류 분석 및 수정</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">테스트 실패 분석</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">explain why this test is failing</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">런타임 오류 해결</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">fix the race condition in the worker queue</code>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">보안 취약점 검사</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                      <code className="text-white font-mono text-sm">find and fix security vulnerabilities</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">린팅 및 코드 품질</h3>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-sm">run lint and fix all issues</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-sm">check code style and format files</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-sm">analyze code complexity and suggest improvements</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Integration */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">워크플로우 통합</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">일반적인 개발 플로우</h3>
                <ol className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    <span>프로젝트 이해: "summarize this codebase"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    <span>기능 구현: "add user authentication"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    <span>테스트 작성: "write tests for the new feature"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    <span>검증: "run tests and fix failures"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">5</span>
                    <span>커밋: "commit my changes"</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">효율적인 협업 팁</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    PR 생성 시 자동으로 설명 작성
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    커밋 메시지를 의미 있게 생성
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    코드 리뷰 전 자동 품질 검사
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    팀 컨벤션에 맞는 코드 스타일 유지
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