import { FC } from "react";
import { Params, useParams } from "react-router-dom";
import addons from "../../addons.json";

const AddonPackPage: FC = () => {
    const params = useParams<Params>();
    const addonName = params.addon;

    const addonpack = addons.addonspacks.find(addon => addon.link.replace("/addonpack/", "") === addonName);

    return addonpack ? (
        <section className="w-[100vw] max-w-[1500vw] flex items-center justify-center overflow-x-hidden">
            <div className="flex flex-col items-center justify-center text-center p-3">
                <div className="flex justify-center items-center flex-col w-full">
                    <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">{addonpack.title.toUpperCase()}</h1>
                    <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">{addonpack.description}</div>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                    <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Showcase video</h1>
                    <a href={addonpack.video} target="_blank">
                        <img className="max-w-[500px] tablet:w-[95vw]" src={addonpack.image} />
                    </a>
                    <a href={addonpack.download} target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Download Addon</a>
                </div>
            </div>
        </section>
    ) : (
        <div>this addonpack dont exists</div>
    )
}

export default AddonPackPage;