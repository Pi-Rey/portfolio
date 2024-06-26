import PropTypes from "prop-types";
function Filter({setInputType, inputType}) {
  return (
    <form action="" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="inputtype"></label>
      <select
        className="inputtype"
        name="inputtype"
        id="inputtype"
        onChange={(ev) => setInputType(ev.target.value)}
        value={inputType}
      >
        <option className="inputtype--opt" value="">
          Selecciona
        </option>
        <option className="inputtype--opt" value="project">
          Webs
        </option>
        <option className="inputtype--opt" value="code">
          Repositorios
        </option>
        <option className="inputtype--opt" value="others">
          Otros
        </option>
      </select>
    </form>
  )
}

Filter.propTypes = {
    setInputType: PropTypes.func,
    inputType: PropTypes.string
}
export default Filter