// 🐨 you'll need to import react and createRoot from react-dom up here

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

import {createRoot} from "react-dom/client";
import React, {useState} from "react"
import '@reach/dialog/styles.css'
import {Dialog} from "@reach/dialog";
import {Logo} from "./components/logo";

const App = () => {
    const [modalState, setModalState] = useState("none")

    return <div>
        <h1>Bookshelf</h1>
        <Logo />
        <button onClick={() => setModalState("login")}>Login</button>
        <button onClick={() => setModalState("register")}>Register</button>
        <Modal modalState={modalState} close={() => setModalState("none")}/>
    </div>;
};

const LoginForm = ({onSubmit, buttonText}) => {
    return <form onSubmit={(e) => onSubmit(new FormData(e.target))}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </div>
        <div>
            <button type="submit">{buttonText}</button>
        </div>
    </form>
}

const Modal = ({modalState, close}) => {
    const isOpen = modalState !== "none"
    const text = `${modalState[0].toUpperCase()}${modalState.slice(1)}`
    return isOpen ? <Dialog isOpen={isOpen} onDismiss={close} aria-label={text}>
        <button onClick={close}>Close</button>
        <h3>{text}</h3>
        <LoginForm buttonText={text} onSubmit={(formData) => console.log(text, Object.fromEntries(formData.entries()))}/>
    </Dialog> : null;
}

export const root = createRoot(document.getElementById("root"))
root.render(<App/>)
