import React from "react";
import yawarImg from "../assets/killarneyYawar.png";
import RegisterButton from "./RegisterButton";
import NotesButton from "./NotesButton";

const Me: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-gray-50 p-10 mx-auto py-16">
      <img
        src={yawarImg}
        alt="Yawar"
        className="w-60 h-60 rounded-full object-cover border-4 border-blue-50 mb-6"
      />
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-3">Hi, I’m Yawar!</h2>
        <p className="text-gray-500 text-xl mb-2">
          I am an <span className="font-bold text-gray-900">Engineering Science</span> graduate from <span className="font-bold text-gray-900">University of Toronto</span>, completed <span className="font-bold text-gray-900">Ontario high school</span> with a <span className="font-bold text-gray-900">97% average</span>.
        </p>
        <p className="text-gray-500 text-xl">
          My goal is to build <span className="font-bold text-gray-900">strong foundations</span> and <span className="font-bold text-gray-900">lasting confidence</span>.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <RegisterButton />
      </div>
      <div className="mt-12 flex justify-center">
        <NotesButton />
      </div>
    </section>
  );
};

export default Me;