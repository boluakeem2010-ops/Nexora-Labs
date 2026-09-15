import React from "react";

const h = React.createElement;

function About() {
  const stats = [
    ["10+", "Projects"],
    ["1+", "Years Learning"],
    ["100%", "Dedication"],
  ];

  return h(
    "section",
    { id: "about", className: "section-container" },
    h(
      "div",
      {
        className:
          "bento-card grid gap-10 p-7 lg:grid-cols-[1fr_0.8fr] lg:p-10",
      },
      h(
        "div",
        null,
        h("span", { className: "section-label" }, "About NEXORA"),
        h(
          "h2",
          { className: "section-title" },
          "Turning ideas into ",
          h("span", { className: "gradient-text" }, "digital reality."),
        ),
        h(
          "p",
          {
            className:
              "mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base",
          },
          "NEXORA LABS is a creative technology brand focused on building clean, responsive and visually memorable digital experiences.",
        ),
        h(
          "p",
          { className: "mt-4 max-w-xl text-sm leading-7 text-white/40" },
          "From landing pages to interactive web applications, every project is an opportunity to combine design, code and creativity.",
        ),
        h(
          "div",
          {
            className:
              "mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]",
          },
          stats.map(([number, label]) =>
            h(
              "div",
              { key: label, className: "p-5" },
              h("p", { className: "text-2xl font-black text-white" }, number),
              h(
                "p",
                {
                  className:
                    "mt-1 text-[10px] uppercase tracking-wider text-white/30",
                },
                label,
              ),
            ),
          ),
        ),
      ),
      h(
        "div",
        {
          className:
            "about-image about-visual relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/60 via-[#070b18] to-cyan-950/40",
        },
        h("div", {
          className:
            "absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[80px]",
        }),
        h("div", { className: "about-orbit about-orbit-one" }),
        h("div", { className: "about-orbit about-orbit-two" }),
        h(
          "div",
          {
            className:
              "about-visual-inner absolute inset-8 flex items-center justify-center rounded-2xl border border-white/10 bg-black/20",
          },
          h(
            "div",
            { className: "about-emblem text-center" },
            h(
              "div",
              {
                className:
                  "mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/30 bg-violet-500/10 text-5xl font-black italic gradient-text",
              },
              "N",
            ),
            h(
              "p",
              { className: "text-sm font-semibold text-white" },
              "Better Code.",
            ),
            h(
              "p",
              { className: "mt-1 text-sm text-white/40" },
              "Bigger Ideas.",
            ),
          ),
        ),
      ),
    ),
  );
}

export default About;
