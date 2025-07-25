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
        "service_xxx", // ✅ Replace with your real EmailJS Service ID
        "template_xxx", // ✅ Replace with your real EmailJS Template ID
        form.current,
        "public_key_xxx" // ✅ Replace with your real Public Key (not private key)
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error); // ✅ Log the actual error
          setStatus("❌ Failed to send message. Please check console.");
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
