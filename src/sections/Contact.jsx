
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="eyebrow">THAT'S ALL FOR NOW</p>

        <h2>Let's connect.</h2>

        <p className="contact-subtitle">
          Have something on your mind?
        </p>

        <p className="contact-description">
          Whether it's an interesting idea, something you've
          built, or simply a conversation, I'd be happy to
          hear from you.
        </p>

        <a
          href="mailto:aarya.work005@gmail.com"
          className="contact-email"
        >
          Drop me a line ↗
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/aarya095"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/aarya-sarfare/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

    </section>
  );
}

export default Contact;
