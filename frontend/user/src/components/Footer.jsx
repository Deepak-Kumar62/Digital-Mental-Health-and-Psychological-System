import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
    const user = {}; // change this when you connect auth

    return (
        <footer className="bg-white shadow-inner mt-10 pt-8 pb-4 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo + About */}
                <div>
                    <h2 className="text-xl font-bold mb-2">MindSpark</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Your digital mental health companion.
                        We provide support, resources and a safe space for your well-being.
                    </p>
                </div>

                {/* Quick Links - Hide some when user not logged in */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-gray-700 text-sm">

                        <Link to="/" className="hover:text-blue-600">
                            Home
                        </Link>

                        {/* Only show when Logged in */}
                        {user && (
                            <>
                                <Link to="/resources" className="hover:text-blue-600">Resources</Link>
                                <Link to="/counselling" className="hover:text-blue-600">Counselling</Link>
                                <Link to="/forum" className="hover:text-blue-600">Forum</Link>
                                <Link to="/activities" className="hover:text-blue-600">Activities</Link>
                                <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
                            </>
                        )}
                    </ul>
                </div>

                {/* Policies (These show for everyone) */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Support</h3>
                    <ul className="flex flex-col gap-2 text-gray-700 text-sm">
                        <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link>
                        <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
                    </ul>
                </div>
            </div>

            <Separator className="my-6" />

            {/* Bottom Section */}
            <div className="text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} MindSpark. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
