function Head() {
  return (
    <div>
      <img src = "./images/Ezecheil_k.png" className="profile-pic" />
      <div className="main">
        <h3>Kitwana Ezechiel</h3>
        <h4>Front-end-developer</h4>
        <span className="small">kitwanasheb.website</span>
        <div className = "buttons">
          <button className="email"><i className="fa fa-envelope" aria-hidden="true"></i> Email</button>
          <button className="linkedin"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</button>
        </div>
        <div className="description">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking 
            for new things to learn.</p>
          <h3>Interets</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
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