import { Oval } from "react-loader-spinner";
import "./styles/Spinner.scss";

function Spinner() {
  return (
    <div className="Spinner">
      <Oval
        height={80}
        width={80}
        color="#f4bd3d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#cb1200"
        strokeWidth={9}
        strokeWidthSecondary={6}
      />
    </div>
  );
}

export default Spinner;
