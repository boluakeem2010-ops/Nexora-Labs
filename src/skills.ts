import React from "react";
import { skills } from "./Portfolio";

const h = React.createElement;

function Skills() {
  const icons = ["◈", "◇", "JS", "TS", "⚛", "≈", "◆", "◉", "F", "⌘"];

  return h(
    "section",
    {
      id: "skills",
      className: "section-container",
    },

    h(
      "div",
      { className: "bento-card p-7 lg:p-10" },

      h(
        "div",
        { className: "flex flex-wrap items-end justify-between gap-5" },

        h(
          "div",
          null,
          h("span", { className: "section-label" }, "My Arsenal"),
          h(
            "h2",
            { className: "section-title" },
            "Technologies I ",
            h("span", { className: "gradient-text" }, "work with."),
          ),
          h(
            "p",
            { className: "mt-4 max-w-xl text-sm text-white/40" },
            "Tools and technologies I use to bring digital ideas to life.",
          ),
        ),

        h(
          "div",
          {
            className:
              "rounded-full border border-violet-400/20 px-4 py-2 text-xs text-violet-300",
          },
          "Always Learning ↗",
        ),
      ),

      h(
        "div",
        {
          className:
            "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
        },

        skills.map((skill, index) =>
          h(
            "div",
            {
              key: skill,
              className:
                "skill-card group flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-violet-500/[0.06] hover:shadow-[0_15px_40px_rgba(124,58,237,0.15)]",
            },

            h(
              "div",
              {
                className:
                  "mb-4 text-3xl font-black text-violet-400 transition duration-500 group-hover:scale-125 group-hover:text-cyan-300",
              },
              icons[index],
            ),

            h("p", { className: "text-xs font-semibold text-white/70" }, skill),
          ),
        ),
      ),
    ),
  );
}

export default Skills;
