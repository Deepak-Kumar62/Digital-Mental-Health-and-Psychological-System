import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const moodOptions = [
    { mood: "Happy", emoji: "😄", value: 5, color: "bg-green-400" },
    { mood: "Calm", emoji: "🙂", value: 4, color: "bg-blue-400" },
    { mood: "Neutral", emoji: "😐", value: 3, color: "bg-gray-400" },
    { mood: "Sad", emoji: "☹️", value: 2, color: "bg-yellow-400" },
    { mood: "Stressed", emoji: "😣", value: 1, color: "bg-red-400" },
];

export default function MoodTracker() {
    const [selectedMood, setSelectedMood] = useState(null);
    const [note, setNote] = useState("");
    const [entries, setEntries] = useState([]);

    const addMood = () => {
        if (!selectedMood) return alert("Please select a mood!");

        const newEntry = {
            id: Date.now(),
            mood: selectedMood.mood,
            emoji: selectedMood.emoji,
            value: selectedMood.value,
            note,
            date: new Date().toLocaleDateString(),
        };

        setEntries([newEntry, ...entries]);
        setSelectedMood(null);
        setNote("");
    };

    // Sample weekly data for line chart
    const weeklyData = [
        { day: "Mon", value: 3 },
        { day: "Tue", value: 4 },
        { day: "Wed", value: 2 },
        { day: "Thu", value: 5 },
        { day: "Fri", value: 3 },
        { day: "Sat", value: 4 },
        { day: "Sun", value: 5 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center mt-10">
            <div className="w-full max-w-5xl space-y-10">

                {/* Select Mood */}
                <Card className="shadow-md border-none">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-center">Track Your Mood</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {moodOptions.map((m) => (
                                <motion.button
                                    key={m.mood}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedMood(m)}
                                    className={`flex flex-col items-center p-4 rounded-xl shadow-md cursor-pointer hover:scale-105 transition ${selectedMood?.mood === m.mood ? m.color + " text-white" : "bg-white"
                                        }`}
                                >
                                    <span className="text-4xl">{m.emoji}</span>
                                    <span className="mt-2 font-medium">{m.mood}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Notes */}
                        <Textarea
                            placeholder="Write about your day..."
                            className="mt-6"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />

                        <Button onClick={addMood} className="w-full mt-4 text-lg py-3">
                            Save Mood
                        </Button>
                    </CardContent>
                </Card>

                {/* Weekly Mood Graph */}
                <Card className="shadow-md border-none">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Weekly Mood Graph</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={weeklyData}>
                                <XAxis dataKey="day" />
                                <YAxis domain={[0, 5]} />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Recent Entries */}
                <Card className="shadow-md border-none">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Recent Mood Entries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {entries.length === 0 ? (
                            <p className="text-gray-500 text-center">No mood entries yet.</p>
                        ) : (
                            <div className="space-y-4">
                                {entries.map((entry) => (
                                    <div
                                        key={entry.id}
                                        className="p-4 border rounded-lg bg-white shadow-sm flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-3xl">{entry.emoji}</span>
                                            <div>
                                                <p className="font-medium">{entry.mood}</p>
                                                <p className="text-xs text-gray-500">{entry.date}</p>
                                                {entry.note && (
                                                    <p className="text-sm mt-1 text-gray-600">{entry.note}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
