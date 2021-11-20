import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                        <h3 className="registerLogo">InterConnect</h3>
                        <span className="registerDiscription">
                        InterConnect helps you connect and share with the people in your life. 
                        </span>
                    
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="First name" type="text"className="registerInput" />
                        <input placeholder="Surname" className="registerInput" />
                        <input placeholder="Mobile number or Email address " className="registerInput" />
                        <input placeholder="New password" className="registerInput" />
                        <button className="registerButton">Sign up</button>
                        
                        <button className="registerCreateButton">Login to your account</button>.
                    </div>
                </div>
            </div>
        </div>
    )
}