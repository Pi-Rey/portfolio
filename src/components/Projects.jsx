function Projects() {
  const array = [ //array falso para probar
    {
      name: "proyecto1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio nemo eos earum officia sunt non aut dolorem adipisci quia, quam perferendis quaerat quae fugiat, quasi vitae corporis voluptatum delectus.",
      image:
        "https://images.ctfassets.net/i01duvb6kq77/4U8dFhx5CXTzAluB9cvidF/0a2bd682217cbf42cf2d9ae1d16ceddd/San_Isidro?w=1100&q=80&fm=webp",
      alt: "dsfwgrwggw",
    },
    {
      name: "proyecto2",
      desc: " Veniam eveniet ut laboriosam tempore temporibus ab molestiae quae adipisci. Adipisci, laborum ipsum. Asperiores, autem? Suscipit officia nisi quam magnam, velit commodi doloremque deserunt, harum minus hic sapiente optio temporibus!",
      image:
        "https://images.ctfassets.net/i01duvb6kq77/WLIFaVWkjyfOAKCHmDJve/834db781adfec6cd213fee39781ad517/feature-san-isidro-madrid.jpg?w=1100&q=80&fm=webp",
      alt: "dsfwgrwggw",
    },
    {
      name: "proyecto3",
      desc: " Minima sit reprehenderit porro nostrum officia odio voluptates tempora, possimus numquam, cum consequuntur vitae magni cumque exercitationem quibusdam beatae sint in, alias facere dolore! Aliquid quia nulla amet deserunt illum.",
      image:
        "https://images.ctfassets.net/i01duvb6kq77/11DmQUt3xqifmn8Q9ut9HK/0a12c8a1780c666060acfa1366de2df7/Europeana.eu-2022711-urn_repox_ist_utl_pt_MH_385980-1467cf3f9bb9381f607a6cb8f842c308.jpg?w=1100&q=80&fm=webp",
      alt: "dsfwgrwggw",
    },
    {
      name: "proyecto4",
      desc: "  Officia est maxime cumque soluta laborum doloribus atque quo perspiciatis illo vel ipsa quasi animi iure, suscipit saepe facilis aperiam voluptatem amet provident odit sint. Quos, natus! A, ut voluptates!",
      image:
        "https://images.ctfassets.net/i01duvb6kq77/59wN1QWqnO9m1zW2BtO2Oh/fbdb7c615e4ddaca0d92461a2542a51d/Europeana.eu-2022711-urn_repox_ist_utl_pt_MH_22694-455a77fc3f6965041aa470ee2f171f8e.jpg?w=1100&q=80&fm=webp",
      alt: "dsfwgrwggw",
    },
  ];

  const html = array.map((item, i) => {
    return (
    <article className="projectslist--item" key={i}>
      <h4 className="projectslist--item__name">{item.name}</h4>
     
      <div className="projectslist--item__div" >
        <img src={item.image} alt={item.alt} />
      </div>
      <p className="projectslist--item__desc" >{item.desc}</p>
    </article>
    );
  });


  return (
  <section className="projectslist">
{html}
  </section>
  );
}

export default Projects;
