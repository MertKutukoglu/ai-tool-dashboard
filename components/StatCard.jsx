import React from 'react';

const StatCard = ({ title = "Total Users", value = "12,345", change = "+12%", trend = "up" }) => {
  const isPositive = trend === 'up';
  
  return (
    <div data-element="stat-card-container" className="bg-bg-primary rounded-ds-lg p-[var(--spacing-lg)] shadow-ds-sm border border-border-default flex flex-col gap-[var(--spacing-sm)]">
      <span data-element="stat-title" className="font-ds-label text-ds-label text-neutral">{title}</span>
      <div data-element="stat-content" className="flex flex-row items-end justify-between">
        <span data-element="stat-value" className="font-ds-heading text-[length:var(--font-size-heading)] font-[var(--font-weight-heading)] text-primary">{value}</span>
        <div data-element="stat-change" className={`flex flex-row items-center gap-[var(--spacing-xs)] ${isPositive ? 'text-[var(--color-status-success)]' : 'text-[var(--color-status-danger)]'}`}>
          <svg data-element="trend-icon" data-icon={isPositive ? 'trending-up' : 'trending-down'} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isPositive ? (
              <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>
            ) : (
              <><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></>
            )}
          </svg>
          <span data-element="change-text" className="font-ds-label text-ds-label font-[var(--font-weight-label)]">{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
