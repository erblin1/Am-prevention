import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../options/Options";
import Quiz from "../quizes/Quiz";

const config = {
  botName: "Chat Bot",
  initialMessages: [
    createChatBotMessage(`Hello. I am here to assist you`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "python",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "In Python 3, the maximum value for an integer is ?",
            answer:
              "This means there is no explicitly defined limit.",
            id: 3,
          },
          {
            question: "How would you express the hexadecimal value a5 as a base-16 integer constant in Python?",
            answer:
              "0xa5.",
            id: 4,
          },
        ],
      },
    },
  ],
};

export default config;
