import React, { useEffect } from "react";
import Button from "./Button";
import "../styles/Navbar.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!student) {
      navigate("/");
    }
  }, [navigate, student]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    toast.success("Successfully Logged Out!");
    navigate("/");
  };

  return (
    <>
      <div className="Navbar">
        <div>
          <Logo />
        </div>

        <div className="Navbar-navigation">
          <Link
            to="/dashboard"
            className={pathname === "dashboard" ? "link dash" : "link"}
          >
            <span>Dashboard</span>
          </Link>
          <Link
            to="/practiceAll"
            className={pathname === "practiceAll" ? "link dash" : "link"}
          >
            <span>Practice Problems</span>
          </Link>
        </div>

        <div className="Navbar-student">
          <svg
            enableBackground="new 0 0 135.285 135.285"
            height="40"
            viewBox="0 0 135.285 135.285"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m133.222 64.801c1.569 36.216-26.522 66.852-62.739 68.421-36.216 1.569-66.851-26.522-68.42-62.738s26.522-66.852 62.738-68.421 66.852 26.522 68.421 62.738z"
              fill="#fece2f"
            />
            <path
              d="m67.572 135.285c-16.958 0-33.065-6.254-45.644-17.789-13.317-12.211-21.081-28.876-21.863-46.926-.782-18.049 5.512-35.324 17.724-48.641 12.211-13.318 28.876-21.083 46.926-21.864 18.05-.789 35.324 5.512 48.641 17.724 13.318 12.211 21.083 28.876 21.865 46.926.782 18.049-5.513 35.324-17.724 48.641-12.211 13.318-28.876 21.083-46.926 21.864-1.002.044-2.003.065-2.999.065zm.136-131.285c-.938 0-1.877.02-2.82.061-16.982.736-32.662 8.042-44.151 20.571s-17.412 28.783-16.676 45.765 8.042 32.662 20.571 44.151 28.79 17.414 45.765 16.676c35.059-1.519 62.346-31.277 60.827-66.336-.736-16.982-8.041-32.662-20.571-44.151-11.834-10.852-26.991-16.737-42.945-16.737z"
              fill="#1a1a1a"
            />
            <circle cx="66.932" cy="51.248" fill="#fff" r="26.257" />
            <path
              d="m66.903 79.505c-7.084 0-13.813-2.613-19.068-7.431-5.563-5.101-8.806-12.063-9.133-19.604-.327-7.54 2.302-14.757 7.403-20.32s12.063-8.806 19.604-9.133c15.563-.668 28.778 11.44 29.453 27.007.674 15.566-11.441 28.778-27.007 29.453-.418.019-.836.028-1.252.028zm-1.021-52.491c-6.473.28-12.449 3.065-16.828 7.84s-6.636 10.97-6.355 17.443 3.065 12.45 7.84 16.829c4.776 4.379 10.972 6.639 17.443 6.355 13.362-.579 23.763-11.921 23.184-25.284-.579-13.362-11.915-23.753-25.284-23.183zm-.086-1.998h.01z"
              fill="#1a1a1a"
            />
            <path
              d="m70.484 133.222c16.444-.712 31.172-7.458 42.251-17.957-7.282-17.119-24.559-28.801-44.24-27.949s-35.882 13.986-41.657 31.67c11.946 9.503 27.202 14.949 43.646 14.236z"
              fill="#fff"
            />
            <path
              d="m67.665 135.283c-15.221 0-30.059-5.176-42.072-14.731-.654-.521-.916-1.392-.656-2.186 6.174-18.908 23.644-32.188 43.472-33.047 19.826-.864 38.38 10.861 46.167 29.164.327.769.142 1.66-.465 2.234-11.849 11.229-27.312 17.8-43.54 18.503-.97.042-1.94.063-2.906.063zm2.732-4.059.086 1.998-.086-1.998c14.798-.641 28.921-6.471 39.929-16.454-7.442-16.042-24.029-26.208-41.745-25.456-17.706.767-33.361 12.345-39.387 28.971 11.83 8.993 26.402 13.58 41.203 12.939z"
              fill="#1a1a1a"
            />
          </svg>
          <p className="name">Daniel (student)</p>
          <Button handleLogout={handleLogout} text="Logout" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
