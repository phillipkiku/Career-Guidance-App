import { React, useState } from "react";
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
import { Link, Route} from "react-router-dom";
import SignUpForm from "./signupform";
import { useForm } from "@mantine/form";
import User from "../pages/user";
import { useDisclosure } from "@mantine/hooks";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      // email: (value) => (value == "phillip@email.com" ? null : "Invalid Email"),

      email: (value) => {
        let users = ["phillip@email.com", "mark@rmail.com", "john@mail.com"];
        if (users.includes(value)) {
          return (
          // <Link>
          // <User/>
          // </Link>
          
          
          <Route>
            <User/>
          </Route> )
        } else {
          return "Invalid Email";
        }
      },

      password: (value) => (value == "12345" ? null : "Invalid Password"),
    },
  });

  return (
    // <MantineProvider>
    // <form
    //     onSubmit={() => {
    //       console.log(email, password), setEmail(""), setPassword("");
    //     }}
    //   >
    //     <TextInput
    //       label="Email"
    //       placeholder="Enter your Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       // error="Invalid Email"
    //     />

    //     <PasswordInput
    //       label="Password"
    //       placeholder="Enter your Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <Button onClick={() => setEmail("")} color="green" type="submit">
    //       Login
    //     </Button>

    //     <Link to="/signupform">
    //       <Drawer opened={opened} onClose={close} title="Authentication">
    //         {/* Drawer content */}
    //         <SignUpForm />
    //       </Drawer>

    //       <Text variant="filled" onClick={open}>
    //         Don't have an account? Register
    //       </Text>
    //     </Link>
    //   </form>      
    // </MantineProvider>

<MantineProvider>
<form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Email"
          placeholder="Enter your Email"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your Password"
          {...form.getInputProps("password")}
        />

        <Button onClick={() => setEmail(" ") } color="green" type="submit">
          Submit
        </Button>  
      
       
      </form>
</MantineProvider>

  );
}

export default LoginForm;
