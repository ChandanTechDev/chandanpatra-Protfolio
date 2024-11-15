import React from "react";

function Technology() {
  return (
    <div className="mt-20 flex flex-col gap-6   ">
      <div>
        <h1 className="text-[20px] font-semibold">
          Tech Stack <span className="mx-3"> : </span>{" "}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <img src="wordpress-logo.svg" alt="" className="w-12 h-12 " />
        <img src="825519.png" alt="" className="w-12 h-12 " />
        <img src="php-logo.svg" alt="" className="w-12 h-12 " />
        <img src="html.png" alt="" className="w-12 h-12 " />
        <img src="css-3.png" alt=""  className="w-12 h-12 " />
        <img src="js.png" alt=""  className="w-12 h-12 " />
        <img src="git.svg" alt="" className="w-12 h-12 " />
      </div>
    </div>
  );
}

export default Technology;
