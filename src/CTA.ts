import React from "react";

const h = React.createElement;

function CTA() {
  return h(
    "section",
    {
      className: "section-container",
    },

    h(
      "div",
      {
        className:
          "cta-box relative overflow-hidden rounded-[32px] border border-violet-400/20 px-7 py-20 text-center",
      },

      h("div", {
        className:
          "absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]",
      }),

      h(
        "div",
        { className: "relative z-10" },

        h("span", { className: "section-label" }, "Ready?"),

        h(
          "h2",
          {
            className:
              "mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl",
          },
          "Let's build the ",
          h("span", { className: "gradient-text" }, "next big thing."),
        ),

        h(
          "p",
          {
            className: "mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40",
          },
          "Have an idea worth bringing to life? Let's turn it into something people remember.",
        ),

        h(
          "a",
          {
            href: "#contact",
            className:
              "magnetic-button mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105",
          },
          "Start a Project →",
        ),
      ),
    ),
  );
}

export default CTA;
