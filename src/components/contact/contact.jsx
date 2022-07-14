import './contact.scss';
import React, { useRef } from 'react';


const Contact = () => {
    const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      }
    return (
      <section id="contact">

        <h2>Contact me</h2>
        <div className="container contact__container">
       
          <div className="cardBox">
          <div className="letter-image">
          <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context"></div>
          <div className="letter-stamp">
          <div className="letter-stamp-inner"></div>
          </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
          </div>
          </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Full Name" name="user_name" required />
            <input type="text" placeholder="Your Email" name="user_email" required/>
            <button type="submit" className="btn btn-primary"><a href="mailto:arivfer9@gmail.com">Send a message</a></button>
          </form>
        </div>
      </section>
    )
}
  export default Contact