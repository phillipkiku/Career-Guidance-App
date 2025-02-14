import React from "react";
// import { NavLink } from "react-router-dom";
import { Grid, List, MantineProvider } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import "../styles/footer.css";

function Footer() {
  return (
    <MantineProvider>
      <div>
        <Grid>
          <Grid.Col span="content">
            dbfdfbbdfbdb1{" "}
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={150}
              alt="Norway"
            />
          </Grid.Col>
          <Grid.Col span="content">
            2dbfdfbdfbdfbdf{" "}
            <List>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>{" "}
          </Grid.Col>

          <Grid.Col span="content">
            <List>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </div>
    </MantineProvider>
  );
}
export default Footer;
