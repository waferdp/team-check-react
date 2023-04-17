import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import { useTeamStore } from "../store/TeamStore";

const Layout = () => {

  const team = useTeamStore(state => state.team);


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          {team.id && (
            <li>
              <Link to="/survey">Survey</Link>
            </li>
          )}
          <li>
            <Link to="/assessment">Assessment</Link>
          </li>
        </ul>

        <p>
          {team.name}
        </p>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;