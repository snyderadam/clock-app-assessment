import React, { Component } from "react";
import JeopardyService from "../../jeopardyService";
import Display from '../display/Display'
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
       this.setState({
        score: this.state.score + this.state.data.value,
      });
    } else {
       this.setState({
        score: this.state.score - this.state.data.value,
      });
    }
    this.getNewQuestion()
  };

  
  render() {
    return(
      <Display 
        question = {this.state.data.question}
        value = {this.state.data.value}
        category = {this.state.data.category.title}
        score = {this.state.score}
        handleSubmit = {this.handleSubmit}
        onChange = {this.handleChange}
        
      />
    )
   
   
    
  }
}
export default Jeopardy;
