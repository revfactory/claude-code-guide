'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import AINativeNavigation from '@/components/AINativeNavigation';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function AINativeToolsPage() {
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

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 상단 네비게이션 */}
          <AINativeNavigation />

          {/* 헤더 섹션 */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI Native 개발 도구
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              효율적인 AI 협업 개발을 위한 필수 도구들
            </p>
          </section>

          {/* 도구 카테고리 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              도구 카테고리
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  IDE 통합 도구
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  개발 환경에 직접 통합되어 실시간으로 코드 작성을 지원
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  터미널 도구
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  명령줄에서 AI와 상호작용하며 작업 수행
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  웹 기반 도구
                </h3>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  브라우저에서 바로 사용할 수 있는 AI 개발 도구
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  특화 도구
                </h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  특정 작업에 최적화된 AI 도구들
                </p>
              </div>
            </div>
          </section>

          {/* IDE 통합 도구 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              IDE 통합 AI 코딩 도구
            </h2>
            <div className="space-y-6">
              {/* GitHub Copilot */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    GitHub Copilot
                  </h3>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    인기
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  GitHub과 OpenAI가 공동 개발한 AI 페어 프로그래머. VS Code, JetBrains, Neovim 등 주요 IDE 지원.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 코드 자동 완성 및 제안</li>
                      <li>• 함수 전체 생성</li>
                      <li>• 테스트 코드 자동 생성</li>
                      <li>• 다양한 언어 지원</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">가격:</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      개인: $10/월, 기업: $19/월
                    </p>
                  </div>
                </div>
              </div>

              {/* Cursor */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Cursor
                  </h3>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    추천
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  AI를 위해 처음부터 설계된 코드 에디터. VS Code 기반이지만 AI 기능이 깊이 통합됨.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• AI 채팅으로 코드 편집</li>
                      <li>• 멀티파일 편집</li>
                      <li>• 코드베이스 전체 이해</li>
                      <li>• 자연어로 코드 검색</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">가격:</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      무료 플랜 제공, Pro: $20/월
                    </p>
                  </div>
                </div>
              </div>

              {/* Codeium */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Codeium
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  무료로 사용할 수 있는 강력한 AI 코딩 어시스턴트. 70개 이상의 언어 지원.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 빠른 코드 자동 완성</li>
                      <li>• 코드 설명 생성</li>
                      <li>• 유닛 테스트 생성</li>
                      <li>• 다양한 IDE 지원</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">가격:</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      개인: 무료, 팀: $12/월
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 터미널 도구 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              터미널 기반 AI 도구
            </h2>
            <div className="space-y-6">
              {/* Claude Code */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Claude Code
                  </h3>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    강력함
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Anthropic의 공식 터미널 AI 코딩 도구. 긴 컨텍스트 윈도우로 대규모 코드베이스 처리 가능.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 자연어로 코드 편집</li>
                      <li>• Git 통합</li>
                      <li>• 파일 시스템 접근</li>
                      <li>• 대규모 리팩토링</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded">
                    <code className="text-sm text-slate-800 dark:text-slate-200">
                      npm install -g @anthropic-ai/claude-code
                    </code>
                  </div>
                </div>
              </div>

              {/* Aider */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Aider
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  터미널에서 AI와 페어 프로그래밍. GPT-4, Claude 등 다양한 모델 지원.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Git 친화적 편집</li>
                      <li>• 멀티 파일 편집</li>
                      <li>• 코드 맵 생성</li>
                      <li>• 자동 커밋</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 웹 기반 도구 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              웹 기반 AI 개발 도구
            </h2>
            <div className="space-y-6">
              {/* Claude.ai */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Claude.ai
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Anthropic의 웹 기반 AI 어시스턴트. 코드 작성, 분석, 디버깅 지원.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 긴 컨텍스트 처리 (100K+ 토큰)</li>
                      <li>• 파일 업로드 및 분석</li>
                      <li>• 코드 생성 및 리팩토링</li>
                      <li>• Projects 기능으로 지속적 협업</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ChatGPT */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  ChatGPT
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  OpenAI의 대화형 AI. 코드 생성, 디버깅, 설명 등 다양한 개발 작업 지원.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">주요 기능:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 코드 인터프리터</li>
                      <li>• 이미지 생성 (다이어그램)</li>
                      <li>• 웹 검색 통합</li>
                      <li>• Custom GPTs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 특화 도구 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              특화된 AI 개발 도구
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 프로토타이핑 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  프로토타이핑
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>
                    <span className="font-medium">Bolt.new:</span> 풀스택 웹 앱 즉시 생성
                  </li>
                  <li>
                    <span className="font-medium">v0.dev:</span> UI 컴포넌트 생성 (Next.js)
                  </li>
                  <li>
                    <span className="font-medium">Replit Agent:</span> AI와 함께 앱 빌드
                  </li>
                </ul>
              </div>

              {/* 코드 리뷰 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  코드 리뷰 & 분석
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>
                    <span className="font-medium">CodeRabbit:</span> AI PR 리뷰어
                  </li>
                  <li>
                    <span className="font-medium">Sourcegraph Cody:</span> 코드베이스 이해
                  </li>
                  <li>
                    <span className="font-medium">Tabnine:</span> 팀 코드 스타일 학습
                  </li>
                </ul>
              </div>

              {/* 테스트 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  테스트 자동화
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>
                    <span className="font-medium">Codium AI:</span> 테스트 자동 생성
                  </li>
                  <li>
                    <span className="font-medium">Testim:</span> E2E 테스트 자동화
                  </li>
                </ul>
              </div>

              {/* 문서화 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  문서화
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>
                    <span className="font-medium">Mintlify:</span> 자동 문서 생성
                  </li>
                  <li>
                    <span className="font-medium">Readme AI:</span> README 자동 생성
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 도구 선택 가이드 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              도구 선택 가이드
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                상황별 추천 도구
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    🚀 빠른 시작을 원한다면:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    GitHub Copilot (IDE 통합) + ChatGPT (문제 해결)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    💪 파워 유저라면:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Cursor (메인 에디터) + Claude Code (대규모 리팩토링)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    💰 예산이 제한적이라면:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Codeium (무료 자동완성) + Claude.ai 무료 플랜
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    🏢 팀 협업이 중요하다면:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    GitHub Copilot Enterprise + CodeRabbit (PR 리뷰)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600 dark:text-slate-300">
          <p>© 2025 Hello! Vibe - Claude Code편. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}