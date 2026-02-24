import React from 'react';

const HeaderBar = () => {
  return (
    <header data-element="header-container" className="w-full bg-bg-primary border-b border-border-default">
      <div data-element="header-content" className="flex flex-row items-center justify-between px-[var(--spacing-lg)] py-[var(--spacing-md)]">
        <div data-element="search-container" className="flex-1 max-w-[600px]">
          <div className="relative">
            <svg data-element="search-icon" data-icon="search" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-[var(--spacing-sm)] top-1/2 -translate-y-1/2 text-neutral">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              data-element="search-input"
              type="text"
              placeholder="Search users, products, orders..."
              className="w-full pl-[calc(var(--spacing-sm)+var(--spacing-lg))] pr-[var(--spacing-md)] py-[var(--spacing-sm)] bg-bg-secondary border border-border-default rounded-ds-md font-ds-body text-ds-body text-primary placeholder:text-neutral focus:border-[var(--input-border-focus)] focus:shadow-[var(--focus-ring)] focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div data-element="header-actions" className="flex flex-row items-center gap-gap-h ml-[var(--spacing-lg)]">
          <button data-element="notification-button" className="relative bg-transparent border-none cursor-pointer p-[var(--spacing-xs)] rounded-ds-md hover:bg-bg-secondary transition-all duration-200">
            <svg data-element="bell-icon" data-icon="bell" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span data-element="notification-badge" className="absolute -top-1 -right-1 w-2 h-2 bg-status-danger rounded-full"></span>
          </button>

          <div data-element="user-menu" className="flex flex-row items-center gap-[var(--spacing-sm)] cursor-pointer">
            <img
              data-element="user-avatar"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format&q=80"
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div data-element="user-info" className="hidden md:flex flex-col items-start">
              <span data-element="user-name" className="font-ds-body text-[length:var(--font-size-label)] font-[var(--font-weight-label)] text-primary">John Smith</span>
              <span data-element="user-role" className="font-ds-body text-[length:var(--font-size-label)] text-neutral">Administrator</span>
            </div>
            <svg data-element="dropdown-icon" data-icon="chevron-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral hidden md:block">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
