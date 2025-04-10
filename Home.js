import React, { useState } from "react";
import useChats from "../hooks/useChats";

export default function Home() {
    const { chats, loading, error } = useChats();
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/4 bg-white shadow-md p-4 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4 text-purple-700">Chat Groups</h2>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}
                <ul>
                    {chats.map((chat) => (
                        <li
                            key={chat.id}
                            className={`cursor-pointer p-3 mb-2 rounded hover:bg-purple-100 ${
                                selectedChat?.id === chat.id ? "bg-purple-200" : ""
                            }`}
                            onClick={() => setSelectedChat(chat)}
                        >
                            <p className="font-semibold">{chat.name || "Untitled Chat"}</p>
                            <p className="text-sm text-gray-500">
                                {chat.lastMessage || "No messages yet"}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 p-6">
                {selectedChat ? (
                    <>
                        <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                            {selectedChat.name}
                        </h3>
                        <div className="bg-white p-4 shadow rounded">
                            <p className="text-gray-700">
                                <strong>Last Message:</strong> {selectedChat.lastMessage || "N/A"}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="text-gray-400 text-xl flex items-center justify-center h-full">
                        Select a chat to view details
                    </div>
                )}
            </div>
        </div>
    );
}
