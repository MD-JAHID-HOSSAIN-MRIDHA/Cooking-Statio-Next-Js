import AdminNavbar from "@/Components/shared/AdminNavbar";
import DashboardSidebar from "@/Components/shared/DashboardSidebar";

export const metadata = {
  title: "Dashboard || Cooking station",
  description: "this is dashboard page of Cooking stations",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="admin-main-container">
      <div className="admin-main-wrapper">
        {/* <!-- admin sidebar  --> */}
        <DashboardSidebar />

        {/* <!-- main content --> */}
        <div className="admin-main-conten overflow-x-auto">
          <AdminNavbar />
          <div className="wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
}
