import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import useAppContext from '../../hooks/useAppContext';
import useAuthContext from '../../hooks/useAuthContext'

const ChatRoom = () => {
    const { authTokens, loading } = useAuthContext()
    const { ngo } = useAppContext();

    const handleJoinClick = async (event, name) => {
        let ngoName = {
            name: name
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(ngoName)
        }

        let response = await fetch("http://localhost:8000/chatroom/checkview", requestOptions);
        let data = await response.json();

        if (response.status === 200) {
            const { redirect } = data;
            window.open(`http://127.0.0.1:8000${redirect}`, '_blank')
            return; 
        }

        toast.error("Something Went Wrong!");
    }

    if (ngo) {
        return (
            <>
                <main className="h-screen mt-1 py-8 bg-alabaster">
                    <h1 className="w-max mx-auto font-roboto-slab text-4xl text-theme-text-primary font-semibold">All Available Chatrooms</h1>
                    <div className="w-11/12 max-w-6xl mt-8 mx-auto flex flex-col gap-4">
                        {(ngo).map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white shadow-md rounded">
                                    <div className="flex-1 flex flex-col text-theme-text-secondary">
                                        <h2 className="text-xl text-theme-text-primary font-opensans uppercase font-semibold">{item.name}</h2>
                                        <p className="">{item.description}</p>
                                    </div>
                                    <button onClick={(event) => handleJoinClick(event, (item.name))} className="bg-theme-green-dark px-3 py-2 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white">Join Room</button>
                                </div>
                            )
                        })}
                    </div>
                </main>
            </>
        )
    } else {
        <div className="">Loading...</div>
    }
}

export default ChatRoom