import React, {Component} from 'react'


class Signup extends Component {
  render(){
    return (
      <div>
        <h3> Sign up here </h3>
        <form>
          <label>
            <input type="text" placeholder="email" id="email" name="email"/> <br/>
          </label>

          <label>
            <input type="text" placeholder="username" id="username" name="username"/> <br/>
          </label>

          <label>
            <input type="text" placeholder="password"id="password" name="password"/> <br/>
          </label>
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default Signup;
