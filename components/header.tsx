import { IoLocation, IoCalendarSharp, IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: 83,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <label style={{ font: "normal normal 600 24px/32px Segoe UI" }}>
          EXOTIC
        </label>
        <label style={{ font: "normal normal normal 16px/21px Segoe UI" }}>
          {" "}
          CARS
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IoLocation size={20} color="#C4C4C4" />
        <label
          style={{
            font: "normal normal 600 12px/16px Segoe UI",
            color: "#656469",
            marginRight: 63,
          }}
        >
          North Carolina, NC 90025
        </label>
        <IoCalendarSharp size={20} color="#C4C4C4" />
        <label
          style={{
            marginRight: 24,
            marginLeft: 4,
            font: "normal normal 600 12px/16px Segoe UI",
            color: "#656469",
          }}
        >
          12/08/2021
        </label>
        <IoCalendarSharp size={20} color="#C4C4C4" />
        <label
          style={{
            font: "normal normal 600 12px/16px Segoe UI",
            color: "#656469",
            marginRight: 55,
            marginLeft: 4,
          }}
        >
          12/12/2021
        </label>
        <IoSearchSharp size={20} color="#C4C4C4" />
      </div>
      <div
        style={{
          color: "#7B89F4",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <label>Sign up</label>
        <div
          style={{
            border: "2px solid #7B89F4",
            borderRadius: "13px",
            marginLeft: 28,
            padding: 5,
          }}
        >
          Sign in
        </div>
      </div>
    </header>
  );
};

export default Header;
