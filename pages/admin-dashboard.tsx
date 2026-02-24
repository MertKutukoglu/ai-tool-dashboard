import React from 'react';
import Head from 'next/head';
import SidebarNav from '../components/SidebarNav';
import HeaderBar from '../components/HeaderBar';
import StatCard from '../components/StatCard';
import StatsGrid from '../components/StatsGrid';
import UsersTable from '../components/UsersTable';
import TabsSection from '../components/TabsSection';
import DashboardLayout from '../components/DashboardLayout';
import RevenueAnalytics from '../components/RevenueAnalytics';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard — AI_Tool_Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <SidebarNav />
        <HeaderBar />
        <StatCard />
        <StatsGrid />
        <UsersTable />
        <TabsSection />
        <DashboardLayout />
        <RevenueAnalytics chartData={[{"day":"Fri","value":16000,"height":55},{"day":"Sat","value":12000,"height":40},{"day":"Sun","value":22430,"height":75,"highlight":true},{"day":"Mon","value":13000,"height":43},{"day":"Thu","value":16500,"height":55},{"day":"Wen","value":21000,"height":70},{"day":"Thus","value":17000,"height":57}]} selectedPeriod="This Week" />
      </main>
    </>
  );
}
