function AboutMe() {
  return (
    <div id="about" className="grid   gap-5 mt-16 sm:mt-32 grid-cols-1 sm:grid-cols-2">
    <div className="col-span-1 flex justify-center">
        <img
          src="aboutimage.jpg"
          alt="rbgreherh"
          className="md:w-[500px]  w-[300px] rounded-lg md:h-[312px]"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-[18px] font-semibold text-blue-500 ">ABOUT ME</h1>
        <h1 className="text-2xl my-4 font-semibold text-gray-800">
          Web Developer and Programmer
        </h1>
        <p className=" text-gray-700">
        Hi there! I'm a dedicated WordPress developer with a passion for 
        creating custom websites that are both visually appealing and functionally robust.
        </p>
        <p className="mt-3 text-gray-700 ">
        My skill set includes custom theme development, WooCommerce integration, 
        and advanced customization using PHP, HTML, CSS, and JavaScript. I’m well-versed 
        in optimizing site performance, enhancing security, and implementing features that 
        deliver a smooth, intuitive user experience.
        </p>
      </div>
      
    </div>
  );
}

export default AboutMe;
