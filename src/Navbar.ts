import React, { useState } from "react";
import Logo from "./Logo";

const h = React.createElement;

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return h(
    "header",
    {
      className: "site-header",
    },
    h(
      "nav",
      {
        className: "navbar-inner",
      },
      h(Logo),

      h(
        "div",
        { className: "nav-links" },
        links.map(([label, href]) =>
          h(
            "a",
            {
              key: label,
              href,
              className:
                "nav-link text-xs font-medium text-white/60 transition hover:text-white",
            },
            label,
          ),
        ),
      ),

      h(
        "a",
        {
          href: "#contact",
          className: "nav-cta",
        },
        "Get in Touch",
      ),

      h(
        "button",
        {
          type: "button",
          "aria-label": open ? "Close navigation menu" : "Open navigation menu",
          "aria-expanded": open,
          onClick: () => setOpen(!open),
          className: "menu-button",
        },
        open ? "×" : "☰",
      ),
    ),

    open &&
      h(
        "div",
        {
          className: "mobile-menu",
        },
        links.map(([label, href]) =>
          h(
            "a",
            {
              key: label,
              href,
              onClick: () => setOpen(false),
              className: "mobile-link",
            },
            label,
          ),
        ),
      ),
  );
}

export default Navbar;
