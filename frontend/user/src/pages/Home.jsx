import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, HeartHandshake, Brain, Users, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION - Light Sky Blue */}
      <section className="relative bg-white text-gray-900 pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Digital Space For  
              <span className="text-purple-600"> Mental Wellness</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Track your emotions, access counselling, explore resources, and improve your
              mental well-being every day.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-purple-600 text-white hover:bg-purple-500">
                Get Started
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-100 text-gray-700">
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              // src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              src="https://plus.unsplash.com/premium_photo-1663090894347-35d4ecc2c622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D"
              className="rounded-xl shadow-xl"
              alt="Mental wellness"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Mental Health Matters?</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Your emotional health is essential. Our platform offers tools, assessments,
            counselling, and community support for a balanced life.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow hover:shadow-xl transition bg-[#f3e8ff]">
              <Brain className="w-10 h-10 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Mood Tracker</h3>
              <p className="text-gray-700">
                Track daily emotions and understand your mental patterns.
              </p>
            </Card>

            <Card className="p-6 shadow hover:shadow-xl transition bg-[#ecfdf5]">
              <HeartHandshake className="w-10 h-10 mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Counselling Support</h3>
              <p className="text-gray-700">
                Connect with certified mental health professionals.
              </p>
            </Card>

            <Card className="p-6 shadow hover:shadow-xl transition bg-[#e0f2fe]">
              <Users className="w-10 h-10 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-700">
                Share, ask, and grow with a safe supportive community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ASSESSMENT SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7fdf"
            className="rounded-xl shadow-lg"
            alt=""
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Self Assessments</h2>
            <p className="text-gray-600 mb-6">
              Take quick tests to understand your stress, depression, and anxiety levels.
            </p>
            <Button className="bg-purple-600 text-white hover:bg-purple-500">
              Take Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* COUNSELLORS */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Top Counsellors</h2>
          <p className="text-gray-600">Experienced, verified professionals</p>
        </div>

        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-8">
          {["Dr. Maya Sharma", "Dr. Aarav Singh", "Dr. Riya Kapoor"].map(
            (name, i) => (
              <Card key={i} className="p-6 text-center shadow hover:shadow-xl transition bg-[#f3e8ff]">
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  alt=""
                />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">Psychologist • 6+ yrs exp</p>
                <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-500">
                  View Profile <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            )
          )}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#fafafa]">
        <h2 className="text-3xl font-bold text-center mb-12">Mental Health Resources</h2>

        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-5 shadow hover:shadow-xl transition bg-white">
              <img
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
                className="rounded-md mb-4"
                alt=""
              />
              <h3 className="font-semibold text-lg">Coping with Stress</h3>
              <p className="text-gray-600 mt-2">
                Learn modern ways to manage stressful situations smoothly.
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>

        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 shadow hover:shadow-xl transition bg-[#fafafa]">
              <Star className="text-yellow-500 w-8 h-8" />
              <p className="mt-4 text-gray-700">
                “This platform helped me understand my emotions and heal slowly.”
              </p>
              <h4 className="mt-4 font-semibold">Amit Kumar</h4>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#f3e8ff] text-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-4">Begin Your Wellness Journey</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands improving their mental health using MindSpark.
        </p>

        <Button className="bg-purple-600 text-white text-lg px-8 py-3 hover:bg-purple-500">
          Join Now
        </Button>
      </section>

    </div>
  );
};

export default Home;









// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { ChevronRight, HeartHandshake, Brain, MessageCircle, Users, Star } from "lucide-react";

// const Home = () => {
//   return (
//     <div className="w-full">

//       {/* HERO SECTION */}
//       <section className="relative bg-linear-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 md:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
//           {/* LEFT */}
//           <div className="flex-1">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//               Your Digital Space For  
//               <span className="text-yellow-300"> Mental Wellness</span>
//             </h1>
//             <p className="mt-4 text-lg">
//               Track your emotions, talk to experts, explore resources, and start your
//               healing journey — all in one secure platform.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-4">
//               <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
//                 Get Started
//               </Button>
//               <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
//                 Learn More
//               </Button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex-1">
//             <img
//               src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
//               className="rounded-xl shadow-2xl"
//               alt="Mental wellness"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold">Why Mental Health Matters?</h2>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//             Your well-being is just as important as physical health. Our platform is
//             designed to support your emotional balance with science-based tools,
//             professional guidance, and a caring community.
//           </p>
//         </div>
//       </section>

