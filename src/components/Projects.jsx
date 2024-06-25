import poemLanding from "../images/poeta-landing.png";
import apiLanding from "../images/api-landing.png";
import circleUsage from "../images/circle_usage_internet.png";

function Projects() {
  //TODO: cambiar la categoría "project" por algo más acertado
  //seguir con el formato. Añadir filtro de tipo de proyecto
  const array = [
    //array falso para probar
    {
      name: "¿Qué poema eres hoy?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio nemo eos earum officia sunt non aut dolorem adipisci quia, quam perferendis quaerat quae fugiat, quasi vitae corporis voluptatum delectus.",
      image: poemLanding,
      alt: "página de inicio de la web de poemas",
      url: "https://pi-rey.github.io/que-poeta-eres/#/",
      project: true,
      code: true,
      others: false,
    },
    {
      name: "API Rest",
      desc: " Veniam eveniet ut laboriosam tempore temporibus ab molestiae quae adipisci. Adipisci, laborum ipsum. Asperiores, autem? Suscipit officia nisi quam magnam, velit commodi doloremque deserunt, harum minus hic sapiente optio temporibus!",
      image: apiLanding,
      alt: "front-end básico para hacer CRUD a una API",
      url: "https://github.com/Pi-Rey/modulo-4-evaluacion-final-bpw-Pi-Rey",
      project: false,
      code: true,
      others: false,
    },
    {
      name: "Web accessibility and people with visual impairments",
      desc: "  Officia est maxime cumque soluta laborum doloribus atque quo perspiciatis illo vel ipsa quasi animi iure, suscipit saepe facilis aperiam voluptatem amet provident odit sint. Quos, natus! A, ut voluptates!",
      image: circleUsage,
      alt: `Esquema presente en la publicación. Representa el ciclo de uso del internet y tiene tres partes: "assistive technologies", "educational support" y "experience"`,
      url: "https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-480510",
      project: false,
      code: false,
      others: true,
    },
    // {
    //     name: "proyecto3",
    //     desc: " Minima sit reprehenderit porro nostrum officia odio voluptates tempora, possimus numquam, cum consequuntur vitae magni cumque exercitationem quibusdam beatae sint in, alias facere dolore! Aliquid quia nulla amet deserunt illum.",
    //     image:
    //       "https://images.ctfassets.net/i01duvb6kq77/11DmQUt3xqifmn8Q9ut9HK/0a12c8a1780c666060acfa1366de2df7/Europeana.eu-2022711-urn_repox_ist_utl_pt_MH_385980-1467cf3f9bb9381f607a6cb8f842c308.jpg?w=1100&q=80&fm=webp",
    //     alt: "dsfwgrwggw",
    //     project: false,
    //     code: false,
    //     others: true,
    //   },
  ];

  const addType = (item) => {
    if (item.project) {
      return "project";
    } else if (item.code) {
      return "code";
    } else if (item.others) {
      return "others";
    }
  };

  const html = array.map((item, i) => {
    return (
      <article className={`projectslist--item ${addType(item)} `} key={i}>
        <a href={item.url} target="_blank">
          <h4 className={`projectslist--item__name `}>{item.name}</h4>

          <div className="projectslist--item__div">
            <img src={item.image} alt={item.alt} />
          </div>
          <p className="projectslist--item__desc">{item.desc}</p>
          <p className="projectslist--item__type">type: {addType(item)}</p>
        </a>
      </article>
    );
  });

  return (
    <section id="projects" className="projectslist">
      {html}
    </section>
  );
}

export default Projects;
