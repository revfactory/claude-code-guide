'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import AINativeNavigation from '@/components/AINativeNavigation';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function AINativeOverviewPage() {
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
              AI Native 개발 개요
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              AI를 중심으로 한 새로운 소프트웨어 개발 패러다임
            </p>
          </section>

          {/* AI Native란? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native 개발이란?
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                AI Native 개발은 인공지능을 개발 프로세스의 핵심 구성 요소로 통합하는 새로운 접근 방식입니다. 
                이는 단순히 AI 도구를 사용하는 것을 넘어, AI와의 협업을 통해 소프트웨어를 설계, 구현, 테스트하는 
                방식을 근본적으로 재정의합니다.
              </p>
            </div>
          </section>

          {/* 핵심 특징 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native 개발의 핵심 특징
            </h2>
            <div className="grid gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  1. AI와의 지속적인 대화
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  코드 작성 과정에서 AI와 끊임없이 소통하며, 아이디어를 검증하고 개선합니다. 
                  마치 경험 많은 동료와 페어 프로그래밍하는 것처럼 AI를 활용합니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  2. 반복적이고 점진적인 개발
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  AI의 제안을 받아들이고, 수정하고, 개선하는 반복적인 프로세스를 통해 
                  더 나은 솔루션을 찾아갑니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  3. 컨텍스트 중심 개발
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  프로젝트의 전체 맥락을 AI와 공유하여, 더 정확하고 적절한 코드 생성과 
                  문제 해결이 가능하도록 합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 전통적 개발 vs AI Native */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              전통적 개발 vs AI Native 개발
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      영역
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      전통적 개발
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      AI Native 개발
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      코드 작성
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      수동으로 모든 코드 작성
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      AI와 협업하여 코드 생성 및 수정
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      문제 해결
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      문서와 경험에 의존
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      AI의 제안과 인사이트 활용
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      테스트
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      테스트 케이스 수동 작성
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      AI가 테스트 시나리오 제안 및 생성
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      문서화
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      개발 후 별도 작성
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      개발과 동시에 AI가 자동 생성
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 시작하기 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native 개발 시작하기
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                첫 단계
              </h3>
              <ol className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    1
                  </span>
                  <span>AI 도구 선택 및 설정 (Claude Code, GitHub Copilot, Cursor 등)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    2
                  </span>
                  <span>프롬프트 작성의 기초 학습</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    3
                  </span>
                  <span>작은 프로젝트로 실습 시작</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    4
                  </span>
                  <span>점진적으로 복잡한 작업으로 확장</span>
                </li>
              </ol>
            </div>
          </section>

          {/* 다음 단계 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              다음 단계
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              AI Native 개발의 기본을 이해했다면, 다음 주제들을 학습해보세요:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/ai-native/core-principles" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  핵심 원칙 →
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  AI Native 엔지니어의 기본 원칙과 마인드셋
                </p>
              </a>
              <a href="/ai-native/workflow" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  워크플로우 →
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  효과적인 AI 활용 개발 워크플로우
                </p>
              </a>
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