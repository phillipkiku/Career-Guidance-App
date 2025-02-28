import { React, useState } from "react";
import {
  MantineProvider,
  Button,
  Overlay,
  Image,
  Container,
  Text,
  Title,
} from "@mantine/core";
import Testimonials from "../styles/testimonials";
function Testimonials() {
  return (
    <MantineProvider>
      <h1>Testimonials</h1>

      <Button variant="filled" color="green">
        Button
      </Button>
      {/* <Image
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      /> */}
      <div className="hero">
        {/* <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        /> */}
        <Container className="container">
          <Title> A fully featured React components library</Title>
          <Text>
            {" "}
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>
        </Container>
      </div>
    </MantineProvider>
  );
}

export default Testimonials;
