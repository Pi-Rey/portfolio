function Contact() {
  return (
    <section id="contact" className="contact">
      <ul className="contact--ul">
        <li>
          <a
            className="contact--ul__a"
            href="mailto:pilar.rrdgz@gmail.com"
            target="_blank"
          >
            email <i className="fa-solid fa-envelope"></i>
          </a>
        </li>

        <li>
          <a
            className="contact--ul__a"
            href="https://github.com/Pi-Rey"
            target="_blank"
          >
            github <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
           className="contact--ul__a"
            href="https://www.linkedin.com/in/pilar-rey-rodriguez/"
            target="_blank"
          >
            linkedin <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
