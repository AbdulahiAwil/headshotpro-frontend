'use client';

import { CreditPackageCard } from "@/components/payment";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import logo from "./logo/logo.png";
export default function Home() {
  const { data: currentUser } = useCurrentUser();

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">

          {/* <div className="text-2xl font-black text-[#002B5B] dark:text-white">
            Studio AI
          </div> */}
          

          <div className="flex items-center">
            <img 
              src={logo.src}
              alt="Headshot Pro" 
              className="h-14 w-auto"
            />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            {currentUser ? (
              <Button asChild>
                <Link href="/dashboard/user">Dashboard</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>

        </div>
      </nav>

      <main className="pt-24">

        {/* ================= HERO ================= */}
        <section className="px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Create Stunning Headshots with AI
            </h1>

            <p className="text-gray-500 text-lg mb-8">
              Transform your photos into professional studio-quality images instantly.
            </p>

            <div className="flex gap-4 flex-wrap">
              {currentUser ? (
                <>
                  <Button asChild size="lg">
                    <Link href="/dashboard/user">Dashboard</Link>
                  </Button>

                  <Button asChild variant="secondary" size="lg">
                    <Link href="/dashboard/user">Upload Photo</Link>
                  </Button>
                </>
              ) : (
                <Button asChild size="lg">
                  <Link href="/auth/login">Get Started</Link>
                </Button>
              )}
            </div>
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-SokgTt7MpJhy4ezbE1L3SLmsELooHxFewV3q40cjoxMzKQTrCDwY86AXvrjKB1VxtgzAWAVFX4oUOuqfH9jjitQFb-k4H5wy-2590rTiLnAnEwBaRJBILZaR52ADvGReDPBxb1cCGFQcH3BtSqeqzusJSuv1ZMXWtyDRV4qKMTTq-6YmaR0ZieLIfiVEMm-9A8ss6WTb4ncer0kP7Qtx8qVrWWDnz53Qnz74yMCmHUJiVqUyNusX853JsS3Bt8JuQXw_6psltuU"
              alt="headshot"
              width={500}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </div>

        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section id="how-it-works" className="bg-gray-50 py-24 px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500">Simple 3-step process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center max-w-7xl mx-auto">

            <div>
              <div className="text-4xl mb-4">📤</div>
              <h3 className="font-bold">Upload</h3>
              <p className="text-gray-500">Upload your selfies</p>
            </div>

            <div>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold">AI Magic</h3>
              <p className="text-gray-500">AI enhances your image</p>
            </div>

            <div>
              <div className="text-4xl mb-4">⬇</div>
              <h3 className="font-bold">Download</h3>
              <p className="text-gray-500">Get final photos</p>
            </div>

          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div className="md:col-span-5 mb-12 md:mb-0">
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-6">
            See the Difference
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Compare your casual selfies with the professional output from our AI
            studio. We handle lighting, color correction, and background
            optimization automatically.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100">
              <span className="text-primary text-xl">📷</span>
              <span className="font-bold">
                Original: Casual indoor lighting
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-600 text-white">
              <span className="text-xl">✨</span>
              <span className="font-bold">
                AI Result: 85mm Portrait Studio
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:col-span-7 flex flex-col md:flex-row gap-6 relative">
          
          {/* ORIGINAL */}
          <div className="flex-1 relative rounded-xl overflow-hidden shadow-lg md:-rotate-2">
            <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest px-3 py-1 bg-black text-white rounded">
              Original
            </span>

            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieBNlwF83xRndoWtVQXAu7KQ2bEucqbzfmZt_LscNSTWlythO9s3RIsZ1mRo_YQh6D7_51bFky1LH-Du6yWfZ3m5yWRIWgC56ApF_yqLACqdMqGw5ReuoWYMmq91TMlBRlJ_0KM_igqDhZXXby5bX4pzFprJJMEbIt3lNRDJdbi6_H1A8y09dwLiwFdC-YeRy4wNzT18zxLvsnnaAE3Fie3oUsMrZObGk-Imc4ZTIbmuEkemd0UNVgFcgJNIZ5FFtqPX29oczvSM"
              alt="Original photo"
              width={500}
              height={600}
              className="w-full h-[500px] object-cover grayscale"
            />
          </div>

          {/* AI RESULT */}
          <div className="flex-1 relative rounded-xl overflow-hidden shadow-2xl md:translate-y-12 md:rotate-2 border-4 border-white">
            <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest px-3 py-1 bg-blue-600 text-white rounded">
              AI Result
            </span>

            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHZ93DsaSABZmOCyiKDz6p2F9w9hR1XzL4qniei4AtBEwGGBz-YlcDxR-R5b_0U1QX5cCVdv0ny2K7WPw2KKuGrVtNjtkNF_Gui3V3aNhb4MiCccsZuOvZdHc5EMhTnMUo0x85PnuHycqzd9xY19b6CNB6xnPO6MxOzNaQf40reAJN7WOH1bCGf96yNHRRIgaTxaWmKK0Lh_rCTMoAtBPDPhf6q99lNK0_jkdaBVRwBGfPyDNmiupFTWzj7_CwcZIXpaVkcLgU790"
              alt="AI generated headshot"
              width={500}
              height={600}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

        {/* ================= FEATURES ================= */}
        <section id="features" className="py-24 px-8 max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl shadow bg-white dark:bg-slate-900">
              <h3 className="font-bold text-xl mb-2">Fast</h3>
              <p className="text-gray-500">Get results in minutes</p>
            </div>

            <div className="p-6 rounded-xl shadow bg-white dark:bg-slate-900">
              <h3 className="font-bold text-xl mb-2">Affordable</h3>
              <p className="text-gray-500">Save money vs photographers</p>
            </div>

            <div className="p-6 rounded-xl shadow bg-white dark:bg-slate-900">
              <h3 className="font-bold text-xl mb-2">High Quality</h3>
              <p className="text-gray-500">Studio-level AI results</p>
            </div>

          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section id="pricing" className="py-24 px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-12">Pricing</h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="p-8 bg-white rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4">Basic</h3>
                <p className="text-3xl font-black mb-6">$29</p>
                <Button className="w-full">Choose Plan</Button>
              </div>

              <div className="p-8 bg-blue-600 text-white rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4">Pro</h3>
                <p className="text-3xl font-black mb-6">$49</p>
                <Button className="w-full bg-white text-blue-600">
                  Choose Plan
                </Button>
              </div>

            </div>
          </div>
         
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="py-12 text-center text-sm text-gray-500">
          © 2026 Studio AI. All rights reserved.
        </footer>

      </main>
    </div>
  );
}