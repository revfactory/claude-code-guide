'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import AINativeNavigation from '@/components/AINativeNavigation';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function AINativeSDLCPage() {
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
              AI Native SDLC
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              AI를 통합한 소프트웨어 개발 생명주기
            </p>
          </section>

          {/* SDLC 개요 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native SDLC란?
            </h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                AI Native SDLC는 전통적인 소프트웨어 개발 생명주기의 모든 단계에 AI를 깊이 통합한 
                새로운 개발 방법론입니다. 계획부터 배포, 유지보수까지 AI가 협업 파트너로 참여합니다.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  핵심 차별점: AI는 단순한 도구가 아닌, 개발 프로세스의 적극적인 참여자
                </p>
              </div>
            </div>
          </section>

          {/* SDLC 단계별 가이드 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native SDLC 단계별 가이드
            </h2>
            
            {/* 1. 계획 단계 */}
            <div className="mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">1</span>
                    계획 및 요구사항 분석
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    AI와 함께 프로젝트 요구사항을 분석하고, 기술적 타당성을 검토하며, 
                    프로젝트 계획을 수립합니다.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                        AI 활용 영역
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• 유사 프로젝트 분석</li>
                        <li>• 기술 스택 추천</li>
                        <li>• 리스크 평가</li>
                        <li>• 일정 추정</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                        실천 방법
                      </h4>
                      <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                        <li>• 요구사항 문서를 AI와 검토</li>
                        <li>• 기술적 제약사항 논의</li>
                        <li>• MVP 범위 정의</li>
                        <li>• 성공 지표 설정</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 설계 단계 */}
            <div className="mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">2</span>
                    설계 및 아키텍처
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    AI와 협업하여 시스템 아키텍처를 설계하고, 데이터 모델을 정의하며, 
                    API 인터페이스를 설계합니다.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                        AI 협업 예시
                      </h4>
                      <code className="block text-sm text-purple-700 dark:text-purple-300">
                        "마이크로서비스 아키텍처로 e-commerce 플랫폼을 설계하려고 합니다. 
                        주문 처리, 재고 관리, 결제 서비스를 분리하고 싶은데, 
                        서비스 간 통신과 데이터 일관성을 어떻게 처리하면 좋을까요?"
                      </code>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-center">
                        <div className="text-2xl mb-1">🏗️</div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">시스템 아키텍처</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-center">
                        <div className="text-2xl mb-1">🗄️</div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">데이터베이스 설계</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded text-center">
                        <div className="text-2xl mb-1">🔌</div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">API 설계</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 개발 단계 */}
            <div className="mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">3</span>
                    개발 및 구현
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    AI 코딩 어시스턴트와 함께 코드를 작성하고, 실시간으로 피드백을 받으며 
                    효율적으로 기능을 구현합니다.
                  </p>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                      개발 워크플로우
                    </h4>
                    <ol className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <li>1. AI와 함께 기능 요구사항 분석</li>
                      <li>2. 테스트 케이스 먼저 작성 (TDD)</li>
                      <li>3. AI 어시스턴트로 코드 구현</li>
                      <li>4. 코드 리뷰 및 개선</li>
                      <li>5. 통합 및 커밋</li>
                    </ol>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">주요 도구</h5>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• GitHub Copilot</li>
                        <li>• Cursor</li>
                        <li>• Claude Code</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <h5 className="font-medium text-slate-900 dark:text-white mb-2">모범 사례</h5>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• 작은 단위로 커밋</li>
                        <li>• AI 생성 코드 검증</li>
                        <li>• 코드 표준 준수</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. 테스트 단계 */}
            <div className="mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">4</span>
                    테스트 및 품질 보증
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    AI를 활용하여 포괄적인 테스트를 수행하고, 버그를 발견하며, 
                    코드 품질을 지속적으로 개선합니다.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                        AI 지원 테스트 유형
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                          <li>✓ 단위 테스트 자동 생성</li>
                          <li>✓ 통합 테스트 시나리오 제안</li>
                          <li>✓ 엣지 케이스 발견</li>
                        </ul>
                        <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                          <li>✓ 성능 테스트 분석</li>
                          <li>✓ 보안 취약점 스캔</li>
                          <li>✓ 테스트 커버리지 향상</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="text-amber-800 dark:text-amber-200 text-sm">
                        <strong>팁:</strong> AI가 생성한 테스트도 검토가 필요합니다. 
                        특히 비즈니스 로직과 관련된 테스트는 도메인 지식을 바탕으로 검증하세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. 배포 단계 */}
            <div className="mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">5</span>
                    배포 및 릴리스
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    AI를 활용하여 배포 프로세스를 자동화하고, 릴리스 노트를 생성하며, 
                    배포 후 모니터링을 설정합니다.
                  </p>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                      AI 활용 배포 작업
                    </h4>
                    <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                      <li>• CI/CD 파이프라인 구성</li>
                      <li>• 배포 스크립트 생성</li>
                      <li>• 릴리스 노트 자동 작성</li>
                      <li>• 롤백 계획 수립</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. 유지보수 단계 */}
            <div className="mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">6</span>
                    유지보수 및 운영
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    AI를 활용하여 시스템을 모니터링하고, 버그를 수정하며, 
                    지속적으로 성능을 개선합니다.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">
                        모니터링
                      </h4>
                      <ul className="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                        <li>• 로그 분석 및 이상 탐지</li>
                        <li>• 성능 메트릭 분석</li>
                        <li>• 사용자 피드백 분류</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">
                        개선
                      </h4>
                      <ul className="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                        <li>• 버그 원인 분석</li>
                        <li>• 코드 리팩토링 제안</li>
                        <li>• 성능 최적화 가이드</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Native SDLC 장점 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native SDLC의 장점
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  개발 속도 향상
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  AI의 도움으로 반복적인 작업을 자동화하고, 코드 생성 속도를 높여 
                  전체 개발 시간을 2-10배 단축할 수 있습니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  품질 개선
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  AI가 코드 리뷰, 버그 탐지, 테스트 생성을 지원하여 
                  소프트웨어 품질을 지속적으로 향상시킵니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  창의적 문제 해결
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  반복적인 작업은 AI에게 맡기고, 개발자는 더 창의적이고 
                  전략적인 문제 해결에 집중할 수 있습니다.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  지속적 학습
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  AI와의 협업을 통해 새로운 기술과 모범 사례를 
                  지속적으로 학습하고 성장할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 구현 전략 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AI Native SDLC 구현 전략
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                단계별 도입 가이드
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    1
                  </span>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      파일럿 프로젝트로 시작
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      작은 프로젝트나 기능 단위로 AI 도구를 도입하여 팀의 적응도를 높입니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    2
                  </span>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      팀 교육 및 가이드라인 수립
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      AI 도구 사용법과 모범 사례를 팀원들과 공유하고, 공통 가이드라인을 만듭니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    3
                  </span>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      점진적 확대
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      성공 사례를 바탕으로 AI 활용 범위를 점진적으로 확대합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    4
                  </span>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      지속적 개선
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      피드백을 수집하고 프로세스를 지속적으로 개선하며, 새로운 AI 도구를 평가합니다.
                    </p>
                  </div>
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