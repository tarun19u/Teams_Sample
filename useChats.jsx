import { useEffect, useState } from "react";

export default function useChats() {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await fetch("http://192.168.0.136:8080/api/chats");
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                setChats(data);
            } catch (err) {
                setError("Error loading chats");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchChats();
    }, []);

    return { chats, loading, error };
}
