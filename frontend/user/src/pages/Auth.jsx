import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Auth = () => {
    const [role, setRole] = useState("user"); // user / counsellor
    const [authType, setAuthType] = useState("login"); // login / signup

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-100 to-blue-50 p-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl"
            >
                <Card className="shadow-xl border rounded-2xl backdrop-blur-lg bg-white/80">
                    <CardHeader>
                        <CardTitle className="text-center text-3xl font-bold">
                            MindSpark – Authentication
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        {/* Tabs for Login / Signup */}
                        <Tabs defaultValue="login" onValueChange={(v) => setAuthType(v)}>
                            <TabsList className="grid grid-cols-2 w-full">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>

                            {/* Role Toggle */}
                            <div className="flex justify-center mt-6 mb-3 gap-3">
                                <Button
                                    variant={role === "user" ? "default" : "outline"}
                                    onClick={() => setRole("user")}
                                >
                                    Normal User
                                </Button>
                                <Button
                                    variant={role === "counsellor" ? "default" : "outline"}
                                    onClick={() => setRole("counsellor")}
                                >
                                    Counsellor
                                </Button>
                            </div>

                            {/* Login Form */}
                            <TabsContent value="login">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-4 mt-4"
                                >
                                    <Input placeholder="Email" type="email" />
                                    <Input placeholder="Password" type="password" />

                                    {/* Extra Fields only for counsellor login */}
                                    {role === "counsellor" && (
                                        <Input
                                            placeholder="Counsellor ID"
                                            className="border-blue-300"
                                        />
                                    )}

                                    <Button className="w-full mt-3">
                                        Login as {role === "user" ? "User" : "Counsellor"}
                                    </Button>
                                </motion.div>
                            </TabsContent>

                            {/* Signup Form */}
                            <TabsContent value="signup">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-4 mt-4"
                                >
                                    <Input placeholder="Full Name" />
                                    <Input placeholder="Email" type="email" />
                                    <Input placeholder="Password" type="password" />

                                    {role === "counsellor" && (
                                        <>
                                            <Input placeholder="Experience (in years)" />
                                            <Input placeholder="Specialization (Anxiety, PTSD…)" />
                                        </>
                                    )}

                                    <Button className="w-full mt-3">
                                        Create {role === "user" ? "User" : "Counsellor"} Account
                                    </Button>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default Auth;
