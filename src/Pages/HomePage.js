import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


const HomePage = ({ servermessage, clientmessage, setClientMessage, sendReceiveMessage }) => {
    console.log('hi')
    return (
        <div>
            <h1>
                home Page
            </h1>
            <p>{clientmessage}</p>
            <p>{servermessage}</p>

            <input placeholder="new client message" onChange={(event) => {
                const dateTime = new Date()
                setClientMessage(`Message: ${event.target.value} at time ${dateTime.toString()}`)

            }} ></input>

            <button onClick={() => sendReceiveMessage()}>send</button>

        </div>

    )
}

export default HomePage