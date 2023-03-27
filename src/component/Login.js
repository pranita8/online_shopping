import './Login.css';
const Login = () => {

    return (
        <div className='center'>
          <h1>Sign In</h1> 
          <form method='post'>
            <div className="txt-field">
                <input type="text" required/>
                <span></span>
                <label>UserName</label>     
            </div>

            <div className="txt-field">
                <input type="password" required/>
                <span></span>
                <label>PassWord</label>     
            </div>

            <div className="forgetpass">
                Forget Password
            </div>

            <input  className =" login"type="submit" value="Sign In" />
            <div className="signup_link">
                Not a member?<a href='#'>SignUp</a>
            </div>
          </form>
        </div>
    );
}
export default Login;