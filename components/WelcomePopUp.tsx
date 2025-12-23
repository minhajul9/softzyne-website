"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    color: "bg-orange-400",
    text: "Our website is currently under construction as we work on something amazing for you.",
  },
  {
    color: "bg-blue-400",
    text: "If you need any digital service or consultation, feel free to reach out to us anytime.",
  },
  {
    color: "bg-green-400",
    text: "You can contact us via the Contact page or use the provided contact information.",
  },
];

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(true);

//   useEffect(() => {
//     const visited = localStorage.getItem("softzyne_visited");
//     if (!visited) {
//       setShowPopup(true);
//       localStorage.setItem("softzyne_visited", "true");
//     }
//   }, []);

  const closePopup = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full translate-y-12 -translate-x-12" />

        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition z-10"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative p-8 text-center">
          {/* Logo */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6 shadow-md">
            <Image
              src="/logo.png"
              alt="Softzyne Digital Solutions"
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome to Softzyne Digital Solutions
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            We’re building a powerful digital experience for you.
          </p>

          {/* Highlights */}
          <div className="space-y-3 text-gray-600 mb-6 text-left">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start">
                <span
                  className={`mt-1 w-2 h-2 ${item.color} rounded-full mr-3 flex-shrink-0`}
                />
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Link
              href="/contact"
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03]"
              onClick={() => setShowPopup(false)}
            >
              Go to Contact Page
            </Link>

            <button
              onClick={closePopup}
              className="w-full px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Continue Browsing
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}
