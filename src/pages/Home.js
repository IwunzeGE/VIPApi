import React from "react";
<<<<<<< HEAD
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store/contexts/AppContext";
import { sayHello_a } from "../store/actions/appActions";
import Logout from "./Logout";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
=======
// import { Navbar } from "../components/general";
// import Footer from "../components/general/otherfooter/Footer";
import LandingPage from "../components/landingpage/LandingPage";
import useScreenSize from "../hooks/useScreenSize";
import { Navbar, Footer } from "components/general";
// import Logout from "./Logout";
>>>>>>> 1e03100648e78b1994cf560ebafa2e65cad50046

const Home = () => {
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 690;
  const tablet = screenWidth <= 1024;

  return (
    <div>
      <Navbar mobile={mobile} tablet={tablet} />

      <LandingPage />
      <Footer mobile={mobile} tablet={tablet} />

      {/* <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Logout
        </Button>

        <Logout show={modalShow} onHide={() => setModalShow(false)} />
<<<<<<< HEAD
      </>
      {/* logout button ends  */}

      <h4 style={{ marginTop: "30px" }}>Theme is {theme ? "light" : "dark"}</h4>

      <div>
        <br />
        <h3>Other Links</h3>
        <Link className="btn" to="/dashboard">
          Dashboard
        </Link>
        <Link className="btn" to="/docs">
          Docs
        </Link>
        <Link className="btn" to="/docs/usage">
          Usage
        </Link>
        <Link className="btn" to="/docs/somethingelse">
          Something Else
        </Link>
      </div>
      <Footer />
=======
      </> */}
>>>>>>> 1e03100648e78b1994cf560ebafa2e65cad50046
    </div>
  );
};

export default Home;
