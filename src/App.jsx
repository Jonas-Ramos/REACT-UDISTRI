import './App.css'

function App() {
  const nombre = "Jony";
  const edad = 12
  
  return (
  <>
    <h1>Hola {nombre} </h1>
    <p>{edad > 18 ? "Adulto": "Menor de edad"}</p>
  </>)
}

export default App
