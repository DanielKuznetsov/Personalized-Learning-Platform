import Header from "./Header";
import Table from "./Table";

function DashboardContent({ data }) {
  return (
    <div className="subject-content">
      <Header data={data} />
      <Table data={data} />
    </div>
  );
}

export default DashboardContent;
