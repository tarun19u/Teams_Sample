export default function ChatList({ chats, loading, error, onSelect }) {
    if (loading) return <div className="w-1/4 p-4">Loading chats...</div>;
    if (error) return <div className="w-1/4 p-4 text-red-500">Error loading chats</div>;

    return (
        <div className="w-1/4 bg-white border-r overflow-auto">
            {chats.map(chat => (
                <div
                    key={chat.id}
                    className="p-4 border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() => onSelect(chat.id)}
                >
                    <div className="font-semibold">{chat.name}</div>
                    <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
                </div>
            ))}
        </div>
    );
}
