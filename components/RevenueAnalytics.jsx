import React from 'react';

const RevenueAnalytics = ({ 
  title = "Revenue Analytics",
  data = [
    { month: "Jan", revenue: 45000, target: 50000 },
    { month: "Feb", revenue: 52000, target: 50000 },
    { month: "Mar", revenue: 48000, target: 55000 },
    { month: "Apr", revenue: 61000, target: 55000 },
    { month: "May", revenue: 58000, target: 60000 },
    { month: "Jun", revenue: 67000, target: 60000 }
  ],
  showTarget = true,
  currency = "$"
}) => {
  const maxValue = Math.max(...data.flatMap(d => [d.revenue, d.target]));
  const getBarHeight = (value) => (value / maxValue) * 100;

  return (
    <div data-element="revenue-analytics-container" className="flex flex-col gap-[var(--spacing-lg)] bg-[var(--color-background-primary)] rounded-[var(--radius-lg)] p-[var(--spacing-card-padding)] shadow-[var(--shadow-md)] border-[length:var(--border-card-width)] border-solid border-[var(--border-card-color)]">
      <div data-element="header-section" className="flex flex-row items-center justify-between">
        <h3 data-element="card-title" className="font-[var(--font-heading)] text-[length:var(--font-size-subheading)] font-[var(--font-weight-heading)] text-[var(--color-text-primary)] m-0">{title}</h3>
        <div data-element="legend" className="flex flex-row items-center gap-[var(--spacing-md)]">
          <div data-element="revenue-legend" className="flex flex-row items-center gap-[var(--spacing-xs)]">
            <div data-element="revenue-dot" className="w-3 h-3 rounded-full bg-[var(--color-primary-600)]"></div>
            <span data-element="revenue-label" className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-text-secondary)]">Revenue</span>
          </div>
          {showTarget && (
            <div data-element="target-legend" className="flex flex-row items-center gap-[var(--spacing-xs)]">
              <div data-element="target-dot" className="w-3 h-3 rounded-full bg-[var(--color-tertiary-700)]"></div>
              <span data-element="target-label" className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-text-secondary)]">Target</span>
            </div>
          )}
        </div>
      </div>

      <div data-element="chart-container" className="relative h-64 flex flex-col justify-end">
        <div data-element="bars-wrapper" className="flex flex-row items-end justify-between gap-[var(--spacing-sm)] h-full">
          {data.map((item, index) => (
            <div key={index} data-element={`bar-group-${index}`} className="flex-1 flex flex-col items-center justify-end gap-[var(--spacing-xs)] h-full">
              <div data-element={`values-${index}`} className="flex flex-row items-end gap-[var(--spacing-xs)] flex-1 w-full">
                <div 
                  data-element={`revenue-bar-${index}`} 
                  className="flex-1 bg-[var(--color-primary-600)] rounded-t-[var(--radius-sm)] transition-all duration-300 hover:bg-[var(--color-primary-700)]"
                  style={{ height: `${getBarHeight(item.revenue)}%` }}
                  title={`${currency}${item.revenue.toLocaleString()}`}
                ></div>
                {showTarget && (
                  <div 
                    data-element={`target-bar-${index}`} 
                    className="flex-1 bg-[var(--color-neutrals-neutral-400)] rounded-t-[var(--radius-sm)] transition-all duration-300 hover:bg-[var(--color-neutrals-neutral-500)]"
                    style={{ height: `${getBarHeight(item.target)}%` }}
                    title={`${currency}${item.target.toLocaleString()}`}
                  ></div>
                )}
              </div>
              <span data-element={`month-label-${index}`} className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-text-secondary)]">{item.month}</span>
            </div>
          ))}
        </div>

        {/* Y-axis grid lines */}
        <div data-element="grid-lines" className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 25, 50, 75, 100].map((percent) => (
            <div key={percent} data-element={`grid-line-${percent}`} className="flex flex-row items-center gap-[var(--spacing-sm)]">
              <span data-element={`grid-label-${percent}`} className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-text-neutral)] w-12 text-right">{currency}{Math.round((maxValue * (100 - percent)) / 10000)}k</span>
              <div data-element={`grid-line-bar-${percent}`} className="flex-1 h-[1px] bg-[var(--color-neutrals-neutral-200)]"></div>
            </div>
          ))}
        </div>
      </div>

      <div data-element="summary-section" className="flex flex-row items-center justify-between pt-[var(--spacing-md)] border-t border-[var(--border-card-color)] border-solid border-0">
        <div data-element="total-revenue" className="flex flex-col gap-[var(--spacing-xs)]">
          <span data-element="total-label" className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-text-secondary)]">Total Revenue</span>
          <span data-element="total-value" className="font-[var(--font-heading)] text-[length:var(--font-size-subheading)] font-[var(--font-weight-heading)] text-[var(--color-text-primary)]">
            {currency}{data.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}
          </span>
        </div>
        <div data-element="achievement-rate" className="flex flex-col gap-[var(--spacing-xs)] items-end">
          <span data-element="achievement-label" className="font-[var(--font-body)] text-[length:var(--font-size-label)] text-[var(--color-text-secondary)]">Achievement Rate</span>
          <span data-element="achievement-value" className="font-[var(--font-heading)] text-[length:var(--font-size-subheading)] font-[var(--font-weight-heading)] text-[var(--color-success-600)]">
            {Math.round((data.reduce((sum, item) => sum + item.revenue, 0) / data.reduce((sum, item) => sum + item.target, 0)) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;
