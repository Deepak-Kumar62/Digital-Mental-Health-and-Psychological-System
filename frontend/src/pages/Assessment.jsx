import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const questions = [
    {
        id: 1,
        category: "Stress",
        question: "How often do you feel overwhelmed by routine tasks?",
    },
    {
        id: 2,
        category: "Anxiety",
        question: "Do you frequently worry about things you cannot control?",
    },
    {
        id: 3,
        category: "Depression",
        question: "Do you feel low or sad without any clear reason?",
    },
    {
        id: 4,
        category: "Sleep",
        question: "How often do you struggle to sleep or wake up tired?",
    },
    {
        id: 5,
        category: "Motivation",
        question: "Do you find it hard to focus or complete tasks?",
    },
];

const options = [
    { label: "Never", value: 1 },
    { label: "Rarely", value: 2 },
    { label: "Sometimes", value: 3 },
    { label: "Often", value: 4 },
    { label: "Always", value: 5 },
];

export default function Assessment() {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (qid, value) => {
        setAnswers({ ...answers, [qid]: value });
    };

    const progress = (Object.keys(answers).length / questions.length) * 100;

    const calculateMood = () => {
        const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

        if (totalScore <= 10) return "Calm & Stable";
        if (totalScore <= 15) return "Slightly Stressed";
        if (totalScore <= 20) return "Anxious / Overthinking";
        return "Highly Stressed or Depressed";
    };

    const moodResult = calculateMood();

    const moodColor = {
        "Calm & Stable": "text-green-600",
        "Slightly Stressed": "text-yellow-600",
        "Anxious / Overthinking": "text-orange-600",
        "Highly Stressed or Depressed": "text-red-600",
    };

    const moodDescription = {
        "Calm & Stable": "You're doing well! Maintain your routines and self-care habits.",
        "Slightly Stressed": "You may be experiencing mild stress. Consider taking breaks & relaxing.",
        "Anxious / Overthinking":
            "You're showing signs of anxiety. Mindfulness and grounding exercises may help.",
        "Highly Stressed or Depressed":
            "Your responses show high distress. You may benefit from professional counselling.",
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length !== questions.length) {
            alert("Please answer all questions.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="mt-10 flex justify-center py-12 px-4 bg-gray-50 min-h-screen">
            <Card className="w-full max-w-2xl shadow-lg border-none">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Mental Health Assessment
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    {!submitted ? (
                        <>
                            <div className="mb-6">
                                <Progress value={progress} className="h-2 w-full" />
                                <p className="text-right mt-1 text-sm text-gray-500">
                                    {Math.round(progress)}% completed
                                </p>
                            </div>

                            {questions.map((q) => (
                                <motion.div
                                    key={q.id}
                                    className="mb-6 p-4 rounded-xl bg-white shadow-sm border"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p className="font-medium text-gray-700">
                                        {q.id}. {q.question}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-3">
                                        {options.map((opt) => (
                                            <Button
                                                key={opt.value}
                                                variant={
                                                    answers[q.id] === opt.value ? "default" : "outline"
                                                }
                                                onClick={() => handleSelect(q.id, opt.value)}
                                                className="px-4 py-2 rounded-full"
                                            >
                                                {opt.label}
                                            </Button>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                            <Button
                                onClick={handleSubmit}
                                className="w-full mt-6 text-lg py-3"
                            >
                                Submit Assessment
                            </Button>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center"
                        >
                            <h2 className={`text-3xl font-bold ${moodColor[moodResult]}`}>
                                {moodResult}
                            </h2>

                            <p className="mt-4 text-gray-600 text-lg">
                                {moodDescription[moodResult]}
                            </p>

                            <div className="mt-8">
                                <Button onClick={() => setSubmitted(false)}>
                                    Retake Assessment
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
