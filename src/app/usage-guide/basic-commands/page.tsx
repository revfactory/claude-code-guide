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

export default function BasicCommands() {
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
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <a href="/usage-guide" className="text-blue-600 dark:text-blue-400 hover:underline">사용법 가이드</a>
          <span className="mx-2 text-slate-500">/</span>
          <span className="text-slate-900 dark:text-white">기본 사용법</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            기본 사용법
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Claude Code의 세 가지 기본 실행 모드를 익혀 효율적으로 작업해보세요.
          </p>
        </div>

        {/* Interactive Mode */}
        <section id="interactive-mode" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">대화형 모드</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              가장 일반적인 사용 방법으로, Claude와 지속적인 대화를 통해 작업을 진행합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">시작하기</h3>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">터미널</span>
                <CopyButton text="claude" />
              </div>
              <code className="text-green-400 font-mono">claude</code>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">초기 질문과 함께 시작</h3>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">터미널</span>
                <CopyButton text='claude \"이 프로젝트를 설명해줘\"' />
              </div>
              <code className="text-green-400 font-mono">claude "이 프로젝트를 설명해줘"</code>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">사용 예제</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">프로젝트 분석</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Claude Code</span>
                    <CopyButton text="이 코드베이스를 요약해줘" className="scale-75" />
                  </div>
                  <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                  <code className="text-white font-mono text-sm">이 코드베이스를 요약해줘</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">코드 질문</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Claude Code</span>
                    <CopyButton text="인증 시스템이 어떻게 작동하는지 설명해줘" className="scale-75" />
                  </div>
                  <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                  <code className="text-white font-mono text-sm">인증 시스템이 어떻게 작동하는지 설명해줘</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">코드 수정</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">Claude Code</span>
                    <CopyButton text="API 엔드포인트에 에러 처리를 추가해줘" className="scale-75" />
                  </div>
                  <code className="text-blue-400 font-mono text-sm">claude{`>`} </code>
                  <code className="text-white font-mono text-sm">API 엔드포인트에 에러 처리를 추가해줘</code>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>💡 팁:</strong> 대화형 모드에서는 Claude가 이전 대화 내용을 기억하므로, 연속적인 작업에 매우 효과적입니다.
              </p>
            </div>
          </div>
        </section>

        {/* One-shot Mode */}
        <section id="one-shot-mode" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">원샷 모드</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              빠른 명령 실행을 위한 모드로, 한 번의 명령으로 작업을 완료하고 종료합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 사용법</h3>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">터미널</span>
                <CopyButton text='claude -p \"이 함수가 무엇을 하는지 설명해줘\"' />
              </div>
              <code className="text-green-400 font-mono">claude -p "이 함수가 무엇을 하는지 설명해줘"</code>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">실용적인 예제</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">빠른 분석</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='claude -p \"API 엔드포인트 개수를 세어줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">claude -p "API 엔드포인트 개수를 세어줘"</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">간단한 수정</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='claude -p \"README.md의 오타를 수정해줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">claude -p "README.md의 오타를 수정해줘"</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Git 작업</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='claude -p \"버그 수정에 대한 커밋을 생성해줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">claude -p "버그 수정에 대한 커밋을 생성해줘"</code>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-sm">
                <strong>⚡ 언제 사용하나요?</strong> 스크립트, CI/CD 파이프라인, 또는 빠른 일회성 작업에 적합합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Pipe Mode */}
        <section id="pipe-mode" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">파이프 모드</h2>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              파일 내용이나 다른 명령의 출력을 Claude에게 직접 전달하여 분석하거나 처리합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 문법</h3>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">터미널</span>
                <CopyButton text='cat file.txt | claude -p \"이 내용을 분석해줘\"' />
              </div>
              <code className="text-green-400 font-mono">cat file.txt | claude -p "이 내용을 분석해줘"</code>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">다양한 활용 방법</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">로그 분석</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='cat server.log | claude -p \"에러 패턴을 찾아줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">cat server.log | claude -p "에러 패턴을 찾아줘"</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Git 히스토리 분석</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='git log --oneline | claude -p \"최근 변경사항을 요약해줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">git log --oneline | claude -p "최근 변경사항을 요약해줘"</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">테스트 결과 분석</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='npm test 2>&1 | claude -p \"테스트 실패 원인을 설명해줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">npm test 2{`>`}&amp;1 | claude -p "테스트 실패 원인을 설명해줘"</code>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">파일 비교</h4>
                <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs">터미널</span>
                    <CopyButton text='diff old.js new.js | claude -p \"변경사항을 설명해줘\"' className="scale-75" />
                  </div>
                  <code className="text-green-400 font-mono text-sm">diff old.js new.js | claude -p "변경사항을 설명해줘"</code>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <p className="text-purple-800 dark:text-purple-200 text-sm">
                <strong>🔗 Unix 철학:</strong> 파이프 모드는 Unix의 "작은 도구들을 연결하여 큰 작업을 수행한다"는 철학을 따릅니다.
              </p>
            </div>
          </div>
        </section>

        {/* Command Comparison */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">모드별 비교</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">모드</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">명령어</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">특징</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">적합한 상황</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">대화형</td>
                    <td className="py-3 px-4"><code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">claude</code></td>
                    <td className="py-3 px-4">지속적인 대화, 컨텍스트 유지</td>
                    <td className="py-3 px-4">복잡한 개발 작업, 탐색적 분석</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 px-4 font-medium">원샷</td>
                    <td className="py-3 px-4"><code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">claude -p</code></td>
                    <td className="py-3 px-4">한 번 실행 후 종료</td>
                    <td className="py-3 px-4">스크립트, 자동화, 빠른 작업</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">파이프</td>
                    <td className="py-3 px-4"><code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">| claude -p</code></td>
                    <td className="py-3 px-4">외부 입력 처리</td>
                    <td className="py-3 px-4">로그 분석, 파일 처리, 데이터 변환</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">모드 선택 가이드</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">대화형 모드 추천</h3>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• 새로운 프로젝트 탐색</li>
                  <li>• 복잡한 리팩토링</li>
                  <li>• 학습 및 코드 이해</li>
                  <li>• 여러 단계 작업</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">원샷 모드 추천</h3>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• 빠른 질문 답변</li>
                  <li>• 스크립트 자동화</li>
                  <li>• CI/CD 통합</li>
                  <li>• 간단한 수정</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">파이프 모드 추천</h3>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                  <li>• 로그 파일 분석</li>
                  <li>• 대용량 데이터 처리</li>
                  <li>• 명령어 출력 분석</li>
                  <li>• 데이터 변환</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}