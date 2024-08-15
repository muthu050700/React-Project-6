import { volleyball_bg_img } from "../../Utils/TeamPlayerProfileConstant/TeamPlayerProfileConstant";

const TeamMembersProfile = () => {
  return (
    <div
      className="bg-cover md:bg-left bg-center w-full h-[60vh] relative"
      style={{ backgroundImage: `url(${volleyball_bg_img})` }}
    >
      <div className="absolute bg-gradient-to-r from-gray-900 to-zinc-950 opacity-50   w-full h-[60vh]"></div>
      <div className="flex justify-end items-center h-full px-4">
        <div className="flex flex-col gap-6 max-w-[900px] min-w-[300px] ">
          <h1 className=" text-3xl md:text-5xl  font-bold z-30 text-white text-start">
            Player Profile Creation
          </h1>
          <p className=" text-sm md:text-lg font-medium z-30 text-white max-w-[900px] min-w-[300px] text-justify">
            Welcome to the Player Profile Creation page! This is where you can
            add or update your personal details to build a comprehensive player
            profile. Your profile will highlight your contributions to the team
            and provide visitors with insights into who you are.
          </p>
          <p className="  text-sm md:text-lg font-medium z-30 text-white max-w-[900px] min-w-[300px] text-justify">
            If you’ve already submitted your details, you can review and make
            changes as needed. If not, please complete the form below to create
            your profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersProfile;
