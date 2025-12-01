// src/pages/Resources.jsx
import React, { useState } from "react";
import { resources } from "../data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bookmark, Search, Filter, Sparkles } from "lucide-react";

export default function Resources() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState(null);
    const [sortBy, setSortBy] = useState("Newest");
    const [modalData, setModalData] = useState(null);
    const [saved, setSaved] = useState([]);

    const categories = ["All", "Articles", "Videos", "Exercises", "Relaxation", "Tests"];

    const tags = [
        "Anxiety",
        "Stress",
        "Productivity",
        "Mindfulness",
        "Sleep",
        "Self-Esteem",
        "Depression",
    ];

    // Filter + Search Logic
    let filtered = resources.filter((r) => {
        const s = r.title.toLowerCase().includes(search.toLowerCase());
        const c = category === "All" || r.category === category;
        const t = !selectedTag || r.tags.includes(selectedTag);

        return s && c && t;
    });

    // Sort Logic
    if (sortBy === "Newest") filtered.sort((a, b) => b.date - a.date);
    if (sortBy === "Popular") filtered.sort((a, b) => b.views - a.views);
    if (sortBy === "Trending") filtered.sort((a, b) => b.saves - a.saves);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 mt-10">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-4xl font-bold bg-linear-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
                    Explore Wellness Resources
                </h1>
                <p className="text-slate-600 max-w-xl">
                    Evidence-based articles, videos, and tools to help you improve your mental well-being.
                </p>
            </div>

            {/* SEARCH + FILTERS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

                {/* Search */}
                <div className="md:col-span-4 relative">
                    <Input
                        placeholder="Search articles, videos, tools..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-3 pl-10"
                    />
                    <Search className="w-5 h-5 text-slate-500 absolute left-3 top-3" />
                </div>

                {/* Category Filter */}
                <Card className="p-4">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Category
                    </CardTitle>
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

                {/* Tag Filter */}
                <Card className="p-4">
                    <CardTitle className="text-base">Tags</CardTitle>
                    <Separator className="my-2" />
                    <div className="flex flex-wrap gap-2">
                        {tags.map((t) => (
                            <Badge
                                key={t}
                                variant={selectedTag === t ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => setSelectedTag(selectedTag === t ? null : t)}
                            >
                                {t}
                            </Badge>
                        ))}
                    </div>
                </Card>

                {/* Sort */}
                <Card className="p-4">
                    <CardTitle className="text-base flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> Sort By
                    </CardTitle>
                    <Separator className="my-2" />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded p-2 w-full"
                    >
                        <option>Newest</option>
                        <option>Popular</option>
                        <option>Trending</option>
                    </select>
                </Card>

            </div>

            {/* GRID */}
            <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-700">
                {filtered.length} resources found
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((r) => (
                    <Card
                        key={r.id}
                        className="shadow hover:shadow-lg transition cursor-pointer"
                        onClick={() => setModalData(r)}
                    >
                        <img
                            src={r.thumbnail}
                            alt=""
                            className="w-full h-40 object-cover rounded-t"
                        />
                        <CardHeader>
                            <CardTitle className="text-lg">{r.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-500 line-clamp-2">{r.description}</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-slate-600">{r.category}</span>

                                <Bookmark
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSaved((prev) =>
                                            prev.includes(r.id)
                                                ? prev.filter((x) => x !== r.id)
                                                : [...prev, r.id]
                                        );
                                    }}
                                    className={`w-5 h-5 ${saved.includes(r.id) ? "text-yellow-500 fill-yellow-400" : "text-slate-400"
                                        }`}
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* MODAL PREVIEW */}
            <Dialog open={!!modalData} onOpenChange={() => setModalData(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>{modalData?.title}</DialogTitle>
                    </DialogHeader>

                    {modalData && (
                        <div>
                            <img
                                src={modalData.thumbnail}
                                className="w-full rounded-lg my-4"
                                alt=""
                            />
                            <p className="text-slate-600">{modalData.description}</p>

                            <Button className="mt-4 w-full">Open Full Resource</Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}



// // src/pages/Resources.jsx
// import React from "react";
// import { articles } from "../data/dummy";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Resources() {
//     return (
//         <div className="max-w-5xl mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold">Resources</h2>
//             <div className="mt-6 grid gap-4 md:grid-cols-2">
//                 {articles.map(a => (
//                     <Card key={a.id}>
//                         <CardContent>
//                             <h3 className="font-semibold">{a.title}</h3>
//                             <p className="text-slate-600 mt-2">{a.excerpt}</p>
//                             <button className="mt-3 text-sky-600">Read more →</button>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// }
