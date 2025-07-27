'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import Breadcrumb from '@/components/Breadcrumb';
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

export default function AdvancedFeatures() {
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
        <Breadcrumb items={[{ label: '가이드', href: '/guides/basic-commands' }, { label: '고급 기능' }]} />
        
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            고급 기능
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Claude Code의 강력한 고급 기능들로 개발 워크플로우를 혁신하세요.
          </p>
        </div>

        {/* Sub-Agents Section */}
        <section id="sub-agents" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                서브 에이전트 (Sub-Agents)
                <a href="/guides/sub-agents" className="ml-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" title="세부 가이드 보기">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              복잡한 작업을 위해 자동으로 활성화되는 전문 에이전트들이 정밀한 코드 분석과 수정을 수행합니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">주요 서브 에이전트</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">🔍 코드 분석 에이전트</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      대규모 코드베이스를 심층 분석하여 의존성, 아키텍처, 패턴을 파악합니다.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">🛠️ 리팩토링 에이전트</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      코드 품질 개선, 성능 최적화, 보안 취약점 수정을 전문적으로 수행합니다.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">🧪 테스트 에이전트</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      테스트 작성, 실행, 커버리지 분석 및 테스트 실패 디버깅을 담당합니다.
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">📚 문서화 에이전트</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      코드 주석, API 문서, README 파일을 자동으로 생성하고 업데이트합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">서브 에이전트 활용 예시</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Claude Code</span>
                    <CopyButton text="이 프로젝트의 전체 아키텍처를 분석하고 개선점을 제안해줘" />
                  </div>
                  <code className="text-blue-400 font-mono">claude{'>'} </code>
                  <code className="text-white font-mono">이 프로젝트의 전체 아키텍처를 분석하고 개선점을 제안해줘</code>
                  <div className="mt-3 text-sm text-slate-400">
                    → 코드 분석 에이전트가 자동으로 활성화되어 심층 분석을 수행합니다
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 flex items-center">
                  <strong>💡 더 자세히 알아보기:</strong> 
                  <span className="ml-1">서브 에이전트의 생성, 커스터마이징, 고급 활용법에 대한</span>
                  <a href="/guides/sub-agents" className="font-medium hover:underline ml-1 inline-flex items-center group">
                    세부 가이드
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <span className="ml-1">를 확인하세요.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hooks System Section */}
        <section id="hooks" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">훅 시스템 (Hooks)</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              워크플로우의 특정 시점에 자동으로 실행되는 커스텀 스크립트를 정의할 수 있습니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">사용 가능한 훅</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">pre-commit</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                          커밋 전에 코드 포맷팅, 린팅, 테스트를 자동 실행
                        </p>
                      </div>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Git</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">post-edit</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                          파일 편집 후 자동으로 관련 테스트 실행 및 타입 체크
                        </p>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">Editor</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">pre-push</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                          푸시 전 전체 테스트 스위트 실행 및 빌드 검증
                        </p>
                      </div>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Git</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">훅 설정 예시</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">.claude/hooks.json</span>
                    <CopyButton text='{\n  "pre-commit": [\n    "npm run lint",\n    "npm run test:unit"\n  ],\n  "post-edit": {\n    "*.ts": ["npm run typecheck"],\n    "*.py": ["black --check"]\n  }\n}' />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "pre-commit": [
    "npm run lint",
    "npm run test:unit"
  ],
  "post-edit": {
    "*.ts": ["npm run typecheck"],
    "*.py": ["black --check"]
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slash Commands Section */}
        <section id="slash-commands" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">슬래시 명령어 (Slash Commands)</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              빠른 작업 실행을 위한 강력한 슬래시 명령어를 사용하세요.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">주요 명령어</h3>
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/init</code>
                    <p className="text-slate-600 dark:text-slate-300">프로젝트 분석 후 CLAUDE.md 파일 자동 생성</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/explain</code>
                    <p className="text-slate-600 dark:text-slate-300">선택한 코드나 파일에 대한 상세 설명 제공</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/refactor</code>
                    <p className="text-slate-600 dark:text-slate-300">코드 품질 개선을 위한 리팩토링 제안 및 실행</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/test</code>
                    <p className="text-slate-600 dark:text-slate-300">테스트 코드 자동 생성 또는 기존 테스트 개선</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/security</code>
                    <p className="text-slate-600 dark:text-slate-300">보안 취약점 스캔 및 수정 제안</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/optimize</code>
                    <p className="text-slate-600 dark:text-slate-300">성능 최적화 분석 및 개선 사항 적용</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">/docs</code>
                    <p className="text-slate-600 dark:text-slate-300">API 문서, README, 주석 자동 생성</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">사용 예시</h3>
                <div className="space-y-3">
                  <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">리팩토링 예시</span>
                      <CopyButton text="/refactor src/utils/auth.ts" />
                    </div>
                    <code className="text-blue-400 font-mono">claude{'>'} </code>
                    <code className="text-white font-mono">/refactor src/utils/auth.ts</code>
                  </div>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">테스트 생성 예시</span>
                      <CopyButton text="/test --coverage src/services/user.service.ts" />
                    </div>
                    <code className="text-blue-400 font-mono">claude{'>'} </code>
                    <code className="text-white font-mono">/test --coverage src/services/user.service.ts</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MCP Integration Section */}
        <section id="mcp" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">MCP (Model Context Protocol)</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Model Context Protocol을 통해 외부 도구와 서비스를 Claude Code에 통합할 수 있습니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">MCP 서버 예시</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">📊 데이터베이스 연동</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      PostgreSQL, MySQL, MongoDB 등과 직접 통신하여 스키마 분석 및 쿼리 생성
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">🌐 API 테스팅</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      REST API 또는 GraphQL 엔드포인트 테스트 및 문서화
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">📈 모니터링 도구</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Datadog, New Relic 등과 연동하여 성능 메트릭 분석
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">🔧 빌드 시스템</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Webpack, Vite, Gradle 등의 빌드 설정 최적화
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">MCP 설정 예시</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">claude_desktop_config.json</span>
                    <CopyButton text='{\n  "mcpServers": {\n    "database": {\n      "command": "npx",\n      "args": ["@modelcontextprotocol/server-postgres"],\n      "env": {\n        "DATABASE_URL": "postgresql://user:pass@localhost/db"\n      }\n    }\n  }\n}' />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`{
  "mcpServers": {
    "database": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost/db"
      }
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">다음 단계</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">더 깊이 탐구하기</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 커스텀 서브 에이전트 개발 방법</li>
                  <li>• 팀 전용 훅 시스템 구축</li>
                  <li>• MCP 서버 직접 구현하기</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">관련 문서</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• <a href="/developers/developer-tools" className="text-blue-600 dark:text-blue-400 hover:underline">SDK & API 가이드</a></li>
                  <li>• <a href="/developers/enterprise" className="text-blue-600 dark:text-blue-400 hover:underline">엔터프라이즈 기능</a></li>
                  <li>• <a href="/guides/best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">모범 사례</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}