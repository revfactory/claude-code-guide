'use client';

import { MutableRefObject, useState } from 'react';
import Link from 'next/link';
import { MAIN_NAVIGATION, EXTERNAL_LINKS, GitHubIcon, NavigationItem } from '@/constants/navigation';

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
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const baseLinkClasses = 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors';

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderMobileNavItem = (item: NavigationItem, level: number = 0) => {
    const hasDropdown = item.items && item.items.length > 0;
    const isExpanded = expandedItems.includes(item.label);
    const paddingLeft = `${(level + 1) * 12}px`;

    if (!hasDropdown && item.href) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={getLinkClassName(item.href, baseLinkClasses)}
          style={{ paddingLeft }}
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div key={item.label}>
        <button
          onClick={() => toggleExpanded(item.label)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          style={{ paddingLeft }}
        >
          <span>{item.label}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isExpanded && hasDropdown && (
          <div className="mt-1">
            {item.items.map((subItem) => renderMobileNavItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      ref={menuRef}
      className={`md:hidden relative z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-[600px] opacity-100' 
          : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-slate-700">
        {MAIN_NAVIGATION.map((item) => renderMobileNavItem(item))}
        
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