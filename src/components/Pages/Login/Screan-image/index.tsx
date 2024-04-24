import "./index.css";

export const ScreanContainer = () => {
  return (
    <div className="md:flex size-full pt-[4rem] pl-[4rem] bg-[#63c0d4] rounded-l-[2rem] hidden flex-col items-center justify-center overflow-hidden animation_illustrationWrapper">
      <h1 className="w-full text-left text-white text-[38px] opacity-0 translate-y-[-1.5rem] animationTitle font-bold">
        Boas-vindas ao SAIA
      </h1>
      <hr className="line" />
      <div className="screenshotDashboard"></div>
    </div>
  );
};
