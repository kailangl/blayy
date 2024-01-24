import { FC } from "react";

const AddonPage: FC = () => {
   return (
      <>
     
         <main className="w-[100vw] bg-bluebg bg-fixed overflow-x-hidden text-white flex justify-center">
              <div className="flex flex-col max-w-[1500px] w-[100vw] h-[100%] justify-center gap-5">
            <section className="w-[100vw] max-w-[1500vw] flex items-center justify-center overflow-x-hidden">
                <div className="flex flex-col items-center justify-center text-center p-3">
                    <div className="flex justify-center items-center flex-col w-full">
                        <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">About</h1>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center">
                        <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Contribuitors</h1>
                    <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">Spyei</div>
                            <img className="max-w-[500px] tablet:w-[95vw]" src="https://cdn.discordapp.com/avatars/955095844275781693/53acc56cab2131eb898b155e37abf614.png?size=2048" />                          
                          
                        <a href="https://simobotlist.vercel.app/" target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Portifolio</a>
                    </div>

                </div>
             
            </section>     
                 </div>
            </main>
          </>
    )
}

export default AboutPage;
