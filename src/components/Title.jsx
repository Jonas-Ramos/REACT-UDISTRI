import PropTypes from "prop-types";
import "../styles/Title.scss"

const Title = ( { text, small }) => {
  return (
    <div className="title">
        <h2>{text}</h2>
        <h5>{small}</h5>
    </div>
  )
}
// Propiedades por defecto
Title.defaultProps = {
    text: "Task Manager",
    small: "App",
  }
  
  // Define tipos de parámetros
  Title.propTypes = {
    text : PropTypes.string,
    small : PropTypes.string,
}

export default Title