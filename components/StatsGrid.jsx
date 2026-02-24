import React from 'react';

const StatsGrid = () => {
  const stats = [
    { title: "Total Users", value: "12,345", change: "+12%", trend: "up" },
    { title: "Revenue", value: "$54,321", change: "+8.2%", trend: "up" },
    { title: "Active Orders", value: "892", change: "-2.4%", trend: "down" },
    { title: "Conversion Rate", value: "3.24%", change: "+0.5%", trend: "up" }
  ];

  return (
    <div data-element="stats-grid-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gap-v w-full">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
