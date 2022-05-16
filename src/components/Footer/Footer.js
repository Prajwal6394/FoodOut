import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <h3>FoodOut</h3>
        <p>
          FoodOut is a progressive web app to order contactless food while
          maintaining proper hygeine
        </p>
        <ul class="socials">
          <li>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <div class="footer-bottom">
          <p>
            copyright &copy;2021 <a href="#">FoodOut Team</a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
