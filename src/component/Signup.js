import './Signup.css';
const Signup= () => {

    return (
        <div className='center'>
          <h1>Sign UP</h1> 
          <form method='post'>
            <div className="txt-field">
                <input type="email" required/>
                <span></span>
                <label>Email_id</label>     
            </div>

            <div className="txt-field">
                <input type="mobile_no" required/>
                <span></span>
                <label>Mobile_Number</label>     
            </div>

            <div className="txt-field">
                <input type="password" required/>
                <span></span>
                <label>Password</label>     
            </div>

            <input  className =" login"type="submit" value="Sign_Up" />
          </form>
        </div>
    );
}
export default Signup;