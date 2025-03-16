"use client";

import { Button } from "@repo/ui/Button";
import {
  Sparkles,
  Rocket,
  Palette,
  Wand2,
  ArrowRight,
  Star,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[#0A0A0F]" : "bg-gray-50"} transition-colors duration-500`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-black/80 backdrop-blur-lg" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles
              className={`w-6 h-6 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Designify
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-800/30 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div
              className={`absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}
            ></div>
            <div
              className={`absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}
            ></div>
            <div
              className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-sm mb-8">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span
                className={`text-sm ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}
              >
                The Future of Design is Here
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text leading-tight">
              Design Without
              <br />
              Boundaries
            </h1>
            <p
              className={`mt-6 text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto leading-relaxed`}
            >
              Transform your creative vision into reality with our AI-powered
              design platform. Create stunning visuals in minutes, not hours.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"/signup"}>
              <Button
                varient="primary"
                size="lg"
                className="p-3 cursor-pointer rounded bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                Sign up
                {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
              </Link>
              <Link href={"/signin"}>
              <Button
                varient="primary"
                size="lg"
                className="p-3 cursor-pointer rounded bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                Sign in
                {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}