import React from 'react';
import Head from 'next/head';
import TotalSalesCard from '../components/TotalSalesCard';
import RevenueAnalytics from '../components/RevenueAnalytics';
import RevenueAnalytics from '../components/RevenueAnalytics';
import TotalSalesCard from '../components/TotalSalesCard';
import SidebarNav from '../components/SidebarNav';
import HeaderBar from '../components/HeaderBar';
import StatCard from '../components/StatCard';
import StatsGrid from '../components/StatsGrid';
import UsersTable from '../components/UsersTable';
import TabsSection from '../components/TabsSection';
import DashboardLayout from '../components/DashboardLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI_Tool_Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', fontFamily: 'var(--font-body)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-heading)', fontWeight: 700, margin: '0 0 8px', color: 'var(--color-text-primary)' }}>
          AI_Tool_Dashboard
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-body)', margin: '0 0 48px' }}>
          Design system powered by DesignSeed
        </p>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-subheading)', fontWeight: 600, margin: '0 0 16px', color: 'var(--color-text-primary)' }}>Pages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="/admin-dashboard" style={{ color: 'var(--color-action-primary)', textDecoration: 'none', fontSize: 'var(--font-size-body)', fontFamily: 'var(--font-body)' }}>Admin Dashboard</a>
          </div>
        </section>


        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-subheading)', fontWeight: 600, margin: '0 0 24px', color: 'var(--color-text-primary)' }}>Components</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>TotalSalesCard</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>TotalSalesCard</p>
            <TotalSalesCard />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>RevenueAnalytics</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>I\'ll create the Revenue Analytics chart component for you.</p>
            <RevenueAnalytics />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>RevenueAnalytics</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>I\'ll update the RevenueAnalytics component to use vertical bars instead of a line chart.</p>
            <RevenueAnalytics />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>TotalSalesCard</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>I\'ll create a dark mode version of the TotalSalesCard component.</p>
            <TotalSalesCard />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>SidebarNav</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Collapsible sidebar navigation with menu items</p>
            <SidebarNav />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>HeaderBar</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Top header with search field and user avatar</p>
            <HeaderBar />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>StatCard</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Small statistic cards showing key metrics</p>
            <StatCard />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>StatsGrid</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Grid container for stat cards</p>
            <StatsGrid />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>UsersTable</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Data table showing user information</p>
            <UsersTable />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>TabsSection</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Tabbed content area with Recent Activity, Top Products, and Team sections</p>
            <TabsSection />
          </div>
          <div style={{ border: '1px solid var(--border-card-color)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-card-padding)', background: 'var(--color-background-primary)' }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-body)', fontWeight: 600 }}>DashboardLayout</h3>
            <p style={{ margin: '0 0 16px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>Main layout wrapper that combines sidebar and content area</p>
            <DashboardLayout />
          </div>
          </div>
        </section>

      </main>
    </>
  );
}
