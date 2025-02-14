import { useState } from "react";
import "@mantine/core/styles.css";
import {
  Button,
  MantineProvider,
  TextInput,
  Code,
  Text,
  PasswordInput,
  Drawer,
} from "@mantine/core";
import { Link } from "react-router-dom";
import SignUpForm from "./signupform";
import { useDisclosure } from "@mantine/hooks";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MantineProvider>
      <form
        onSubmit={() => {
          console.log(email, password), setEmail(""), setPassword("");
        }}
      >
        <TextInput
          label="Email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // error="Invalid Email"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={() => setEmail("")} color="green" type="submit">
          Login
        </Button>

        <Link to="/signupform">
          <Drawer opened={opened} onClose={close} title="Authentication">
            {/* Drawer content */}
            <SignUpForm />
          </Drawer>

          <Text variant="filled" onClick={open}>
            Don't have an account? Register
          </Text>
        </Link>
      </form>
    </MantineProvider>
  );
}

export default LoginForm;
