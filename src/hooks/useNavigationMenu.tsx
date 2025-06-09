'use client';

import { useState, useRef, useEffect, useCallback, MutableRefObject } from 'react';
import { usePathname } from 'next/navigation';

export interface MobileMenuState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  onLinkClick: () => void;
  menuRef: MutableRefObject<HTMLDivElement | null>;
}

export interface NavigationHelpers {
  isActiveLink: (href: string) => boolean;
  getLinkClassName: (href: string, baseClasses: string) => string;
}

export interface UseNavigationMenuReturn {
  mobileMenu: MobileMenuState;
  helpers: NavigationHelpers;
}

export const useNavigationMenu = (): UseNavigationMenuReturn => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // 모바일 메뉴 제어 함수들
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // 활성 링크 체크 함수 (메모이제이션)
  const isActiveLink = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }, [pathname]);

  // 링크 클래스명 생성 함수 (메모이제이션)
  const getLinkClassName = useCallback((href: string, baseClasses: string) => {
    const active = isActiveLink(href);
    return `${baseClasses} ${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'}`;
  }, [isActiveLink]);

  // 키보드 이벤트 처리 (Escape 키)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return {
    mobileMenu: {
      isOpen: isMobileMenuOpen,
      toggle: toggleMobileMenu,
      close: closeMobileMenu,
      onLinkClick: handleLinkClick,
      menuRef,
    },
    helpers: {
      isActiveLink,
      getLinkClassName,
    },
  };
};
