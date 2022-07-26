import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


const HomePage = ({ serverMessage, clientMessage, setClientMessage, sendReceiveMessage, userList, user }) => {

    return (
        <div>
            <h1>
                home Page
            </h1>
            <p>{clientMessage}</p>
            <p>{serverMessage}</p>
            {userList.map((user) => {

                return (
                    <div>
                        <h3>{user.firstName}</h3>
                        <h3>{user.lastName}</h3>
                        <h3>{user.email}</h3>npm start

                    </div>
                )
            })}

            <input placeholder="new client message" onChange={(event) => {
                const dateTime = new Date()
                setClientMessage(`Message: ${event.target.value} at time ${dateTime.toString()}`)

            }} ></input>

            <button onClick={() => sendReceiveMessage()}>send</button>

        </div>

    )
}

export default HomePage