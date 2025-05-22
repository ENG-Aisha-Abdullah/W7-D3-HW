import React from "react";
import IcelandImage from "/src/assets/Iceland.png";
function Iceland() {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${IcelandImage})`,
        height: "100vh",
      }}
    >
      <div className="flex flex-col justify-center gap-6 lg:gap-10 text-center font-extralight items-center backdrop-brightness-40 h-full px-4 ">
        <h1 className="text-bold lg:text-8xl mt-40">
          آيسلندا | Iceland – جوكالسارلون 🇮🇸
        </h1>
        <p className="text-sm lg:text-lg max-w-2xl">
          بحيرة جليدية تنعكس فيها السماء والثلج في مشهد نادر
        </p>
        <p className="text-sm lg:text-lg max-w-2xl">
          "كأن العالم يتجمّد للحظة... ليتأمل نفسه"
        </p>
      </div>
    </div>
  );
}

export default Iceland;
