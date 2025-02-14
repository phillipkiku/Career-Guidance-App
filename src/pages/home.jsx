import { React, useState } from "react";
import Footer from "../components/footer";
import "../styles/home.css";
import { useDisclosure } from "@mantine/hooks";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  MantineProvider,
  Spoiler,
  AspectRatio,
  Paper,
  Modal,
  Grid,
  List,
} from "@mantine/core";

function Home() {
  const [expanded, setExpanded] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <MantineProvider>
      <div classname="main">
        {/* <NavBar/> */}
        <h1>home page</h1>
      </div>

      <div className="hero">
        {/* <AspectRatio ratio={30 / 10} > */}
        <AspectRatio>
          <iframe
            src="https://www.youtube.com/embed/mzJ4vCjSt28"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>

        <div>
          <Paper shadow="xs" p="xl">
            <Text>Paper is the most basic ui component</Text>
            <Text>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
          </Paper>

          <Modal
            opened={opened}
            onClose={close}
            title="Authentication"
            centered
          >
            {/* Modal content */}
          </Modal>

          <Button variant="default" onClick={open}>
            Open centered Modal
          </Button>
        </div>
      </div>

      <div className="sectors">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>

        {/* card 2 */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
        {/* Card 3  */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </div>

      <div className="careerchoice">
        <div>
          <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
            {/* Content here */}

            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              excepturi deleniti aperiam qui sunt distinctio odit quae quibusdam
              maiores, magni ducimus dolorem totam fugiat. Quasi ipsum
              repudiandae eveniet odio quidem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos, sequi culpa! Recusandae
              libero tenetur, dicta nobis ea suscipit totam molestias dolore,
              quos nam inventore sed animi repudiandae saepe? Aspernatur,
              doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Voluptate, aliquid saepe error quod laborum a ut, maiores
              cum perferendis libero ipsa nulla. Voluptatum qui inventore
              reiciendis, molestiae aliquid distinctio dolorem? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Fuga distinctio
              libero inventore quis culpa, cupiditate repellendus eum deserunt
              placeat sed pariatur deleniti facilis, natus sint iste quisquam
              eos molestias cumque!
            </p>
          </Spoiler>
        </div>
        {/* spoiler 2 */}
        <div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide details"
            expanded={expanded}
            onExpandedChange={setExpanded}
          >
            {/* Spoiler content */}
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={40}
              alt="Norway"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              excepturi deleniti aperiam qui sunt distinctio odit quae quibusdam
              maiores, magni ducimus dolorem totam fugiat. Quasi ipsum
              repudiandae eveniet odio quidem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos, sequi culpa! Recusandae
              libero tenetur, dicta nobis ea suscipit totam molestias dolore,
              quos nam inventore sed animi repudiandae saepe? Aspernatur,
              doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Voluptate, aliquid saepe error quod laborum a ut, maiores
              cum perferendis libero ipsa nulla. Voluptatum qui inventore
              reiciendis, molestiae aliquid distinctio dolorem? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Fuga distinctio
              libero inventore quis culpa, cupiditate repellendus eum deserunt
              placeat sed pariatur deleniti facilis, natus sint iste quisquam
              eos molestias cumque!
            </p>
          </Spoiler>
        </div>
      </div>

      <div className="buttonlinks">
        <Group>
          <Button variant="default">First</Button>
          <Button variant="default">Second</Button>
          <Button variant="default">Third</Button>
        </Group>
      </div>

      <div className="qoute">
        <Paper shadow="xl" withBorder p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
      </div>

      {/* <Footer /> */}

      <div className="footer">
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

export default Home;
