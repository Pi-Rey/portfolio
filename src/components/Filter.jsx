import PropTypes from "prop-types";
function Filter({ setInputType, inputType }) {
  return (
    <div className="formsection" id="filter">
    <form
      className="form"
      action=""
      onSubmit={(ev) => ev.preventDefault()}
    >
      <label htmlFor="inputtype" className="form--label">
        ¿Qué tipo de proyecto quieres ver?
      </label>
      <select
        className="form--select"
        name="inputtype"
        id="inputtype"
        onChange={(ev) => setInputType(ev.target.value)}
        value={inputType}
      >
        <option className="form--select__opt" value="">
          Todos
        </option>
        <option className="form--select__opt" value="project">
          Webs
        </option>
        <option className="form--select__opt" value="code">
          Repositorios
        </option>
        <option className="form--select__opt" value="others">
          Otros
        </option>
      </select>
    </form>
    </div>
  );
}

Filter.propTypes = {
  setInputType: PropTypes.func,
  inputType: PropTypes.string,
};
export default Filter;
