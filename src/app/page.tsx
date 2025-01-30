import Image from "next/image";
import React from "react";
import {
  Building2,
  Coins,
  Shield,
  Users,
  ArrowRight,
  Menu,
} from "lucide-react";
export default function page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="w-full p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">TokenEstate</div>
        <div className="hidden md:flex gap-8">
          <button className="px-4 py-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-all">
            How it Works
          </button>
          <button className="px-4 py-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-all">
            Benefits
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all">
            Get Started
          </button>
        </div>
        <button className="md:hidden">
          <Menu />
        </button>
      </nav>
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Revolutionizing Real Estate Investment
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Transform the way you invest in real estate through blockchain
            technology. Own fractional shares of premium properties with
            complete transparency and liquidity.
          </p>
          <button className="px-8 py-4 text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-2">
            Start Investing <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
            <Building2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Premium Properties
            </h3>
            <p className="text-gray-600">
              Access high-value real estate investments with minimal capital
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
            <Coins className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Tokenization
            </h3>
            <p className="text-gray-600">
              Own fractional shares through blockchain-backed tokens
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
            <Shield className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Secure & Transparent
            </h3>
            <p className="text-gray-600">
              Smart contracts ensure secure and transparent transactions
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Community
            </h3>
            <p className="text-gray-600">
              Join a community of forward-thinking real estate investors
            </p>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
              <div className="text-3xl font-bold text-blue-500 mb-4">01</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Sign Up
              </h3>
              <p className="text-gray-600">
                Create your account and verify your identity
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
              <div className="text-3xl font-bold text-blue-500 mb-4">02</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Choose Properties
              </h3>
              <p className="text-gray-600">
                Browse and select from curated real estate opportunities
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
              <div className="text-3xl font-bold text-blue-500 mb-4">03</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Start Investing
              </h3>
              <p className="text-gray-600">
                Purchase tokens and manage your portfolio
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-8 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the future of real estate investment today
          </p>
          <button className="px-8 py-4 text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-2 mx-auto">
            Create Account <ArrowRight size={20} />
          </button>
        </div>
      </main>
      <footer className="w-full p-8 text-center text-gray-600 mt-16">
        <p>© 2024 TokenEstate. All rights reserved.</p>
      </footer>
    </div>
  );
}
