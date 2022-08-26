import { Image } from "@chakra-ui/react";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
       <div>
        <div></div>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
       </div>
       
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Image
            src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.1"
            width="400px"
            height="30px"
          />
        </div>
        <div style={{borderTop: '1px solid grey ' , paddingTop: '5px', marginTop: '10px', fontSize:'10px'}}>
          Copyright © 2022 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
          Terms of Use | Privacy Policy | AML Policy | Use of cookies{" "}
        </div>
      </div>
    </div>
  );
};
