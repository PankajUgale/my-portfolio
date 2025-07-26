import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abc123",       // ✅ Replace with your actual EmailJS Service ID
        "template_xyz456",      // ✅ Replace with your EmailJS Template ID
        form.current,
        "abc1DEFgHIjkLMn"       // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
