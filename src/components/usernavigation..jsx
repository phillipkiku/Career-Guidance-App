import { NavLink } from "react-router-dom";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Button, MantineProvider, Drawer, Avatar } from "@mantine/core";
import "../styles/navigation.css";
import { Link } from "react-router-dom";
// import home from "../pages/home";

function UserNavBar() {
  const demoProps = {
    bg: "var(--mantine-color-blue-light)",
    h: 50,
    mt: "md",
  };

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MantineProvider>
      <nav>
        <NavLink to="/home">
          <h1>CAREEGUIDE</h1>
          <p>NAV2 USER</p>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Resource</NavLink>
          </li>
          <li>
            <NavLink to="/">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/">AboutUs</NavLink>
          </li>
          <li>
            <NavLink to="/">ContactUs</NavLink>
          </li>
          
        </ul>

        {/* <Link to="/"></Link> */}
        <Button variant="filled" color="green" onClick={open}>
          <Link to="/">SignOut</Link>
        </Button>





      </nav>
    </MantineProvider>
  );
}

export default UserNavBar;
