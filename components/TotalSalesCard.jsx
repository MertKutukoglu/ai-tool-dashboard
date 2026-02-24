import React from 'react';

const TotalSalesCard = ({ 
  title = "Total Sales", 
  value = "2500", 
  change = 4.9, 
  lastMonthValue = "2345",
  icon = "shopping-cart",
  loading = false,
  error = false
}) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${Math.abs(change)}%`;
  };

  if (loading) {
    return (
      <div data-element="sales-card-container" className="flex flex-col items-stretch justify-start gap-[var(--spacing-md)] bg-[var(--color-neutrals-neutral-800)] rounded-[var(--radius-lg)] p-[var(--spacing-card-padding)] shadow-[var(--shadow-lg)] border-[length:var(--border-card-width)] border-solid border-[var(--color-neutrals-neutral-700)]">
        <div data-element="loading-header" className="flex flex-row items-center justify-between">
          <div data-element="loading-title" className="h-5 w-24 bg-[var(--color-neutrals-neutral-700)] rounded-[var(--radius-sm)] animate-pulse"></div>
          <div data-element="loading-icon" className="h-6 w-6 bg-[var(--color-neutrals-neutral-700)] rounded-[var(--radius-sm)] animate-pulse"></div>
        </div>
        <div data-element="loading-value" className="h-12 w-32 bg-[var(--color-neutrals-neutral-700)] rounded-[var(--radius-sm)] animate-pulse"></div>
        <div data-element="loading-footer" className="h-4 w-28 bg-[var(--color-neutrals-neutral-700)] rounded-[var(--radius-sm)] animate-pulse"></div>
        <div data-element="loading-button" className="h-12 w-full bg-[var(--color-neutrals-neutral-700)] rounded-[var(--radius-sm)] animate-pulse mt-[var(--spacing-sm)]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div data-element="sales-card-container" className="flex flex-col items-stretch justify-start gap-[var(--spacing-md)] bg-[var(--color-neutrals-neutral-700)] bg-opacity-10 rounded-[var(--radius-lg)] p-[var(--spacing-card-padding)] shadow-[var(--shadow-lg)] border-[length:var(--border-card-width)] border-solid border-[var(--color-danger-600)]">
        <div data-element="error-header" className="flex flex-row items-center justify-between">
          <span data-element="card-title" className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-neutrals-neutral-300)]">{title}</span>
          <svg data-element="error-icon" data-icon="alert-circle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-danger-500)] shrink-0">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <span data-element="error-message" className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-danger-500)]">Unable to load data</span>
      </div>
    );
  }

  const isPositive = change >= 0;
  const changeColor = isPositive ? 'var(--color-success-500)' : 'var(--color-danger-500)';
  const changeBgColor = isPositive ? 'var(--color-success-700)' : 'var(--color-danger-700)';

  return (
    <div data-element="sales-card-container" className="flex flex-col items-stretch justify-start gap-[var(--spacing-md)] bg-[var(--color-neutrals-neutral-800)] rounded-[var(--radius-lg)] p-[var(--spacing-card-padding)] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-all duration-200 border-[length:var(--border-card-width)] border-solid border-[var(--color-neutrals-neutral-700)]">
      <div data-element="card-header" className="flex flex-row items-center justify-between">
        <span data-element="card-title" className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-neutrals-neutral-400)]">{title}</span>
        <div data-element="icon-container" className="p-[var(--spacing-sm)] bg-[var(--color-neutrals-neutral-700)] rounded-[var(--radius-md)]">
          <svg data-element="sales-icon" data-icon={icon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary-500)] shrink-0">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      </div>
      
      <div data-element="value-section" className="flex flex-row items-baseline justify-start gap-[var(--spacing-sm)]">
        <span data-element="main-value" className="font-[var(--font-heading)] text-[length:var(--font-size-heading)] font-[var(--font-weight-heading)] text-[var(--color-neutrals-neutral-50)]">{formatNumber(value)}</span>
        <span data-element="change-badge" className={`font-[var(--font-body)] text-[length:var(--font-size-label)] font-[var(--font-weight-label)] text-[${changeColor}] px-[var(--spacing-sm)] py-[var(--spacing-xs)] rounded-[var(--radius-sm)] flex flex-row items-center gap-1`}>
  <svg data-element="trend-icon" data-icon={isPositive ? "trending-up" : "trending-down"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    {isPositive ? (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ) : (
      <>
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </>
    )}
  </svg>
  {formatChange(change)}
</span>
      </div>
      
      <div data-element="footer-section" className="flex flex-row items-center justify-start pt-[var(--spacing-sm)] border-t border-[var(--color-neutrals-neutral-700)]">
        <span data-element="comparison-text" className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-neutrals-neutral-500)]">
          Last month: <span data-element="last-month-value" className="font-[var(--font-weight-label)] text-[var(--color-neutrals-neutral-400)]">{formatNumber(lastMonthValue)}</span>
        </span>
      </div>
    </div>
  );
};

export default TotalSalesCard;
