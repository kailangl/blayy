import { FC, useState } from "react";
import addons from "../../addons.json";
import { Link } from "react-router-dom";

const InitialPage: FC = (): React.ReactNode => {
    const [selected, setSelected] = useState<1 | 2>(1);

    return (
        <main className="w-[100vw] bg-bluebg bg-fixed overflow-x-hidden text-white flex justify-center">
            <div className="flex flex-col max-w-[1500px] w-[100vw] h-[100%] justify-center gap-5">
                <header className="w-[100vw] h-[200px] max-w-[1500px] flex items-center justify-center tablet:mt-28">
                    <div className="absolute tablet:mr-0 mr-[1200px] top-1">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1 className="text-[30px] font-bold">BECOME A PATRON</h1>
                            <button onClick={() => window.location.href = "https://www.patreon.com/blayydeveloper/membership"} className="shadow-blueshadow shadow-xl hover:bg-blueborder hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center w-full text-bluetext">CLICK ME</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold tablet:text-[30px] text-[100px] drop-shadow-xl shadow-bluetext">BLAYY DEVELOPER</h1>
                        <div className="flex gap-3 text-bluetext tablet:w-[95vw] w-[600px]">
                            <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>MODPACKS</button>
                            <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>ADDONS</button>
                             <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>ABOUT</button>
                        </div>
                    </div>
                </header>
                <div className="flex w-full items-center justify-center">
                    {selected === 1 ? <h1 className="font-bold tablet:text-[30px] text-[80px] drop-shadow-xl shadow-bluetext">ADDONS</h1> : <div className="font-bold tablet:text-[30px] text-[80px] drop-shadow-xl shadow-bluetext">MODPACKS</div>}
                </div>
                <section className="w-[100vw] flex justify-center max-w-[1500px]">
                    <div className="grid grid-cols-2 tablet:grid-cols-1 place-items-center gap-4 mb-4">
                        {selected === 1 ? (
                            addons.addons.map((addon, index) => (
                                <Link key={index} to={addon.link} className="w-[600px] tablet:w-[95vw] h-[300px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                                    <div className="m-3 h-full w-full flex border-4 border-t-0 border-b-0 border-blueborder">
                                        <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[263px] text-center font-bold px-2">{addon.title}</div>
                                        <img className="w-full h-full object-cover" src={addon.image} />
                                    </div>
                                </Link>
                            ))
                        ) : selected === 2 ? (
                            addons.addonspacks.map((addon, index) => (
                                <Link key={index} to={addon.link} className="w-[600px] tablet:w-[95vw] h-[300px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                                    <div className="m-3 h-full w-full flex border-4 border-t-0 border-b-0 border-blueborder">
                                        <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[263px] text-center font-bold px-2">{addon.title}</div>
                                        <img className="w-full h-full object-cover" src={addon.image} />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div>sei lá você bugou a página seu inútil</div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )

}

export default InitialPage;
