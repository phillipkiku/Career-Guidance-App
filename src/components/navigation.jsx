import { NavLink } from "react-router-dom";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Button, MantineProvider, Drawer, Avatar } from "@mantine/core";
import "../styles/navigation.css";
import LoginForm from "./loginform";
import User from "../pages/user";
// import Resources from "../pages/resources";

function NavBar() {
  const demoProps = {
    bg: "var(--mantine-color-blue-light)",
    h: 50,
    mt: "md",
  };

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MantineProvider>
      <nav>
        <NavLink to="/">
          <h1>CAREEGUIDE</h1> 
          <p>NAV1</p>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resource</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">AboutUs</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">ContactUs</NavLink>
          </li>
          <li>
            {/* <Button variant="filled" color="green" size="lg">
              Button
            </Button> */}
          </li>
        </ul>
        <Drawer opened={opened} onClose={close} title="Authentication">
          {/* Drawer content */}
          <LoginForm />
        </Drawer>

        <Button variant="filled" color="green" onClick={open}>
          Login / signUp{" "}
        </Button>
      </nav>
    </MantineProvider>
  );
}

export default NavBar;
