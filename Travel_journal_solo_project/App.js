import React from "react"
import Nav from "./components/Nav"
import Place from "./components/Place"
import data from "./data"

function App() {
    const placeElements = data.map(item => {
        return (
            <Place 
                key={item.id}
                {...item}
            />
        ) 
    })
    return (
        <div>
            <Nav />
            {placeElements}
        </div>
    )
}

export default App