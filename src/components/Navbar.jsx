import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../images/homeicon.svg";
import { ReactComponent as DumbbellIcon } from "../images/dumbbell.svg";
import {ReactComponent as ProfileIcon } from "../images/profileicon.svg";

export default function Navbar() {
    return (
      <div className="bg-bar fixed rounded-t-3xl left-0 right-0 bottom-0 ">
        <div className="flex justify-between mx-10 my-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-bggrey"
            }
          >
            <HomeIcon />
          </NavLink>
          <NavLink
            to="/Browser"
            className={({ isActive }) =>
              isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-bggrey"
            }
          >
            <BrowserIcon />
          </NavLink>
          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              isActive ? "stroke-2 stroke-white" : "stroke-2 stroke-bggrey"
            }
          >
            <ProfileIcon />
          </NavLink>
        </div>
      </div>
    );
  }