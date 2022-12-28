import { Box, Flex, Image } from "@chakra-ui/react";
import { ImLinkedin2 } from "react-icons/im";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "./Footer.module.css";
import { FooterCard } from "../Utiles/FooterCard";
export const Footer = () => {
  return (
    <Box /*className={styles.footer} border='10px solid black'*/ display={{base: 'none', lg:'flex'}} bgColor='#234a49' color='white'>
      < Box m='auto'  /*border='3px solid orange'*/>
        <Box /*style={{ display: "flex" }}*/ display={'flex'} /* border='3px solid green'*/ justifyContent={'center'}>
          <div
            style={{
              display: "flex" ,
              flexDirection: "column"  ,
              gap: "2rem"  ,
              paddingTop: "1rem"  ,
            }}
          >
            <div className={styles.parent_icon}>
              <Image src="https://d1vdjc70h9nzd9.cloudfront.net/images/logo-dark-bg.svg?w=80  " />
              <div className={styles.icons}>
                <AiFillFacebook height="10px  " />
                <ImLinkedin2 /> <AiOutlineTwitter />
                <AiFillYoutube />
                <AiOutlineInstagram /> <AiOutlineWhatsApp />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <h2>1.5M +</h2>
                <span>Followers</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <b>For any queries </b>
              <b>Email: info@ketto.org</b>
              <b>Contact No: +91 9930088522</b>
            </div>
          </div>
          <Flex display="flex">
            {FooterCard(
              false,
              "Causes",
              "Medical crowdfunding",
              "Cancer Crowdfunding",
              "Education Crowdfunding",
              "Creative Fundraising",
              "Child Welfare",
              "Animal Fundraisers",
              "COVID-19 Relief Fund",
            )}
            {FooterCard(false,
              "How it works?",
              "Fundraising for NGOs",
              "Sponsor A Child",
              "Fundraising Tips",
              "What is Crowdfunding?",
              "Corporates",
              "Withdraw Funds",
              "Browse Fundraiser",
            )}
            {FooterCard(false,
              "About Us",
              "Team Ketto",
              "In The News",
              "Our Partners",
              "Careers",
              "Ketto Blog",
              "Success Stories",
            )}
            {FooterCard(true,
              "Support",
              "Medical Finance",
              "FAQs & Help Center",
              "Are Ketto Campaigns Genuine?",
              "Fundraiser Video",
              "Trust & Safety",
              "Plans & Pricing",
              "Contact Us",
            )}
          </Flex>
        </Box>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Image
            src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.1"
            maxW="400px"
            minW={{ base: "200px", md: "25rem" }}
            maxH="30px"
          />
        </div>
        <div
          style={{
            /*borderTop: "1px solid grey ",*/
            paddingTop: "5px",
            marginTop: "10px",
            fontSize: "10px",
          }}
        >
          Copyright © 2022 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
          Terms of Use | Privacy Policy | AML Policy | Use of cookies{" "}
        </div>
      </Box>
    </Box>
  );
};
