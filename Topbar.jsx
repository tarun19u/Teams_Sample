export default function Topbar() {
    return (
        <div className="h-14 bg-gray-100 px-4 flex items-center justify-between border-b">
            <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 rounded border w-1/3"
            />
            <div className="flex items-center gap-4">
                <span>🔔</span>
                <span>👤 Tarun</span>
            </div>
        </div>
    );
}
