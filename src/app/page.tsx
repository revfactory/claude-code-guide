'use client';

import Link from 'next/link';
import NavigationHeader from '../components/NavigationHeader';
import MobileMenu from '../components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function Home() {
  const { mobileMenu, helpers } = useNavigationMenu();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <NavigationHeader
        isMobileMenuOpen={mobileMenu.isOpen}
        onMobileMenuToggle={mobileMenu.toggle}
        getLinkClassName={helpers.getLinkClassName}
      >
        <MobileMenu
          isOpen={mobileMenu.isOpen}
          onLinkClick={mobileMenu.onLinkClick}
          getLinkClassName={helpers.getLinkClassName}
          menuRef={mobileMenu.menuRef}
        />
      </NavigationHeader>

      <main>
        {/* Hero Section */}
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[40vh] lg:min-h-[50vh]">
              {/* Left: Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">
                  AI와 함께하는<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">스마트한 개발</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 lg:mb-8">
                  Claude Code는 터미널에서 동작하는 AI 코딩 도구입니다. 
                  자연어 명령으로 코드를 편집하고, 버그를 수정하며, 프로젝트를 이해할 수 있습니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center">
                    빠른 시작
                  </Link>
                  <Link href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center">
                    사용법 가이드
                  </Link>
                </div>
              </div>
              
              {/* Right: Banner Image */}
              <div className="flex justify-center lg:justify-end items-center h-full">
                <div className="relative w-full max-w-lg">
                  <img 
                    src="/banner.png" 
                    alt="Claude Code 사용 예시" 
                    className="w-full h-full object-cover rounded-full aspect-square"
                  />
                </div>
              </div>
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

        {/* AI Native Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  AI Native 개발 환경으로의 전환
                </h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  AI를 단순한 도구가 아닌 협업 파트너로 활용하는 새로운 개발 패러다임을 만나보세요. 
                  생산성을 극대화하고 더 창의적인 문제 해결에 집중할 수 있습니다.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">AI와 함께 코드 작성 속도 2-10배 향상</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">반복적인 작업 자동화로 창의적 문제 해결에 집중</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">최신 AI 도구와 워크플로우 통합 가이드</p>
                  </div>
                </div>
                <Link href="/ai-native" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  <span>AI Native 가이드 보기</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg blur-2xl opacity-30"></div>
                  <div className="relative bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">AI Powered</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Claude, Copilot, Cursor</p>
                        </div>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">프롬프트 예시:</p>
                        <code className="block bg-slate-100 dark:bg-slate-900 p-3 rounded text-sm">
                          "이 함수를 TypeScript로 변환하고<br/>
                          테스트 코드도 함께 작성해줘"
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
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
                <li><Link href="/getting-started" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">설치 및 시작하기</Link></li>
                <li><Link href="/usage-guide/basic-commands" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">기본 명령어</Link></li>
                <li><Link href="/usage-guide/advanced-features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">고급 기능</Link></li>
                <li><Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">실전 튜토리얼</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">커뮤니티</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">YouTube 학습 영상</Link></li>
                <li><Link href="/use-cases" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">팀별 활용 사례</Link></li>
                <li><Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub 오픈소스</Link></li>
                <li><Link href="/usage-guide/core-workflows" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">핵심 워크플로우</Link></li>
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
            <p>© 2025 robin.hwang@kakaocorp.com. All rights reserved.</p>
            <p className="mt-2 text-xs">
              컨텐츠 무단 복제 및 상업적 재배포 금지 | 소스 코드는 MIT 라이선스
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
