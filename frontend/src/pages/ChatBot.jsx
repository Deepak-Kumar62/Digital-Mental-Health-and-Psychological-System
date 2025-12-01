import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

const ChatBot = () => {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi, I'm MindSpark Support Bot 😊. How can I help you today?",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);

        setInput("");
        setLoading(true);

        // ---- ❗ YOU WILL CONNECT YOUR NODE API HERE LATER ---- //
        setTimeout(() => {
            const botReply = {
                sender: "bot",
                text:
                    "I'm here to listen. Could you tell me more about what you're feeling?",
            };
            setMessages((prev) => [...prev, botReply]);
            setLoading(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">MindSpark AI ChatBot</h1>

            <Card className="p-4 h-[75vh] flex flex-col">
                {/* Chat Messages */}
                <div className="grow overflow-y-auto pr-2 custom-scrollbar">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex my-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`px-4 py-2 rounded-2xl max-w-[75%] shadow-md 
                ${msg.sender === "user"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                    }
              `}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {loading && (
                        <div className="flex mb-2">
                            <div className="bg-gray-200 px-4 py-2 rounded-2xl text-gray-700 flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Bot is typing...
                            </div>
                        </div>
                    )}

                    <div ref={chatEndRef} />
                </div>

                {/* Input Box */}
                <div className="mt-4 flex gap-2">
                    <Input
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="grow"
                    />
                    <Button onClick={handleSend} disabled={loading}>
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send />}
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ChatBot;






// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";

// export default function Chatbot() {
//     const [messages, setMessages] = useState([
//         { from: "bot", text: "Hi — how are you feeling today?" },
//     ]);
//     const [input, setInput] = useState("");

//     const send = () => {
//         if (!input) return;
//         setMessages((s) => [...s, { from: "user", text: input }]);
//         setInput("");
//         setTimeout(() => {
//             setMessages((s) => [...s, { from: "bot", text: "Thanks for sharing — remember to breathe." }]);
//         }, 700);
//     };

//     return (
//         <div className="max-w-3xl mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Wellness Chat</h2>

//             <div className="bg-white rounded-lg p-4 h-[60vh] overflow-auto border">
//                 {messages.map((m, i) => (
//                     <div key={i} className={`mb-3 ${m.from === "user" ? "text-right" : "text-left"}`}>
//                         <div className={`inline-block px-4 py-2 rounded ${m.from === "user" ? "bg-sky-100" : "bg-slate-100"}`}>{m.text}</div>
//                     </div>
//                 ))}
//             </div>

//             <div className="mt-4 flex gap-2">
//                 <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Type message..." />
//                 <Button onClick={send}>Send</Button>
//             </div>
//         </div>
//     );
// }
