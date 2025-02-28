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
  NumberInput,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LoginForm from "./loginform";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  // const [opened, { open, close }] = useDisclosure(false);

  const newLocal = "Authentication";

  return (
    <MantineProvider>
      <form
        onSubmit={() => {
          console.log(email, password),
            setName(""),
            setEmail(""),
            setPassword(""),
            setConfirmPassword("");
        }}
      >
        <TextInput
          label="Name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   error="Invalid Email"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordInput
          label="ConfirmPassword"
          placeholder="Re-enter your Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button onClick={() => setEmail("")} color="green" type="submit">
          Register
        </Button>

        <Link to="/loginform">
          {/* <Modal>
  <LoginForm />
</Modal> */}

          <Text variant="filled" onClick={open}>
            Have an account? Login
          </Text>
        </Link>
      </form>
    </MantineProvider>
  );
}

export default SignUpForm;
