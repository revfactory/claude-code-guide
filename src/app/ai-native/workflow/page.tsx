'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import AINativeNavigation from '@/components/AINativeNavigation';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function AINativeWorkflowPage() {
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
              AI Native 개발 워크플로우
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              AI를 활용한 효율적인 개발 프로세스와 작업 흐름
            </p>
          </section>

          {/* 워크플로우 개요 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI 통합 개발 워크플로우
            </h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                AI Native 개발 워크플로우는 전통적인 개발 프로세스에 AI를 깊이 통합하여, 
                각 단계에서 AI의 도움을 받아 더 빠르고 효율적으로 작업할 수 있도록 설계되었습니다.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">요구사항 분석 및 설계</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">프로토타이핑 및 구현</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">코드 리뷰 및 개선</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">테스트 및 디버깅</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">5</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">문서화 및 배포</span>
                </div>
              </div>
            </div>
          </section>

          {/* 단계별 상세 설명 */}
          <section className="space-y-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              워크플로우 단계별 가이드
            </h2>

            {/* 단계 1 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                요구사항 분석 및 설계
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">
                  프로젝트의 요구사항을 AI와 함께 분석하고, 최적의 아키텍처와 기술 스택을 결정합니다.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI 활용 방법:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• 요구사항을 기반으로 아키텍처 패턴 제안받기</li>
                    <li>• 기술 스택 선택에 대한 장단점 분석</li>
                    <li>• 유사 프로젝트 사례와 모범 사례 조사</li>
                    <li>• 잠재적 기술적 도전과제 예측</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>예시 프롬프트:</strong> "실시간 채팅 기능이 있는 SaaS 애플리케이션을 만들려고 합니다. 
                    사용자는 10만명 정도를 예상하고, 확장성이 중요합니다. 적합한 아키텍처와 기술 스택을 제안해주세요."
                  </p>
                </div>
              </div>
            </div>

            {/* 단계 2 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                프로토타이핑 및 구현
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">
                  AI와 함께 빠르게 프로토타입을 만들고, 반복적으로 기능을 구현합니다.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI 활용 방법:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• 보일러플레이트 코드 빠르게 생성</li>
                    <li>• 컴포넌트와 함수 구현</li>
                    <li>• API 엔드포인트 설계 및 구현</li>
                    <li>• 데이터 모델 정의</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">효과적인 방법</h5>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• 작은 단위로 나누어 구현</li>
                      <li>• 각 단계마다 검증</li>
                      <li>• 점진적으로 복잡도 증가</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                    <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2">주의사항</h5>
                    <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                      <li>• 생성된 코드 검토 필수</li>
                      <li>• 프로젝트 컨벤션 준수</li>
                      <li>• 보안 고려사항 확인</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 단계 3 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                코드 리뷰 및 개선
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">
                  AI를 활용하여 코드 품질을 향상시키고, 잠재적 문제를 사전에 발견합니다.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI 활용 방법:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• 코드 스멜과 안티패턴 탐지</li>
                    <li>• 성능 최적화 제안</li>
                    <li>• 리팩토링 기회 식별</li>
                    <li>• 보안 취약점 스캔</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 단계 4 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                테스트 및 디버깅
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">
                  AI를 활용하여 포괄적인 테스트를 작성하고, 버그를 효과적으로 해결합니다.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI 활용 방법:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• 단위 테스트와 통합 테스트 자동 생성</li>
                    <li>• 엣지 케이스 발견 및 테스트</li>
                    <li>• 버그 원인 분석 및 수정 제안</li>
                    <li>• 테스트 커버리지 향상</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 단계 5 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                문서화 및 배포
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">
                  AI를 활용하여 포괄적인 문서를 작성하고, 배포 프로세스를 자동화합니다.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI 활용 방법:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li>• API 문서 자동 생성</li>
                    <li>• README 및 사용 가이드 작성</li>
                    <li>• 배포 스크립트 생성</li>
                    <li>• 릴리스 노트 작성</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 일일 워크플로우 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              일일 AI Native 워크플로우
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600 dark:text-slate-400">
                    09:00
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      일일 계획 수립
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      AI와 함께 오늘의 작업 목표를 정리하고 우선순위를 설정합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600 dark:text-slate-400">
                    09:30
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      코드 구현
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      AI 코딩 어시스턴트와 함께 기능을 구현하고, 실시간으로 피드백을 받습니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600 dark:text-slate-400">
                    11:00
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      코드 리뷰
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      작성한 코드를 AI와 함께 리뷰하고, 개선점을 찾아 수정합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600 dark:text-slate-400">
                    14:00
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      테스트 작성
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      AI를 활용하여 테스트 케이스를 생성하고, 엣지 케이스를 발견합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600 dark:text-slate-400">
                    16:00
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      문서화 및 커밋
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      변경사항을 문서화하고, AI가 생성한 커밋 메시지를 검토 후 커밋합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600 dark:text-slate-400">
                    17:00
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      일일 회고
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      오늘의 작업을 AI와 함께 회고하고, 내일의 작업을 계획합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 모범 사례 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              워크플로우 모범 사례
            </h2>
            <div className="grid gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ✅ 작은 단위로 작업하기
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  큰 작업을 작은 단위로 나누어 AI와 함께 단계별로 진행하면 더 정확한 결과를 얻을 수 있습니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ✅ 컨텍스트 유지하기
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  프로젝트의 컨텍스트를 AI와 지속적으로 공유하여 일관성 있는 코드를 생성합니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ✅ 피드백 루프 구축
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  AI의 출력을 검토하고 피드백을 제공하여 점진적으로 개선합니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  ✅ 자동화 우선
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  반복적인 작업은 AI를 활용하여 자동화하고, 창의적인 문제 해결에 집중합니다.
                </p>
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