//       {/* FEATURES GRID */}
//       <section className="py-16 px-6 md:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Mood Tracker */}
//             <Card className="p-6 shadow hover:shadow-xl transition">
//               <Brain className="w-10 h-10 mb-4 text-blue-600" />
//               <h3 className="text-xl font-semibold mb-2">Mood Tracker</h3>
//               <p className="text-gray-600">
//                 Monitor your daily mood patterns with insights that help understand your emotional state.
//               </p>
//             </Card>

//             {/* Counselling */}
//             <Card className="p-6 shadow hover:shadow-xl transition">
//               <HeartHandshake className="w-10 h-10 mb-4 text-red-500" />
//               <h3 className="text-xl font-semibold mb-2">Counselling Support</h3>
//               <p className="text-gray-600">
//                 Connect with trusted counselors and mental health professionals anytime.
//               </p>
//             </Card>

//             {/* Community */}
//             <Card className="p-6 shadow hover:shadow-xl transition">
//               <Users className="w-10 h-10 mb-4 text-green-600" />
//               <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
//               <p className="text-gray-600">
//                 Share experiences, ask questions, and feel supported by a safe community.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* MOOD TRACKING + ASSESSMENT */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
//           <img
//             src="https://images.unsplash.com/photo-1519648023493-d82b5f8d7fdf"
//             className="rounded-xl shadow-lg"
//             alt=""
//           />

//           <div>
//             <h2 className="text-3xl font-bold mb-4">Self Assessments & Insights</h2>
//             <p className="text-gray-600 mb-6">
//               Take research-backed assessments to evaluate stress levels, anxiety, 
//               depression, or emotional balance. Get immediate insights.
//             </p>
//             <Button className="bg-indigo-600 text-white">
//               Take Assessment
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* TOP COUNSELLORS */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl font-bold">Top Counsellors</h2>
//           <p className="text-gray-600">Trusted mental health professionals</p>
//         </div>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//           {["Dr. Maya Sharma", "Dr. Aarav Singh", "Dr. Riya Kapoor"].map(
//             (name, i) => (
//               <Card key={i} className="p-6 text-center shadow hover:shadow-xl transition">
//                 <img
//                   src="https://randomuser.me/api/portraits/women/44.jpg"
//                   className="w-24 h-24 rounded-full mx-auto mb-4"
//                   alt=""
//                 />
//                 <h3 className="text-xl font-semibold">{name}</h3>
//                 <p className="text-gray-600">Psychologist · 7+ years experience</p>

//                 <Button className="mt-4">
//                   View Profile <ChevronRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </Card>
//             )
//           )}
//         </div>
//       </section>

//       {/* RESOURCES PREVIEW */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-12">Mental Health Resources</h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((i) => (
//             <Card key={i} className="p-5 shadow hover:shadow-xl transition">
//               <img
//                 src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
//                 className="rounded-md mb-4"
//                 alt=""
//               />
//               <h3 className="font-semibold text-lg">Coping with Stress</h3>
//               <p className="text-gray-600 mt-2">
//                 Learn modern strategies to manage stressful situations effectively.
//               </p>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//           {[1, 2, 3].map((i) => (
//             <Card key={i} className="p-6 shadow hover:shadow-xl transition">
//               <Star className="text-yellow-500 w-8 h-8" />
//               <p className="mt-4 text-gray-700">
//                 “This platform helped me understand my emotions better and feel supported
//                 during tough days.”
//               </p>
//               <h4 className="mt-4 font-semibold">Amit Kumar</h4>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 md:px-12 lg:px-20 bg-indigo-700 text-white text-center">
//         <h2 className="text-4xl font-bold mb-4">Start Your Healing Journey Today</h2>
//         <p className="mb-6 max-w-2xl mx-auto">
//           Join thousands of users improving their mental health with MindSpark.
//           Track your emotions, talk to professionals, and grow every day.
//         </p>

