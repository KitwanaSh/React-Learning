import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [Mode, setMode] = React.useState(false)
    
    function toggleDarkMode() {
        setMode(prevMode => !prevMode)
    }
    return (
        <div className="container">
            <Navbar darkMode={Mode}
            toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={Mode} />
        </div>
    )
}
