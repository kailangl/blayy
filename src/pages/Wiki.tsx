import { FC } from "react";
import { Params, useParams } from "react-router-dom";
import wiki from "../../wiki.json";

const WikiPage: FC = () => {
    const params = useParams<Params>();
    const itemName = params.wiki1;
    const wiki1 = wiki.wiki.find(wiki1 => wiki1.link.replace("/wiki/", "") === itemName);
    
     
    window.scrollTo(0, 9)
    return wiki1 ? (
        <>   
            <section className="w-[100vw] max-w-[1500vw] flex items-center justify-center overflow-x-hidden">
                <div className="flex flex-col items-center justify-center text-center p-3">
            <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">{wiki1.name}</h1>
            
            <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">{wiki1.description}</div>
            <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Recipe</h1>
            <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">{wiki1.recipe}</div>
            <div className="flex flex-col w-full items-center justify-center">
                        <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Images</h1>
                     <img src={wiki1.image} alt="" className="w-128 h-72"/>
                     <img src={wiki1.image2} alt="" />
                    </div>
                    <h1 className="my-5 text-white font-bold tablet:text-[30px] text-[25px]">- By {wiki1.addon} -</h1>
                    <a href={wiki1.addonlink} target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Addon Link</a>
                    </div>           
            </section>
        </>
    ) : (
        <div>this wiki dont exists</div>
    )
}

export default WikiPage;
