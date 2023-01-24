import Header from "./Header";
import Table from "./Table";

function DashboardContent({ classActive }) {
  // Find which element is active
  const chapterName = Object.entries(classActive)
    .filter((x) => x[1] === true)
    .map((x) => x[0])[0];

  // Later add an axios request to output correct data and pass it as a prop
  // Data must include: title, subtitle, # of topics and problems, chapters, topics, and links
  // This data needs to be stored in REDUX GLOBAL STATE!!!

  return (
    <div className="subject-content">
      <Header chapterName={chapterName} />
      <Table chapterName={chapterName} />
    </div>
  );
}

export default DashboardContent;