//         <Button className="bg-yellow-400 text-black text-lg px-8 py-3 hover:bg-yellow-300">
//           Join Now
//         </Button>
//       </section>

//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Link } from "react-router-dom";
// import { MessageCircle, Users, Star, Clock } from "lucide-react";

// const Home = () => {
//   return (
//     <div className="w-full">

//       {/* HERO SECTION */}
//       <section className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-16 bg-linear-to-br from-blue-50 to-purple-50">
        
//         {/* Top Badge */}
//         <div className="mb-4 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2">
//           <span>💚</span> Your Mental Health Matters
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//           Digital Wellness <span className="text-blue-600">Support System</span>
//         </h1>

//         <p className="max-w-2xl mt-4 text-gray-600 text-lg">
//           Empowering college students with personalized mental health resources, 
//           AI-powered support, and a caring community focused on your well-being.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-8">
//           <Link to="/chatbot">
//             <Button size="lg" className="px-6">
//               Start Wellness Chat →
//             </Button>
//           </Link>

//           <Link to="/counselling">
//             <Button size="lg" variant="outline" className="px-6">
//               Book Counseling
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* STATS SECTION */}
//       <section className="py-12 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

//           <div>
//             <Users className="w-10 mx-auto text-blue-600" />
//             <h2 className="text-3xl font-bold text-blue-600 mt-2">2500+</h2>
//             <p className="text-gray-600 text-sm">Students Helped</p>
//           </div>

//           <div>
//             <Star className="w-10 mx-auto text-blue-600" />
//             <h2 className="text-3xl font-bold text-blue-600 mt-2">95%</h2>
//             <p className="text-gray-600 text-sm">Satisfaction Rate</p>
//           </div>

//           <div>
//             <MessageCircle className="w-10 mx-auto text-blue-600" />
//             <h2 className="text-3xl font-bold text-blue-600 mt-2">15000+</h2>
//             <p className="text-gray-600 text-sm">Support Sessions</p>
//           </div>

//           <div>
//             <Clock className="w-10 mx-auto text-blue-600" />
//             <h2 className="text-3xl font-bold text-blue-600 mt-2">24/7</h2>
//             <p className="text-gray-600 text-sm">Available Support</p>
//           </div>

//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-center text-3xl font-bold">
//           Comprehensive Support <span className="text-blue-600">Services</span>
//         </h2>
//         <p className="text-center text-gray-600 mt-2">
//           Everything you need for your mental wellness journey
//         </p>

//         <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

//           {/* AI Chatbot */}
//           <Card className="hover:shadow-lg transition">
//             <CardHeader>
//               <CardTitle>AI Chatbot</CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-600">
//               <p>24/7 support with an intelligent AI wellness assistant.</p>
//               <ul className="mt-3 space-y-2">
//                 <li>✔ Instant responses</li>
//                 <li>✔ Personalized guidance</li>
//                 <li>✔ Available anytime</li>
//               </ul>
//             </CardContent>
//           </Card>

//           {/* Counselling */}
//           <Card className="hover:shadow-lg transition">
//             <CardHeader>
//               <CardTitle>Counselling</CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-600">
//               <p>Book confidential sessions with licensed professionals.</p>
//               <ul className="mt-3 space-y-2">
//                 <li>✔ Licensed therapists</li>
//                 <li>✔ Flexible scheduling</li>
//                 <li>✔ Private & secure</li>
//               </ul>
//             </CardContent>
//           </Card>

//           {/* Resources */}
//           <Card className="hover:shadow-lg transition">
//             <CardHeader>
//               <CardTitle>Resources</CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-600">
//               <p>Library of articles, videos, and relaxation tools.</p>
//               <ul className="mt-3 space-y-2">
//                 <li>✔ Evidence-based content</li>
//                 <li>✔ Interactive tools</li>
//                 <li>✔ Self-paced learning</li>
//               </ul>
//             </CardContent>
//           </Card>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;
