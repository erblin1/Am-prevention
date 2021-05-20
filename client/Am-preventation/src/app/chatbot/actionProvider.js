class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  misconduct = () => {
    const message = this.createChatBotMessage(
      "Cheating, Plagiarism, Unacceptable Collaboration, Falsification of Data, Records, and Official Documents."
    );
    this.addMessageToState(message);
  };

  guideLines = () => {
    const message = this.createChatBotMessage(
      "Use Fair and academically correct ways you can check what are Misconducts by simply asking"
    );
    this.addMessageToState(message);
  };

  name = () => {
    const message = this.createChatBotMessage(
      "Hello I am your AI support my Name is jack"
    );
    this.addMessageToState(message);
  };
  unKnown = () => {
    const message = this.createChatBotMessage(
      "Hello friend i am extremly sorry you may have to google or ask this question from admin thank you!"
    );
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handlepyhtonQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "python",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
