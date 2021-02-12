import React, {Component} from 'react'


class LogIn extends Component {
  render(){
    return (
      <div>
        <h3> Log In </h3>
        <form>

          <label>
            <input type="text" placeholder="username" id="username" name="username"/> <br/>
          </label>

          <label>
            <input type="text" placeholder="password"id="password" name="password"/> <br/>
          </label>

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
