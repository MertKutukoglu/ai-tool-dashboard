import React from 'react';
import Head from 'next/head';
import SidebarNav from '../components/SidebarNav';
import HeaderBar from '../components/HeaderBar';
import StatCard from '../components/StatCard';
import StatsGrid from '../components/StatsGrid';
import UsersTable from '../components/UsersTable';
import TabsSection from '../components/TabsSection';
import DashboardLayout from '../components/DashboardLayout';

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
      </main>
    </>
  );
}
