import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Wind, CheckCircle, Sparkles } from "lucide-react";

// Dummy Activities
const dailyTasks = [
    { id: 1, task: "Morning Deep Breathing (5 min)", done: false },
    { id: 2, task: "Write 3 Positive Affirmations", done: false },
    { id: 3, task: "Drink 2L Water", done: false },
    { id: 4, task: "10-Min Mindful Walk", done: false },
];

const breathingExercises = [
    { title: "4-7-8 Breathing", duration: "2 min" },
    { title: "Box Breathing", duration: "3 min" },
    { title: "Alternate Nostril Breathing", duration: "3 min" },
];

const meditationAudios = [
    { title: "Relaxing Meditation", length: "10 min" },
    { title: "Anxiety Relief Meditation", length: "8 min" },
    { title: "Mindfulness Body Scan", length: "12 min" },
];

const journalPrompts = [
    "What made you feel calm today?",
    "List 3 things you are grateful for.",
    "What emotions did you feel today and why?",
    "Write a message to your future self.",
];

export default function Activities() {
    const [tasks, setTasks] = useState(dailyTasks);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, done: !t.done } : t
            )
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 mt-10">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Wellness Activities 🌿
            </h1>
            <p className="text-slate-600 mb-8">
                Improve your mental wellness with daily exercises, journaling, and meditation.
            </p>

            {/* -------- GRID -------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* ---------- DAILY TASKS ---------- */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" /> Daily Habits
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex justify-between items-center p-3 rounded-lg mb-3 bg-slate-50"
                            >
                                <p
                                    className={`${task.done ? "line-through text-slate-400" : "text-slate-700"
                                        }`}
                                >
                                    {task.task}
                                </p>
                                <Button
                                    variant={task.done ? "secondary" : "default"}
                                    onClick={() => toggleTask(task.id)}
                                >
                                    {task.done ? "Undo" : "Done"}
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* ---------- BREATHING EXERCISES ---------- */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Wind className="text-blue-600" /> Breathing Exercises
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {breathingExercises.map((b, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center p-3 rounded-lg mb-3 bg-slate-50"
                            >
                                <div>
                                    <p className="font-medium text-slate-700">{b.title}</p>
                                    <p className="text-sm text-slate-500">{b.duration}</p>
                                </div>
                                <Button variant="outline">Start</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* ---------- MEDITATION ---------- */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Play className="text-purple-600" /> Guided Meditation
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {meditationAudios.map((m, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center p-3 rounded-lg mb-3 bg-slate-50"
                            >
                                <div>
                                    <p className="font-medium text-slate-700">{m.title}</p>
                                    <p className="text-sm text-slate-500">{m.length}</p>
                                </div>
                                <Button className="flex items-center gap-2">
                                    <Play size={16} /> Play
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* ---------- JOURNAL ---------- */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="text-orange-600" /> Journaling Prompts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {journalPrompts.map((q, i) => (
                            <div
                                key={i}
                                className="p-4 mb-3 rounded-lg bg-slate-50"
                            >
                                <p className="text-slate-700">{q}</p>
                            </div>
                        ))}
                        <Button className="mt-2 w-full">
                            Write in Journal
                        </Button>
                    </CardContent>
                </Card>

            </div>

            {/* ----------- STREAK SECTION ----------- */}
            <div className="mt-10">
                <Card className="shadow-sm bg-linear-to-br from-green-50 to-blue-50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="text-yellow-500" />
                            Your Streak
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-semibold text-slate-800 mb-2">
                            You’ve completed activities for 6 consecutive days! 🔥
                        </p>
                        <p className="text-slate-600">
                            Keep it up! Consistency is the key to wellness.
                        </p>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}



// // src/pages/Activities.jsx
// import React from "react";
// import { activities } from "../data/dummy";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Activities() {
//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold">Activities</h2>
//             <div className="mt-6 space-y-4">
//                 {activities.map(a => (
//                     <Card key={a.id}>
//                         <CardContent>
//                             <h3 className="font-semibold">{a.title} • {a.time}</h3>
//                             <ul className="text-slate-600 mt-2">
//                                 {a.steps.map((s, i) => (<li key={i}>• {s}</li>))}
//                             </ul>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// }
