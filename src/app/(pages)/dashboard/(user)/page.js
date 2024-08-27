import ReportCard from "@/Components/card/ReportCard";
import dynamic from "next/dynamic";
import OrderTable from "./OrderTable";
const DatePicker = dynamic(
  () => import("@/Components/date-picker/DatePicker"),
  { ssr: false }
);
const ExpenseLineChart = dynamic(
  () => import("@/Components/rechart/ExpenseLineChart"),
  { ssr: false }
);
const BalanceStatus = dynamic(
  () => import("@/Components/rechart/BalanceStatus"),
  { ssr: false }
);

const icon1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      opacity="0.21"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"
      fill="#FEC53D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 16.2111L18.6003 21.1765C18.6929 21.23 18.79 21.2686 18.8889 21.2931V30.9233L10.6134 26.0258C10.2332 25.8008 10 25.3918 10 24.9501V16.2111ZM30 16.0791V24.9501C30 25.3918 29.7668 25.8008 29.3866 26.0258L21.1111 30.9233V21.2087C21.1312 21.1987 21.1512 21.1879 21.171 21.1765L30 16.0791Z"
      fill="#FEC53D"
    />
    <path
      opacity="0.499209"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.27 13.801C10.3751 13.6684 10.5077 13.5563 10.6622 13.4739L19.4122 8.81348C19.7796 8.61784 20.2202 8.61784 20.5875 8.81348L29.3375 13.4739C29.4567 13.5374 29.5628 13.6186 29.6532 13.7132L20.0598 19.252C19.9967 19.2884 19.9386 19.3301 19.8856 19.3761C19.8326 19.3301 19.7744 19.2884 19.7113 19.252L10.27 13.801Z"
      fill="#FEC53D"
    />
  </svg>
);
const icon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      opacity="0.21"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"
      fill="#4AD991"
    />
    <path
      d="M12.7406 27.2593H28.2961C28.8689 27.2593 29.3332 27.7236 29.3332 28.2964C29.3332 28.8691 28.8689 29.3334 28.2961 29.3334H11.7035C11.1308 29.3334 10.6665 28.8691 10.6665 28.2964V11.7038C10.6665 11.131 11.1308 10.6667 11.7035 10.6667C12.2763 10.6667 12.7406 11.131 12.7406 11.7038V27.2593Z"
      fill="#4AD991"
    />
    <path
      opacity="0.5"
      d="M16.6081 22.7835C16.2163 23.2013 15.5601 23.2225 15.1422 22.8308C14.7244 22.439 14.7032 21.7828 15.0949 21.3649L18.9838 17.2168C19.3627 16.8127 19.9922 16.7776 20.4135 17.1372L23.4829 19.7564L27.482 14.6909C27.8369 14.2413 28.489 14.1646 28.9385 14.5195C29.3881 14.8744 29.4648 15.5265 29.1099 15.9761L24.4432 21.8872C24.0787 22.3489 23.4036 22.4153 22.9561 22.0334L19.8201 19.3573L16.6081 22.7835Z"
      fill="#4AD991"
    />
  </svg>
);
const icon3 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      opacity="0.21"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"
      fill="#8280FF"
    />
    <path
      opacity="0.587821"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7778 15.5556C13.7778 17.5192 15.3697 19.1111 17.3334 19.1111C19.2971 19.1111 20.8889 17.5192 20.8889 15.5556C20.8889 13.5919 19.2971 12 17.3334 12C15.3697 12 13.7778 13.5919 13.7778 15.5556ZM22.6667 19.1111C22.6667 20.5839 23.8607 21.7778 25.3334 21.7778C26.8062 21.7778 28.0001 20.5839 28.0001 19.1111C28.0001 17.6384 26.8062 16.4445 25.3334 16.4445C23.8607 16.4445 22.6667 17.6384 22.6667 19.1111Z"
      fill="#8280FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3187 20.8889C13.1219 20.8889 9.67861 23.0458 9.33408 27.2882C9.31531 27.5193 9.75724 28 9.98016 28H24.6639C25.3316 28 25.342 27.4627 25.3316 27.2889C25.0712 22.9273 21.5746 20.8889 17.3187 20.8889ZM24.979 22.6673C26.0947 24.1528 26.7557 25.9992 26.7557 28H30.1832C30.6655 28 30.673 27.597 30.6655 27.4667C30.4794 24.2313 28.007 22.7004 24.979 22.6673Z"
      fill="#8280FF"
    />
  </svg>
);

export default function CustomerDashboard() {
  return (
    <>
      <div className="greet-container">
        <h3 className="welcome">Welcome back, Rafi</h3>
        <p className="desc">
          Track, manage and forecast your customers and orders.
        </p>
      </div>

      <div className="four-col-grid">
        <ReportCard
          title="Current plan"
          text="Daily"
          bgColor="light-green-bg-2"
        />
        <ReportCard
          title="Current plan"
          text="Weekly"
          bgColor="light-green-bg-2"
        />
        <ReportCard
          title="Current plan"
          text="Monthly"
          bgColor="light-green-bg-2"
        />
        <ReportCard
          title="Current plan"
          text="Custom"
          bgColor="light-green-bg-2"
        />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <BalanceStatus />
        </div>
        <div className="col-lg-6"></div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <ExpenseLineChart />
        </div>
        <div className="col-lg-6">
          <DatePicker />
        </div>
        <div>
          <OrderTable />
        </div>
      </div>
    </>
  );
}
