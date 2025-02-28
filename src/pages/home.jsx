import { React, useState, useEffect } from "react";
import "../styles/home.css";
import { useDisclosure } from "@mantine/hooks";
import { IconCloudComputingFilled } from "@tabler/icons-react";
import { IconHeartbeat } from "@tabler/icons-react";
import { IconBusinessplan } from "@tabler/icons-react";
import { IconAbacus } from "@tabler/icons-react";
import { IconBallpen } from "@tabler/icons-react";
import { IconMovie } from "@tabler/icons-react";
import { IconShovelPitchforks } from "@tabler/icons-react";
import { IconHospital } from "@tabler/icons-react";
// import LoginForm from "./loginform";
// import LoginForm from "../components/loginform";
import LoginForm from "../components/loginform";
// import { Routes, Route } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
// import CareerCard from "../components/card";
// import Footer from "../components/footer";
// import Resources from "./resources";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Overlay,
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

  const { id } = useParams();
  const [mydata, setPost] = useState([]);

  async function fetchCareer() {
    let apiUrl = "http://localhost:1337/api/careers";
    let response = await fetch(apiUrl);
    let careerData = await response.json();
    setPost(careerData.mydata);
    console.log(careerData);
  }

  useEffect(() => {
    fetchCareer();
  }, []);

  return (
    <MantineProvider>
      <div className="hero">
        {/* <NavBar/> */}
        {/* <h1>home page</h1> */}

        <div className="hero1">
          {/* <AspectRatio ratio={30 / 10} > */}
          <AspectRatio>
            <iframe
              src="https://www.youtube.com/embed/Tnt0XBth5Jw"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>

          <div className="hero2">
            <h1>Discover Your Career Jounery.</h1>
            <p>
              Are you a student searching for the perfect career direction? A
              recent graduate unsure of your next steps? A working professional
              seeking to advance your career? Or perhaps an executive ready to
              re-enter the workforce after a career break?
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className="sectors">
        {/* <CareerCard   
        mydata={mydata}
        /> */}

        {/* <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{data.Profession}</Text>
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
        </Card> */}

        {/* card 2 *
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
         Card 3  
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
        </Card>*/}
      </div>

      <div className="careerchoice">
        <div className="spoilerdiv">
          <Spoiler maxHeight={425} showLabel="Show more" hideLabel="Hide">
            <h1 className="heading">Choosing Your Path.</h1>
            {/* Content here */}

            <Image
              className="spoiler"
              src="https://www.libertystaffing.ca/hubfs/5_Ways_to_Discover_Your_Ideal_Career.jpg"
              height={200}
              alt="Norway"
            />
            <h2>Early Career Planning </h2>
            <p>
              Starting a new career and planning out your future can be a fun,
              exciting time of life. Whether you are entering the adult world
              for the first time or are starting down a new path after many
              years in a different field, getting started may seem like a
              daunting task, but with a few smart steps, you can put yourself in
              a position of advantage. Read on as we explain how to build your
              resume and decide on a career path.
            </p>
          </Spoiler>
        </div>

        {/* spoiler 2 */}

        <div className="spoilerdiv">
          <Spoiler
            maxHeight={425}
            showLabel="Show more"
            hideLabel="Hide details"
            expanded={expanded}
            onExpandedChange={setExpanded}
          >
            <h1>Upgrade Your Career.</h1>
            {/* Spoiler content */}
            <Image
              className="spoiler"
              src="https://www.ere.net/_next/image?url=https%3A%2F%2Fapi.eremedia.com%2Fwp-content%2Fuploads%2F2023%2F04%2Fbigstock-Create-Stair-To-Success-Growt-466731595.jpg&w=3840&q=75"
              height={200}
              alt="Norway"
            />
            <h2>Mid Career Change</h2>
            <p>
              If you’ve reached the mid–career level, you’ve worked for around
              10 years, if not longer. It’s not unreasonable that you may feel a
              desire for change. … Often, mid–career professional workers are
              promoted into management positions that are less personally
              satisfying than when they worked directly on projects.
            </p>
          </Spoiler>
        </div>

        {/* spoiler 3 */}

        <div className="spoilerdiv">
          <Spoiler
            maxHeight={425}
            showLabel="Show more"
            hideLabel="Hide details"
            expanded={expanded}
            onExpandedChange={setExpanded}
          >
            <h1>Post Study Plan.</h1>
            {/* Spoiler content */}
            <Image
              className="spoiler"
              src="https://myfuture.edu.au/images/default-source/social-icons/myfuture-home-og.png?sfvrsn=19e15d8_0"
              height={200}
              alt="Norway"
            />
            <h2>Skills & Career Pathways.</h2>
            <p>
              While graduation signifies the end of an era many students can be
              left wondering, ‘what’s next?’ There are a number of routes you
              can take after university – and everyone’s journey will be
              different. You could search for a graduate job, enrol on a
              postgraduate course or set up your own business. If you’d like to
              gain more experience before making a decision you could volunteer,
              intern or travel the world on a gap year.
            </p>
          </Spoiler>
        </div>
      </div>

      <div className="buttonlinks">
        <Group className="careerbuttons">
          <div>
            <Paper className="paper">
              <IconCloudComputingFilled />
              <Link to="/home">
                <Button variant="default">IT</Button>
              </Link>
            </Paper>
          </div>

          <div>
            <Paper className="paper">
              <IconHeartbeat stroke={2} />
              <Link to="/home">
                <Button variant="default">HEALTH</Button>
              </Link>
            </Paper>
          </div>

          <div>
            <Paper className="paper">
              <IconBusinessplan stroke={2} />
              <Link to="/home">
                <Button variant="default">BUSINESS</Button>
              </Link>
            </Paper>
          </div>
          <div>
            <Paper className="paper">
              <IconAbacus stroke={2} />
              <Link to="/home">
                <Button variant="default">MANAGEMENT</Button>
              </Link>
            </Paper>
          </div>

          <div>
            <Paper className="paper">
              <IconBallpen stroke={2} />
              <Link to="/home">
                <Button variant="default">EDUCATION</Button>
              </Link>
            </Paper>
          </div>

          <div>
            <Paper className="paper">
              <IconMovie stroke={2} />
              <Link to="/home">
                <Button variant="default">ENTERTAINMENT</Button>
              </Link>
            </Paper>
          </div>

          <div>
            <Paper className="paper">
              <IconShovelPitchforks stroke={2} />
              <Link to="/home">
                <Button variant="default">AGRICULTURE</Button>
              </Link>
            </Paper>
          </div>

          <div>
            <Paper className="paper">
              <IconHospital stroke={2} />
              <Link to="/home">
                <Button variant="default">HOSPITALLITY INDUSTRY</Button>
              </Link>
            </Paper>
          </div>
        </Group>
      </div>

        <div className="qoute">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-stylish-3d-male-cartoon-with-glasses-and-vibrant-yellow-orange-polo-image_13510622.png"
            alt=""
          />
          <Paper shadow="xl" radius="md" withBorder p="xl">
            <Text>
              "I've missed more than 9,000 shots in my career. I've lost almost
              300 games. 26 times, I've been trusted to take the game-winning shot
              and missed. I've failed over and over and over again in my life. And
              that is why I succeed." —Michael Jordan
            </Text>
          </Paper>
        </div>
      {/* <Routes>
        <Footer />
      </Routes> */}

      {/* <div>
        <div className="footer">
          <div className="footertext">
            <p>
              Lorem ipsum dolor, nostrum ducimus sint id eos incidunt laboriosam
              quaerat.
            </p>
          </div>
          <div>
            <ul className="footerlinks">
              <h5>Company.</h5>
              <Link>
                <li>AboutUs</li>
              </Link>
              <Link>
                <li>NewsFeed</li>
              </Link>
              <Link>
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="footerlinks">
              <h5>Support.</h5>
              <Link>
                <li>Pricing</li>
              </Link>
              <Link>
                <li>Analytics</li>
              </Link>
              <Link>
                <li>first</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="footerlinks">
              <h5>Contact.</h5>
              <Link>
                <li>+265 - 70707099</li>
              </Link>
              <Link>
                <li>info@example</li>
              </Link>
              <Link>
                <li>Kampala, Uganda.</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer">
          <p>Copyright &copy; 2025 . All rights reserved.</p>
          <p className="tandc">Terms & Conditions</p>
        </div>
      </div> */}
    </MantineProvider>
  );
}

export default Home;
