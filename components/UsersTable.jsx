import React from 'react';

const UsersTable = () => {
  const users = [
    { name: "Sarah Johnson", email: "sarah.j@company.com", role: "Admin", status: "Active", date: "2024-01-15" },
    { name: "Michael Chen", email: "m.chen@company.com", role: "Editor", status: "Active", date: "2024-01-12" },
    { name: "Emily Davis", email: "emily.d@company.com", role: "Viewer", status: "Inactive", date: "2024-01-10" },
    { name: "James Wilson", email: "j.wilson@company.com", role: "Editor", status: "Active", date: "2024-01-08" },
    { name: "Lisa Anderson", email: "lisa.a@company.com", role: "Admin", status: "Active", date: "2024-01-05" }
  ];

  return (
    <div data-element="table-container" className="w-full bg-bg-primary rounded-ds-lg shadow-ds-sm border border-border-default overflow-hidden">
      <div data-element="table-header" className="px-[var(--spacing-lg)] py-[var(--spacing-md)] border-b border-border-default">
        <h3 data-element="table-title" className="font-ds-heading text-[length:var(--font-size-subheading)] font-[var(--font-weight-heading)] text-primary m-0">Recent Users</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-default">
              <th className="text-left px-[var(--spacing-lg)] py-[var(--spacing-md)] font-ds-label text-ds-label font-[var(--font-weight-label)] text-neutral">Name</th>
              <th className="text-left px-[var(--spacing-lg)] py-[var(--spacing-md)] font-ds-label text-ds-label font-[var(--font-weight-label)] text-neutral">Email</th>
              <th className="text-left px-[var(--spacing-lg)] py-[var(--spacing-md)] font-ds-label text-ds-label font-[var(--font-weight-label)] text-neutral">Role</th>
              <th className="text-left px-[var(--spacing-lg)] py-[var(--spacing-md)] font-ds-label text-ds-label font-[var(--font-weight-label)] text-neutral">Status</th>
              <th className="text-left px-[var(--spacing-lg)] py-[var(--spacing-md)] font-ds-label text-ds-label font-[var(--font-weight-label)] text-neutral">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} data-element={`user-row-${index}`} className="border-b border-border-default hover:bg-bg-secondary transition-all duration-200">
                <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                  <span data-element={`user-name-${index}`} className="font-ds-body text-ds-body font-[var(--font-weight-body)] text-primary">{user.name}</span>
                </td>
                <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                  <span data-element={`user-email-${index}`} className="font-ds-body text-ds-body text-secondary">{user.email}</span>
                </td>
                <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                  <span data-element={`user-role-${index}`} className="font-ds-body text-ds-body text-secondary">{user.role}</span>
                </td>
                <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                  <span
                    data-element={`user-status-${index}`}
                    className={`inline-flex px-[var(--spacing-sm)] py-[var(--spacing-xs)] rounded-ds-sm font-ds-label text-[length:var(--font-size-label)] font-[var(--font-weight-label)] ${
                      user.status === 'Active'
                        ? 'bg-[var(--color-status-success-bg)] text-[var(--color-status-success)] border border-[var(--color-status-success-border)]'
                        : 'bg-[var(--color-neutrals-neutral-100)] text-neutral border border-[var(--color-neutrals-neutral-300)]'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                  <span data-element={`user-date-${index}`} className="font-ds-body text-ds-body text-neutral">{user.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
