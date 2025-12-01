export const currentUser = {
  id: "u1",
  name: "Deepak Kumar",
  avatar: "/profile-icon.png",
  isModerator: true, // set true to show moderation UI
};

export const therapists = [
  {
    id: 1,
    name: "Dr. Aisha Verma",
    spec: "Counselling Psychologist",
    rating: 4.8,
    fee: 500,
  },
  {
    id: 2,
    name: "Mr. Rohit Singh",
    spec: "Clinical Psychologist",
    rating: 4.6,
    fee: 400,
  },
  {
    id: 3,
    name: "Ms. Meera Kapoor",
    spec: "Student Counselor",
    rating: 4.7,
    fee: 300,
  },
];

export const articles = [
  {
    id: 1,
    title: "5 Ways to Sleep Better Tonight",
    excerpt: "Quick tips to improve sleep hygiene...",
  },
  {
    id: 2,
    title: "Managing Exam Stress",
    excerpt: "Practical breathing and planning methods...",
  },
  {
    id: 3,
    title: "How to Journal for Mental Health",
    excerpt: "Prompts and routines to reflect...",
  },
];

export const forumPosts = [
  { id: 1, user: "Priya", title: "Overcoming procrastination", comments: 12 },
  { id: 2, user: "Aman", title: "Tips to study when anxious", comments: 8 },
];

export const activities = [
  {
    id: 1,
    title: "Box Breathing",
    time: "5 min",
    steps: ["Inhale 4s", "Hold 4s", "Exhale 4s", "Hold 4s"],
  },
  {
    id: 2,
    title: "Gratitude Journal",
    time: "10 min",
    steps: ["Write 3 things you're grateful for"],
  },
];

export const resources = [
  {
    id: 1,
    title: "Managing Anxiety: A Complete Guide",
    category: "Articles",
    description:
      "Learn practical steps to manage anxiety with evidence-based techniques.",
    tags: ["Anxiety", "Stress", "Mindfulness"],
    thumbnail: "https://source.unsplash.com/featured/?mentalhealth",
    date: Date.now() - 50000,
    views: 1200,
    saves: 300,
  },
  {
    id: 2,
    title: "10 Minute Guided Meditation",
    category: "Relaxation",
    description: "A short meditation to help you relax and clear your mind.",
    tags: ["Stress", "Mindfulness", "Sleep"],
    thumbnail: "https://source.unsplash.com/featured/?meditation",
    date: Date.now() - 200000,
    views: 3500,
    saves: 900,
  },
  {
    id: 3,
    title: "Understanding Depression Symptoms",
    category: "Articles",
    description: "Recognizing early signs of depression and coping strategies.",
    tags: ["Depression", "Self-Esteem"],
    thumbnail: "https://source.unsplash.com/featured/?sad",
    date: Date.now() - 90000,
    views: 2100,
    saves: 500,
  },
];

export const initialPosts = [
  {
    id: "p1",
    author: { id: "u2", name: "Priya", avatar: "/avatar1.png" },
    title: "How do you manage exam stress? Tips please!",
    body: "I feel stressed during exams and can't focus. Share routines or short breathing exercises that actually work for you.",
    category: "Study Stress",
    tags: ["Stress", "Exam", "Breathing"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    likes: 12,
    comments: [
      {
        id: "c1",
        author: { id: "u3", name: "Aman" },
        text: "Try box breathing 4x4 — works every time.",
      },
    ],
    savedBy: [],
    views: 230,
  },
  {
    id: "p2",
    author: { id: "u1", name: "Deepak Kumar", avatar: "/profile-icon.png" },
    title: "Daily journaling prompts — what works?",
    body: "Trying to start a journaling habit. What prompts help you reflect without pressure? I prefer 5-min prompts.",
    category: "Self Care",
    tags: ["Journaling", "Habits"],
    createdAt: Date.now() - 1000 * 60 * 60 * 5,
    likes: 30,
    comments: [
      {
        id: "c2",
        author: { id: "u4", name: "Meera" },
        text: "Write 3 things you're grateful for — small wins.",
      },
      {
        id: "c3",
        author: { id: "u2", name: "Priya" },
        text: "Also note one thing you learned today.",
      },
    ],
    savedBy: ["u1"],
    views: 480,
  },
  {
    id: "p3",
    author: { id: "u5", name: "Rohit", avatar: "/avatar2.png" },
    title: "Best breathing apps or audios?",
    body: "Looking for short guided breathing audios that I can play between classes.",
    category: "Relaxation",
    tags: ["Breathing", "Audio"],
    createdAt: Date.now() - 1000 * 60 * 30,
    likes: 3,
    comments: [],
    savedBy: [],
    views: 60,
  },
];
