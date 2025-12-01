import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { User, Phone, Mail, Edit, Camera } from "lucide-react";

export default function Profile() {
    // Dummy User Data (replace with context later)
    const [user, setUser] = useState({
        name: "Deepak Kumar",
        email: "deepak@example.com",
        phone: "+91 9876543210",
        bio: "A calm mind brings inner strength and confidence.",
        profilePic: "/default-avatar.png",
    });

    const [open, setOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const [editForm, setEditForm] = useState({ ...user });

    // Image Upload Handler
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewImage(url);
            setEditForm({ ...editForm, profilePic: url });
        }
    };

    const handleSave = () => {
        setUser(editForm);
        setOpen(false);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 mt-10">

            {/* -------- TITLE -------- */}
            <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Your Profile ✨
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* ---------- PROFILE CARD ---------- */}
                <Card className="shadow-sm col-span-1">
                    <CardHeader className="text-center">
                        <CardTitle>Your Info</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center">

                        {/* PROFILE PICTURE */}
                        <div className="relative">
                            <img
                                src={user.profilePic}
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover border"
                            />

                            <button
                                onClick={() => setOpen(true)}
                                className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                            >
                                <Camera size={16} />
                            </button>
                        </div>

                        <h2 className="text-xl font-semibold mt-3">{user.name}</h2>
                        <p className="text-slate-500">{user.email}</p>

                        <Button
                            className="mt-4"
                            onClick={() => setOpen(true)}
                        >
                            <Edit size={16} className="mr-2" /> Edit Profile
                        </Button>
                    </CardContent>
                </Card>

                {/* ---------- USER DETAILS ---------- */}
                <Card className="shadow-sm col-span-2">
                    <CardHeader>
                        <CardTitle>Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent>

                        <div className="flex items-center gap-3 mb-4">
                            <User className="text-blue-600" />
                            <p className="text-slate-700">{user.name}</p>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="text-red-600" />
                            <p className="text-slate-700">{user.email}</p>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <Phone className="text-green-600" />
                            <p className="text-slate-700">{user.phone}</p>
                        </div>

                        <p className="font-semibold mt-6 mb-2">Bio</p>
                        <p className="text-slate-600">{user.bio}</p>
                    </CardContent>
                </Card>
            </div>

            {/* ---------- BADGES / STATS ---------- */}
            <h2 className="mt-10 text-2xl font-bold">Your Wellness Stats 🌱</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

                <Card className="p-5 text-center bg-green-50 border-green-200">
                    <h3 className="text-lg font-semibold">Meditation Streak</h3>
                    <p className="text-4xl font-bold text-green-700 mt-2">6 Days</p>
                </Card>

                <Card className="p-5 text-center bg-blue-50 border-blue-200">
                    <h3 className="text-lg font-semibold">Tasks Completed</h3>
                    <p className="text-4xl font-bold text-blue-700 mt-2">24</p>
                </Card>

                <Card className="p-5 text-center bg-purple-50 border-purple-200">
                    <h3 className="text-lg font-semibold">Badges Earned</h3>
                    <p className="text-4xl font-bold text-purple-700 mt-2">4</p>
                </Card>

            </div>


            {/* ----------------- EDIT PROFILE DIALOG ----------------- */}

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">

                        {/* IMAGE UPLOAD */}
                        <div className="flex flex-col items-center">
                            <img
                                src={previewImage || user.profilePic}
                                className="w-24 h-24 rounded-full object-cover border"
                                alt=""
                            />
                            <label className="cursor-pointer mt-2 text-blue-600 underline">
                                Change Photo
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>

                        <Input
                            placeholder="Full Name"
                            value={editForm.name}
                            onChange={(e) =>
                                setEditForm({ ...editForm, name: e.target.value })
                            }
                        />

                        <Input
                            placeholder="Email"
                            value={editForm.email}
                            onChange={(e) =>
                                setEditForm({ ...editForm, email: e.target.value })
                            }
                        />

                        <Input
                            placeholder="Phone Number"
                            value={editForm.phone}
                            onChange={(e) =>
                                setEditForm({ ...editForm, phone: e.target.value })
                            }
                        />

                        <Textarea
                            placeholder="Bio"
                            value={editForm.bio}
                            onChange={(e) =>
                                setEditForm({ ...editForm, bio: e.target.value })
                            }
                        />
                    </div>

                    <DialogFooter>
                        <Button onClick={handleSave}>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}




// import { Button } from "@/components/ui/button";

// export default function Profile() {
//     const { user } = { name: "Deepak Kumar", email: "deepak@gmail.com" };

//     return (
//         <div className="max-w-3xl mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold">Profile</h2>
//             <div className="mt-4 bg-white rounded-lg p-6 border">
//                 <div className="text-slate-700">Name: <strong>{user?.name || "Guest"}</strong></div>
//                 <div className="text-slate-700 mt-2">Email: <strong>{user?.email || "-"}</strong></div>
//                 <div className="mt-4"><Button>Edit Profile</Button></div>
//             </div>
//         </div>
//     );
// }
