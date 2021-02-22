import React from 'react'
import ReactDOM from "react-dom"

export default function App(): JSX.Element {
    const sum = (a:number, b:number):number => {
        return a + b
    }
    return (
        <div>
            Hello!! {sum(1,15)}
        </div>
    )
}

const root = document.getElementById("app-root")

ReactDOM.render(<App />, root)