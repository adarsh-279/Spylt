import { TfiLineDouble } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 p-8 w-full flex flex-row justify-between">
      <nav className="">
        <img className="w-22" src="public\images\nav-logo.svg" alt="" />
      </nav>
      <div>
        <TfiLineDouble className="text-5xl" />
      </div>
      <div>
        <button className="px-7 py-3 rounded-full font-[Antonio] font-bold bg-[#fef3f0] hover:bg-[#e3a458] transition ease-in-out duration-300">
          FIND IN STORES
        </button>
      </div>
    </div>
  );
};

export default Navbar;
