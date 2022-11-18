import React from 'react'

export const Home = () => {
  return (
    <div>
    <section className="home">
      <div className="dark-overlay">
        <div className="home-inner">
          <h1 className="x-large">Rithum</h1>
          <p className="lead">
            Make beats on the fly, upload to the community
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home;
