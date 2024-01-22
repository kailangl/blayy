import { FC } from "react";
import { Params, useParams } from "react-router-dom";
import addons from "../../addons.json";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CustomLink(props) {
  const [link, setLink] = useState(""); // o estado do link personalizado

  useEffect(() => {
    // quando o componente é montado
    LootLabs.createLink({
      // cria um link personalizado
      url: props.url, // a URL original
      theme: props.theme, // o tema do link
      tier: props.tier, // o nível de anúncios
      callback: function (result) {
        // a função de callback
        if (result.success) {
          // se o link foi criado com sucesso
          setLink(result.link); // atualiza o estado do link
        } else {
          // se houve algum erro
          console.error("Erro: " + result.message); // imprime a mensagem de erro
        }
      },
    });
  }, [props.url, props.theme, props.tier]); // depende das props do componente

  return (
    <div>
      {link ? ( // se o link existe
        <Link to={link}>{props.children}</Link> // retorna um componente Link com o link personalizado
      ) : (
        // se o link não existe
        <p>Carregando...</p> // retorna um texto de carregamento
      )}
    </div>
  );
}

export default CustomLink;

const AddonPage: FC = () => {
    const params = useParams<Params>();
    const addonName = params.addon;

    const addon = addons.addons.find(addon => addon.link.replace("/addon/", "") === addonName);

    return addon ? (
        <>
            <section className="w-[100vw] max-w-[1500vw] flex items-center justify-center overflow-x-hidden">
                <div className="flex flex-col items-center justify-center text-center p-3">
                    <div className="flex justify-center items-center flex-col w-full">
                        <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">{addon.title.toUpperCase()}</h1>
                        <div id="container-57a06625508245eafda31519bf3468fb"></div>
                        <div className="text-white text-[20px] w-[50%] tablet:w-[95vw]">{addon.description}</div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center">
                        <h1 className="my-10 text-white font-bold tablet:text-[30px] text-[50px]">Showcase video</h1>
                        <a href={addon.video} target="_blank">
                            <img className="max-w-[500px] tablet:w-[95vw]" src={addon.image} />                          
                          
                        </a>
                        <a href={addon.download} target="_blank" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Download Addon</a>
                    </div>

                </div>
            </section>
        </>
    ) : (
        <div>this addon dont exists</div>
    )
}

export default AddonPage;
