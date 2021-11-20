import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                        <h3 className="loginLogo">InterConnect</h3>
                        <span className="loginDiscription">
                        InterConnect helps you connect and share with the people in your life. 
                        </span>
                    
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email address or phone number" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginCreateButton">Create a New Account</button>
                    </div>
                    <div className="loginCreatePage">
                        <a href="#" className="loginCreatePageLink">Create a Page </a>
                        <span className="loginCreatePageText">for a celebrity, brand or business. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}