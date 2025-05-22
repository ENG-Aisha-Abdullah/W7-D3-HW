import React from "react";
import OlaImage from "/src/assets/Ola.png";
function Ola() {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${OlaImage})`,
        height: "100vh",
      }}
    >
      <div className="flex flex-col justify-center gap-6 lg:gap-10 text-center font-extralight items-center backdrop-brightness-40 h-full px-4 ">
        <h1 className="text-bold lg:text-8xl mt-40">
          السعودية | Saudi Arabia – العلا 🇸🇦
        </h1>
        <p className="text-sm lg:text-lg max-w-2xl">
          تكوينات صخرية شاهقة تسرد تاريخًا صامتًا.
        </p>
        <p className="text-sm lg:text-lg max-w-2xl">
          "في العلا، الصخور تحكي… وأنت فقط تُنصت"
        </p>
      </div>
    </div>
  );
}

export default Ola;
