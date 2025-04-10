import { useEffect, useState } from "react";

export default function useMessages(chatId) {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!chatId) return;

        fetch(`http://192.168.0.136:8080/api/chats`)
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [chatId]);

    return { messages, loading, error };
}
