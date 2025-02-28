import {
  AppShell,
  Burger,
  MantineProvider,
  Image,
  Spoiler,
  Accordion,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import UserNavBar from "../components/usernavigation.";
import "../styles/user.css";
import { Link } from "react-router-dom";
import Home from "./home";

function User() {
  const [opened, { toggle }] = useDisclosure();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <MantineProvider>
    //   {isLoggedIn ? (<AppShell
    //     header={{ height: 60 }}
    //     navbar={{
    //       width: 300,
    //       breakpoint: "sm",
    //       collapsed: { mobile: !opened },
    //     }}
    //     padding="md"
    //   >
    //     <AppShell.Header>
    //       <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
    //       <div>
    //         <UserNavBar />
    //       </div>
    //     </AppShell.Header>

    //     <AppShell.Navbar p="md" className="navbar">
    //       Navbar
          
    //       <Avatar src="avatar.png" alt="it's me" />
    //       <Link to="/">ksosmosfos</Link>
    //       <Link to="/">ksosmosfos</Link>
          
    //       <Link to="/">
    //         <p>abcdefgh</p>
    //       </Link>
    //       <Link to="/">
    //         <p>abcdefgh</p>
    //       </Link>
    //       <Link to="/">
    //         <p>abcdefgh</p>
    //       </Link>
    //     </AppShell.Navbar>

    //     <AppShell.Main className="main">
    //       <div className="main1">
    //         Main<h1>SAVED VIDEOS</h1>
    //         <div className="savedvideos">
    //           <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={120}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //           <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={160}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //           <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={160}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //           <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={160}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //         </div>
    //       </div>

    //       <div className="main1">
    //         Main<h1>SAVED VIDEOS</h1>
    //         <div className="savedvideos">
    //           <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={120}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //           <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={160}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //           <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={160}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //           <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
    //             {/* Content here */}

    //             <Image
    //               src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //               height={160}
    //               alt="Norway"
    //             />
    //             <p>
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
    //               quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
    //               ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
    //               amet consectetur adipisicing elit. Dignissimos, sequi culpa!
    //               Recusandae libero tenetur, dicta nobis ea suscipit totam
    //               molestias dolore, quos nam inventore sed animi repudiandae
    //               saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
    //               consectetur, adipisicing elit. Voluptate, aliquid saepe error
    //               quod laborum a ut, maiores cum perferendis libero ipsa nulla.
    //               Voluptatum qui inventore reiciendis, molestiae aliquid
    //               distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
    //               adipisicing elit. Fuga distinctio libero inventore quis culpa,
    //               cupiditate repellendus eum deserunt placeat sed pariatur
    //               deleniti facilis, natus sint iste quisquam eos molestias
    //               cumque!
    //             </p>
    //           </Spoiler>
    //         </div>
    //       </div>
    //     </AppShell.Main>
    //   </AppShell>
    //   ) :(<button
    //       onClick={function () {
    //         setIsLoggedIn(true);
    //       }}
    //     >
    //       Please Login
    //     </button>)}
      
    // </MantineProvider>

<MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>
            <UserNavBar />
          </div>
        </AppShell.Header>

        <AppShell.Navbar p="md" className="navbar">
          Navbar
          
          <Avatar src="avatar.png" alt="it's me" />
          <Link to="/">ksosmosfos</Link>
          <Link to="/">ksosmosfos</Link>
          
          <Link to="/">
            <p>abcdefgh</p>
          </Link>
          <Link to="/">
            <p>abcdefgh</p>
          </Link>
          <Link to="/">
            <p>abcdefgh</p>
          </Link>
        </AppShell.Navbar>

        <AppShell.Main className="main">
          <div className="main1">
            Main<h1>SAVED VIDEOS</h1>
            <div className="savedvideos">
              <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={120}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
            </div>
          </div>

          <div className="main1">
            Main<h1>SAVED VIDEOS</h1>
            <div className="savedvideos">
              <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={120}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
              <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                {/* Content here */}

                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae excepturi deleniti aperiam qui sunt distinctio odit quae
                  quibusdam maiores, magni ducimus dolorem totam fugiat. Quasi
                  ipsum repudiandae eveniet odio quidem?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Dignissimos, sequi culpa!
                  Recusandae libero tenetur, dicta nobis ea suscipit totam
                  molestias dolore, quos nam inventore sed animi repudiandae
                  saepe? Aspernatur, doloribus. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptate, aliquid saepe error
                  quod laborum a ut, maiores cum perferendis libero ipsa nulla.
                  Voluptatum qui inventore reiciendis, molestiae aliquid
                  distinctio dolorem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fuga distinctio libero inventore quis culpa,
                  cupiditate repellendus eum deserunt placeat sed pariatur
                  deleniti facilis, natus sint iste quisquam eos molestias
                  cumque!
                </p>
              </Spoiler>
            </div>
          </div>
        </AppShell.Main>
      </AppShell>
      
      
    </MantineProvider>






  );
}
export default User;
