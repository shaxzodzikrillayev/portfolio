import "./Contact.scss";

import { FaEnvelope, FaGithub, FaTelegramPlane } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    title: "Email",
    text: "shaxzodzikrillayev19@gmail.com",
  },
  {
    icon: FaTelegramPlane,
    title: "Telegram",
    text: "@ZikrillaevShaxzod_tsx",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    text: "shaxzodzikrillayev",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="contact__subtitle">CONTACT</span>
        <h2 className="contact__title">Let's Build Something Amazing</h2>
        <p className="contact__description">
          Have an idea or a project? Feel free to contact me. I'm always open to
          new opportunities and collaborations.
        </p>
        <div className="contact__grid">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <div className="contact__card" key={item.title}>
                <Icon className="contact__icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message" rows={6} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
