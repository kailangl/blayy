import { FC, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import addons from "../../addons.json";

const AddonPage: FC = () => {
    const params = useParams<Params>();
    const addonName = params.addon;
    const addon = addons.addons.find(addon => addon.link.replace("/addon/", "") === addonName);
    useEffect(() => {
        if (addon) {
        
          const redirectUrl = `${addon.url}`;
    
          // Abre o redirecionamento em uma nova aba
          const openInNewTab = () => {
            const newTab = window.open(redirectUrl, '_blank');
            if (newTab) {
              
                    newTab.focus();
                  
            } else {
              console.error("Falha ao abrir nova aba.");
            }
          };
    
          // Redireciona após 5 segundos
          const redirectTimeout = setTimeout(() => {
            if (addon.url) {
            openInNewTab();
            }
          }, 1);
    
          return () => clearTimeout(redirectTimeout);
        }
      }, [addon]);
    
    window.scrollTo(0, 9)
    return addon ? (
        <>   
            <section className="w-[100vw] max-w-[1500vw] flex items-center justify-center overflow-x-hidden">
                <div className="flex flex-col items-center justify-center text-center p-3">
                    <h1 className="text-white text-[20px] w-[50%] tablet:w-[95vw]">-+ {addon.tag} +-</h1>
                <a href="/" target="" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">HOME</a>
                    <div className="flex justify-center items-center flex-col w-full">
                        <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">{addon.title.toUpperCase()}</h1>
                        <div id="container-57a06625508245eafda31519bf3468fb"></div>
                        <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">{addon.description}</div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center">
                        <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Showcase video</h1>
                        <iframe width="560" height="315" src={addon.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>                  
                          
                       
                        <a href={addon.download} target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Download Addon</a>
                        <h1 className="text-white text-[20px] w-[50%] tablet:w-[95vw]">-+ BlayyDeveloper +-</h1>
                    </div>
                </div>
             
            </section>
        </>
    ) : (
        <div>this addon dont exists</div>
    )
}

export default AddonPage;
