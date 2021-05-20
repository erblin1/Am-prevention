class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = [message.toLowerCase()];
    console.log(lowercase);
    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }else if (lowercase.includes("what is academic misconduct ?") || lowercase.includes("academic misconduct") || lowercase.includes("misconduct")) {
      this.actionProvider.misconduct();
    } else if (lowercase.includes("guidelines") || lowercase.includes("academic guidelines")) {
      this.actionProvider.guideLines();
    } else if (
      lowercase.includes("what is your name ?") ||
      lowercase.includes("name") ||
      lowercase.includes("whats your name")
    ) {
      this.actionProvider.name();
    } else if (lowercase.includes("python") || lowercase.includes("py")) {
      this.actionProvider.handlepyhtonQuiz();
    } else {
      this.actionProvider.unKnown();
    }
  }
}

export default MessageParser;
