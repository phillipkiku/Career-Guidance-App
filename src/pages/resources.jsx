import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/resources.css";
import { MantineProvider, Spoiler,Text, Image} from "@mantine/core";

function Resources() {
    // const { id } = useParams();
  const [careers, setCareers] = useState();

  async function fetchCareers() {
    // let apiUrl = `https://dummyjson.com/posts/${id}`;
    let apiUrl = `http://localhost:1337/api/careers`;
    let careers = await fetch(apiUrl);
    let careersData = await response.json();
    setCareers(careersData);
    console.log(careersData);
  }

  useEffect(() => {
    fetchCareers();
  }, []);
  return (
    <MantineProvider>
      <div>
      <ul>
        {careers ? (
          careers.map((careers) => (
            <li>
              <Link to={`/careers/${careers.id}`}>{careers.Profession}</Link>
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>


        <Spoiler maxHeight={180} showLabel="Show more" hideLabel="Hide">
                        {/* Content here */}
                        <h1>{resource.Profession}</h1>
                    
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
      </div>
      

     </MantineProvider>
  );
}
export default Resources;
