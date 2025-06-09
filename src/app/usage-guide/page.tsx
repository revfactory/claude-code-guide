'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`text-slate-400 hover:text-white transition-colors ${className}`}
      title="클립보드에 복사"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

export default function UsageGuide() {
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Claude Code 사용법 가이드
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            기본 명령어부터 고급 워크플로우까지, Claude Code를 효과적으로 활용하는 방법을 단계별로 알아보세요.
          </p>
        </div>

        {/* Guide Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Basic Usage */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">기본 사용법</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Claude Code의 기본적인 사용 방법과 명령어를 익혀보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/basic-commands#interactive-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">대화형 모드</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">claude 명령어로 시작하는 대화형 사용법</p>
              </a>
              <a href="/usage-guide/basic-commands#one-shot-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">원샷 모드</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">빠른 명령 실행을 위한 -p 플래그 사용법</p>
              </a>
              <a href="/usage-guide/basic-commands#pipe-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">파이프 모드</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">파일 내용을 Claude에게 직접 전달하는 방법</p>
              </a>
            </div>
          </div>

          {/* Core Workflows */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">핵심 워크플로우</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              일상적인 개발 작업에서 Claude Code를 활용하는 패턴을 알아보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/core-workflows#code-understanding" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">코드 이해하기</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">프로젝트 분석 및 아키텍처 파악</p>
              </a>
              <a href="/usage-guide/core-workflows#code-editing" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">코드 편집하기</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">스마트 코드 수정 및 리팩토링</p>
              </a>
              <a href="/usage-guide/core-workflows#git-automation" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">Git 자동화</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">커밋, PR 생성, 머지 충돌 해결</p>
              </a>
              <a href="/usage-guide/core-workflows#testing-debugging" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">테스트 & 디버깅</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">테스트 실행 및 오류 수정</p>
              </a>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">고급 기능</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Claude Code의 강력한 고급 기능들을 활용해보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/advanced-features#extended-thinking" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">확장된 사고</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">복잡한 문제 해결을 위한 깊은 분석</p>
              </a>
              <a href="/usage-guide/advanced-features#memory-management" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">메모리 관리</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">CLAUDE.md를 통한 프로젝트 컨텍스트 관리</p>
              </a>
              <a href="/usage-guide/advanced-features#web-search" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">웹 검색</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">자동 문서 검색 및 참조</p>
              </a>
              <a href="/usage-guide/advanced-features#non-interactive-mode" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">비대화형 모드</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">CI/CD 파이프라인 통합</p>
              </a>
            </div>
          </div>

          {/* CLI Commands */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">CLI 명령어 & 제어</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              명령행 인터페이스의 다양한 옵션과 제어 방법을 익혀보세요.
            </p>
            <div className="space-y-3">
              <a href="/usage-guide/cli-commands#slash-commands" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">슬래시 명령어</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">/init, /help, /memory 등 특수 명령어</p>
              </a>
              <a href="/usage-guide/cli-commands#cli-flags" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">플래그 옵션</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">--allowedTools, --disallowedTools 사용법</p>
              </a>
              <a href="/usage-guide/cli-commands#environment-variables" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">환경 변수</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">API 키 설정 및 모델 선택</p>
              </a>
              <a href="/usage-guide/cli-commands#security-controls" className="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">보안 제어</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">도구 권한 및 접근 제어</p>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">빠른 시작 예제</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">기본 질문하기</h3>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Claude Code</span>
                  <CopyButton text="우리 인증 시스템이 어떻게 작동하는지 설명해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">우리 인증 시스템이 어떻게 작동하는지 설명해줘</code>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Claude Code</span>
                  <CopyButton text="결제 처리 흐름을 설명해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">결제 처리 흐름을 설명해줘</code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">코드 수정하기</h3>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Claude Code</span>
                  <CopyButton text="회원가입 폼에 입력 검증을 추가해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">회원가입 폼에 입력 검증을 추가해줘</code>
              </div>
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Claude Code</span>
                  <CopyButton text="워커 큐의 레이스 컨디션을 수정해줘" />
                </div>
                <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                <code className="text-white font-mono text-sm">워커 큐의 레이스 컨디션을 수정해줘</code>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">효과적인 사용을 위한 팁</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">명확한 요청</h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                구체적이고 명확한 지시를 제공하세요. "버그 수정"보다는 "로그인 폼의 이메일 유효성 검사 오류 수정"이 더 효과적입니다.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">단계별 접근</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                복잡한 작업은 여러 단계로 나누어 진행하세요. 큰 리팩토링보다는 작은 단위의 변경을 반복하는 것이 안전합니다.
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">컨텍스트 활용</h3>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                CLAUDE.md 파일을 잘 관리하고, 프로젝트 구조를 Claude가 이해할 수 있도록 도와주세요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}