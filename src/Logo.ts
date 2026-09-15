import React from "react";

const h = React.createElement;

function Logo() {
  return h(
    "a",
    {
      href: "#home",
      className: "logo group",
      "aria-label": "Nexora Labs home",
    },
    h(
      "div",
      { className: "logo-mark" },
      h(
        "svg",
        {
          viewBox: "0 0 100 100",
          className: "logo-icon",
          fill: "none",
          "aria-hidden": true,
        },
        h("path", {
          d: "M20 25L42 12L80 34L58 47L20 25Z",
          fill: "url(#logoGradient)",
        }),
        h("path", {
          d: "M20 25V61L42 75V39L20 25Z",
          fill: "url(#logoGradient2)",
        }),
        h("path", {
          d: "M42 39L80 17V53L58 67V47L42 39Z",
          fill: "url(#logoGradient3)",
        }),
        h(
          "defs",
          null,
          h(
            "linearGradient",
            { id: "logoGradient", x1: "0", y1: "0", x2: "1", y2: "1" },
            h("stop", { offset: "0%", stopColor: "#8B5CF6" }),
            h("stop", { offset: "100%", stopColor: "#06B6D4" }),
          ),
          h(
            "linearGradient",
            { id: "logoGradient2", x1: "0", y1: "0", x2: "1", y2: "1" },
            h("stop", { offset: "0%", stopColor: "#7C3AED" }),
            h("stop", { offset: "100%", stopColor: "#2563EB" }),
          ),
          h(
            "linearGradient",
            { id: "logoGradient3", x1: "0", y1: "0", x2: "1", y2: "1" },
            h("stop", { offset: "0%", stopColor: "#06B6D4" }),
            h("stop", { offset: "100%", stopColor: "#8B5CF6" }),
          ),
        ),
      ),
    ),
    h(
      "div",
      { className: "logo-copy" },
      h("p", null, "NEXORA"),
      h("p", null, "LABS"),
    ),
  );
}

export default Logo;
