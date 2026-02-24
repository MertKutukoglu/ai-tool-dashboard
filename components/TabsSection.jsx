import React, { useState } from 'react';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('activity');

  const tabs = [
    { id: 'activity', label: 'Recent Activity' },
    { id: 'products', label: 'Top Products' },
    { id: 'team', label: 'Team' }
  ];

  const activities = [
    { user: "Sarah Johnson", action: "updated product", target: "Premium Headphones", time: "2 hours ago" },
    { user: "Michael Chen", action: "created new order", target: "#12345", time: "3 hours ago" },
    { user: "Emily Davis", action: "added comment to", target: "Marketing Campaign", time: "5 hours ago" },
    { user: "James Wilson", action: "completed task", target: "Website Redesign", time: "8 hours ago" }
  ];

  const products = [
    { name: "Premium Headphones", sales: "1,234", revenue: "$185,100", growth: "+15%" },
    { name: "Wireless Mouse", sales: "892", revenue: "$44,600", growth: "+8%" },
    { name: "USB-C Hub", sales: "756", revenue: "$52,920", growth: "+12%" },
    { name: "Mechanical Keyboard", sales: "623", revenue: "$93,450", growth: "+5%" }
  ];

  const team = [
    { name: "Alex Thompson", role: "Product Manager", avatar: "photo-1507003211169-0a1dd7228f2d" },
    { name: "Maria Garcia", role: "UX Designer", avatar: "photo-1494790108377-be9c29b29330" },
    { name: "David Kim", role: "Frontend Developer", avatar: "photo-1472099645785-5658abf4ff4e" },
    { name: "Sophie Chen", role: "Data Analyst", avatar: "photo-1438761681033-6461ffad8d80" }
  ];

  return (
    <div data-element="tabs-container" className="w-full bg-bg-primary rounded-ds-lg shadow-ds-sm border border-border-default">
      <div data-element="tabs-header" className="flex flex-row items-center border-b border-border-default">
        {tabs.map(tab => (
          <button
            key={tab.id}
            data-element={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`px-[var(--spacing-lg)] py-[var(--spacing-md)] font-ds-body text-ds-body font-[var(--font-weight-body)] border-b-2 transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? 'text-primary border-action-primary'
                : 'text-neutral border-transparent hover:text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div data-element="tab-content" className="p-[var(--spacing-lg)]">
        {activeTab === 'activity' && (
          <div data-element="activity-list" className="flex flex-col gap-[var(--spacing-md)]">
            {activities.map((activity, index) => (
              <div key={index} data-element={`activity-item-${index}`} className="flex flex-row items-center gap-[var(--spacing-md)] py-[var(--spacing-sm)] border-b border-border-default last:border-0">
                <div className="flex-1">
                  <span className="font-ds-body text-ds-body font-[var(--font-weight-body)] text-primary">{activity.user}</span>
                  <span className="font-ds-body text-ds-body text-secondary"> {activity.action} </span>
                  <span className="font-ds-body text-ds-body font-[var(--font-weight-body)] text-primary">{activity.target}</span>
                </div>
                <span className="font-ds-label text-ds-label text-neutral">{activity.time}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'products' && (
          <div data-element="products-list" className="flex flex-col gap-[var(--spacing-md)]">
            {products.map((product, index) => (
              <div key={index} data-element={`product-item-${index}`} className="flex flex-row items-center justify-between py-[var(--spacing-sm)] border-b border-border-default last:border-0">
                <div className="flex-1">
                  <span className="font-ds-body text-ds-body font-[var(--font-weight-body)] text-primary">{product.name}</span>
                </div>
                <div className="flex flex-row items-center gap-[var(--spacing-lg)]">
                  <span className="font-ds-body text-ds-body text-secondary">{product.sales} sold</span>
                  <span className="font-ds-body text-ds-body font-[var(--font-weight-body)] text-primary">{product.revenue}</span>
                  <span className="font-ds-label text-ds-label text-[var(--color-status-success)]">{product.growth}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'team' && (
          <div data-element="team-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-md)]">
            {team.map((member, index) => (
              <div key={index} data-element={`team-member-${index}`} className="flex flex-row items-center gap-[var(--spacing-md)] p-[var(--spacing-md)] rounded-ds-md hover:bg-bg-secondary transition-all duration-200">
                <img
                  src={`https://images.unsplash.com/${member.avatar}?w=200&h=200&fit=crop&auto=format&q=80`}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-ds-body text-ds-body font-[var(--font-weight-body)] text-primary">{member.name}</span>
                  <span className="font-ds-label text-ds-label text-neutral">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
