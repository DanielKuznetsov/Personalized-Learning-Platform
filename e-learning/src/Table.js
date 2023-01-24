import "./styles/Table.scss";
import Topic from "./Topic";

function Table({ data }) {
  return (
    <div className="Table">
      <div className="Table-head">
        <p className="item width-1">Title</p>
        {/* <p className="item width-3">Description</p> */}
        <p className="item width-1">Link</p>
        <p className="item width-1">Expand</p>
      </div>

      {data.chapters.map((chapter, index) => (
        
        <Topic chapter={chapter} key={index * 12} />
      ))}
    </div>
  );
}

export default Table;
