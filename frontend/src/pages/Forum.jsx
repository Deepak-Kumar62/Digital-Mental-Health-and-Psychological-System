// src/pages/Forum.jsx
import React, { useMemo, useState } from "react";
import { initialPosts, currentUser } from "../data/dummy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { PencilIcon, Plus, Heart, Bookmark, Trash2, Search, Star, MessageCircle, Loader2 } from "lucide-react";

/* Utility: timeAgo */
const timeAgo = (ts) => {
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return `${s}s`;
    if (s < 3600) return `${Math.floor(s / 60)}m`;
    if (s < 86400) return `${Math.floor(s / 3600)}h`;
    return `${Math.floor(s / 86400)}d`;
};

export default function Forum() {
    const [posts, setPosts] = useState(initialPosts);
    const [query, setQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [tagFilter, setTagFilter] = useState(null);
    const [sortBy, setSortBy] = useState("Newest");
    const [openNew, setOpenNew] = useState(false);
    const [openCommentsFor, setOpenCommentsFor] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);

    // New post form state
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newTags, setNewTags] = useState("");

    const categories = useMemo(() => {
        const cats = ["All", ...new Set(posts.map((p) => p.category))];
        return cats;
    }, [posts]);

    const tags = useMemo(() => {
        const all = posts.flatMap((p) => p.tags);
        return [...new Set(all)];
    }, [posts]);

    // Filter + search + sort
    const filtered = useMemo(() => {
        let res = posts.filter((p) => {
            const q = query.trim().toLowerCase();
            const matchQuery =
                !q || p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q);
            const matchCat = categoryFilter === "All" || p.category === categoryFilter;
            const matchTag = !tagFilter || p.tags.includes(tagFilter);
            return matchQuery && matchCat && matchTag;
        });

        if (sortBy === "Newest") res = res.sort((a, b) => b.createdAt - a.createdAt);
        if (sortBy === "Popular") res = res.sort((a, b) => b.likes - a.likes);
        if (sortBy === "Trending") res = res.sort((a, b) => b.views - a.views);

        return res;
    }, [posts, query, categoryFilter, tagFilter, sortBy]);

    // Pagination: show first N, load more increases N
    const [visibleCount, setVisibleCount] = useState(6);
    const visiblePosts = filtered.slice(0, visibleCount);

    const handleToggleLike = (postId) => {
        setPosts((prev) =>
            prev.map((p) =>
                p.id === postId ? { ...p, likes: p.likes + 1 } : p
            )
        );
    };

    const handleToggleSave = (postId) => {
        setPosts((prev) =>
            prev.map((p) =>
                p.id === postId
                    ? {
                        ...p,
                        savedBy: p.savedBy.includes(currentUser.id)
                            ? p.savedBy.filter((x) => x !== currentUser.id)
                            : [...p.savedBy, currentUser.id],
                    }
                    : p
            )
        );
    };

    const handleAddComment = (postId, text) => {
        if (!text) return;
        setPosts((prev) =>
            prev.map((p) =>
                p.id === postId
                    ? {
                        ...p,
                        comments: [
                            ...p.comments,
                            { id: "c" + Math.random().toString(36).slice(2, 9), author: { id: currentUser.id, name: currentUser.name }, text },
                        ],
                    }
                    : p
            )
        );
    };

    const handleCreatePost = () => {
        if (!newTitle || !newBody) return alert("Please add title and body");
        const newPost = {
            id: "p" + Math.random().toString(36).slice(2, 9),
            author: { id: currentUser.id, name: currentUser.name, avatar: currentUser.avatar },
            title: newTitle,
            body: newBody,
            category: newCategory || "General",
            tags: newTags ? newTags.split(",").map((t) => t.trim()).filter(Boolean) : [],
            createdAt: Date.now(),
            likes: 0,
            comments: [],
            savedBy: [],
            views: 0,
        };
        setPosts((p) => [newPost, ...p]);
        // reset
        setNewTitle(""); setNewBody(""); setNewCategory(""); setNewTags(""); setOpenNew(false);
    };

    const handleEditPost = (postId, fields) => {
        setPosts((prev) => prev.map((p) => (p.id === postId ? { ...p, ...fields } : p)));
    };

    const handleDeletePost = (postId) => {
        if (!confirm("Delete this post?")) return;
        setPosts((prev) => prev.filter((p) => p.id !== postId));
    };

    const loadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((v) => v + 6);
            setLoadingMore(false);
        }, 600);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Community Forum</h1>
                    <p className="text-sm text-slate-600">Share, discuss, and support each other — safe and supportive community.</p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="flex items-center bg-white rounded shadow px-3 py-1 w-full md:w-[420px]">
                        <Search className="w-4 h-4 text-slate-400 mr-2" />
                        <Input placeholder="Search posts, tips, topics..." className="border-none p-0" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>

                    <Button onClick={() => setOpenNew(true)} className="ml-0 md:ml-2 flex items-center gap-2">
                        <Plus className="w-4 h-4" /> New Post
                    </Button>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Left: Filters */}
                <aside className="md:col-span-1">
                    <Card className="p-4 sticky top-6">
                        <CardHeader className="p-0 mb-2"><CardTitle className="text-sm font-semibold">Filters</CardTitle></CardHeader>

                        <div className="mt-2">
                            <label className="block text-xs text-slate-600 mb-1">Category</label>
                            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="w-full p-2 border rounded">
                                {categories.map((c) => <option key={c}>{c}</option>)}
                            </select>
                        </div>

                        <Separator className="my-4" />

                        <div>
                            <label className="block text-xs text-slate-600 mb-1">Tags</label>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant={!tagFilter ? "secondary" : "outline"} onClick={() => setTagFilter(null)} className="cursor-pointer">All</Badge>
                                {tags.map(t => (
                                    <Badge key={t} onClick={() => setTagFilter(tagFilter === t ? null : t)} className="cursor-pointer" variant={tagFilter === t ? "default" : "outline"}>{t}</Badge>
                                ))}
                            </div>
                        </div>

                        <Separator className="my-4" />

                        <div>
                            <label className="block text-xs text-slate-600 mb-1">Sort</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full p-2 border rounded">
                                <option>Newest</option>
                                <option>Popular</option>
                                <option>Trending</option>
                            </select>
                        </div>

                        <Separator className="my-4" />
                        <div className="text-xs text-slate-500">Showing <strong>{filtered.length}</strong> results</div>
                    </Card>
                </aside>

                {/* Right: Posts */}
                <section className="md:col-span-3 space-y-4">
                    {visiblePosts.length === 0 && (
                        <div className="bg-white p-6 rounded shadow text-center text-slate-600">No posts found — try different filters or create a new post.</div>
                    )}

                    {visiblePosts.map((p) => (
                        <Card key={p.id} className="p-0">
                            <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={p.author.avatar || "/profile-icon.png"} />
                                    </Avatar>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <div>
                                                <div className="text-sm font-semibold">{p.author.name}</div>
                                                <div className="text-xs text-slate-500">{p.category} • {timeAgo(p.createdAt)}</div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-slate-600">{p.likes} <Heart className="w-4 h-4 inline-block text-red-400" /></span>
                                                <span className="text-sm text-slate-600">{p.views} views</span>
                                            </div>
                                        </div>

                                        <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                                        <p className="mt-2 text-slate-600 line-clamp-3">{p.body}</p>

                                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                                            {p.tags.map(t => <Badge key={t} className="text-xs">{t}</Badge>)}
                                        </div>

                                        <div className="flex items-center gap-2 mt-4">
                                            <Button size="sm" variant="ghost" className="gap-2" onClick={() => handleToggleLike(p.id)}>
                                                <Heart className="w-4 h-4" /> Upvote
                                            </Button>

                                            <Button size="sm" variant="ghost" className="gap-2" onClick={() => { setOpenCommentsFor(p.id); }}>
                                                <MessageCircle className="w-4 h-4" /> Comment ({p.comments.length})
                                            </Button>

                                            <Button size="sm" variant="ghost" className="gap-2" onClick={() => handleToggleSave(p.id)}>
                                                <Bookmark className={`w-4 h-4 ${p.savedBy.includes(currentUser.id) ? "text-yellow-500 fill-yellow-300" : ""}`} /> {p.savedBy.includes(currentUser.id) ? "Saved" : "Save"}
                                            </Button>

                                            {/* Edit/Delete if author */}
                                            {p.author.id === currentUser.id && (
                                                <>
                                                    <Button size="sm" variant="ghost" className="gap-2" onClick={() => {
                                                        // quick inline edit: open dialog with prefilled values
                                                        const title = prompt("Edit title", p.title);
                                                        const body = prompt("Edit body", p.body);
                                                        if (title && body) handleEditPost(p.id, { title, body });
                                                    }}>
                                                        <PencilIcon className="w-4 h-4" /> Edit
                                                    </Button>

                                                    <Button size="sm" variant="destructive" onClick={() => handleDeletePost(p.id)}>
                                                        <Trash2 className="w-4 h-4" /> Delete
                                                    </Button>
                                                </>
                                            )}

                                            {/* Moderator controls */}
                                            {currentUser.isModerator && currentUser.id !== p.author.id && (
                                                <Button size="sm" variant="outline" onClick={() => {
                                                    if (confirm("Flag or remove this post?")) handleDeletePost(p.id);
                                                }}>
                                                    Remove
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Load more */}
                    {visibleCount < filtered.length && (
                        <div className="text-center mt-2">
                            <Button onClick={loadMore} disabled={loadingMore}>
                                {loadingMore ? <Loader2 className="w-4 h-4 animate-spin mr-2 inline" /> : null}
                                Load more posts
                            </Button>
                        </div>
                    )}
                </section>
            </div>

            {/* NEW POST DIALOG */}
            <Dialog open={openNew} onOpenChange={setOpenNew}>
                <DialogContent className="max-w-xl">
                    <h3 className="text-lg font-bold mb-2">Create a new post</h3>
                    <Separator className="mb-4" />
                    <div className="space-y-3">
                        <Input placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                        <Input placeholder="Category (e.g., Self Care)" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                        <Textarea placeholder="Write your post..." value={newBody} onChange={(e) => setNewBody(e.target.value)} className="h-40" />
                        <Input placeholder="Tags (comma separated)" value={newTags} onChange={(e) => setNewTags(e.target.value)} />
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setOpenNew(false)}>Cancel</Button>
                            <Button onClick={handleCreatePost}>Post</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* COMMENTS DIALOG */}
            <Dialog open={!!openCommentsFor} onOpenChange={() => setOpenCommentsFor(null)}>
                <DialogContent className="max-w-2xl">
                    {openCommentsFor && (
                        <>
                            {(() => {
                                const post = posts.find(x => x.id === openCommentsFor);
                                if (!post) return <div>Post not found</div>;
                                return (
                                    <div>
                                        <div className="flex items-start gap-3">
                                            <Avatar className="w-10 h-10"><AvatarImage src={post.author.avatar || "/profile-icon.png"} /></Avatar>
                                            <div>
                                                <div className="font-semibold">{post.author.name}</div>
                                                <div className="text-xs text-slate-500">{post.category} • {timeAgo(post.createdAt)}</div>
                                                <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                                                <p className="mt-2 text-slate-600">{post.body}</p>
                                            </div>
                                        </div>

                                        <Separator className="my-4" />
                                        <div className="space-y-3 max-h-64 overflow-auto">
                                            {post.comments.map(c => (
                                                <div key={c.id} className="flex items-start gap-3">
                                                    <Avatar className="w-8 h-8"><AvatarImage src="/profile-icon.png" /></Avatar>
                                                    <div>
                                                        <div className="text-sm font-medium">{c.author.name}</div>
                                                        <div className="text-sm text-slate-600">{c.text}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <CommentBox onAdd={(text) => { handleAddComment(post.id, text); }} />
                                        </div>
                                    </div>
                                );
                            })()}
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

/* Simple comment input box component */
function CommentBox({ onAdd }) {
    const [txt, setTxt] = useState("");
    return (
        <div className="flex gap-2">
            <input className="flex-1 border rounded px-3 py-2" placeholder="Write a comment..." value={txt} onChange={(e) => setTxt(e.target.value)} />
            <Button onClick={() => { onAdd(txt); setTxt(""); }}>Reply</Button>
        </div>
    );
}






// // src/pages/Forum.jsx
// import React from "react";
// import { forumPosts } from "../data/dummy";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Forum() {
//     return (
//         <div className="max-w-4xl mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold">Community Forum</h2>

//             <div className="mt-6 space-y-4">
//                 {forumPosts.map(p => (
//                     <Card key={p.id}>
//                         <CardContent className="flex justify-between items-start">
//                             <div>
//                                 <h3 className="font-semibold">{p.title}</h3>
//                                 <p className="text-slate-600 text-sm">by {p.user}</p>
//                             </div>
//                             <div className="text-sm text-slate-500">{p.comments} comments</div>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// }
