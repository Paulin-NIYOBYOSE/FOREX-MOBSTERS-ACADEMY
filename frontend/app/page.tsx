"use client";
import { useState } from "react";
import { ArrowUpRight, Play, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Live Trading Sessions",
      description: "Access live market data and execute trades instantly",
      icon: "/video.svg",
    },
    {
      title: "live video calls ",
      description:
        "Advanced encryption and security measures to protect your assets",
      icon: "/video.svg",
    },
    {
      title: "Traders set up group",
      description: "Join a team of 1000+ like-minded traders ",
      icon: "/video.svg",
    },
    {
      title: "Weekely  A+ set ups",
      description: "We do provide market weekly analyis every sundays",
      icon: "/video.svg",
    },
    {
      title: "Trading competitions",
      description:
        "We also award best traders at the end of the month basing on different criterias",
      icon: "/video.svg",
    },
    // Add more features as needed
  ];

  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const PricingPlans = [
    {
      name: "Basic",
      price: "97",
      duration: "3 Months",
      features: [
        "✅ Full access to recorded videos",
        "✅ Sunday recap and Review",
        "✅ My Whole Strategy",
        "✅ My private community",
        "✅ 60 minutes group call for Q/A",
      ],
    },
    {
      name: "Pro",
      price: "199",
      duration: "6 Months",
      features: [
        "✅ All Basic Plan features",
        "✅ 1-on-1 mentorship (30min/month)",
        "✅ Deep-dive analysis on student trades",
      ],
    },
    {
      name: "Enterprise",
      price: "399",
      duration: "Lifetime",
      features: [
        "✅ All Pro Plan features",
        "✅ 1-on-1 mentorship twice a week",
        "✅ Personalized trading roadmap",
        "✅ Strategy for passing prop firms",
      ],
    },
  ];

  const advisors = [
    {
      name: "Niyobyose Paulin",
      role: "Trading Expert",
      image: "/Paulin.png",
    },
    {
      name: "Niyobyose Paulin",
      role: "Trading Expert",
      image: "/Paulin.png",
    },
    {
      name: "Niyobyose Paulin",
      role: "Trading Expert",
      image: "/Paulin.png",
    },
    {
      name: "Niyobyose Paulin",
      role: "Trading Expert",
      image: "/Paulin.png",
    },
    // Add more advisors
  ];

  return (
    <div className="bg-[#002419] text-white md:px-20">
      {/* Hero Section */}
      <section className="container mx-auto p-4 mt-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Master The Charts{" "}
              <span className="text-[#00DC82]">Own the streets</span>
            </h1>
            <p className="text-gray-300 text-xl">
              Master the charts, rule the market, and stack your wealth with
              Forex Mobsters. Learn strategy, precision, and pro-level trading
              to turn risks into rewards. Join us and level up your forex game!
            </p>
            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                className="bg-[#00DC82] text-[#002419] hover:bg-[#00DC82]/90 text-lg"
              >
                Get Started <ArrowUpRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Play className="mr-2" /> Watch Video
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] border-[#63f7b9]">
            <Image
              src="/hero.png"
              alt="Trading Platform"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="container mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Our Company Unless Miss The Opportunity
            </h2>
            <p className="text-gray-300 text-xl">
              Forex Mobsters Academy offers expert training in forex trading,
              covering market analysis, risk management, trading psychology, and
              live trading sessions. We equip traders with the skills and
              strategies needed to navigate the markets profitably and
              confidently.
            </p>
            <Button
              size="lg"
              className="bg-[#00DC82] text-[#002419] hover:bg-[#00DC82]/90 text-lg"
            >
              Learn More <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/candles.svg"
              alt="Company Overview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto p-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Pricing Plan
          </h2>
          <p className="text-gray-300 text-xl">
            Choose the perfect plan for your trading needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {PricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#003626] p-8 rounded-lg  duration-100 ${
                hoveredPlan === index ? " border-2 border-[#00DC82]" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-300 text-xl">/{plan.duration}</span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={`w-full text-lg ${
                  hoveredPlan === index
                    ? "bg-[#00dc80dd] text-[#002419] hover:bg-[#00DC82]/90"
                    : "bg-[#002419] text-white hover:bg-[#002419]/90"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto md:px-4">
        <div className="bg-[#003626] rounded-lg p-12 md:p-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe Our News
            </h2>
            <p className="text-gray-300 text-xl mb-10">
              Stay updated with our latest news and special offers
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-[#002419] text-white text-lg border border-gray-600 focus:outline-none focus:border-[#00DC82]"
              />
              <Button
                size="lg"
                className="bg-[#00DC82] text-[#002419] hover:bg-[#00DC82]/90 text-lg"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
