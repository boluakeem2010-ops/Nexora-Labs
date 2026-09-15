import React from "react";
import { projects } from "./Portfolio";

const h = React.createElement;

function Projects() {
  return h(
    "section",
    {
      id: "projects",
      className: "section-container",
    },

    h(
      "div",
      { className: "mb-10 flex items-end justify-between gap-5" },

      h(
        "div",
        null,
        h("span", { className: "section-label" }, "Selected Work"),
        h(
          "h2",
          { className: "section-title" },
          "Projects that ",
          h("span", { className: "gradient-text" }, "speak."),
        ),
      ),

      h(
        "span",
        {
          className: "hidden text-xs text-white/30 sm:block",
        },
        "01 — 03",
      ),
    ),

    h(
      "div",
      {
        className: "grid gap-5 lg:grid-cols-2",
      },

      projects.map((project, index) =>
        h(
          "article",
          {
            key: project.title,
            className: `project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition duration-700 hover:-translate-y-2 hover:border-violet-400/30 ${
              index === 0 ? "lg:row-span-2" : ""
            }`,
          },

          h(
            "div",
            {
              className:
                "project-preview relative mb-6 min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-950 via-[#080b18] to-cyan-950",
            },

            h("div", {
              className:
                "absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[30px] border border-violet-400/30 bg-violet-500/10 transition duration-700 group-hover:rotate-[135deg] group-hover:scale-125",
            }),

            h("div", {
              className:
                "absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 blur-[1px] transition duration-700 group-hover:scale-150",
            }),

            h(
              "span",
              {
                className:
                  "absolute left-5 top-5 text-xs font-bold text-white/30",
              },
              project.number,
            ),

            h(
              "span",
              {
                className:
                  "absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-white/50 backdrop-blur",
              },
              project.category,
            ),
          ),

          h(
            "div",
            null,

            h(
              "div",
              { className: "flex items-center justify-between" },

              h(
                "h3",
                {
                  className:
                    "text-2xl font-bold text-white transition group-hover:text-violet-300",
                },
                project.title,
              ),

              h(
                "span",
                {
                  className:
                    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-500 group-hover:rotate-45 group-hover:border-violet-400/50",
                },
                "↗",
              ),
            ),

            h(
              "p",
              {
                className: "mt-3 max-w-xl text-sm leading-6 text-white/40",
              },
              project.description,
            ),

            h(
              "div",
              { className: "mt-5 flex flex-wrap gap-2" },
              project.tags.map((tag) =>
                h(
                  "span",
                  {
                    key: tag,
                    className:
                      "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-white/40",
                  },
                  tag,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}

export default Projects;
