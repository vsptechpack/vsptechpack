"use client";

import { useState } from "react";

import { Menu, X, MessageCircle } from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function VSPTechpackWebsite() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const products = [
    {
      title: "Corrugated Boxes",
      image: "/images/CORRUGATED-BOARDS.jpg",
    },
    {
      title: "Die-Cut Boxes",
      image: "/images/Die-Cut-Box.jpg",
    },
    {
      title: "Partition Corrugated Boxes",
      image: "/images/Partition-Corrugated-Box.jpg",
    },
    {
      title: "Printed Corrugated Boxes",
      image: "/images/printed boxes.png",
    },
    {
      title: "Pallet Type Boxing",
      image: "/images/Pallet-Type-Boxing.jpg",
    },
    // {
    //   title: "Regular Slotted Boxes",
    //   image: "/images/REGULAR-SLOTTED-BOXES.jpg",
    // },

    {
      title: "Mono Carton Box",
      image: "/images/Mono Carton Box.png",
    },
    {
      title: "Sleeves & Caps",
      image: "/images/SLEEVES-CAPS.jpg",
    },
    {
      title: "Paper Bags",
      image: "/images/paper-bags.jpg",
    },
    {
      title: "Farm Fresh Boxes",
      image: "/images/FARM-FRESH-BOXES.jpg",
    },
    {
      title: "Corrugated Pallets",
      image: "/images/Corrugated-Pallets.jpg",
    },
    {
      title: "PVC Printing",
      image: "/images/PVC Printing.webp",
    },
    {
      title: "Wooden Pallets",
      image: "/images/wooden pallets.jpg",
    },
    

  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#D5B59C] shadow-lg animate-slideDown">

        <div className="w-full flex items-center justify-between px-5 lg:px-12 py-2">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="bg-black rounded-md overflow-hidden shadow-md">
              <img
                src="/images/logo1.png"
                alt="VSP TECHPACK Logo"
                className="h-10 w-auto object-contain hover:scale-105 transition duration-300"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl font-bold text-green-900">
                VSP TECHPACK
              </h1>

              <p className="text-[11px] text-green-900 tracking-[3px] uppercase">
                Premium Packaging Solutions
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 ml-auto text-[#0b5d2a] font-semibold text-sm">

            {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-[#14532d] transition duration-300"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0b5d2a] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}

            <a
              href="https://wa.me/919880934867"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-white text-[#0b5d2a] px-5 py-2 rounded-xl font-bold hover:bg-green-100 hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0b5d2a] px-6 py-5 flex flex-col gap-5 text-white font-semibold border-t border-green-700">

            {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenu(false)}
                  className="hover:text-green-200 transition duration-300"
                >
                  {item}
                </a>
              )
            )}

            <a
              href="https://wa.me/919880934867"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0b5d2a] text-center py-3 rounded-xl font-bold"
            >
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white"
      >
        <div className="max-w-6xl mx-auto px-5 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-white text-[#0b5d2a] px-2 py-0.5 rounded-full text-lg font-semibold">
              
            Efficiency and Innovation in Every Pack

            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              Reliable Packaging Solutions for Modern Businesses
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              VSP TECHPACK delivers durable, cost-effective, and customized
              packaging solutions for manufacturing, retail, logistics, and
              industrial businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition"
              >
                Get Quote
              </a>

              <a
                href="https://wa.me/919880934867"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-2xl font-semibold transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="animate-float">
            <img
              src="/images/about1.jpg"
              alt="Industrial Packaging"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
{/* ABOUT SECTION */}
<section id="about" className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
        About VSP TECHPACK
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
        Trusted Packaging Partner for Modern Businesses
      </h2>

      <p className="mt-6 text-slate-600 text-lg leading-relaxed">
        VSP TECHPACK delivers high-quality corrugated packaging solutions
        with advanced manufacturing, reliable delivery, and strong quality
        control systems designed for modern industries.
      </p>

    </div>

    {/* TOP SECTION */}
{/* TOP SECTION */}
<div className="mt-16 grid lg:grid-cols-[1.4fr_0.8fr_1fr] gap-6 items-start">

  {/* LEFT IMAGE */}
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">

    <img
      src="/images/about.jpg"
      alt="VSP TECHPACK"
      className="w-full h-[500px] object-cover object-left-top hover:scale-105 transition duration-700"
    />

  </div>

  {/* COMPANY ESTABLISHMENT */}
  {/* <div className="bg-white rounded-3xl p-6  shadow-lg hover:shadow-2xl transition duration-500 h-[500px] flex flex-col justify-center"> */}
<div className="bg-white rounded-4xl p-6 shadow-lg hover:shadow-2xl transition duration-500 h-[500px] max-w-[520px] w-full flex flex-col justify-center">
    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
      Company Establishment
    </h3>

    <p className="mt-3 text-slate-700 text-[12px] md:text-[15.68px] leading-6 tracking-wide text-center break-words">
      {/* <p className="mt-2 text-slate-700 text-[12px] md:text-[16px] leading-3 md:leading-5 text-justify break-words"></p> */}

      VSP TECHPACK was established in 2024 as a specialized
      corrugated box manufacturing company located in Bangalore.

      <br />
      We focus on delivering premium-quality packaging solutions with reliable 
      manufacturing support, skilled manpower,and modern machinery.

      <br />

      Our mission is to provide durable, innovative, and
      cost-effective packaging products while ensuring timely
      delivery and customer satisfaction.

    </p>

  </div>

  {/* COMPANY INFORMATION */}
  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500 h-[500px] overflow-y-auto">

    <h3 className="text-2xl font-bold text-slate-900 mb-6">
      Company Information
    </h3>

    <div className="space-y-4 text-slate-700 text-[15px]">

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Company Type
        </span>

        <span>Proprietorship</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Established
        </span>

        <span>2024</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Factory Area
        </span>

        <span>4000 SF</span>
      </div>

      {/* <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Production Capacity
        </span>

        <span>600 Tons / Year</span>
      </div> */}

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Power Backup
        </span>

        <span>125 KVA Generator</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Skilled Staff
        </span>

        <span>08 Workers & 02 Supervisors</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          Working Capital
        </span>

        <span>Self Financed</span>
      </div>

      <div className="flex justify-between border-b pb-3">
        <span className="font-semibold">
          GST Number
        </span>

        <span>29BSIPN4513L1ZB</span>
      </div>

      <div className="border-b pb-3">

        <span className="font-semibold block mb-2">
          Registered Office
        </span>

        <p className="text-slate-600 leading-relaxed">
          VSP TECHPACK,<br />
          No 3/14, Ground Floor,<br />
          Srinivasa Kalyana Mantapa,<br />
          Begur Road, Bangalore - 560068
        </p>

      </div>

    </div>

  </div>

</div>

    {/* THREE CARDS */}
    <div className="mt-16 grid md:grid-cols-3 gap-6">

      {/* COMPANY OVERVIEW */}
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500">

        <h3 className="text-2xl font-bold text-slate-900 mb-5">
          Company Overview
        </h3>

        <p className="text-slate-600 leading-relaxed">

          We provide innovative and reliable corrugated packaging
          solutions designed to meet modern industrial and commercial
          requirements with quality and consistency.

          <br /><br />

          Our experienced team focuses on delivering durable,
          cost-effective, and customized packaging products for
          businesses across multiple industries.

        </p>

      </div>

      {/* MACHINERY */}
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500">

        <h3 className="text-2xl font-bold text-slate-900 mb-5">
          Machinery & Equipment
        </h3>

        <div className="space-y-3 text-slate-600">

          <div className="bg-slate-50 rounded-xl p-3">
            Semi Automatic Corrugation Machine
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            Automatic Gluing Machine
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            Flexo Printer Slotter Machines
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            Stitching & Punching Machines
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            Paper Cutting Machine
          </div>

        </div>

      </div>

      {/* QUALITY */}
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500">

        <h3 className="text-2xl font-bold text-slate-900 mb-5">
          Quality & Delivery
        </h3>

        <p className="text-slate-600 leading-relaxed">

          We follow strict quality testing procedures and ensure every
          product is inspected before dispatch.

          <br /><br />

          Our team is committed to maintaining timely delivery
          schedules while ensuring premium quality and customer
          satisfaction for every order.

        </p>

      </div>

    </div>

  </div>

</section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Our Products
            </span>

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              Complete Packaging Solutions
            </h3>

            <p className="mt-6 text-slate-600 text-lg">
              High-quality packaging products tailored for businesses of every scale.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
              >

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-50 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-5">

                  <h4 className="text-1.70xl font-bold text-slate-800">
                    {item.title}
                  </h4>

                  {/* <p className="mt-4 text-slate-600 leading-relaxed">
                    Premium packaging solutions designed for durability and branding.
                  </p> */}

                  <a
                    href="#contact"
                    className="mt-6 inline-block text-orange-500 font-semibold hover:text-orange-600"
                  >
                    Request Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#D5B59C] text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>

            <span className="text-black font-semibold uppercase tracking-widest text-sm">
              Contact Us
            </span>

            <h3 className="mt-4 text-5xl font-bold text-black">
              Let’s Discuss Your Packaging Requirements
            </h3>

            <p className="mt-6 text-black text-lg leading-relaxed">
              Connect with our team today for custom packaging solutions.
            </p>

            <div className="mt-10 space-y-4 text-black">
              <h2 className="text-4xl font-bold text-[#0b5d2a]">VSP TECHPACK</h2>
              <p>Managing Director</p>
              <p>Shashank Naidu </p>
              <p>📞 +91 9880934867 / 9480407432</p>
              {/* <p>📞 +91 9480407432</p> */}
              <p>📧 vsptechpack@gmail.com</p>
              <p>
                📍 No 3/14, Ground Floor, Srinivasa Kalyana Mantapa,
                Begur Road, Bangalore - 560068
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl p-8 text-[Black] shadow-2xl">

            <h4 className="text-3xl font-bold">
              Request a Quote
            </h4>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                rows={5}
                placeholder="Your Requirements"
                className="w-full border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold transition"
              >
                Submit Inquiry
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

          <p>Design and Developed by NITHIN NAIDU N</p>

          <p>© 2026 VSP TECHPACK. All Rights Reserved.</p>

          <div className="flex items-center gap-4">

            <a
              href="https://www.linkedin.com/in/shashank-naidu-42b20a214?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn className="text-white text-[18px]" />
            </a>

            <a
              href="https://www.instagram.com/vsptechpack?igsh=MXcwMmJ6NjNqanM0cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="text-white text-[18px]" />
            </a>

            <a
              href="https://www.facebook.com/share/1C8CeyvUAS/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF className="text-white text-[18px]" />
            </a>

            <a
              href="https://wa.me/919880934867"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-green-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <MessageCircle size={20} className="text-white" />
            </a>

          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919880934867"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-semibold z-50 transition animate-pulseSlow"
      >
        WhatsApp
      </a>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease forwards;
        }

        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulseSlow {
          animation: pulseSlow 2.5s infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
}