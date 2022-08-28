import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

export const Navbar = () => {
  const {state, dispatch} = useContext(AppContext);
  return (
    <div className={styles.navbar}>
      <Link to="/login">
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
        width="10rem"
      >
        Search
      </Button>
      <Button
        as="a"
        href="https://api.whatsapp.com/send?phone=919930088522"
        target="_blank"
        border="2px"
        height="2rem"
        leftIcon={<AiOutlineWhatsApp style={{ color: "green" }} />}
        colorScheme="green"
        variant="outline"
      >
        Chat
      </Button>
      <Button height="2rem" border="2px" colorScheme="teal" variant="outline">
        Start a FundRaiser
      </Button>
      {!state.isAuth? <Button  variant="ghost"><Link to='/login'>Sign in</Link></Button>: "Welcome Shubham"}
      {state.isAuth&& <Button onClick={() => dispatch({type: 'logout'})}>Logout</Button>}
      
    </div>
  );
};
