export default function Sidebar({ activeTab, setActiveTab }) {
    const tabs = ["Chats", "Teams"];
    return (
        <div className="w-20 bg-gray-900 text-white flex flex-col items-center py-4 space-y-6">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm ${activeTab === tab ? "text-blue-400" : ""}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
