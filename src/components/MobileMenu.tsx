'use client';

import { MutableRefObject } from 'react';
import Link from 'next/link';
import { NAVIGATION_ITEMS, EXTERNAL_LINKS, GitHubIcon } from '@/constants/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
  getLinkClassName: (href: string, baseClasses: string) => string;
  menuRef: MutableRefObject<HTMLDivElement | null>;
}

export default function MobileMenu({
  isOpen,
  onLinkClick,
  getLinkClassName,
  menuRef
}: MobileMenuProps) {
  const baseLinkClasses = 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors';

  return (
    <div 
      ref={menuRef}
      className={`md:hidden relative z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-slate-700">
        {NAVIGATION_ITEMS.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={getLinkClassName(item.href, baseLinkClasses)} 
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        ))}
        
        <a 
          href={EXTERNAL_LINKS.github.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
          onClick={onLinkClick}
        >
          <GitHubIcon className="w-5 h-5 mr-2" />
          {EXTERNAL_LINKS.github.label}
        </a>
      </div>
    </div>
  );
}