import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {

  responseGoole = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <div>
          <div />
          <div />
          <div>
          </div>
          <form>
            <input type="text" id="login" name="login" placeholder="login" />
            <br />
            <input type="text" id="password" name="login" placeholder="password" />
            <input type="submit" value="Log In" />
          </form>
          <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>

        <GoogleLogin
          clientId="84883414437-bk32lfj7tekks0td3khnkbcnnipnl8hl.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoole}
          onFailure={this.responseGoole}
          cookiePolicy={'single_host_origin'}
        />
      </div >
    )
  }
}

export default App