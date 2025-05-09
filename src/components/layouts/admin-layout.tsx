import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>Admin</p>
      {children}
    </div>
  );
}
