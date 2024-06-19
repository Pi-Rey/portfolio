import Contact from "./Contact";
import Info from "./Info";
import PropTypes from "prop-types";
import Projects from "./Projects";
import Menu from "./Menu";

function Landing({ isEnglish, changeLanguage }) {
  return (
    <section id="landing" className="section--background">
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
      <Menu isEnglish={isEnglish}
        changeLanguage={changeLanguage}/>
      <Info 
        isEnglish={isEnglish}
      />
      <Projects />
      <Contact  />
    </section>
  );
}

Landing.propTypes = {
  isEnglish: PropTypes.bool,

  changeLanguage: PropTypes.func,
};
export default Landing;
