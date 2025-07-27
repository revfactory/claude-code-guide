'use client';

import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import Breadcrumb from '@/components/Breadcrumb';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

export default function SubAgents() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: '가이드', href: '/guides' }, { label: '고급 기능', href: '/guides/advanced-features' }, { label: '서브 에이전트' }]} />
        
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            서브 에이전트 세부 가이드
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            AI 팀을 구성하여 복잡한 작업을 효율적으로 처리하는 혁신적인 기능
          </p>
        </div>

        {/* 서브 에이전트란? */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">서브 에이전트란?</h2>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              서브 에이전트는 특정 목적과 전문 분야를 가진 전문화된 AI 어시스턴트입니다. 
              각 서브 에이전트는 독립된 컨텍스트 창을 가지고 있어 메인 대화의 맥락을 보존하면서도 
              전문적인 작업을 수행할 수 있습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">주요 특징</h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>특정 목적과 전문 분야를 가진 AI</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>독립된 컨텍스트 창으로 작업</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>도구별 세밀한 권한 설정 가능</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>커스텀 시스템 프롬프트 지원</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">주요 이점</h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>컨텍스트 오염 방지</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>전문 분야별 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>재사용 및 팀 공유 가능</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>유연한 권한 관리</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 서브 에이전트 생성하기 */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">서브 에이전트 생성하기</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. 대화형 생성 (권장)</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  가장 쉬운 방법은 Claude Code에게 직접 생성을 요청하는 것입니다:
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <code className="text-green-400 font-mono">/agents</code>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  대화형 인터페이스에서 에이전트의 목적을 설명하면 Claude가 자동으로 초안을 생성합니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. 파일 구조</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  서브 에이전트는 YAML 프론트매터가 포함된 마크다운 파일로 정의됩니다:
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code className="text-slate-300">
{`---
name: code-reviewer
description: Expert code review specialist focusing on quality and security
tools: Read, Grep, Glob, Bash
---

# 코드 리뷰 전문가

당신은 코드 품질과 보안을 중시하는 시니어 코드 리뷰어입니다.

## 리뷰 체크리스트:
- 코드가 간단하고 읽기 쉬운가
- 함수와 변수명이 명확한가
- 중복 코드가 없는가
- 적절한 에러 처리가 되어 있는가
- 보안 취약점이 없는가`}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. 저장 위치</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">프로젝트 레벨</h4>
                    <code className="text-sm text-blue-600 dark:text-blue-400">.claude/agents/</code>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      프로젝트별 특화 에이전트
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">사용자 레벨</h4>
                    <code className="text-sm text-green-600 dark:text-green-400">~/.claude/agents/</code>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      모든 프로젝트에서 사용 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기본 제공 에이전트 */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">기본 제공 에이전트</h2>
            
            <div className="grid gap-4">
              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">code-reviewer</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      코드 품질, 보안, 유지보수성을 검토하는 전문가. git diff를 활용해 변경사항을 분석하고 개선점을 제안합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">debugger</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      오류 및 테스트 실패의 근본 원인을 분석하는 전문가. 체계적인 프로세스로 문제를 격리하고 수정합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">data-scientist</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      SQL 쿼리 작성 및 실행 전문가. BigQuery를 위한 bq 커맨드 라인 도구 사용에 특화되어 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">test-runner</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      코드 변경을 감지하면 자동으로 테스트를 실행하고, 실패 시 수정을 시도하는 에이전트입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 활용 사례 */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">실전 활용 사례</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  1. 복잡한 리팩토링 프로젝트
                </h3>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    대규모 코드베이스를 리팩토링할 때 여러 전문 에이전트를 조합하여 사용:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">1단계:</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        <code className="bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded">code-analyzer</code> - 현재 구조 분석
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">2단계:</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        <code className="bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded">refactoring-architect</code> - 개선 계획 수립
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">3단계:</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        <code className="bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded">implementation</code> - 실제 코드 변경
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-sm font-medium text-slate-700 dark:text-slate-300">4단계:</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        <code className="bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded">test-runner</code> - 테스트 실행 및 검증
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  2. 병렬 분석 작업
                </h3>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    UI 컴포넌트를 여러 관점에서 동시에 분석:
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-slate-600 rounded p-3">
                      <h4 className="font-medium text-sm text-slate-900 dark:text-white mb-1">디자인 전문가</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        UI/UX 패턴 분석
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-600 rounded p-3">
                      <h4 className="font-medium text-sm text-slate-900 dark:text-white mb-1">접근성 전문가</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        WCAG 준수 검토
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-600 rounded p-3">
                      <h4 className="font-medium text-sm text-slate-900 dark:text-white mb-1">성능 전문가</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        렌더링 최적화 제안
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  3. 자율 개발 팀 구성
                </h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
                  <p className="text-sm text-purple-900 dark:text-purple-100 mb-3">
                    <strong>claude-code-sub-agent-collective</strong> 프로젝트의 19개 전문 에이전트 팀:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['PM', '연구원', '아키텍트', '프론트엔드', '백엔드', 'QA', 'DevOps', '보안', '문서화'].map((role) => (
                      <span key={role} className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-purple-700 dark:text-purple-300 mt-3">
                    복잡도에 따라 자동으로 적절한 에이전트 조합을 선택하여 작업을 수행
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 모범 사례 */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">모범 사례</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">✅ 권장 사항</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>단일 책임 원칙:</strong> 각 에이전트는 하나의 명확한 역할만 담당</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>명확한 설명:</strong> description 필드에 구체적이고 행동 지향적인 설명 작성</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>최소 권한:</strong> 필요한 도구만 선택적으로 부여</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>반복 개선:</strong> Claude가 생성한 초안을 지속적으로 커스터마이징</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">❌ 피해야 할 사항</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>만능 에이전트:</strong> 모든 작업을 하나의 에이전트에 몰아넣기</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>모호한 설명:</strong> 애매하거나 너무 일반적인 description</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>과도한 권한:</strong> 불필요한 도구까지 모두 허용</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>자동 위임 의존:</strong> 명시적 호출 없이 자동 선택만 기대</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-amber-800 dark:text-amber-200">
                <strong>💡 Pro Tip:</strong> 현재는 자동 위임이 완벽하지 않으므로, 중요한 작업은 
                <code className="bg-amber-100 dark:bg-amber-800 px-2 py-1 rounded mx-1">
                  "code-reviewer 에이전트를 사용해서..."
                </code>
                와 같이 명시적으로 호출하는 것이 안정적입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 고급 패턴 */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">고급 오케스트레이션 패턴</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. 순차적 파이프라인</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">
{`# 순차적 작업 흐름 예시
claude> 다음 에이전트들을 순서대로 사용해서 리팩토링을 진행해줘:
1. code-analyzer로 현재 구조 분석
2. refactoring-architect로 개선 계획 수립  
3. implementation으로 실제 변경 적용
4. test-runner로 테스트 실행`}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. 병렬 처리</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">
{`# 병렬 분석 예시
claude> 이 컴포넌트를 다음 에이전트들로 동시에 분석해줘:
- ui-designer: UI/UX 패턴 분석
- accessibility-expert: 접근성 검토
- performance-analyst: 성능 최적화 기회`}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. 조건부 분기</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">
{`# CLAUDE.md에서 복잡도 기반 라우팅
if (complexity === 'high') {
  // senior-architect → implementation → code-reviewer
} else {
  // implementation → test-runner
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">다음 단계</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">시작하기</h3>
                <ol className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>1. <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">/agents</code> 명령으로 첫 에이전트 생성</li>
                  <li>2. 기본 제공 에이전트로 실험해보기</li>
                  <li>3. 프로젝트에 맞게 커스터마이징</li>
                  <li>4. 팀과 공유하여 생산성 향상</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">고급 활용</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 멀티 에이전트 워크플로우 구축</li>
                  <li>• CLAUDE.md와 연계한 자동화</li>
                  <li>• MCP 서버와 통합</li>
                  <li>• 커뮤니티 에이전트 활용 및 기여</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="/guides/advanced-features" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                고급 기능으로 돌아가기
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}