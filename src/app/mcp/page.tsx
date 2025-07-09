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

export default function MCPPage() {
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Model Context Protocol (MCP)
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Claude Code와 외부 데이터 소스를 안전하게 연결하는 개방형 표준 프로토콜
          </p>
        </div>

        {/* What is MCP */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Claude Code에서 MCP란?</h2>
            
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                MCP는 Claude Code가 외부 도구와 데이터에 접근할 수 있게 해주는 표준 프로토콜입니다. 
                Anthropic에서는 MCP를 "에이전트 시스템의 USB-C"라고 부르며, Claude Code를 단순한 코딩 도구에서 
                전체 개발 생태계와 연결된 강력한 AI 어시스턴트로 변화시킵니다.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">🚀 Claude Code + MCP로 가능한 것들</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Supabase 데이터베이스 직접 조작
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      GitHub 레포지토리 자동 관리
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Slack 메시지 자동 전송
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      로컬 파일 시스템 안전한 접근
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      PostgreSQL 스키마 분석
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Notion 할 일 관리
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      웹 브라우저 자동화
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      실시간 로그 모니터링
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  <strong>💡 간단한 예시:</strong> "사용자 테이블에서 오늘 가입한 사람들을 조회해서 Slack #growth 채널에 보고해줘" 
                  라고 말하면 Claude Code가 MCP를 통해 데이터베이스 조회부터 Slack 메시지 전송까지 자동으로 처리합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">핵심 구성 요소</h2>
            
            <div className="grid gap-6">
              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Prompts</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      AI 모델을 가이드하는 준비된 지침이나 템플릿입니다.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                      <code className="text-sm text-slate-700 dark:text-slate-300">
                        사용자 질문을 분석하고 적절한 응답을 생성하는데 사용됩니다.
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Resources</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      모델의 컨텍스트를 풍부하게 하는 구조화된 데이터 (문서 스니펫, 코드 조각 등)
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                      <code className="text-sm text-slate-700 dark:text-slate-300">
                        파일 시스템, 데이터베이스, API 응답 등의 정보를 제공합니다.
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Tools</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      모델이 서버를 통해 호출할 수 있는 실행 가능한 함수나 작업들
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                      <code className="text-sm text-slate-700 dark:text-slate-300">
                        데이터베이스 쿼리, 웹 검색, 메시지 전송 등의 기능을 제공합니다.
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Roots</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      서버가 권한을 받아 접근할 수 있는 호스트 파일 시스템이나 환경의 진입점
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded">
                      <code className="text-sm text-slate-700 dark:text-slate-300">
                        프로젝트 디렉토리, 설정 파일, 환경 변수 등에 대한 안전한 접근을 제공합니다.
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular MCP Servers */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">실무에서 많이 사용하는 MCP 서버</h2>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              개발자들이 실제로 가장 많이 사용하는 MCP 서버들과 Claude Code에서의 활용법:
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Top Tier - Most Popular */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">🔥 필수 MCP 서버</h3>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-900 dark:text-green-300">Supabase MCP</h4>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                    백엔드 개발의 완전 자동화. 데이터베이스 관리부터 Edge Function 배포까지.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">사용자 인증 테이블 만들어줘</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">오늘 가입한 사용자 수를 조회해줘</code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">GitHub MCP</h4>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">
                    레포지토리 관리, 이슈 추적, PR 자동화를 자연어로.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">버그 이슈를 PR로 변환해줘</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">최근 커밋들을 분석해서 릴리즈 노트 작성해줘</code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">F</span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300">Filesystem MCP</h4>
                  </div>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                    로컬 파일 시스템에 안전하게 접근하여 파일 읽기/쓰기 자동화.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">config 폴더의 모든 파일을 정리해줘</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">로그 파일을 분석해서 에러 패턴 찾아줘</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Value MCP Servers */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">💎 고가치 MCP 서버</h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-300">Slack MCP</h4>
                  </div>
                  <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                    팀 커뮤니케이션 자동화. 배포 알림, 에러 보고, 상태 업데이트.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">배포 완료를 #dev 채널에 알려줘</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">에러 로그를 팀에게 공유해줘</code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <h4 className="text-lg font-semibold text-orange-900 dark:text-orange-300">PostgreSQL MCP</h4>
                  </div>
                  <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">
                    데이터베이스 스키마 분석, 성능 최적화, 안전한 쿼리 실행.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">느린 쿼리들을 분석해서 최적화 제안해줘</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">테이블 관계도를 그려줘</code>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <h4 className="text-lg font-semibold text-teal-900 dark:text-teal-300">Notion MCP</h4>
                  </div>
                  <p className="text-teal-800 dark:text-teal-200 text-sm mb-3">
                    할 일 관리와 문서 자동화. 개발 계획을 자동으로 업데이트.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">오늘 완료한 작업들을 정리해줘</code>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                      <code className="text-green-400 font-mono text-xs">프로젝트 진행 상황을 업데이트해줘</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>⚡ 프로 팁:</strong> 여러 MCP 서버를 조합하면 완전한 워크플로우 자동화가 가능합니다. 
                예: GitHub 이슈 → 코드 수정 → 테스트 → 배포 → Slack 알림까지 모두 자연어 한 번으로!
              </p>
            </div>
          </div>
        </section>

        {/* Claude Code MCP Setup */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Claude Code에서 MCP 서버 설정하기</h2>
            
            <div className="space-y-8">
              
              {/* Quick Setup */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">⚡ 3분만에 MCP 서버 추가하기</h3>
                <p className="text-green-800 dark:text-green-200 mb-4">
                  Claude Code는 간단한 명령어로 MCP 서버를 추가할 수 있습니다:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">1. Supabase 연결</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-400 text-xs">터미널</span>
                        <CopyButton text="claude mcp add supabase -e SUPABASE_ACCESS_TOKEN=your_token npx -y @supabase/mcp-server-supabase@latest" />
                      </div>
                      <code className="text-green-400 font-mono text-sm">claude mcp add supabase -e SUPABASE_ACCESS_TOKEN=your_token npx -y @supabase/mcp-server-supabase@latest</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">2. Filesystem 접근</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-400 text-xs">터미널</span>
                        <CopyButton text="claude mcp add filesystem npx -y @modelcontextprotocol/server-filesystem /Users/username/projects" />
                      </div>
                      <code className="text-green-400 font-mono text-sm">claude mcp add filesystem npx -y @modelcontextprotocol/server-filesystem /Users/username/projects</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">3. GitHub 연결</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-400 text-xs">터미널</span>
                        <CopyButton text="claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=your_token npx -y @modelcontextprotocol/server-github" />
                      </div>
                      <code className="text-green-400 font-mono text-sm">claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=your_token npx -y @modelcontextprotocol/server-github</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Management Commands */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">📋 MCP 서버 관리</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">서버 목록 확인</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-sm">claude mcp list</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">서버 제거</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-sm">claude mcp remove supabase</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">서버 상태 확인</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-sm">claude mcp status</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🔒 보안 설정</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">환경 변수로 토큰 관리</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">export SUPABASE_ACCESS_TOKEN=...</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">파일 접근 권한 제한</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">--allowed-paths /safe/directory</code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">읽기 전용 모드</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-2">
                        <code className="text-green-400 font-mono text-xs">--read-only</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Combinations */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">🎯 인기 MCP 조합</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">풀스택 개발자 세트</h4>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                      <li>✅ Supabase (백엔드)</li>
                      <li>✅ GitHub (코드 관리)</li>
                      <li>✅ Filesystem (로컬 파일)</li>
                      <li>✅ Slack (팀 소통)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">데이터 분석가 세트</h4>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                      <li>✅ PostgreSQL (데이터베이스)</li>
                      <li>✅ Filesystem (데이터 파일)</li>
                      <li>✅ Notion (보고서)</li>
                      <li>✅ Slack (결과 공유)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Support */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">개발 지원</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">SDK 지원</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  다양한 프로그래밍 언어로 MCP 클라이언트와 서버를 구축할 수 있는 SDK를 제공합니다:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🐍</div>
                    <div className="font-medium text-slate-900 dark:text-white">Python</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">📜</div>
                    <div className="font-medium text-slate-900 dark:text-white">TypeScript</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">☕</div>
                    <div className="font-medium text-slate-900 dark:text-white">Java</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-medium text-slate-900 dark:text-white">Kotlin</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Claude Opus 4 & Sonnet 4 지원</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200">
                    Claude Opus 4와 Sonnet 4는 향상된 추론 능력으로 MCP 서버 구현을 더욱 신속하고 정확하게 구축할 수 있으며, 
                    조직과 개인이 가장 중요한 데이터셋을 다양한 AI 기반 도구와 빠르게 연결할 수 있도록 합니다.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Docker 통합</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Docker Hub의 mcp 네임스페이스에서 제공되는 Docker 이미지를 통해 쉽게 MCP 서버를 실행할 수 있습니다.
                </p>
                
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Docker 명령어</span>
                    <CopyButton text="docker run -p 8080:8080 mcp/github-server" />
                  </div>
                  <code className="text-green-400 font-mono">docker run -p 8080:8080 mcp/github-server</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Claude Code + MCP 실전 활용</h2>
            
            <div className="space-y-8">
              
              {/* Real World Examples */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🔥 실제 개발 시나리오</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">백엔드 API 개발</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">사용자 인증 API를 만들고 Supabase에 배포해줘</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">
                        → 코드 작성 → 테스트 → 데이터베이스 설정 → Edge Function 배포
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">CI/CD 자동화</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">배포가 완료되면 Slack에 결과를 보고해줘</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">
                        → 빌드 상태 확인 → 배포 진행 → 팀 채널 알림
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">⚡ 워크플로우 자동화</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">데이터 분석 리포트</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">사용자 증가율을 분석해서 주간 리포트 만들어줘</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">
                        → 데이터베이스 쿼리 → 분석 → 차트 생성 → Notion 문서 작성
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">버그 수정 자동화</h4>
                      <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                        <code className="text-blue-400 font-mono text-xs">claude{`>`} </code>
                        <code className="text-white font-mono text-xs">GitHub 이슈 #123을 분석해서 PR로 수정해줘</code>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">
                        → 이슈 분석 → 코드 수정 → 테스트 → PR 생성 → 리뷰 요청
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step by Step Tutorial */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">📚 5분 만에 따라하기: Supabase + GitHub 연동</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                      <span className="font-medium text-green-900 dark:text-green-300">MCP 서버 추가</span>
                    </div>
                    <div className="bg-slate-900 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-xs">claude mcp add supabase ...</code>
                    </div>
                    <p className="text-green-800 dark:text-green-200 text-xs">
                      Supabase 토큰을 사용해 MCP 서버를 연결합니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                      <span className="font-medium text-blue-900 dark:text-blue-300">테이블 생성</span>
                    </div>
                    <div className="bg-slate-900 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-xs">할 일 관리 테이블 만들어줘</code>
                    </div>
                    <p className="text-blue-800 dark:text-blue-200 text-xs">
                      자연어로 데이터베이스 스키마를 설계합니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                      <span className="font-medium text-purple-900 dark:text-purple-300">자동 배포</span>
                    </div>
                    <div className="bg-slate-900 rounded p-2 mb-2">
                      <code className="text-green-400 font-mono text-xs">GitHub에 커밋하고 배포해줘</code>
                    </div>
                    <p className="text-purple-800 dark:text-purple-200 text-xs">
                      코드 커밋부터 배포까지 한 번에 처리합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Popular Commands */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-300 mb-4">🎯 자주 사용하는 MCP 명령어</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-3">개발 과정</h4>
                    <ul className="space-y-2 text-amber-800 dark:text-amber-200 text-sm">
                      <li>• "데이터베이스 스키마를 분석해줘"</li>
                      <li>• "이 에러 로그를 Slack에 공유해줘"</li>
                      <li>• "오늘 완료한 작업을 Notion에 정리해줘"</li>
                      <li>• "성능 이슈가 있는 쿼리를 찾아줘"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-3">배포 & 운영</h4>
                    <ul className="space-y-2 text-amber-800 dark:text-amber-200 text-sm">
                      <li>• "새 기능을 배포하고 팀에 알려줘"</li>
                      <li>• "사용자 피드백을 GitHub 이슈로 만들어줘"</li>
                      <li>• "서버 로그에서 에러 패턴을 분석해줘"</li>
                      <li>• "월별 사용자 통계를 리포트로 만들어줘"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/tutorials" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center"
                >
                  실전 MCP 튜토리얼 시작하기
                </a>
                <a 
                  href="https://github.com/punkpeye/awesome-mcp-servers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center"
                >
                  더 많은 MCP 서버 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Adoption */}
        <section>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">산업 채택 현황</h2>
            
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300">
                MCP는 이미 다양한 기업과 개발 도구에서 채택되고 있습니다:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">얼리 어답터</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Block - 금융 서비스 통합</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Apollo - GraphQL 생태계 연동</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Zapier - 자동화 워크플로우</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">개발 도구</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Zed - 코드 에디터 통합</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Replit - 온라인 IDE 플랫폼</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Codeium - AI 코딩 어시스턴트</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-slate-700 dark:text-slate-300">Sourcegraph - 코드 검색 및 내비게이션</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">오픈소스 생태계</h3>
                <p className="text-green-800 dark:text-green-200">
                  MCP는 오픈소스 및 협업 방식으로 설계되어 있으며, 개발자들이 AI 기반 애플리케이션을 구축할 수 있도록 
                  광범위한 문서와 지원을 제공합니다. 표준화된 접근 방식을 통해 AI 통합의 복잡성을 크게 줄일 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}