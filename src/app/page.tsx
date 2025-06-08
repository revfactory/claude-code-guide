export default function Home() {
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
                <span className="text-xl font-bold text-slate-900 dark:text-white">Hello! Vibe</span>
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

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              AI와 함께하는
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 스마트한 개발</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Claude Code는 터미널에서 동작하는 AI 코딩 도구입니다. 
              자연어 명령으로 코드를 편집하고, 버그를 수정하며, 프로젝트를 이해할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center">
                빠른 시작
              </a>
              <a href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center">
                사용법 가이드
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Claude Code의 주요 기능
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">스마트 코드 편집</h3>
                <p className="text-slate-600 dark:text-slate-300">자연어로 코드 편집 요청하고, AI가 전체 코드베이스를 이해하여 정확한 수정을 수행합니다.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Git 자동화</h3>
                <p className="text-slate-600 dark:text-slate-300">커밋 생성, PR 작성, 머지 충돌 해결 등 Git 작업을 자연어 명령으로 자동화할 수 있습니다.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">테스트 & 디버깅</h3>
                <p className="text-slate-600 dark:text-slate-300">테스트 실행, 실패한 테스트 분석 및 수정, 보안 취약점 발견 등을 자동으로 처리합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Install Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              5분 만에 시작하기
            </h2>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">터미널</span>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <code className="text-green-400 font-mono">
                npm install -g @anthropic-ai/claude-code
              </code>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">
              설치 후 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">claude</code> 명령어로 바로 시작할 수 있습니다.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white">Hello! Vibe</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Claude Code편</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                한국 개발자를 위한 Claude Code 사용자 모임
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">학습 가이드</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><a href="/getting-started" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">설치 및 시작하기</a></li>
                <li><a href="/usage-guide/basic-commands" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">기본 명령어</a></li>
                <li><a href="/usage-guide/advanced-features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">고급 기능</a></li>
                <li><a href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">실전 튜토리얼</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">커뮤니티</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><a href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">YouTube 학습 영상</a></li>
                <li><a href="/use-cases" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">팀별 활용 사례</a></li>
                <li><a href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub 오픈소스</a></li>
                <li><a href="/usage-guide/core-workflows" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">핵심 워크플로우</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">링크</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><a href="https://docs.anthropic.com/en/docs/claude-code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">공식 문서</a></li>
                <li><a href="https://github.com/anthropics/claude-code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="https://www.anthropic.com/discord" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-slate-600 dark:text-slate-300">
            © 2025 robin.hwang@kakaocorp.com. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
