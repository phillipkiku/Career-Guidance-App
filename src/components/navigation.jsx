import { NavLink } from "react-router-dom";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Button, MantineProvider, Drawer, Avatar } from "@mantine/core";
import "../styles/navigation.css";
import LoginForm from "./loginform";

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
        <NavLink to="/home">
          <h1>CAREEGUIDE</h1>
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
          <li>
            {/* <Button variant="filled" color="green" size="lg">
              Button
            </Button> */}
          </li>
          <li>
            <Avatar src="avatar.png" alt="it's me" />
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
      {/* <div>
        <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
            alt="Panda"
          />
        </AspectRatio>
        <Container size="xxs" {...demoProps}>
          xs Container
        </Container>
      </div> */}
    </MantineProvider>
  );
}

export default NavBar;
