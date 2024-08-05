import vector1 from '../assets/Images/Vector1.jpg';
import vector2 from '../assets/Images/Vector2.jpg';
import vector3 from '../assets/Images/Vector3.jpg';
import AI from  '../assets/Images/ML&AI.jpg';
import Amazon from  '../assets/Images/Amazon.jpg';
import Animation from  '../assets/Images/Animation.jpg';
import Architectuer from  '../assets/Images/Architectuer.jpg';
import blockchain  from '../assets/Images/BlockChain.jpg';
import cyberSecurity from '../assets/Images/cyberSecurity.jpg';
import Desinh from '../assets/Images/Desinh.jpg';
import Development from '../assets/Images/Development.jpg';
import Gaming from '../assets/Images/Gaming.jpg';
import IOS from '../assets/Images/IOS.jpg';
import Marketing from '../assets/Images/Marketing.jpg';


const HowItWorks = () => {
  return (
    <div>
      <div className=" max-w-6xl mx-auto mt-20">
        <h1 className=" text-center text-4xl text-black font-bold ">
          how it works
        </h1>
        <div className="  max-w-4xl mx-auto flex flex-col gap-6 items-center justify-between mt-16 sm:flex-row ">
          <div className=" h-[200px] w-[250px] mb-4" >
          <img src={vector2} alt="" srcset="" />
          </div>
          <div className=" h-[200px] w-[250px] mb-4" >
          <img src={vector3} alt="" srcset="" />
          </div>
          <div className=" h-[200px] w-[250px] mb-4 " >
          <img src={vector1} alt="" srcset="" />
          </div>
        </div>
        <div className=" max-w-5xl mx-auto mt-20 grid sm:grid-cols-6 grid-cols-3 gap-10">
          <div className=" h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p className="">
              <img src={AI} className="text-7xl text-amber-950" />
            </p>
            <h1>ML & AI</h1>
          </div>
          <div className=" h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={blockchain} className="text-7xl text-orange-500" />
            </p>
            <h1>Bkock Chain</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Amazon}className="text-7xl" />
            </p>
            <h1>Amazon</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={cyberSecurity} className="text-7xl text-blue-700" />
            </p>
            <h1>CyberSecurity</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Development} className="text-7xl" />
            </p>
            <h1>Development</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Desinh} className="text-7xl" />
            </p>
            <h1>Desing</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Gaming} className="text-7xl" />
            </p>
            <h1>Gaming</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Architectuer} className="text-7xl text-yellow-600" />
            </p>
            <h1>Architectuer</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={IOS} className="text-7xl" />
            </p>
            <h1>IOS & AND</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Marketing} className="text-7xl text-red-700" />
            </p>
            <h1>Markiting</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={AI} className="text-7xl" />
            </p>
            <h1>3D</h1>
          </div>
          <div className="h-[170px] w-[150px] shadow-md flex flex-col items-center justify-center gap-4 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-2">
            <p>
              <img src={Animation}className="text-7xl text-green-800" />
            </p>
            <h1>Animation</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
