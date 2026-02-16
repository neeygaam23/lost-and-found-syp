import React from "react";
import { FiInstagram, FiLink } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import Footer from "../component/Footer";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#f5f1ea] flex flex-col items-center p-6 text-[#1b1b1b] overflow-hidden">
      <div className="orb orb-brown float-slow left-[-10%] top-[15%] h-64 w-64" />
      <div className="orb orb-ink float-fast right-[-5%] top-[-5%] h-72 w-72" />

      <div className="w-full max-w-6xl">
        <div className="surface rounded-3xl p-10 rise-in">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">Our team</p>
              <h1 className="font-display text-4xl mt-3">About us</h1>
              <p className="text-sm text-black/60 mt-2">
                Building a calmer, smarter way to reunite lost items.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="rounded-full border border-black/15 px-4 py-2 text-xs text-black/60 float-slow">Since 2022</span>
              <span className="rounded-full border border-black/15 px-4 py-2 text-xs text-black/60 float-fast">9 campuses</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="surface tilt-card rounded-3xl p-8 rise-in">
            <p className="text-xs uppercase tracking-[0.25em] text-black/50">Our approach</p>
            <h2 className="font-display text-3xl mt-4">Minimal process, maximum trust.</h2>
            <p className="mt-4 text-sm text-black/70">
              We focus on clear reporting, verified handoffs, and streamlined communication
              so every reunite journey feels simple and secure.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 text-xs text-black/70">
              <span className="rounded-full border border-black/20 px-3 py-1 text-center">Clear status</span>
              <span className="rounded-full border border-black/20 px-3 py-1 text-center">Secure handoff</span>
              <span className="rounded-full border border-black/20 px-3 py-1 text-center">Always verified</span>
            </div>
          </div>
          <div className="surface-dark tilt-card rounded-3xl p-8 rise-in stagger-1">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Our mission</p>
            <h2 className="font-display text-3xl mt-4">Reunite lost items faster.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              “Our mission is to create a reliable and efficient platform for reuniting lost items
              with their rightful owners. We aim to foster a supportive community where users can
              easily report, search, and recover lost belongings.”
            </p>
          </div>
        </div>

        <div className="mt-12 surface rounded-3xl p-8 rise-in stagger-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl">Meet the crew</h3>
            <span className="text-xs text-black/50">Operations + Support</span>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="tilt-card rounded-2xl border border-black/10 bg-white p-5 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-[#f5f1ea] border border-black/10" />
                <p className="mt-4 text-sm font-semibold">Team member</p>
                <p className="text-xs text-black/60">Campus operations</p>
                <div className="mt-4 flex justify-center gap-4 text-[#3f2d1f]">
                  <FiInstagram className="text-xl" />
                  <IoLogoWhatsapp className="text-xl" />
                  <FiLink className="text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}
