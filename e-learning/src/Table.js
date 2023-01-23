import "./styles/Table.scss";
import Topic from "./Topic";

function Table() {
  return (
    <div className="Table">
      <div className="Table-head">
        <p className="item width-1">Title</p>
        <p className="item width-3">Description</p>
        <p className="item width-1">Link</p>
        <p className="item width-1">Expand</p>
      </div>

      <Topic />
      <Topic />
      <Topic />
    </div>
  );
}

export default Table;
