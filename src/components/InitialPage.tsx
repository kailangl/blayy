import { FC } from "react";
import addons from "../../addons.json";
import { Link } from "react-router-dom";

const InitialPage: FC = (): React.ReactNode => {
    return (
        <main className="w-[100vw] bg-bluebg bg-fixed overflow-x-hidden text-white flex justify-center">
            <div className="flex flex-col max-w-[1500px] w-[100vw] h-[100%] justify-center gap-5">
                <header className="w-[100vw] h-[200px] max-w-[1500px] flex items-center justify-center">
                    <div className="absolute top-1 mr-[1200px]">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1 className="text-[30px] font-bold">BECOME A PATRON</h1>
                            <button className="shadow-blueshadow shadow-xl hover:bg-blueborder hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center w-full text-bluetext">CLICK ME</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-[100px] drop-shadow-xl shadow-bluetext">ADDON LIST</h1>
                        <div className="flex gap-3 text-bluetext w-[600px]">
                            <button className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center">MODPACKS</button>
                            <button className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center">ADDONS</button>
                            <button className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center">ABOUT US</button>
                        </div>
                    </div>
                </header>
                <section className="w-[100vw] flex justify-center max-w-[1500px]">
                    <div className="grid grid-cols-2 place-items-center gap-4">
                        {addons.map(addon => (
                            <Link to={addon.link} className="w-[600px] h-[300px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                                <div className="m-3 h-full w-full flex border-4 border-t-0 border-b-0 border-blueborder">
                                    <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[263px] text-center font-bold px-2">{addon.title}adsasd</div>
                                    <img className="w-full h-full object-cover" src={addon.image} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )

}

export default InitialPage;