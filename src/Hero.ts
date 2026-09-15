import React from "react";

const h = React.createElement;

function Hero() {
  return h(
    "section",
    {
      id: "home",
      className:
        "hero relative flex min-h-screen items-center overflow-hidden px-5 pt-28 lg:px-8",
    },

    h("div", { className: "hero-grid" }),

    h("div", {
      className:
        "absolute left-[10%] top-[25%] h-72 w-72 rounded-full bg-violet-600/20 blur-[120px] animate-pulse-slow",
    }),

    h("div", {
      className:
        "absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px] animate-pulse-slow delay-500",
    }),

    h(
      "div",
      {
        className:
          "relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]",
      },

      h(
        "div",
        { className: "hero-content" },

        h(
          "div",
          {
            className:
              "mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300",
          },
          h("span", {
            className:
              "h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse",
          }),
          "Building the next generation of digital experiences",
        ),

        h(
          "h1",
          {
            className:
              "max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl",
          },
          "Ideas. ",
          h("span", { className: "gradient-text" }, "Code."),
          h("br"),
          "Impact.",
        ),

        h(
          "p",
          {
            className:
              "mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg",
          },
          "NEXORA LABS crafts modern web experiences, scalable digital solutions and interfaces that turn ideas into products.",
        ),

        h(
          "div",
          {
            className: "mt-9 flex flex-wrap gap-4",
          },
          h(
            "a",
            {
              href: "#projects",
              className:
                "magnetic-button group rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(124,58,237,0.3)] transition duration-300 hover:scale-105",
            },
            "Explore My Work ",
            h(
              "span",
              {
                className:
                  "ml-2 inline-block transition group-hover:translate-x-1",
              },
              "→",
            ),
          ),

          h(
            "a",
            {
              href: "#contact",
              className:
                "rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/80 transition duration-300 hover:border-violet-400/50 hover:bg-white/5 hover:text-white",
            },
            "Contact Me",
          ),
        ),

        h(
          "div",
          {
            className: "mt-12 flex items-center gap-5 text-xs text-white/40",
          },
          h("span", null, "GitHub"),
          h("span", null, "LinkedIn"),
          h("span", null, "Instagram"),
          h("span", null, "X"),
        ),
      ),

      h(
        "div",
        {
          className:
            "hero-visual relative mx-auto h-[430px] w-full max-w-[500px] lg:h-[600px]",
        },

        h("div", {
          className:
            "absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20 animate-spin-slow",
        }),

        h("div", {
          className:
            "absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 animate-spin-reverse",
        }),

        h(
          "div",
          {
            className:
              "floating-logo absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[40px] border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 shadow-[0_0_100px_rgba(124,58,237,0.3)] backdrop-blur-xl",
          },
          h(
            "div",
            {
              className: "text-8xl font-black italic gradient-text",
            },
            "N",
          ),
        ),

        h(
          "div",
          {
            className:
              "float-card absolute right-0 top-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl",
          },
          h("p", { className: "text-xs text-white/40" }, "STACK"),
          h(
            "p",
            { className: "mt-2 text-sm font-semibold text-white" },
            "React · TS · Tailwind",
          ),
        ),

        h(
          "div",
          {
            className:
              "float-card absolute bottom-20 left-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl",
          },
          h("p", { className: "text-xs text-white/40" }, "STATUS"),
          h(
            "p",
            {
              className:
                "mt-2 flex items-center gap-2 text-sm font-semibold text-white",
            },
            h("span", {
              className:
                "h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]",
            }),
            "Available for work",
          ),
        ),
      ),
    ),
  );
}

export default Hero;
