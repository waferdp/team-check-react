import { Outlet, Link } from "react-router-dom";
//import './Layout.css'
import { useTeamStore } from "../store/TeamStore";
import Navbar from "react-bootstrap/Navbar"
import { Container, Nav } from "react-bootstrap";

const Layout = () => {

  const team = useTeamStore(state => state.team);


  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Team Assessment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="team">{team.id ? team.name : "Team"}</Nav.Link>
            {team.id && (
              <>
                <Nav.Link href="/survey">Survey</Nav.Link>
                <Nav.Link href="/assessment">Assessment</Nav.Link>
              </>
            )}
          </Nav>
          {team.name && (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Team: {team.name}
              </Navbar.Text>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>

      <Outlet />
    </ Container>
  )
};

export default Layout;