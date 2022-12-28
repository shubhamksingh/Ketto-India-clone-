import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineWhatsApp } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

export const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Box className={styles.navbar}>
      <Link to="/">
        <img
          src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=100&dpr=1.1"
          alt=""
        />
      </Link>
     
     <Box display={{base:'none', lg:'flex'} }  gap='2rem' alignItems={'center'}>
     <Link to="/newfundraiser">
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
        maxWidth="10rem"
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
        <Link to="/newfundraiser">Start a FundRaiser</Link>
      </Button>
     </Box>

      {!state.isAuth ? (
        <Button variant="ghost">
          <Link to="/login">Sign in</Link>
        </Button>
      ) : (
        <Button onClick={() => navigate("/profile")}>Welcome Shubham</Button>
      )}
      {state.isAuth && (
        <Button onClick={() => dispatch({ type: "logout" })}>Logout</Button>
      )}
    </Box>
  );
};
