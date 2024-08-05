import logo from "../assets/Images/wallpaper.jpg";
import image from "../assets/Images/img-3.jpg";

const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-center text-3xl sm:text-5xl font-medium mt-10">
        Limited Time Summer Courses
      </h1>
      <p className="text-center mb-16 mt-4">
        All these bundles have recorded lectures
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Card 1 */}
        <div className="w-full sm:w-2/4 p-1">
          <div className="bg-blue-700 h-[120px] py-2">
            <h1 className="text-2xl text-center text-white mb-6">
              Web Dev Courses with Industrial Projects
            </h1>
            <p className="text-xs text-center text-white">4 courses</p>
          </div>
          <div className="relative group">
            {/* Initially shown items */}
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2 bg-white">
                <img src={logo} alt="not found" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2 bg-white">
                <img src={image} alt="" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
            </div>
            {/* Hidden items */}
            <div className="absolute top-full left-0 w-full flex flex-col gap-4 p-2 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
                <img src={logo} alt="not found" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
                <img src={image} alt="" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-2/4 p-1">
          <div className="bg-blue-700 h-[120px] py-3">
            <h1 className="text-2xl text-center text-white mb-6">
              Web Dev Courses with Industrial Projects
            </h1>
            <p className="text-xs text-center text-white">4 courses</p>
          </div>
          <div className="relative group">
            {/* Initially shown items */}
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2 bg-white">
                <img src={logo} alt="not found" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2 bg-white">
                <img src={image} alt="" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
            </div>
            {/* Hidden items */}
            <div className="absolute top-full left-0 w-full flex flex-col gap-4 p-2 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
                <img src={logo} alt="not found" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
              <div className="flex items-center justify-between border rounded-lg p-2 gap-2">
                <img src={image} alt="" className="h-20 w-32 rounded-lg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Price: 1300 PKR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
