import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-white bg-slate-700 h-[77px] flex justify-center items-center text-center font-medium text-lg md:text-xl  tracking-wide">
      <span>
        Created By{" "}
        <a href="#" target="_blank" className=" text-slate-950">
          Muthukumaran
        </a>{" "}
        | <span>{<FaRegCopyright className=" inline-block" />} </span>{" "}
        <span id="year">2024</span>
      </span>
    </div>
  );
};

export default Footer;
