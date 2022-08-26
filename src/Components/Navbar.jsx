import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img
          src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=100&dpr=1.1"
          alt=""
        />
      </Link>

      <Link to="/">
        <p>Browse Fundraisers</p>
      </Link>
      <Link to="/">
        <p>Fundraise For</p>
      </Link>
      <Link to="/">
        <p>How It Works</p>
      </Link>
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <AiOutlineSearch />{" "}
        <Input
          width="15rem"
          placeholder="Search"
          variant="Unstyled"
          _placeholder={{ color: "black" }}
        />
      </div> */}
      <Button
        
        height="2rem"
        leftIcon={<AiOutlineSearch />}
        // colorScheme="green"
              variant="link"
              width='10rem'
      >
        Search
      </Button>
      <Button
        border="2px"
        height="2rem"
        leftIcon={<AiOutlineWhatsApp style={{ color: "green" }} />}
        colorScheme="green"
        variant="outline"
      >
        Email
      </Button>
      <Button height="2rem" border="2px" colorScheme="teal" variant="outline">
        Start a FundRaiser
          </Button>
          <Button variant='ghost'>
              Sign in
      </Button>
    </div>
  );
};
