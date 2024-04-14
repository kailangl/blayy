import { FC } from "react";

const AboutPage: FC = () => {
  window.scrollTo(0, 9)
  return (
    <div className="flex flex-col max-w-[1500px] w-full items-center justify-center gap-5">
      <section className="w-full max-w-[1500vw] items-center justify-center flex overflow-x-hidden">
        <div className="flex flex-col text-center items-center p-3">
          <div className="flex flex-col w-full">
            <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">About-US</h1>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Contribuitors</h1>
            <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">Blayy</div>
            <img className="max-w-[250px] tablet:w-[47vw]" src="https://yt3.ggpht.com/2OSuLI_a-fxPBby0ecbM0w6jdTnKTEeFDUYHHbibDaargKnwT6HgHhHtahMCfaEDiEuwNXdL=s108-c-k-c0x00ffffff-no-rj" />
            <div className="text-white text-[10px] w-[25%] tablet:w-[47vw]">DISCORD: @blayy EMAIL: blayystudios@gmail.com</div>
            <a href="https://youtube.com/@blayy" target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Youtube Channel</a>
            <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">Spyei</div>
            <img className="max-w-[250px] tablet:w-[47vw]" src="https://cdn.discordapp.com/avatars/955095844275781693/53acc56cab2131eb898b155e37abf614.png?size=2048" />
            <div className="text-white text-[10px] w-[25%] tablet:w-[47vw]">DISCORD: @spyei EMAIL: kevincaionovo@gmail.com</div>
            <a href="https://spyei.online/" target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Portifolio</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage;
