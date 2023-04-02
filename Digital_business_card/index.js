// import React from 'react';
// import ReactDOM from 'react-dom';

// class Main extends React.Component {
//   render() {
//     return (
//       <h1>My React Solo Project!</h1>
//     );
//   }
// }
function Head() {
  return (
    <div>
      <img src = "./images/Ezecheil_k.png" className="profile-pic" />
      <div>
        <h3>Kitwana Ezechiel</h3>
        <h4>Front-end-developer</h4>
        <span>kitwanasheb.website</span>
      </div>
        <div className = "buttons">
          <button><i className="fa fa-envelope" aria-hidden="true"></i> Email</button>
          <button><i className="fa-brands fa-linkedin-in"></i> LinkedIn</button>
        </div>
        <div className="description">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking 
            for new things to learn.</p>
          <h3>Interets</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <footer className="footer">
          <img src = "images/twitter.png" />
          <img src = "images/facebook.png" />
          <img src = "images/instagram.png" />
          <img src = "images/github.png" />
        </footer>
    </div>
  )
}


ReactDOM.render(<Head />, document.getElementById('root'));