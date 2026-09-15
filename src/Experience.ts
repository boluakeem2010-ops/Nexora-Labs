import React from "react";
import { experiences } from "./Portfolio";

const h = React.createElement;

function Experience() {
  return h(
    "section",
    {
      id: "experience",
      className: "section-container",
    },

    h(
      "div",
      {
        className: "bento-card overflow-hidden p-7 lg:p-10",
      },

      h("span", { className: "section-label" }, "My Journey"),

      h(
        "h2",
        { className: "section-title" },
        "Experience & ",
        h("span", { className: "gradient-text" }, "growth."),
      ),

      h(
        "p",
        { className: "mt-4 text-sm text-white/40" },
        "A timeline of the journey behind NEXORA LABS.",
      ),

      h(
        "div",
        {
          className: "relative mt-12 ml-3 border-l border-violet-400/20 pl-8",
        },

        experiences.map((item) =>
          h(
            "div",
            {
              key: item.year,
              className: "timeline-item relative pb-12 last:pb-0",
            },

            h("span", {
              className:
                "absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#030712] bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]",
            }),

            h(
              "p",
              {
                className: "text-xs font-semibold text-cyan-400",
              },
              item.year,
            ),

            h(
              "h3",
              {
                className: "mt-2 text-lg font-bold text-white",
              },
              item.title,
            ),

            h(
              "p",
              {
                className: "mt-2 max-w-2xl text-sm leading-6 text-white/40",
              },
              item.description,
            ),
          ),
        ),
      ),
    ),
  );
}

export default Experience;
