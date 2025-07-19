'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function Tutorials() {
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Claude Code 실전 튜토리얼
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            단계별 가이드와 실제 예제를 통해 Claude Code의 강력한 기능들을 마스터해보세요. 
            일상 워크플로우부터 고급 자동화까지 체계적으로 학습할 수 있습니다.
          </p>
        </div>

        {/* Quick Start Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">빠른 시작 튜토리얼</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Resume Conversations */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">이전 대화 이어서 하기</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                작업을 중단했다가 나중에 이어서 계속할 수 있는 방법을 학습합니다.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">가장 최근 대화 계속하기</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">claude --continue</code>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">대화 선택기 사용</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">claude --resume</code>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>💡 팁:</strong> 모든 대화는 로컬에 자동 저장되며, 컨텍스트와 도구 사용 기록이 모두 보존됩니다.
                </p>
              </div>
            </div>

            {/* Understanding Codebases */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">새로운 코드베이스 이해하기</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                처음 접하는 프로젝트의 구조와 아키텍처를 빠르게 파악하는 방법을 익힙니다.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">전체 개요 파악하기</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">give me an overview of this codebase</code>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">특정 기능 찾기</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                    <code className="text-green-400 font-mono text-sm">find the files that handle user authentication</code>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>⚡ 팁:</strong> 넓은 질문부터 시작해서 점차 구체적인 영역으로 좁혀가세요. Claude Opus 4의 향상된 컨텍스트 이해 능력으로 더 정확한 분석이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Workflow Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">핵심 워크플로우 튜토리얼</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Bug Fixing */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">효율적인 버그 수정</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                에러 메시지 분석부터 근본 원인 찾기, 수정 사항 적용까지의 전체 과정
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>I'm seeing an error when I run npm test</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>suggest a few ways to fix the @ts-ignore</code>
                </div>
              </div>
            </div>

            {/* Code Refactoring */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">코드 리팩토링</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                레거시 코드를 현대적인 패턴으로 안전하게 업데이트하는 방법
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>find deprecated API usage in our codebase</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>refactor utils.js to use ES2024 features</code>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">테스트 작업</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                테스트 커버리지 추가, 실패 테스트 분석, 엣지 케이스 발견
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>add tests for the notification service</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>explain why this test is failing</code>
                </div>
              </div>
            </div>

            {/* PR Creation */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">PR 생성</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                변경사항 요약부터 상세한 PR 설명 작성까지 자동화
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>create a pr</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>enhance the PR description with more context</code>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">문서화</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                코드 주석, API 문서, README 업데이트 자동화
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>add JSDoc comments to auth.js</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>update the README with latest changes</code>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">이미지 작업</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                스크린샷, 다이어그램, 디자인 목업을 활용한 개발
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  드래그 앤 드롭으로 이미지 추가
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>Generate CSS to match this design mockup</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">고급 튜토리얼</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Extended Thinking */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">확장된 사고 활용법</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                복잡한 아키텍처 결정이나 어려운 버그 해결을 위해 Claude Opus 4의 깊은 사고를 유도하는 방법
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">기본 사고 요청</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                    <code className="text-green-400 font-mono text-sm">think about how to architect this feature</code>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">
                    기본적인 계획 수립을 위한 사고 과정 유도
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">깊은 사고 요청</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                    <code className="text-green-400 font-mono text-sm">think hard about the edge cases</code>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">
                    더 철저한 분석과 계획을 위한 깊은 사고 유도
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🧠 효과적인 사고 유도 전략</h4>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                  <li>• 먼저 컨텍스트를 충분히 제공</li>
                  <li>• "think", "think hard", "think deeply" 등의 표현 활용</li>
                  <li>• Claude Opus 4의 강화된 추론 능력을 활용한 복잡한 문제 해결</li>
                  <li>• 사고 과정을 확인한 후 실행 단계로 진행</li>
                </ul>
              </div>
            </div>

            {/* Project Memory */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">프로젝트 메모리 설정</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                CLAUDE.md 파일을 통해 프로젝트별 컨텍스트, 컨벤션, 자주 사용하는 명령어를 관리하는 방법
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">자동 초기화</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                    <code className="text-green-400 font-mono text-sm">/init</code>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">
                    프로젝트를 분석하여 CLAUDE.md 파일을 자동 생성
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">메모리 확인</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-2">
                    <code className="text-green-400 font-mono text-sm">/memory</code>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">
                    현재 프로젝트 메모리 상태 확인
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📝 포함할 내용</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• 자주 사용하는 명령어 (빌드, 테스트, 린트)</li>
                  <li>• 코딩 스타일과 네이밍 컨벤션</li>
                  <li>• 프로젝트별 아키텍처 패턴</li>
                  <li>• 팀 내 공유 규칙과 개인 설정</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MCP Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">MCP 프로토콜 튜토리얼</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Supabase MCP Tutorial */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Supabase MCP 완전 정복</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                가장 인기 있는 MCP 서버인 Supabase를 Claude Code에 연결하여 백엔드 개발을 완전 자동화해보세요.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">1. 빠른 설정</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <code className="text-green-400 font-mono text-sm">claude mcp add supabase -e SUPABASE_ACCESS_TOKEN=your_token npx -y @supabase/mcp-server-supabase@latest</code>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-xs">
                    Supabase 개인 액세스 토큰으로 MCP 서버 연결 (설정 → 액세스 토큰에서 생성)
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">2. 실전 사용 예시</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">블로그 포스트를 저장할 테이블을 만들어줘</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">→ 스키마 설계 → 테이블 생성 → RLS 정책 설정</p>
                    </div>
                    <div>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">사용자 인증 Edge Function을 만들고 배포해줘</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">→ 함수 작성 → 테스트 → 실시간 배포</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>🚀 프로 팁:</strong> "데이터베이스 비용을 분석해줘", "느린 쿼리를 최적화해줘" 같은 고급 명령도 사용 가능합니다!
                </p>
              </div>
            </div>

            {/* Real Workflow Tutorial */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">완전 자동화 워크플로우</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                GitHub + Supabase + Slack을 연결하여 "이슈 접수 → 코드 수정 → 배포 → 팀 알림"까지 한 번에!
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                      <span className="font-medium text-gray-900 dark:text-gray-300">GitHub 연결</span>
                    </div>
                    <div className="bg-slate-900 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-xs">claude mcp add github ...</code>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                      <span className="font-medium text-green-900 dark:text-green-300">Supabase 연결</span>
                    </div>
                    <div className="bg-slate-900 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-xs">claude mcp add supabase ...</code>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                      <span className="font-medium text-purple-900 dark:text-purple-300">Slack 연결</span>
                    </div>
                    <div className="bg-slate-900 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-xs">claude mcp add slack ...</code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">🎯 마법의 한 줄 명령어</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-3">
                    <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                    <code className="text-white font-mono text-sm">GitHub 이슈 #42를 분석해서 수정하고, 배포 후 Slack #dev에 알려줘</code>
                  </div>
                  <div className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <p>→ 이슈 내용 분석 및 관련 코드 파일 찾기</p>
                    <p>→ 버그 수정 코드 작성 및 테스트</p>
                    <p>→ GitHub에 PR 생성 및 머지</p>
                    <p>→ Supabase에 Edge Function 배포</p>
                    <p>→ Slack 채널에 완료 알림 전송</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>⚡ 실제 사례:</strong> 스타트업에서 이 워크플로우로 버그 수정 시간을 3시간에서 15분으로 단축했습니다!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">자동화 튜토리얼</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* GitHub Actions */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                <a href="/tutorials/github-actions" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub Actions 통합</a>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                GitHub 워크플로우에 Claude Code를 통합하여 PR 관리, 이슈 처리, 코드 리뷰를 자동화합니다.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">빠른 설정</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-3">
                    <code className="text-green-400 font-mono text-sm">/install-github-app</code>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Claude Code 터미널에서 실행하여 GitHub 앱과 필요한 시크릿을 자동으로 설정
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">사용 예제</h4>
                  <div className="space-y-2">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded p-2">
                      <code className="text-slate-700 dark:text-slate-300 text-xs">@claude implement this feature</code>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded p-2">
                      <code className="text-slate-700 dark:text-slate-300 text-xs">@claude fix the TypeError in the dashboard</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="p-4 bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-lg flex-1 mr-4">
                  <p className="text-gray-800 dark:text-gray-200 text-sm">
                    <strong>⚡ 기능:</strong> 이슈를 PR로 자동 변환, 구현 가이드 제공, 빠른 버그 수정
                  </p>
                </div>
                <a 
                  href="/tutorials/github-actions" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  상세 가이드 →
                </a>
              </div>
            </div>

            {/* Unix Utility */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Unix 스타일 유틸리티</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Claude Code를 파이프라인, 스크립트, 빌드 과정에 통합하여 유닉스 철학에 맞게 활용합니다.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">파이프 활용</h4>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <code className="text-green-400 font-mono text-xs">cat error.log | claude -p "explain this error"</code>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    파일 내용을 Claude에게 직접 전달하여 분석
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">출력 형식 제어</h4>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">claude -p "analyze" --output-format json</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">claude -p "analyze" --output-format stream-json</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>🔧 활용:</strong> 린터, 코드 리뷰어, 빌드 스크립트 통합, 데이터 변환
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">고급 기능 활용</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Custom Slash Commands */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a1.994 1.994 0 01-1.414.586H7a4 4 0 01-4-4V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">커스텀 슬래시 명령어</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                프로젝트별 또는 개인용 슬래시 명령어를 생성하여 반복 작업을 자동화
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>.claude/commands/optimize.md</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>/project:optimize</code>
                </div>
              </div>
            </div>

            {/* MCP Integration */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <a href="/mcp" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-3 block">MCP 서버 연결</a>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Model Context Protocol을 통해 외부 도구와 데이터 소스에 연결
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>GitHub 레포지토리 분석해줘</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>Slack에 배포 알림을 보내줘</code>
                </div>
              </div>
            </div>

            {/* Git Worktrees */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Git Worktrees 병렬 작업</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                여러 브랜치에서 동시에 Claude Code 세션을 실행하여 독립적인 작업 환경 구성
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <code>git worktree add ../feature-a -b feature-a</code>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  각 worktree에서 독립적인 Claude 세션 실행
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            지금 바로 튜토리얼을 시작해보세요
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            단계별 가이드를 따라하며 Claude Code의 강력한 기능들을 하나씩 익혀보세요. 
            기본 명령어부터 고급 자동화까지, 실무에 바로 적용할 수 있는 실전 지식을 습득할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Claude Code 설치하기
            </a>
            <a href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              기본 사용법 학습
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}