import React, { Component } from "react";
//import our service
import JeopardyService from "../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      formData: {
        answer: "",
      },
      score: 0,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.formData.answer === this.state.data.answer) {
      return this.setState({
        score: this.state.score + this.state.data.value,
      });
    } else {
      return this.setState({
        score: this.state.score - this.state.data.value,
      });
    }
  };
  render() {
    return (
      <div>
        <strong>Question: </strong>
        {this.state.data.question}
        <br />
        <strong>Points: </strong>
        {this.state.data.value}
        <br />
        <strong>Category: </strong>
        {this.state.data.category.title}
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Answer: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="answer"
            value={this.state.formData.answer}
          />
          <br/>
          <button>Submit</button>
          <br />
        </form>
        <h3>Score: {this.state.score}</h3>
      </div>
    );
  }
}
export default Jeopardy;
