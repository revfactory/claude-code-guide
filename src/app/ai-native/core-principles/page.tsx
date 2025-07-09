'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import AINativeNavigation from '@/components/AINativeNavigation';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function AINativeCorePrinciplesPage() {
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
              AI Native 개발의 핵심 원칙
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              성공적인 AI Native 엔지니어가 되기 위한 기본 원칙과 마인드셋
            </p>
          </section>

          {/* 핵심 원칙들 */}
          <section className="space-y-12">
            {/* 원칙 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    AI는 협업 파트너
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    AI를 단순한 도구가 아닌, 함께 문제를 해결하는 파트너로 인식합니다. 
                    24시간 대기하는 주니어 개발자처럼 AI를 대하며, 지속적인 대화를 통해 
                    더 나은 솔루션을 찾아갑니다.
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      실천 방법:
                    </h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        코드 작성 전 AI와 설계에 대해 논의하기
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        복잡한 문제를 AI와 함께 단계별로 분해하기
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        AI의 제안을 비판적으로 검토하고 개선하기
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 원칙 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    신뢰하되 검증하라
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    AI가 생성한 모든 코드와 제안은 반드시 검토와 검증이 필요합니다. 
                    AI는 강력한 도구이지만 완벽하지 않으며, 최종 책임은 개발자에게 있습니다.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">
                      ⚠️ 주의사항
                    </p>
                    <ul className="space-y-1 text-amber-700 dark:text-amber-300 text-sm">
                      <li>• AI가 생성한 코드의 보안 취약점 확인</li>
                      <li>• 성능 영향 평가</li>
                      <li>• 라이선스 및 저작권 문제 검토</li>
                      <li>• 프로젝트 표준과의 일치성 확인</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 원칙 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    컨텍스트가 핵심이다
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    AI에게 충분한 컨텍스트를 제공할수록 더 정확하고 유용한 결과를 얻을 수 있습니다. 
                    프로젝트의 목표, 제약사항, 기술 스택 등을 명확히 전달하세요.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        좋은 예시 ✓
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        "React 18과 TypeScript를 사용하는 프로젝트에서 사용자 인증 컴포넌트를 만들어줘. 
                        Tailwind CSS로 스타일링하고, react-hook-form으로 폼 검증을 구현해줘."
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        나쁜 예시 ✗
                      </h4>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        "로그인 폼 만들어줘"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 원칙 4 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    반복적으로 개선하라
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    첫 번째 결과에 만족하지 말고, AI와의 대화를 통해 지속적으로 개선하세요. 
                    각 반복마다 더 구체적인 요구사항을 추가하고, 피드백을 제공합니다.
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                      반복 개선 프로세스:
                    </h3>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          1
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">초기 요청으로 기본 구조 생성</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          2
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">에러 처리, 엣지 케이스 추가</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          3
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">성능 최적화 및 리팩토링</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          4
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">테스트 코드 추가 및 문서화</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* 원칙 5 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    학습과 적응을 지속하라
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    AI 기술은 빠르게 발전하고 있습니다. 새로운 도구와 기법을 지속적으로 학습하고, 
                    워크플로우를 개선하세요.
                  </p>
                  <div className="grid gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                        지속적 학습 영역:
                      </h4>
                      <ul className="space-y-1 text-indigo-700 dark:text-indigo-300 text-sm">
                        <li>• 새로운 AI 모델과 도구의 기능</li>
                        <li>• 효과적인 프롬프트 엔지니어링 기법</li>
                        <li>• AI 활용 모범 사례와 패턴</li>
                        <li>• 커뮤니티의 경험과 인사이트</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 마무리 섹션 */}
          <section className="mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                핵심 원칙 요약
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                AI Native 개발자로서 성공하기 위해서는 이 5가지 원칙을 내재화하고 실천해야 합니다. 
                AI를 협업 파트너로 대하고, 신뢰하되 검증하며, 충분한 컨텍스트를 제공하고, 
                반복적으로 개선하며, 지속적으로 학습하는 자세가 필요합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  협업 파트너
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  신뢰와 검증
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  컨텍스트 중시
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  반복 개선
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  지속 학습
                </span>
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