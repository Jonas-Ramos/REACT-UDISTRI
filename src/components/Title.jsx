
const Title = ( props) => {
  return (
    <>
        <h1>{props.text}</h1>
        <h3>{props.small}</h3>
    </>
  )
}

Title.defaultProps = {
    text: "Admin de Tareas",
    small: "App"
}

export default Title