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

export default function DeveloperTools() {
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
        <Breadcrumb items={[{ label: '개발자', href: '/developers' }, { label: '개발 도구' }]} />
        
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            개발자 도구
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Claude Code를 프로그래밍 방식으로 통합하고 확장하는 도구들을 살펴보세요.
          </p>
        </div>

        {/* SDK Section */}
        <section id="sdk" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">SDK</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              다양한 프로그래밍 언어로 Claude Code를 통합할 수 있는 공식 SDK를 제공합니다.
            </p>

            <div className="space-y-6">
              {/* Python SDK */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Python SDK</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">설치</span>
                    <CopyButton text="pip install claude-code-sdk" />
                  </div>
                  <code className="text-green-400 font-mono">pip install claude-code-sdk</code>
                </div>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">사용 예시</span>
                    <CopyButton text={`from claude_code import ClaudeCode

# Claude Code 초기화
claude = ClaudeCode(api_key="your-api-key")

# 코드 분석
analysis = claude.analyze_project("./src")
print(analysis.summary)

# 자동 리팩토링
refactored = claude.refactor_file(
    "app.py",
    style="pep8",
    optimize=True
)

# 테스트 생성
tests = claude.generate_tests("models.py")`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`from claude_code import ClaudeCode

# Claude Code 초기화
claude = ClaudeCode(api_key="your-api-key")

# 코드 분석
analysis = claude.analyze_project("./src")
print(analysis.summary)

# 자동 리팩토링
refactored = claude.refactor_file(
    "app.py",
    style="pep8",
    optimize=True
)

# 테스트 생성
tests = claude.generate_tests("models.py")`}
                  </pre>
                </div>
              </div>

              {/* TypeScript/JavaScript SDK */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">TypeScript/JavaScript SDK</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">설치</span>
                    <CopyButton text="npm install @claude-code/sdk" />
                  </div>
                  <code className="text-green-400 font-mono">npm install @claude-code/sdk</code>
                </div>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">사용 예시</span>
                    <CopyButton text={`import { ClaudeCode } from '@claude-code/sdk';

// Claude Code 초기화
const claude = new ClaudeCode({
  apiKey: process.env.CLAUDE_API_KEY
});

// 비동기 코드 수정
async function improveCode() {
  const result = await claude.suggest({
    file: 'src/app.ts',
    prompt: '성능 최적화 제안'
  });
  
  console.log(result.suggestions);
}

// 스트리밍 응답
const stream = await claude.stream({
  command: 'explain',
  target: 'src/utils/auth.ts'
});

for await (const chunk of stream) {
  process.stdout.write(chunk);
}`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`import { ClaudeCode } from '@claude-code/sdk';

// Claude Code 초기화
const claude = new ClaudeCode({
  apiKey: process.env.CLAUDE_API_KEY
});

// 비동기 코드 수정
async function improveCode() {
  const result = await claude.suggest({
    file: 'src/app.ts',
    prompt: '성능 최적화 제안'
  });
  
  console.log(result.suggestions);
}

// 스트리밍 응답
const stream = await claude.stream({
  command: 'explain',
  target: 'src/utils/auth.ts'
});

for await (const chunk of stream) {
  process.stdout.write(chunk);
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IDE Integrations Section */}
        <section id="ide" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">IDE 통합</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              선호하는 개발 환경에서 Claude Code를 직접 사용할 수 있습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* VS Code Extension */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6V7.5L13 6h4.5v16.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">VS Code Extension</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">공식 Visual Studio Code 확장</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">설치 방법</p>
                    <code className="text-xs text-slate-600 dark:text-slate-300">Marketplace에서 "Claude Code" 검색</code>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• 코드 선택 후 컨텍스트 메뉴로 즉시 실행</li>
                    <li>• 인라인 제안 및 자동 완성</li>
                    <li>• 통합 터미널에서 직접 Claude Code 사용</li>
                  </ul>
                </div>
              </div>

              {/* JetBrains Plugin */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">JB</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">JetBrains Plugin</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">IntelliJ, WebStorm, PyCharm 등</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">설치 방법</p>
                    <code className="text-xs text-slate-600 dark:text-slate-300">Settings → Plugins → "Claude Code"</code>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• 의도 액션(Alt+Enter)으로 빠른 실행</li>
                    <li>• 프로젝트 전체 분석 도구</li>
                    <li>• 리팩토링 도구와 완벽한 통합</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Actions Section */}
        <section id="github-actions" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">GitHub Actions</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              CI/CD 파이프라인에 Claude Code를 통합하여 자동화된 코드 리뷰와 개선을 수행하세요.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">자동 PR 리뷰</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">.github/workflows/claude-review.yml</span>
                    <CopyButton text={`name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Claude Code Review
        uses: anthropic-ai/claude-code-action@v1
        with:
          api-key: \${{ secrets.CLAUDE_API_KEY }}
          command: review
          options: |
            --check-security
            --check-performance
            --suggest-improvements
      - name: Post Review Comments
        uses: anthropic-ai/claude-code-action@v1
        with:
          api-key: \${{ secrets.CLAUDE_API_KEY }}
          command: comment
          github-token: \${{ secrets.GITHUB_TOKEN }}`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Claude Code Review
        uses: anthropic-ai/claude-code-action@v1
        with:
          api-key: \${{ secrets.CLAUDE_API_KEY }}
          command: review
          options: |
            --check-security
            --check-performance
            --suggest-improvements
      - name: Post Review Comments
        uses: anthropic-ai/claude-code-action@v1
        with:
          api-key: \${{ secrets.CLAUDE_API_KEY }}
          command: comment
          github-token: \${{ secrets.GITHUB_TOKEN }}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">자동 문서 생성</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">.github/workflows/auto-docs.yml</span>
                    <CopyButton text={`name: Auto Generate Docs

on:
  push:
    branches: [main]
    paths:
      - 'src/**/*.ts'
      - 'src/**/*.js'

jobs:
  generate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate Documentation
        uses: anthropic-ai/claude-code-action@v1
        with:
          api-key: \${{ secrets.CLAUDE_API_KEY }}
          command: docs
          options: |
            --format markdown
            --output docs/api
            --include-examples
      - name: Commit Documentation
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add docs/
          git commit -m "docs: auto-generate API documentation"
          git push`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`name: Auto Generate Docs

on:
  push:
    branches: [main]
    paths:
      - 'src/**/*.ts'
      - 'src/**/*.js'

jobs:
  generate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate Documentation
        uses: anthropic-ai/claude-code-action@v1
        with:
          api-key: \${{ secrets.CLAUDE_API_KEY }}
          command: docs
          options: |
            --format markdown
            --output docs/api
            --include-examples
      - name: Commit Documentation
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add docs/
          git commit -m "docs: auto-generate API documentation"
          git push`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section id="api" className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">RESTful API</h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              HTTP API를 통해 Claude Code의 모든 기능을 프로그래밍 방식으로 사용할 수 있습니다.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">주요 엔드포인트</h3>
                <div className="space-y-3">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-medium">POST</span>
                        <code className="text-sm font-mono text-slate-900 dark:text-white">/v1/analyze</code>
                      </div>
                      <span className="text-xs text-slate-500">프로젝트 분석</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">코드베이스 전체 또는 특정 파일을 분석합니다</p>
                  </div>
                  
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-medium">POST</span>
                        <code className="text-sm font-mono text-slate-900 dark:text-white">/v1/refactor</code>
                      </div>
                      <span className="text-xs text-slate-500">코드 리팩토링</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">코드 품질 개선 및 최적화를 수행합니다</p>
                  </div>
                  
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-medium">POST</span>
                        <code className="text-sm font-mono text-slate-900 dark:text-white">/v1/test/generate</code>
                      </div>
                      <span className="text-xs text-slate-500">테스트 생성</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">자동으로 단위 테스트 및 통합 테스트를 생성합니다</p>
                  </div>
                  
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">GET</span>
                        <code className="text-sm font-mono text-slate-900 dark:text-white">{`/v1/stream/{session_id}`}</code>
                      </div>
                      <span className="text-xs text-slate-500">실시간 스트리밍</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Server-Sent Events를 통한 실시간 응답 스트리밍</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">API 사용 예시</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">cURL 예시</span>
                    <CopyButton text={`curl -X POST https://api.claude.ai/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "project_path": "/path/to/project",
    "options": {
      "include_dependencies": true,
      "check_security": true,
      "suggest_improvements": true
    }
  }'`} />
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`curl -X POST https://api.claude.ai/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "project_path": "/path/to/project",
    "options": {
      "include_dependencies": true,
      "check_security": true,
      "suggest_improvements": true
    }
  }'`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}