import { FC, useState } from "react";
import addons from "../../addons.json";
import wiki from "../../wiki.json";
import { Link } from "react-router-dom";
import AboutPage from "../pages/About";
import SearchBar from  "./SearchBar";


const InitialPage: FC = (): React.ReactNode => {
    const [selected, setSelected] = useState<1 | 2 | 3 | 4>(1);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(1);
    const [query, setQuery] = useState<string>("");
      const storedUser = localStorage.getItem('loggedInUser');   
       const user = JSON.parse(storedUser as string)

     

    function pular() {
        setPage(page + 4);
        setPages(pages +1)
      }
      function voltar() {
        setPage(page - 4);
        setPages(pages -1)
      }
      function pular1() {
        setPage(page + 6);
        setPages(pages +1)
      }
      function voltar1() {
        setPage(page - 6);
        setPages(pages -1)
      }
    return (
        <main className="w-[100vw] bg-bluebg bg-fixed overflow-x-hidden text-white flex justify-center">
            
            <div className="flex flex-col max-w-[1500px] w-[100vw] h-[100%] justify-center gap-5">
                <header className="w-[100vw] h-[200px] max-w-[1500px] flex items-center justify-center tablet:mt-28">
                    <div className="absolute tablet:mr-0 mr-[1200px] top-1">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1 className="text-[30px] font-bold drop-shadow-xl ">BLAYY DEVELOPER</h1>
                            <div className="flex gap-3 text-bluetext tablet:w-[46vw] w-[300px]">
                                
                            <button onClick={() => {setSelected(4); setPage(0); setPages(1) }} className={`${selected === 4 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>ABOUT-US</button>
                          
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold tablet:text-[30px] text-[100px] textt-shadow">ADDON LIST</h1>
                        
                        <div className="flex gap-1 text-bluetext tablet:w-[95vw] w-[600px]">
                            {user.username}
                            <button onClick={() => {setSelected(2); setPage(0); setPages(1) }} className={`${selected === 2 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>MODPACKS</button>  <img src="https://cdn.discordapp.com/attachments/1221560323350462474/1223387330359070829/azul_cristal01_1080_1080-removebg-preview.png?ex=662c203c&is=6619ab3c&hm=e210c486def9aac56261a59f12b8aedb713e99035f9ccb980459450d79ecc026&" className="max-w-[50px] tablet:w-[0vw]" />
                            <button onClick={() => {setSelected(1); setPage(0); setPages(1) }}  className={`${selected === 1 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>ADDONS</button>  <img src="https://cdn.discordapp.com/attachments/1221560323350462474/1223387330648342649/SKILLED_PICKAXE01_1080_1080-removebg-preview.png?ex=662c203d&is=6619ab3d&hm=9b540d303e71a0886c1fed6a12a0217b151b49de9286ea087e1b9da102578472&" className="max-w-[50px] tablet:w-[0vw]" />
                            <button onClick={() => {setSelected(3); setPage(0); setPages(1) }} className={`${selected === 3 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>WIKI</button>

                            <img src="https://cdn.discordapp.com/attachments/1221560323350462474/1223387330359070829/azul_cristal01_1080_1080-removebg-preview.png?ex=6619ab3c&is=6607363c&hm=b1bd9802f6b5a4dde5f92a11b633d25894141bdf36517ddf0ca36960906a7637&" className="max-w-[0px] tablet:w-[95vw]" />
                        </div>
                    </div>
                </header>
                <div className="flex w-full items-center justify-center">

                </div>
                <SearchBar query={query} setQuery={setQuery} />
                
                <section className="w-[100vw] flex justify-center items-center max-w-[1500px]">
                    <div className={selected === 4 ? "flex items-center w-full justify-center" : "grid grid-cols-2 tablet:grid-cols-1 place-items-center gap-4 mb-4"}>
                        {selected === 1 ? (
                            addons.addons.filter((addon) => addon.title.toLowerCase().includes(query.toLowerCase())).map((addon, index) => (
                                ((index < page + 4 && index >= page) || (addon.title.toLowerCase().includes(query.toLowerCase())) && query != "")  && (
                                    <Link key={index} to={addon.link} className="w-[600px] tablet:w-[95vw] h-[300px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                                    <div className="m-3 h-full w-full flex border-4 border-t-0 border-b-0 border-blueborder">
                                        <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[263px] text-center font-bold px-2">{addon.title}</div>
                                        <img className="w-full h-full object-cover" src={addon.image} />
                                    </div>
                                </Link>
                                )
                            ))
                        ) : selected === 2 ? (            
                            addons.addonspacks.filter((addon) => addon.title.toLowerCase().includes(query.toLowerCase())).map((addon, index) => (
                                ((index < page + 4 && index >= page) || (addon.title.toLowerCase().includes(query.toLowerCase())) && query != "")  && (
                                <Link key={index} to={addon.link} className="w-[600px] tablet:w-[95vw]   h-[300px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                                    <div className="m-3 h-full w-full flex border-4 border-t-0 borderww-b-0 border-blueborder">
                                        <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[263px] text-center font-bold px-2">{addon.title}</div>
                                        <img className="w-full h-full object-cover" src={addon.image} />
                                    </div>
                                </Link>
                                )
                            ))
                        ) : selected === 3 ? (
                            wiki.wiki.filter((wiki1) => wiki1.name.toLowerCase().includes(query.toLowerCase())).map((wiki1, index) => (
                                ((index < page + 4 && index >= page) || (wiki1.name.toLowerCase().includes(query.toLowerCase())) && query != "")  && (
                                <Link key={index} to={wiki1.link} className="w-[300px] tablet:w-[47vw] h-[150px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-150 border-2 border-blueborder flex items-center justify-center">
                                    <div className="m-1 h-full w-full flex border-2 border-t-0 border-b-0 border-blueborder">
                                        <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-2 h-[18px] absolute mt-[128px] text-center font-bold px-1"><h1 className="text-[10px]">{wiki1.name} - {wiki1.addon}</h1></div>
                                        <img className="w-full h-full object-cover" src={wiki1.image} />
                                    </div>
                                </Link>
                                ) 
                            ))
                        )  : selected === 4 ? (
                            <AboutPage />
                        ) : (
                            <div>sei lá você bugou a página seu inútil</div>
                        )}
                    </div>
                </section>
                <div className="flex w-full items-center justify-center">
                <div className="flex gap-1 text-bluetext tablet:w-[95vw] w-[600px]">
                <h1 className=" text-blueborder">+*</h1>  
                {selected === 1 && addons.addons[page-4] != undefined ? (
                        <button onClick={() => voltar()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : selected === 2 && addons.addonspacks[page-4] != undefined ? (
                        <button onClick={() => voltar()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : selected === 3 && wiki.wiki[page-6] != undefined ? (
                        <button onClick={() => voltar1()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : selected < 4 ? (
                        <button onClick={() => alert("you can't go back to non-existent pages")} className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : (
<h1></h1>
                    )}
                    <h1 className=" text-blueborder"></h1>
               
                    {selected === 1 && addons.addons[page+4] != undefined ? (
                        <button onClick={() => pular()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : selected === 2 && addons.addonspacks[page+4] != undefined ? (
                        <button onClick={() => pular()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : selected === 3 && wiki.wiki[page+6] != undefined ? (
                        <button onClick={() => pular1()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : selected < 4 ? (
                        <button onClick={() => alert("you have already reached the last page")} className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : (
<h1></h1>
                    )}
              
                <h1 className=" text-blueborder">*+</h1>  
                </div>
                </div>
                {selected < 4 ? (
                        <div>
 <h1>- Page {pages} -</h1>
                        </div>
  
                    ) : (
<h1>About</h1>
                    )}
               <div>
               </div>
            </div>
      
        </main>
    )

}

export default InitialPage;
