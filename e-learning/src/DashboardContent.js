import Header from "./Header";
import Table from "./Table";

function DashboardContent({ data }) {
  return (
    <div className="subject-content">
      <Header title={data.title} description={data.subjectDescription} />
      <Table data={data} />
    </div>
  );
}

export default DashboardContent;
