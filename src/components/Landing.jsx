import Contact from "./Contact";
import Info from "./Info";
import PropTypes from "prop-types";
import Projects from "./Projects";

function Landing({ isEnglish, setIsEnglish, changeLanguage }) {
  return (
    <section className="section--background">
      <div className="section--container">
        <h1 className="section--container__name">Pilar Rey Rodríguez</h1>
        <h2 className="section--container__aka">
          a.k.a&nbsp;
          <a
            className="section--container__aka--github"
            href="https://github.com/Pi-Rey"
            target="_blank"
          >
            Pi-Rey <i className="fa-brands fa-github"></i>
          </a>
        </h2>
      </div>
      <Info
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
        changeLanguage={changeLanguage}
      />
      <Projects />
      <Contact />
    </section>
  );
}

Landing.propTypes = {
  isEnglish: PropTypes.bool,
  setIsEnglish: PropTypes.func,
  changeLanguage: PropTypes.func,
};
export default Landing;
