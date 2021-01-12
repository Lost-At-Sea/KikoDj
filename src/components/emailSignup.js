import React from "react";
import "./emailSignup.css";
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MyGatsbyComponent extends React.Component {
  state = {
    email: '',
    message: ''
  };

  updateFailedSignupMessage = () => {
    if(this.state.message !== 'Thank you for subscribing!') {
      this.setState({message: 'This email is already subscribed to the mailing list!'})
    }
  }

  handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
          [name]: value
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ message: result.msg });
    //console.log('signup message: ', this.state.message);
    this.updateFailedSignupMessage();
  };

  render () {
    return (
      <div className="emailSignup">
        <h2>Stay Up To Date!</h2>
        <h5 className="signupMessage">{this.state.message}</h5>
        <form onSubmit={this.handleSubmit}>
          <input className="subscribe-email"
            type="email"
            name="email"
            placeholder="Enter Email Address..."
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}