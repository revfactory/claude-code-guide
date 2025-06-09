'use client';

import NavigationHeader from '../../components/NavigationHeader';
import MobileMenu from '../../components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function UseCases() {
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
            Claude Code 활용 사례
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Claude Code를 어떻게 활용하여 조직의 업무 효율성을 극대화하고 있는지 심층적으로 알아보세요.
          </p>
          <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            <em>본 내용은 Anthropic 내부 보고서 "How Anthropic teams use Claude Code"(2025)를 기반으로 재구성하였습니다.</em>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Data Infrastructure Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">데이터 인프라 팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              전사 데이터 파이프라인 구축 및 운영을 담당하는 팀의 혁신적인 활용 사례
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Kubernetes 장애 진단을 스크린샷만으로 해결</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>비개발자의 텍스트 요청을 자동 쿼리로 변환</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>200개 이상 대시보드 자동 감시 시스템 구축</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">핵심 팁</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  CLAUDE.md에 상세한 워크플로와 도구 설명을 작성하고, 민감 데이터 처리는 MCP 서버를 활용하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Product Development Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">제품 개발 팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Claude Code 자체 기능 확장 및 핵심 로직 개발을 담당하는 팀의 고급 활용법
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>자동 수락 모드로 자율 반복 프로토타이핑</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Vim 모드 등 주변 기능 70% 이상 자동 구현</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>대규모 모노레포 탐색 시간 대폭 단축</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">핵심 팁</h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  자율 루프에 빌드·테스트·lint 검증을 포함하고, 업무 중요도에 따라 비동기/동기 방식을 구분하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Security Engineering Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">보안 엔지니어링 팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              SDLC 보안 및 공급망 보안 강화를 위한 Claude Code 활용 전략
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>스택 트레이스 추적으로 인시던트 해결 시간 50% 단축</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Terraform 변경 검토 자동화로 승인 병목 해소</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>테스트 주도 개발 패턴 정착</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">핵심 팁</h4>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  커스텀 슬래시 명령을 적극 활용하고, "Let Claude talk first" 전략으로 자율 해결을 유도하세요.
                </p>
              </div>
            </div>
          </div>

          {/* Inference Team */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">추론 팀</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              모델 메모리 시스템 관리 및 기능 개선을 위한 ML 특화 활용법
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">주요 성과</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>ML 리서치 학습 시간 80% 단축</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>단위 테스트 자동 생성 및 엣지 케이스 보강</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>다언어 코드 변환으로 테스트 확보</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">핵심 팁</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Google Search와 속도를 비교해 효용을 판단하고, 코드 생성 → 검증 단계로 신뢰를 구축하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More Teams Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            더 많은 팀들의 혁신적 활용 사례
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Science Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">데이터 과학·시각화 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                React/TypeScript 기반 5,000행 규모 대시보드를 완전 자동으로 작성하여 2-4배 작업 시간 단축
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 반복적 리팩터링을 '슬롯 머신' 방식으로 자동화
              </div>
            </div>

            {/* API Knowledge Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">API Knowledge 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                PDF, 인용, 웹 검색 등 지식 확장 기능 개발·테스트에서 컨텍스트 스위칭 대폭 감소
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 미숙한 영역 문제 해결 자신감 증대
              </div>
            </div>

            {/* Growth Marketing Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">성장 마케팅 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Google Ads 크리에이티브 자동 생성으로 광고 문안 제작 2시간→15분 단축, 크리에이티브 10배 생산
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 1인 팀도 엔지니어링 수준의 자동화 달성
              </div>
            </div>

            {/* Product Design Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">제품 디자인 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                디자이너가 프론트엔드 개발을 직접 수행하여 2-3배 속도 향상, 복잡 메시지 교체 1주→1시간
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 스크린샷 기반 코드 생성 적극 활용
              </div>
            </div>

            {/* RL Engineering Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">강화학습 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                대규모 샘플링·가중치 전송 시스템 개발에서 '시도 후 롤백' 실험 문화 정착
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> 감독하의 자율 코드 작성으로 인증 기능 구현
              </div>
            </div>

            {/* Legal Team */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">법무 팀</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                비개발자도 1시간 만에 예측 텍스트 보조 앱 프로토타입 구현으로 맞춤형 법무 도구 개발
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>핵심 성과:</strong> '전화 트리' 시뮬레이션으로 변호사 매칭 자동화
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            공통 성공 요인 & 실무 인사이트
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🚀 생산성 향상 패턴</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                  <span><strong>메모리 시스템 활용:</strong> CLAUDE.md로 프로젝트 컨텍스트 관리</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                  <span><strong>자율 실행 모드:</strong> 반복 작업의 완전 자동화</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                  <span><strong>시각적 피드백:</strong> 스크린샷 기반 코드 생성</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                  <span><strong>점진적 접근:</strong> 프로토타입 → 검증 → 완성</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">💡 조직별 맞춤 전략</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>개발팀:</strong> 테스트·빌드·배포 자동화</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>디자인팀:</strong> 프론트엔드 직접 구현</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>마케팅팀:</strong> 크리에이티브 대량 생산</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>법무팀:</strong> 맞춤형 업무 도구 개발</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>인프라팀:</strong> 모니터링·장애 대응</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              지금 바로 Claude Code를 시작해보세요
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Anthropic 팀들의 혁신적인 활용 사례를 참고하여 여러분의 업무에도 Claude Code를 적용해보세요. 
              개발자부터 비개발자까지, 모든 팀이 생산성을 극대화할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getting-started" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                Claude Code 시작하기
              </a>
              <a href="/usage-guide" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                사용법 가이드
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}