import React, { useState, useEffect } from "react";
import "./login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleSignUpClick = () => {
    setIsSignInActive(false);
  };

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    // Clean up event listeners when the component unmounts
    return () => {
      signUpButton.removeEventListener("click");
      signInButton.removeEventListener("click");
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Router>
      <div>
        <h2>USER</h2>
        <div className="container" id="container">
          <Route path="/login">
            <div className={`form-container ${isSignInActive ? "sign-in-container" : "sign-up-container"}`}>
              <form action="#">
                <h1>Sign in</h1>
                {/* ... Rest of your sign-in form */}
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </form>
            </div>
          </Route>
          <Route path="/signup">
            <div className={`form-container ${isSignInActive ? "sign-in-container" : "sign-up-container"}`}>
              <form action="#">
                <h1>Create Account</h1>
                {/* ... Rest of your sign-up form */}
                <Link to="/login">Already have an account? Sign In</Link>
              </form>
            </div>
          </Route>
          <div className="overlay-container">
            {/* ... Rest of your overlay code */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
