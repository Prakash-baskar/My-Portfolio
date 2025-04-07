import { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (Format: Country Code + Number)
    const phoneNumber = "919384418760"; // Example: 91 for India, XXXXXXXXXX is your number

    // Construct the WhatsApp message
    const whatsappMessage = `Hello! my name is  ${formData.name}.My email is ${formData.email} like to  ${formData.subject}%0A*Message:* ${formData.message}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
   <div id="Contact">
        <div  className="contact-container pt-4">
        <h2 className="contact-title pt-5">Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send to WhatsApp</button>
      </form>
    </div>
   </div>
  );
};

export default Contact;
