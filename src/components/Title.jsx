import PropTypes from "prop-types";

const Title = ( { text, small }) => {
  // Agregando el estilo al al objeto h3
const subHeadingStyles = {
  color : "green",
  textDecoration: "underline",
  margin: 10,
}

text.length > 4 ? subHeadingStyles.color = "green" : subHeadingStyles.backgroundColor = "salmon"


  return (
    <>
        <h1 style={{color: "yellow", backgroundColor: "black"}}>{text}</h1>
        <h3 style={subHeadingStyles}>{small}</h3>
    </>
  )
}





// Propiedades por defecto
Title.defaultProps = {
    text: "Adm",
    small: "App",
}

// Define tipos de parámetros
Title.propTypes = {
    text : PropTypes.string,
    small : PropTypes.string
}

export default Title