import React from "react";
// import { NavLink } from "react-router-dom";
import { Grid, List, MantineProvider } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import "../styles/footer.css";
import { Link, useParams } from "react-router-dom";
function Footer() {
  return (
    <MantineProvider>
      <div>
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
      </div>
    </MantineProvider>
  );
}
export default Footer;
