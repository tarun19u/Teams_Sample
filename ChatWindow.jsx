// src/components/ChatWindow.jsx
export default function ChatWindow({ chatId }) {
    return (
        <div className="flex-1 flex flex-col">
            <div className="bg-blue-50 p-4 border-b font-semibold">
                {chatId ? `Chat ID: ${chatId}` : "Select a chat to start messaging"}
            </div>
            <div className="flex-1 p-4 overflow-auto">
                {chatId ? (
                    <>
                        <div className="mb-2">You: Hello 👋</div>
                        <div className="mb-2">Friend: Hey there!</div>
                    </>
                ) : (
                    <div className="text-gray-400">No chat selected</div>
                )}
            </div>
            <div className="p-2 border-t flex">
                <input
                    type="text"
                    className="flex-1 border px-2 py-1 rounded"
                    placeholder="Type a message..."
                    disabled={!chatId}
                />
                <button
                    disabled={!chatId}
                    className="bg-blue-500 text-white px-3 py-1 rounded ml-2 disabled:opacity-50"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
