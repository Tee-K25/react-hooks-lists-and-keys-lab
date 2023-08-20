import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const allLinks = links.map((link, index) => {
    return (
      <a href={"#" + link} key={index}>
        {link}
      </a>
    );
  });

  return <nav>{allLinks}</nav>;
}

export default NavBar;
