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

export default function BestPractices() {
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
        <Breadcrumb items={[{ label: '가이드', href: '/guides/basic-commands' }, { label: '모범 사례' }]} />
        
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            모범 사례
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Claude Code를 효율적으로 사용하고 비용을 최적화하는 방법을 알아보세요.
          </p>
        </div>

        {/* Cost Optimization Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">비용 최적화</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">효율적인 프롬프트 작성</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 dark:text-red-200 mb-2">❌ 비효율적인 방법</h4>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                      <li>• 반복적으로 전체 코드베이스 분석 요청</li>
                      <li>• 불명확한 요구사항으로 여러 번 수정 요청</li>
                      <li>• 대규모 파일을 반복적으로 읽기</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-200 mb-2">✅ 효율적인 방법</h4>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
                      <li>• 구체적이고 명확한 요구사항 제시</li>
                      <li>• 필요한 파일만 타겟팅하여 작업</li>
                      <li>• /init으로 프로젝트 컨텍스트 캐싱</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">컨텍스트 관리</h3>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    효율적인 컨텍스트 관리로 불필요한 토큰 사용을 줄이세요:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-400 text-xs">CLAUDE.md 활용</span>
                        <CopyButton text="/init" className="scale-75" />
                      </div>
                      <code className="text-green-400 text-sm">claude{'>'} /init</code>
                      <p className="text-slate-400 text-xs mt-1">프로젝트 정보를 캐싱하여 반복 설명 방지</p>
                    </div>
                    
                    <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-400 text-xs">특정 파일 타겟팅</span>
                        <CopyButton text="src/components/Header.tsx 파일만 수정해줘" className="scale-75" />
                      </div>
                      <code className="text-green-400 text-sm">claude{'>'} src/components/Header.tsx 파일만 수정해줘</code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">배치 처리</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  관련된 작업들을 한 번에 처리하여 효율성을 높이세요:
                </p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">효율적인 배치 요청</span>
                    <CopyButton text="다음 작업들을 순서대로 처리해줘:\n1. UserService 클래스에 입력 검증 추가\n2. 관련 테스트 코드 작성\n3. API 문서 업데이트" />
                  </div>
                  <pre className="text-green-400 font-mono text-sm">
{`claude> 다음 작업들을 순서대로 처리해줘:
1. UserService 클래스에 입력 검증 추가
2. 관련 테스트 코드 작성
3. API 문서 업데이트`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Configuration Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">터미널 설정</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">추천 터미널 환경</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">macOS</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <li>• <strong>iTerm2</strong>: 강력한 기능과 커스터마이징</li>
                      <li>• <strong>Warp</strong>: AI 기능이 내장된 모던 터미널</li>
                      <li>• <strong>Kitty</strong>: GPU 가속 지원</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Linux/Windows</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <li>• <strong>Windows Terminal</strong>: Windows 공식 터미널</li>
                      <li>• <strong>Alacritty</strong>: 크로스 플랫폼 고성능</li>
                      <li>• <strong>Terminator</strong>: 다중 패널 지원</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">쉘 설정 (.bashrc / .zshrc)</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Claude Code 별칭 설정</span>
                    <CopyButton text={`# Claude Code 별칭
alias cc="claude"
alias ccinit="claude /init"
alias ccexplain="claude /explain"
alias cctest="claude /test"

# 프로젝트별 설정
export CLAUDE_DEFAULT_MODEL="claude-3-opus"
export CLAUDE_THEME="dark"

# 자동 완성 활성화
eval "$(claude --completion-script-bash)"`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`# Claude Code 별칭
alias cc="claude"
alias ccinit="claude /init"
alias ccexplain="claude /explain"
alias cctest="claude /test"

# 프로젝트별 설정
export CLAUDE_DEFAULT_MODEL="claude-3-opus"
export CLAUDE_THEME="dark"

# 자동 완성 활성화
eval "$(claude --completion-script-bash)"`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">tmux 통합</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">.tmux.conf</span>
                    <CopyButton text={`# Claude Code 전용 패널 레이아웃
bind-key C new-window -n claude 'claude'
bind-key c split-window -h -p 40 'claude'

# 세션 저장/복원
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @resurrect-processes 'claude'

# 스크롤백 버퍼 크기 증가
set-option -g history-limit 50000`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`# Claude Code 전용 패널 레이아웃
bind-key C new-window -n claude 'claude'
bind-key c split-window -h -p 40 'claude'

# 세션 저장/복원
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @resurrect-processes 'claude'

# 스크롤백 버퍼 크기 증가
set-option -g history-limit 50000`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Optimization Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">워크플로우 최적화</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">효과적인 대화 패턴</h3>
                <div className="space-y-4">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">1. 컨텍스트 설정</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      프로젝트 시작 시 충분한 컨텍스트를 제공하세요
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                      <code className="text-sm text-slate-800 dark:text-slate-200">
                        "이 프로젝트는 TypeScript와 React로 작성된 전자상거래 플랫폼입니다. 
                        주요 기능은 상품 관리, 장바구니, 결제입니다."
                      </code>
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">2. 점진적 접근</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      큰 작업을 작은 단위로 나누어 진행하세요
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                      <ol className="text-sm text-slate-800 dark:text-slate-200 space-y-1">
                        <li>1️⃣ "먼저 데이터 모델을 정의해줘"</li>
                        <li>2️⃣ "이제 API 엔드포인트를 구현해줘"</li>
                        <li>3️⃣ "마지막으로 프론트엔드 통합을 해줘"</li>
                      </ol>
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">3. 피드백 활용</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      Claude의 제안을 검토하고 구체적인 피드백을 제공하세요
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                      <code className="text-sm text-slate-800 dark:text-slate-200">
                        "좋은 접근이지만, 에러 처리 부분을 더 강화해줘. 
                        특히 네트워크 오류와 권한 오류를 구분해서 처리해줘."
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">팀 협업 가이드</h3>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-medium text-amber-900 dark:text-amber-200 mb-3">팀 전체 생산성 향상 전략</h4>
                  <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                    <li>• <strong>CLAUDE.md 공유</strong>: 팀원 모두가 동일한 프로젝트 컨텍스트 사용</li>
                    <li>• <strong>프롬프트 템플릿</strong>: 자주 사용하는 작업에 대한 표준 프롬프트 정의</li>
                    <li>• <strong>코드 리뷰 통합</strong>: PR 생성 시 Claude Code로 사전 검토</li>
                    <li>• <strong>지식 공유</strong>: 효과적인 프롬프트와 워크플로우를 팀 위키에 문서화</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Best Practices Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">보안 모범 사례</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="font-medium text-red-900 dark:text-red-200 mb-2">⚠️ 주의사항</h3>
                <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                  <li>• API 키, 비밀번호 등 민감한 정보는 절대 Claude에게 공유하지 마세요</li>
                  <li>• 환경 변수는 .env.example 파일로 구조만 공유하세요</li>
                  <li>• 고객 데이터나 개인정보가 포함된 파일은 제외하세요</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-medium text-green-900 dark:text-green-200 mb-2">✅ 권장사항</h3>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
                  <li>• .claudeignore 파일을 사용하여 민감한 파일 제외</li>
                  <li>• 정기적으로 Claude Code 버전 업데이트</li>
                  <li>• 기업 환경에서는 온프레미스 또는 VPC 배포 고려</li>
                </ul>
              </div>

              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">.claudeignore 예시</span>
                  <CopyButton text={`# 환경 설정
.env
.env.local
.env.production

# 보안 관련
*.key
*.pem
*.p12
secrets/

# 개인정보
customer_data/
user_uploads/

# 인증 정보
config/database.yml
config/credentials.yml.enc`} />
                </div>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`# 환경 설정
.env
.env.local
.env.production

# 보안 관련
*.key
*.pem
*.p12
secrets/

# 개인정보
customer_data/
user_uploads/

# 인증 정보
config/database.yml
config/credentials.yml.enc`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">추가 리소스</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">학습 자료</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• <a href="/guides/advanced-features" className="text-blue-600 dark:text-blue-400 hover:underline">고급 기능 마스터하기</a></li>
                  <li>• <a href="/tutorials" className="text-blue-600 dark:text-blue-400 hover:underline">실전 튜토리얼</a></li>
                  <li>• <a href="/developers/developer-tools" className="text-blue-600 dark:text-blue-400 hover:underline">개발자 도구 활용</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">커뮤니티</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• <a href="https://discord.gg/claude-code" className="text-blue-600 dark:text-blue-400 hover:underline">Discord 채널</a></li>
                  <li>• <a href="https://github.com/anthropics/claude-code" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub 저장소</a></li>
                  <li>• <a href="/community" className="text-blue-600 dark:text-blue-400 hover:underline">한국 사용자 모임</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}