'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import AINativeNavigation from '@/components/AINativeNavigation';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function AINativeBestPracticesPage() {
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
              AI Native 개발 모범 사례
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              효과적이고 안전한 AI 활용 개발을 위한 검증된 방법들
            </p>
          </section>

          {/* 핵심 모범 사례 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              7가지 핵심 모범 사례
            </h2>
            
            <div className="space-y-6">
              {/* 1. 명확한 프롬프트 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      명확하고 맥락이 풍부한 프롬프트 작성
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      AI에게 충분한 컨텍스트와 구체적인 요구사항을 제공하여 정확한 결과를 얻습니다.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="text-green-800 dark:text-green-200 font-medium mb-2">
                          좋은 예시 ✓
                        </h4>
                        <code className="text-sm text-green-700 dark:text-green-300 block">
                          "Next.js 14 App Router를 사용하는 프로젝트에서 사용자 프로필 페이지를 만들어줘. 
                          서버 컴포넌트로 구현하고, Prisma ORM으로 PostgreSQL에서 데이터를 가져와. 
                          에러 처리와 로딩 상태도 포함해줘."
                        </code>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="text-red-800 dark:text-red-200 font-medium mb-2">
                          나쁜 예시 ✗
                        </h4>
                        <code className="text-sm text-red-700 dark:text-red-300 block">
                          "프로필 페이지 만들어줘"
                        </code>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                        프롬프트 체크리스트:
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>✓ 사용하는 기술 스택 명시</li>
                        <li>✓ 원하는 결과물의 구체적 설명</li>
                        <li>✓ 제약 조건과 요구사항 포함</li>
                        <li>✓ 코딩 스타일과 컨벤션 언급</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. 검증과 테스트 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      AI 생성 코드의 철저한 검증
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      AI가 생성한 모든 코드는 반드시 검토하고 테스트해야 합니다.
                    </p>
                    
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mb-4">
                      <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">
                        ⚠️ 중요: "신뢰하되 검증하라"
                      </p>
                      <p className="text-amber-700 dark:text-amber-300 text-sm">
                        AI는 때때로 그럴듯해 보이지만 잘못된 코드를 생성할 수 있습니다. 
                        특히 보안, 성능, 비즈니스 로직과 관련된 부분은 꼼꼼히 검토하세요.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded">
                        <h5 className="font-medium text-slate-900 dark:text-white mb-2">검증 체크리스트:</h5>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text:slate-300">
                          <li>□ 코드가 의도한 대로 동작하는가?</li>
                          <li>□ 엣지 케이스를 처리하는가?</li>
                          <li>□ 보안 취약점은 없는가?</li>
                          <li>□ 성능 문제는 없는가?</li>
                          <li>□ 코딩 표준을 준수하는가?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 점진적 통합 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      점진적이고 반복적인 개발
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      큰 작업을 작은 단위로 나누어 AI와 협업하면 더 나은 결과를 얻을 수 있습니다.
                    </p>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-3">
                        추천 워크플로우:
                      </h4>
                      <ol className="space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                        <li>1. 기본 구조와 스켈레톤 코드 생성</li>
                        <li>2. 핵심 기능 구현 및 테스트</li>
                        <li>3. 에러 처리와 엣지 케이스 추가</li>
                        <li>4. 성능 최적화 및 리팩토링</li>
                        <li>5. 문서화 및 주석 추가</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. 보안 우선 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold">4</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      보안과 프라이버시 우선
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      민감한 정보를 AI와 공유하지 않고, 생성된 코드의 보안을 항상 검토합니다.
                    </p>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                        🔒 보안 가이드라인
                      </h4>
                      <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                        <li>• API 키, 비밀번호 등을 AI에 노출하지 마세요</li>
                        <li>• 실제 사용자 데이터 대신 샘플 데이터를 사용하세요</li>
                        <li>• 생성된 코드의 인증/인가 로직을 검증하세요</li>
                        <li>• SQL 인젝션, XSS 등 보안 취약점을 확인하세요</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. 팀 협업 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">5</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      팀 차원의 AI 활용 표준화
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      팀 전체가 일관된 방식으로 AI를 활용할 수 있도록 가이드라인을 수립합니다.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                          표준화 영역
                        </h5>
                        <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                          <li>• 프롬프트 템플릿</li>
                          <li>• 코드 리뷰 프로세스</li>
                          <li>• AI 도구 선택 기준</li>
                          <li>• 보안 가이드라인</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                          지식 공유
                        </h5>
                        <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                          <li>• 성공 사례 문서화</li>
                          <li>• 실패 경험 공유</li>
                          <li>• 정기적인 학습 세션</li>
                          <li>• 프롬프트 라이브러리</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. 성능 모니터링 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">6</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      생산성 측정과 지속적 개선
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      AI 도구의 효과를 측정하고 지속적으로 프로세스를 개선합니다.
                    </p>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-2">
                        측정 지표:
                      </h4>
                      <ul className="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                        <li>• 개발 속도 향상도</li>
                        <li>• 코드 품질 지표</li>
                        <li>• 버그 발생률</li>
                        <li>• 팀 만족도</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. 윤리적 사용 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 dark:text-teal-400 font-bold">7</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      책임감 있고 윤리적인 AI 사용
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      AI를 윤리적으로 사용하고, 지적 재산권을 존중합니다.
                    </p>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-teal-800 dark:text-teal-200 mb-2">
                        윤리 가이드:
                      </h4>
                      <ul className="space-y-1 text-sm text-teal-700 dark:text-teal-300">
                        <li>• 라이선스와 저작권 확인</li>
                        <li>• AI 사용 사실 투명하게 공개</li>
                        <li>• 편향된 데이터나 결과 주의</li>
                        <li>• 개인정보 보호 준수</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 실전 팁 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              실전 팁과 트릭
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  프롬프트 엔지니어링
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>💡 역할을 부여하세요: "당신은 시니어 백엔드 개발자입니다"</li>
                  <li>💡 예시를 제공하세요: "다음과 같은 형식으로..."</li>
                  <li>💡 제약사항을 명시하세요: "메모리 효율적으로..."</li>
                  <li>💡 출력 형식을 지정하세요: "TypeScript 인터페이스로..."</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  코드 리뷰 팁
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>🔍 로직의 정확성 확인</li>
                  <li>🔍 엣지 케이스 처리 검토</li>
                  <li>🔍 네이밍 컨벤션 준수</li>
                  <li>🔍 불필요한 복잡성 제거</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  디버깅 전략
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>🐛 AI에게 버그 설명 요청</li>
                  <li>🐛 단계별 실행 흐름 분석</li>
                  <li>🐛 테스트 케이스 생성 요청</li>
                  <li>🐛 대안적 해결책 탐색</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  효율성 향상
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>⚡ 자주 사용하는 프롬프트 저장</li>
                  <li>⚡ 컨텍스트 파일 준비</li>
                  <li>⚡ 단축키와 스니펫 활용</li>
                  <li>⚡ 배치 작업 자동화</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 안티패턴 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              피해야 할 안티패턴
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                  ❌ 맹목적인 복사-붙여넣기
                </h3>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  AI가 생성한 코드를 이해하지 못한 채 그대로 사용하는 것은 위험합니다. 
                  항상 코드를 이해하고 필요에 맞게 수정하세요.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                  ❌ 보안 검증 생략
                </h3>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  AI가 생성한 코드도 보안 취약점을 가질 수 있습니다. 
                  특히 사용자 입력 처리, 인증, 데이터 접근 관련 코드는 반드시 검증하세요.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                  ❌ 컨텍스트 없는 요청
                </h3>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  프로젝트의 구조, 사용 중인 라이브러리, 코딩 스타일 등의 컨텍스트 없이 
                  AI에게 요청하면 일관성 없는 코드가 생성됩니다.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                  ❌ 과도한 의존
                </h3>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  AI는 도구일 뿐입니다. 기본적인 프로그래밍 지식과 문제 해결 능력을 
                  계속 발전시켜야 합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 마무리 */}
          <section>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                지속적인 성장을 위한 조언
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                AI Native 개발자로서 성공하기 위해서는 지속적인 학습과 적응이 필요합니다. 
                AI 기술은 빠르게 발전하고 있으며, 새로운 도구와 방법론이 계속 등장합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    커뮤니티에 참여하여 다른 개발자들의 경험을 학습하세요
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    새로운 AI 도구와 기능을 정기적으로 탐색하고 실험하세요
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    자신만의 프롬프트 라이브러리와 워크플로우를 구축하세요
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    팀과 조직에 AI 활용 문화를 전파하세요
                  </span>
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