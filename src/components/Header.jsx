import Logo from "./Logo";
import Title from "./Title";


const Header = () => {
    return (
        <header>
            <Logo /> 
            {/* <Title text="Task Manager"/> */}
            <Title small="App" />
            {/* <Title text="Admin Works"/> */}
        </header>
    )
}

export default Header;