import React from "react";
import ReactDOM from 'react-dom/client';

const SignIn = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(event.target.email.value)
          console.log(event.target.password.value)
          console.log("Redirecting to dashboard in 3s.")
          root.render(
<meta http-equiv="Refresh" content="3; url='/dashboard'" />
          );
        }
        return (
      <div>
        <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Email" /><br></br><br></br>
      <input type="password" name="password" placeholder="Password" /><br></br><br></br>
      
      <input type="submit" value="Submit"></input>
      </form>
      </div>
        );
      }
  
export default SignIn;
