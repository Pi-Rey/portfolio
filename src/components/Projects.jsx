import PropTypes from "prop-types";

function Projects({projectsArray, isEnglish}) {
  //seguir con el formato. Añadir filtro de tipo de proyecto


  const addType = (item) => {
    if (item.project) {
      return "web"; //cuidado al cambiar estos nombres porque también cambiaría la clase que cada uno aplica
    } else if (item.code) {
      return "repository";
    } else if (item.others) {
      return "other";
    }
  };

  const html = projectsArray.map((item, i) => {
    return (
      <>
      <article className={`projectslist--item ${addType(item)} ${isEnglish ? "hiddenlanguage" : ""}`} key={i}>
        <a href={item.url} target="_blank">

          <div className="projectslist--item__div">
            <img src={item.image} alt={item.alt} />
          </div>
          <h4 className={`projectslist--item__name `}>{item.name}</h4>

          <p className="projectslist--item__desc">{item.desc}</p>
          <p className="projectslist--item__type">type: {addType(item)}</p>
        </a>
      </article>
            <article className={`projectslist--item ${addType(item)} ${isEnglish ? "" : "hiddenlanguage"}`} key={i+1}>
            <a href={item.url} target="_blank">
    
              <div className="projectslist--item__div">
                <img src={item.image} alt={item.alt} />
              </div>
              <h4 className={`projectslist--item__name `}>{item.name}</h4>
    
              <p className="projectslist--item__desc">{item.desc}</p>
              <p className="projectslist--item__type">type: {addType(item)}</p>
            </a>
          </article>
          </>
    );
  });

  return (
    <section id="projects" className="projectslist">
      {html}
    </section>
  );
}

Projects.propTypes = {
    projectsArray: PropTypes.array,
    reset: PropTypes.func,
    inputType: PropTypes.string,
    isEnglish: PropTypes.bool,
}
export default Projects;
