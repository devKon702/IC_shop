import React from "react";

export default function FloatButton() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-6">
      <a
        href="#"
        className="size-10 rounded-full bg-white shadow-2xl grid place-items-center"
      >
        <i className="bx bxs-up-arrow text-2xl"></i>
      </a>

      <button className="size-10 rounded-full bg-primary grid place-items-center cursor-pointer glow-hover">
        <i className="bx bxs-message-rounded-dots text-white text-2xl"></i>
      </button>
    </div>
  );
}
