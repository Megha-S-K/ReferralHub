"use client";
import React, { useState } from "react";

function AIAssistantPopup() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleChat() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Popup Window */}
      <div
        className={`fixed bottom-[20px] right-[30px] z-[999] bg-white rounded-3xl shadow-[0px_0px_35px_rgba(219,219,219,0.5)] transition-all duration-300 ease-in-out max-w-[400px] w-full max-sm:max-w-[200px] max-sm:w-[calc(100%_-_40px)]`}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          opacity: isOpen ? "1" : "0",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3.5 text-xl font-semibold bg-white border-b border-stone-300 text-zinc-800 rounded-t-3xl">
          <div className="flex items-center gap-3.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/294f7a5eeb6b088798bbcdc3af2a693e438550b7"
              alt="Assistant Icon"
              className="w-[50px] aspect-square"
            />
            <span>AI Assistant</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b8a5793c6c0a6ad964ed3df5c8b3d7de4fb524"
            alt="Close Icon"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleChat}
          />
        </div>

        {/* Chat Content */}
        <div className="flex flex-col px-5 mt-5 text-xs font-medium text-stone-500">
          {/* Intro Message */}
          <div className="flex gap-2 items-start mb-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed5ffa1bd1403758e38dffee14f7eae22167ee96"
              alt="Bot Icon"
              className="w-[25px] aspect-square"
            />
            <div className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-medium rounded-md py-2 transition">
              <div className="flex gap-2 items-start mb-3 rounded-md px-4 py-2 ">
              Your gateway to access awaits! 🚪 Choose your key to enter.
            </div>
          </div>
          </div>

          {/* Login Options */}
          {[
            "SSO Login (Continue with Google/Microsoft/etc.)",
            "Magic Link (Send me a one-time login link)",
            "Email & Password (I'll enter my details manually.)",
          ].map((option, index) => (
            <div className="flex gap-2 items-start mb-3" key={index}>
              <div className="w-[25px]"></div> {/* Keeps it aligned */}
              <div className="border border-zinc-300 rounded-md px-4 py-2 bg-white w-full">
              
                {option}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        
        <div className="flex justify-between items-center px-5 py-3 mt-6 text-base leading-8 bg-white border-t border-neutral-200 text-zinc-500 rounded-b-3xl">
        <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full border border-zinc-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ae7db29897da4a69e469b038661e78c63d01bd8"
            alt="Send Icon"
            className="w-[60px] aspect-square"
          />
        </div>
      </div>

      {/* Floating Button */}
      <button
        className="fixed bottom-[30px] right-[30px] bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        onClick={toggleChat}
        style={{
          opacity: isOpen ? "0" : "1",
          transform: isOpen ? "scale(0)" : "scale(1)",
        }}
      >
        <div className="max-w-[40px] w-full max-xl:max-w-[20px] ">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed5ffa1bd1403758e38dffee14f7eae22167ee96"
          alt="Chat Icon"
        />
        </div>
      </button>
    </>
  );
}

export default AIAssistantPopup;
