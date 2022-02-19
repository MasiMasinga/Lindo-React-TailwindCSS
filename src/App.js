import React from "react";

import hero from "./images/hero.png";
import bg1 from "./icons/bg-1.svg";
import bg2 from "./icons/bg-2.svg";
import playicon from "./icons/play.svg";
import googleicon from "./icons/googlelogo.svg";
import facebookicon from "./icons/facebooklogo.svg";
import logitechlogo from "./icons/logitechlogo.svg";
import tokopedialogo from "./icons/tokopedialogo.svg";
import pullAndbearlogo from "./icons/pullandbearlogo.svg";
import speakerphoneicon from "./icons/speakerphone.svg";
import shoppingbagicon from "./icons/shoppingbag.svg";
import chipicon from "./icons/chip.svg";
import charticon from "./icons/chart.svg";

function App() {
  return (
    <div className="overflow-hidden w-full min-h-screen font-sans bg-gray-900">
      <div className="relative">
        <img className="absolute opacity-70" src={bg1} alt="" />
        <div className="max-w-7xl mx-auto py-10 px-8 relative ">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-semibold text-white">
              Liondon
            </a>
            <ul className="flex gap-x-16 items-center text-gray-300">
              <li>
                <a href="/">Rankings</a>
              </li>
              <li>
                <a href="/">Data</a>
              </li>
              <li>
                <a href="/">Solution</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>
            <button className="py-3 px-6 font-medium tracking-wider leading-5 text-white rounded-md border-2 border-gray-800">
              Get Started
            </button>
          </nav>
        </div>
      </div>

      <div className="py-10 px-8 mx-auto max-w-7xl">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="pt-10 text-7xl font-bold leading-tight text-white">
              Tracking User Movements Around the World
            </h1>
            <p className="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
              Whether it's your family or your business, we want to help you
              take care of the things that matter the most.
            </p>

            <div className="flex gap-x-6 item-content pt-12">
              <button className="py-4 px-6 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md">
                Get Trial Project
              </button>

              <button className="flex gap-x-2 items-center py-4 px-6 font-medium tracking-wide text-gray-300">
                <img src={playicon} className="w-8 h-8 stroke-current" alt=""/>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="w-1/2 pl-24 flex justify-center items-center">
            <img src={hero} alt="" className="max-w-xl drop-shadow-2x1" />
          </div>
        </div>
      </div>

      <div className="relative">
        <img className="absolute opacity-70" src={bg2} alt="" />
        <div className="relative py-16 px-8 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-10">
            <span className="font-semibold tracking-wider text-white uppercase whitespace-nowrap">
              Trusted by global brands
            </span>
            <div className="flex flex-wrap gap-y-4 gap-x-14 items-center pt-6 -mx-2 lg:flex-nowrap md:pt-0 md:mx-0">
              <img src={googleicon} className="w-auto h-16 text-gray-400 transition cursor-pointer fill-current hover:text-white" alt="" />
              <img src={facebookicon} className="w-auto h-20 text-gray-400 transition cursor-pointer fill-current hover:text-white" alt="" />
              <img src={logitechlogo} className="w-auto h-16 text-gray-400 transition cursor-pointer fill-current hover:text-white" alt="" />
              <img src={tokopedialogo} className="w-auto h-20 text-gray-400 transition cursor-pointer fill-current hover:text-white" alt="" />
              <img src={pullAndbearlogo} className="w-auto h-20 text-gray-400 transition cursor-pointer fill-current hover:text-white" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 px-8 mx-auto max-w-7xl">
        <div className="flex flex-col gap-x-8 justify-between md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold leading-tight text-white">
              Must-Have to Win Your Online Market
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="pt-6 text-xl leading-relaxed text-gray-300">
              Found something that works for you? Request a quote from our site
              or call an agent and we'll get back to you as soon as possible.
            </p>
            <button className="py-4 px-8 mt-8 font-medium tracking-wide bg-teal-200 rounded-lg transition hover:bg-teal-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-start py-16 w-full md:grid-cols-4 md:gap-x-8">
          <div className="flex overflow-hidden relative flex-col items-start p-6 bg-gray-800 rounded-lg transition duration-300 cursor-pointer group hover:bg-white">
            <span className="absolute top-0 right-0 w-24 h-24 bg-teal-200 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14" />
            <div className="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
              <img src={speakerphoneicon} alt=''/>
            </div>
            <span className="inline-block pt-6 text-2xl font-medium tracking-wide text-white transition duration-300 group-hover:text-gray-800">
              Digital Marketing
            </span>
          </div>

          <div className="flex overflow-hidden relative flex-col items-start p-6 bg-gray-800 rounded-lg transition duration-300 cursor-pointer group hover:bg-white">
            <span className="absolute top-0 right-0 w-24 h-24 bg-teal-200 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14" />
            <div className="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
              <img src={shoppingbagicon} alt=''/>
            </div>
            <span className="inline-block pt-6 text-2xl font-medium tracking-wide text-white transition duration-300 group-hover:text-gray-800">
              E-Commerce
            </span>
          </div>

          <div className="flex overflow-hidden relative flex-col items-start p-6 bg-gray-800 rounded-lg transition duration-300 cursor-pointer group hover:bg-white">
            <span className="absolute top-0 right-0 w-24 h-24 bg-teal-200 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14" />
            <div className="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
              <img src={chipicon} alt=''/>
            </div>
            <span className="inline-block pt-6 text-2xl font-medium tracking-wide text-white transition duration-300 group-hover:text-gray-800">
              Digital Research
            </span>
          </div>

          <div className="flex overflow-hidden relative flex-col items-start p-6 bg-gray-800 rounded-lg transition duration-300 cursor-pointer group hover:bg-white">
            <span className="absolute top-0 right-0 w-24 h-24 bg-teal-200 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14" />
            <div className="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
              <img src={charticon} alt=''/>
            </div>
            <span className="inline-block pt-6 text-2xl font-medium tracking-wide text-white transition duration-300 group-hover:text-gray-800">
              Digital Analysis
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
