// src/pages/Dashboard.jsx
import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Brain, Calendar, MessageSquare } from "lucide-react";

// ----- Dummy Analytics Data -----
const moodData = [
    { day: "Mon", mood: 6 },
    { day: "Tue", mood: 7 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 8 },
    { day: "Fri", mood: 7 },
    { day: "Sat", mood: 6 },
    { day: "Sun", mood: 9 },
];

const stressData = [
    { week: "W1", stress: 50 },
    { week: "W2", stress: 45 },
    { week: "W3", stress: 40 },
    { week: "W4", stress: 30 },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 mt-10">

            <h1 className="text-3xl font-bold text-slate-900">
                Welcome Back 👋
            </h1>
            <p className="text-slate-600 mb-8">
                Here’s your mental wellness overview for this month.
            </p>

            {/* --------- Top Stats Cards --------- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Mood Logs</CardTitle>
                        <Brain className="text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-semibold">32</p>
                        <p className="text-sm text-slate-500">This Month</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Stress Score</CardTitle>
                        <Activity className="text-red-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-semibold">40%</p>
                        <p className="text-sm text-slate-500">Reduced from last month</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Appointments</CardTitle>
                        <Calendar className="text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-semibold">3</p>
                        <p className="text-sm text-slate-500">Upcoming</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle>Forum Activity</CardTitle>
                        <MessageSquare className="text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-semibold">14</p>
                        <p className="text-sm text-slate-500">Replies this week</p>
                    </CardContent>
                </Card>

            </div>

            {/* --------- Mood Tracking Graph --------- */}
            <Card className="mb-10 shadow-sm">
                <CardHeader>
                    <CardTitle>Mood Trend (Weekly)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={moodData}>
                                <XAxis dataKey="day" />
                                <YAxis domain={[0, 10]} />
                                <Tooltip />
                                <Line type="monotone" dataKey="mood" stroke="#3b82f6" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            {/* --------- Stress Level Bar Graph --------- */}
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle>Stress Level (Monthly)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stressData}>
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="stress" fill="#ef4444" radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}





// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//     const user = {
//         name: "Deepak Kumar",
//         email: "deepak@gmail.com"
//     }

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold">Welcome back, {user?.name || "User"} 👋</h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//                 <Card>
//                     <CardHeader><CardTitle>Your Mood Today</CardTitle></CardHeader>
//                     <CardContent className="text-slate-600">Feeling: Calm (7/10)</CardContent>
//                 </Card>

//                 <Card>
//                     <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
//                     <CardContent className="flex flex-col gap-2">
//                         <Link to="/chatbot" className="text-sky-600">Open Chatbot</Link>
//                         <Link to="/counselling" className="text-sky-600">Book Counselling</Link>
//                         <Link to="/activities" className="text-sky-600">Start Activity</Link>
//                     </CardContent>
//                 </Card>

//                 <Card>
//                     <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
//                     <CardContent className="text-slate-600">No recent sessions — try a quick check-in.</CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// }
