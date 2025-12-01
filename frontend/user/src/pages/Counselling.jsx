// src/pages/Counselling.jsx
import React, { useState } from "react";
import { therapists } from "../data/dummy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

export default function Counselling() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState([600]);
    const [rating, setRating] = useState(0);

    const categories = ["All", "Counselling Psychologist", "Clinical Psychologist", "Student Counselor"];

    // Filtering Logic
    const filtered = therapists.filter((t) => {
        const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || t.spec === category;
        const matchesPrice = t.fee <= price[0];
        const matchesRating = t.rating >= rating;
        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 mt-10">
            <h1 className="text-3xl font-bold text-slate-800">Find the Right Counsellor</h1>
            <p className="text-slate-600 mt-1">Search and filter counsellors based on your needs.</p>

            {/* Search + Filters */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Search */}
                <div className="md:col-span-4">
                    <Input
                        placeholder="Search counsellor by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-3"
                    />
                </div>

                {/* Category Filter */}
                <Card className="p-4">
                    <CardTitle className="text-base">Category</CardTitle>
                    <Separator className="my-2" />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border rounded p-2 w-full"
                    >
                        {categories.map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                </Card>

                {/* Price Filter */}
                <Card className="p-4">
                    <CardTitle className="text-base">Max Fee (₹)</CardTitle>
                    <Separator className="my-2" />
                    <Slider
                        value={price}
                        onValueChange={(v) => setPrice(v)}
                        max={1000}
                        step={50}
                    />
                    <p className="text-sm mt-2 text-slate-600">Up to: ₹{price}</p>
                </Card>

                {/* Rating Filter */}
                <Card className="p-4">
                    <CardTitle className="text-base">Minimum Rating</CardTitle>
                    <Separator className="my-2" />
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="border rounded p-2 w-full"
                    >
                        <option value={0}>All Ratings</option>
                        <option value={4.0}>4.0 ⭐</option>
                        <option value={4.5}>4.5 ⭐</option>
                        <option value={4.8}>4.8 ⭐</option>
                    </select>
                </Card>

                {/* Reset Button */}
                <div className="flex items-end">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setSearch("");
                            setCategory("All");
                            setPrice([600]);
                            setRating(0);
                        }}
                        className="w-full"
                    >
                        Reset Filters
                    </Button>
                </div>
            </div>

            {/* Results */}
            <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-700">
                Showing {filtered.length} counsellor(s)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filtered.map((t) => (
                    <Card key={t.id} className="shadow hover:shadow-md transition">
                        <CardHeader>
                            <CardTitle className="text-lg">{t.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600">{t.spec}</p>
                            <p className="text-sm mt-2 text-slate-600">Consultation Fee: <b>₹{t.fee}</b></p>

                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(t.rating) ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                        fill={i < Math.floor(t.rating) ? "yellow" : "none"}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-slate-700">{t.rating}</span>
                            </div>

                            <Button className="mt-4 w-full bg-sky-600 text-white">
                                Book Appointment
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}








// import React from "react";
// import { therapists } from "../data/dummy";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export default function Counselling() {
//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold">Counselling</h2>
//             <p className="text-slate-600 mt-2">Choose a professional for a confidential session.</p>

//             <div className="mt-6 grid gap-4 md:grid-cols-3">
//                 {therapists.map(t => (
//                     <Card key={t.id}>
//                         <CardHeader><CardTitle>{t.name}</CardTitle></CardHeader>
//                         <CardContent className="text-slate-600">
//                             <div>{t.spec}</div>
//                             <div className="mt-2">Rating: {t.rating} ★</div>
//                             <div className="mt-2">Fee: ₹{t.fee}</div>
//                             <div className="mt-4"><Button>Book</Button></div>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// }
