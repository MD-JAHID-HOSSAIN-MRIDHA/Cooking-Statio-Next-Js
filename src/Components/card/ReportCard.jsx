
export default function ReportCard({ title, text, bgColor, icon }) {

  return (
    <div className={`reportCard ${bgColor}`}>
      <div className="report-body">
        {icon && <div className="icon">
          {icon}
        </div>}
        <h5 className="report-title">{title}</h5>
        <p className="report-text">{text}</p>
      </div>
    </div>
  )
}