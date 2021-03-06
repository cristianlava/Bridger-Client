import React from 'react'
import DashBoard from './Dashboard'

class SignUp extends React.Component {
  state = {
    name: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render(){

    return (
      <div>
        <form onSubmit={console.log}>
          <input type="text" name="name" placeholder="Username" onChange={this.changeHandler} value={this.state.name}/>
          <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} value={this.state.password}/>
          <input type="submit" value="Sign Up"/>
        </form>
        <DashBoard user={this.props.user}/>
      </div>
    )
  }
}

export default SignUp;
