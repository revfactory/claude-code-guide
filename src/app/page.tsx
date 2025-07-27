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
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">차세대 개발 환경</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 lg:mb-8">
                  Claude Code는 터미널에서 동작하는 엔터프라이즈급 AI 코딩 도구입니다. 
                  자연어 명령, 서브 에이전트, 훅 시스템, SDK 지원으로 개발 워크플로우를 혁신합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center">
                    빠른 시작
                  </Link>
                  <Link href="/guides/basic-commands" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center">
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

        {/* Basic Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                기본 기능
              </h2>
              <Link href="/guides/basic-commands" className="text-blue-600 dark:text-blue-400 hover:underline">
                기본 명령어 가이드 보기 →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/guides/basic-commands" className="block p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">자연어 대화</h3>
                <p className="text-slate-600 dark:text-slate-300">일상적인 언어로 코드 작성, 수정, 리팩토링을 요청하고 즉시 실행할 수 있습니다.</p>
              </Link>
              <Link href="/guides/core-workflows" className="block p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">자동 코드 분석</h3>
                <p className="text-slate-600 dark:text-slate-300">프로젝트 구조를 이해하고 컨텍스트를 파악하여 정확한 코드 수정을 수행합니다.</p>
              </Link>
              <Link href="/tutorials" className="block p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">버전 관리 통합</h3>
                <p className="text-slate-600 dark:text-slate-300">Git과 완벽하게 통합되어 커밋, PR 생성, 브랜치 관리를 자동으로 처리합니다.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                고급 기능
              </h2>
              <Link href="/guides/advanced-features" className="text-blue-600 dark:text-blue-400 hover:underline">
                고급 기능 가이드 보기 →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/guides/advanced-features#subagents" className="block p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">강력한 서브 에이전트</h3>
                <p className="text-slate-600 dark:text-slate-300">복잡한 작업을 위한 전문 서브 에이전트가 자동으로 활성화되어 정밀한 코드 분석과 수정을 수행합니다.</p>
              </Link>
              <Link href="/guides/advanced-features#hooks-mcp" className="block p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">훅 시스템 & MCP</h3>
                <p className="text-slate-600 dark:text-slate-300">워크플로우 커스터마이징을 위한 훅 시스템과 Model Context Protocol로 도구를 확장할 수 있습니다.</p>
              </Link>
              <Link href="/guides/advanced-features#slash-commands" className="block p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">슬래시 명령어</h3>
                <p className="text-slate-600 dark:text-slate-300">/init, /explain, /refactor 등 강력한 슬래시 명령어로 빠르게 작업을 수행할 수 있습니다.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Enterprise Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                엔터프라이즈급 기능
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                대규모 팀과 기업을 위한 보안, 규정 준수, 통합 기능을 제공합니다.
              </p>
              <Link href="/developers/enterprise" className="text-blue-600 dark:text-blue-400 hover:underline">
                엔터프라이즈 가이드 보기 →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/developers/enterprise#iam" className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">IAM 통합</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">기업 SSO 및 인증 시스템과 완벽하게 통합</p>
              </Link>
              <Link href="/developers/enterprise#cloud" className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">클라우드 통합</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">AWS Bedrock, Google Vertex AI 지원</p>
              </Link>
              <Link href="/developers/enterprise#security" className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">보안 감사</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">모든 활동 로깅 및 접근 제어</p>
              </Link>
              <Link href="/developers/enterprise#compliance" className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">규정 준수</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">SOC2, HIPAA, GDPR 인증 지원</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Developer Tools Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              개발자 도구 통합
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  SDK & API
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Python, TypeScript, JavaScript SDK 제공</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>RESTful API로 커스텀 통합 가능</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>실시간 스트리밍 지원</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  IDE & CI/CD
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>VS Code, JetBrains 플러그인</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>GitHub Actions 통합</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Jenkins, GitLab CI 호환</span>
                  </li>
                </ul>
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
              <br />
              <span className="text-slate-400 text-sm mt-2 block"># 또는 Homebrew (macOS/Linux)</span>
              <code className="text-green-400 font-mono">
                brew install claude-code
              </code>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">
              설치 후 <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">claude</code> 명령어로 바로 시작할 수 있습니다.
            </p>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>🎉 Windows 네이티브 지원!</strong> 이제 WSL 없이도 Git Bash를 통해 Windows에서 직접 사용할 수 있습니다.
              </p>
            </div>
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
                <li><Link href="/guides/basic-commands" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">기본 명령어</Link></li>
                <li><Link href="/guides/advanced-features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">고급 기능</Link></li>
                <li><Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">실전 튜토리얼</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">커뮤니티</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">YouTube 학습 영상</Link></li>
                <li><Link href="/developers/use-cases" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">팀별 활용 사례</Link></li>
                <li><Link href="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub 오픈소스</Link></li>
                <li><Link href="/guides/core-workflows" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">핵심 워크플로우</Link></li>
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
