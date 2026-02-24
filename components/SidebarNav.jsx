import React, { useState } from 'react';

const SidebarNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'users', label: 'Users', icon: 'users' },
    { id: 'products', label: 'Products', icon: 'package' },
    { id: 'orders', label: 'Orders', icon: 'shopping-cart' },
    { id: 'analytics', label: 'Analytics', icon: 'bar-chart-3' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  const getIconPath = (iconName) => {
    const icons = {
      'layout-dashboard': <><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></>,
      'users': <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
      'package': <><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></>,
      'shopping-cart': <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></>,
      'bar-chart-3': <><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>,
      'settings': <><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></>,
      'chevron-left': <><path d="m15 18-6-6 6-6" /></>,
      'chevron-right': <><path d="m9 18 6-6-6-6" /></>
    };
    return icons[iconName] || null;
  };

  return (
    <aside
      data-element="sidebar-container"
      className={`fixed left-0 top-0 h-screen bg-bg-secondary border-r border-border-default flex flex-col transition-all duration-300 z-50 ${isCollapsed ? 'w-[64px]' : 'w-[280px]'}`}
    >
      <div data-element="sidebar-header" className="flex flex-row items-center justify-between p-[var(--spacing-md)] border-b border-border-default">
        {!isCollapsed && (
          <span data-element="brand-text" className="font-ds-heading text-[length:var(--font-size-subheading)] font-[var(--font-weight-heading)] text-primary">
            AdminHub
          </span>
        )}
        <button
          data-element="collapse-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-transparent border-none cursor-pointer p-[var(--spacing-xs)] rounded-ds-md hover:bg-bg-primary transition-all duration-200"
        >
          <svg data-icon={isCollapsed ? 'chevron-right' : 'chevron-left'} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
            {getIconPath(isCollapsed ? 'chevron-right' : 'chevron-left')}
          </svg>
        </button>
      </div>

      <nav data-element="sidebar-nav" className="flex-1 flex flex-col gap-[var(--spacing-xs)] p-[var(--spacing-sm)]">
        {menuItems.map(item => (
          <button
            key={item.id}
            data-element={`menu-item-${item.id}`}
            onClick={() => setActiveItem(item.id)}
            className={`flex flex-row items-center gap-[var(--spacing-sm)] px-[var(--spacing-sm)] py-[var(--spacing-sm)] rounded-ds-md border-none cursor-pointer transition-all duration-200 ${activeItem === item.id ? 'bg-action-primary text-[var(--color-neutrals-neutral-900)]' : 'bg-transparent text-secondary hover:bg-bg-primary'} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
          >
            <svg data-icon={item.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              {getIconPath(item.icon)}
            </svg>
            {!isCollapsed && (
              <span data-element={`menu-label-${item.id}`} className="font-ds-body text-ds-body font-[var(--font-weight-body)]">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
