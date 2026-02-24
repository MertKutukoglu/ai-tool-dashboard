import React from 'react';
import StatCard from './StatCard';

const StatsGrid = () => {
  const stats = [
    { title: "Total Users", value: "12,345", change: "+12%", trend: "up" },
    { title: "Revenue", value: "$54,321", change: "+8.2%", trend: "up" },
    { title: "Active Orders", value: "892", change: "-2.4%", trend: "down" },
    { title: "Conversion Rate", value: "3.24%", change: "+0.5%", trend: "up" }
  ];

  const StatCard = ({ title, value, change, trend }) => {
    return (
      <div 
        data-element="stat-card" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'var(--color-background-primary)',
          padding: 'var(--spacing-container)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          transition: 'var(--transition-base)'
        }}
      >
        <div data-element="stat-header" style={{ marginBottom: 'var(--spacing-element)' }}>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            fontSize: 'var(--font-size-sm)',
            margin: 0 
          }}>
            {title}
          </p>
        </div>
        <div data-element="stat-content">
          <h3 style={{ 
            color: 'var(--color-text-primary)', 
            fontSize: 'var(--font-size-subheading)',
            fontWeight: 'var(--font-weight-semibold)',
            margin: 0,
            marginBottom: 'var(--spacing-xs)'
          }}>
            {value}
          </h3>
          <div 
            data-element="stat-change" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)'
            }}
          >
            <span style={{ 
              color: trend === 'up' ? 'var(--color-success)' : 'var(--color-error)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              {change}
            </span>
            <span style={{ 
              color: trend === 'up' ? 'var(--color-success)' : 'var(--color-error)',
              fontSize: 'var(--font-size-xs)'
            }}>
              {trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      data-element="stats-grid-container" 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-element)',
        width: '100%'
      }}
    >
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
