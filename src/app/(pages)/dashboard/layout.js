import DashboardSidebar from "@/Components/shared/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="admin-main-container">
      <div className="admin-main-wrapper">
        {/* <!-- admin sidebar  --> */}
        <DashboardSidebar />

        {/* <!-- main content --> */}
        <div className="admin-main-conten overflow-x-auto">
          <div className="wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
}
