// components/ContactsSection.js (updated)
import React from 'react';

const ContactsSection = () => {
  return (
    <section className="contacts" id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactsSection;
