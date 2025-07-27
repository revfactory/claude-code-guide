export interface NavigationItem {
  href?: string;
  label: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  items?: NavigationItem[];
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: '시작하기',
    items: [
      { href: '/getting-started', label: '빠른 시작' },
      { href: '/tutorials', label: '튜토리얼' },
    ]
  },
  {
    label: '가이드',
    items: [
      { href: '/guides/basic-commands', label: '기본 명령어' },
      { href: '/guides/core-workflows', label: '핵심 워크플로우' },
      { href: '/guides/advanced-features', label: '고급 기능' },
      { href: '/guides/best-practices', label: '모범 사례' },
    ]
  },
  {
    label: 'AI Native',
    items: [
      { href: '/ai-native/overview', label: '개요' },
      { href: '/ai-native/core-principles', label: '핵심 원칙' },
      { href: '/ai-native/workflow', label: '워크플로우' },
      { href: '/ai-native/sdlc', label: 'SDLC' },
      { href: '/ai-native/tools', label: '도구' },
      { href: '/ai-native/best-practices', label: '모범 사례' },
    ]
  },
  {
    label: '개발자',
    items: [
      { href: '/developers/developer-tools', label: '개발 도구' },
      { href: '/developers/use-cases', label: '활용 사례' },
      { href: '/developers/enterprise', label: '엔터프라이즈' },
    ]
  },
  {
    label: '커뮤니티',
    href: '/community'
  }
] as const;

// Legacy flat navigation for backward compatibility
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '/', label: '홈' },
  { href: '/getting-started', label: '시작하기' },
  { href: '/guides/basic-commands', label: '가이드' },
  { href: '/guides/advanced-features', label: '고급 기능' },
  { href: '/developers/developer-tools', label: '개발자 도구' },
  { href: '/developers/enterprise', label: '엔터프라이즈' },
  { href: '/guides/best-practices', label: '모범 사례' },
  { href: '/tutorials', label: '튜토리얼' },
  { href: '/ai-native', label: 'AI Native' },
  { href: '/community', label: '커뮤니티' },
  { href: '/developers/use-cases', label: '활용 사례' },
] as const;

export const EXTERNAL_LINKS = {
  github: {
    href: 'https://github.com/revfactory/claude-code-guide',
    label: 'GitHub',
    external: true,
  },
} as const;

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);