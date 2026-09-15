import React, { useState } from "react";

const h = React.createElement;

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return h(
    "section",
    {
      id: "contact",
      className: "section-container",
    },

    h(
      "div",
      {
        className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
      },

      h(
        "div",
        { className: "bento-card p-7 lg:p-10" },

        h("span", { className: "section-label" }, "Get In Touch"),

        h(
          "h2",
          { className: "section-title" },
          "Let's build something ",
          h("span", { className: "gradient-text" }, "amazing."),
        ),

        h(
          "p",
          {
            className: "mt-5 text-sm leading-7 text-white/40",
          },
          "Have a project in mind or just want to say hello? NEXORA LABS is always open to new ideas and collaborations.",
        ),

        h(
          "div",
          { className: "mt-8 space-y-3" },

          ["Email", "GitHub", "LinkedIn"].map((item) =>
            h(
              "div",
              {
                key: item,
                className:
                  "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-violet-400/30",
              },

              h(
                "div",
                {
                  className:
                    "flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300",
                },
                "↗",
              ),

              h(
                "div",
                null,
                h("p", { className: "text-xs text-white/30" }, item),
                h(
                  "p",
                  { className: "mt-1 text-sm text-white/70" },
                  item === "Email"
                    ? "hello@nexoralabs.dev"
                    : `NEXORA LABS / ${item}`,
                ),
              ),
            ),
          ),
        ),
      ),

      h(
        "form",
        {
          onSubmit: submit,
          className: "bento-card p-7 lg:p-10",
        },

        h(
          "div",
          { className: "grid gap-5 sm:grid-cols-2" },

          h(
            "label",
            { className: "block" },
            h("span", { className: "input-label" }, "Your Name"),
            h("input", {
              required: true,
              type: "text",
              placeholder: "Enter your name",
              className: "input-field",
            }),
          ),

          h(
            "label",
            { className: "block" },
            h("span", { className: "input-label" }, "Your Email"),
            h("input", {
              required: true,
              type: "email",
              placeholder: "Enter your email",
              className: "input-field",
            }),
          ),
        ),

        h(
          "label",
          { className: "mt-5 block" },
          h("span", { className: "input-label" }, "Message"),
          h("textarea", {
            required: true,
            rows: 7,
            placeholder: "Tell me about your project...",
            className: "input-field resize-none",
          }),
        ),

        h(
          "button",
          {
            type: "submit",
            className:
              "mt-6 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.3)]",
          },
          sent ? "Message Sent ✓" : "Send Message →",
        ),
      ),
    ),
  );
}

export default Contact;
