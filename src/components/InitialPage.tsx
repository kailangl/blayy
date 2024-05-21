import { FC, useState } from "react";
import addons from "../../addons.json";
import user1 from "../../users.json";
import { Link } from "react-router-dom";
import AboutPage from "../pages/About";
import SearchBar from  "./SearchBar";
import LoginPage from "../pages/Login";


const InitialPage: FC = (): React.ReactNode => {
    const [selected, setSelected] = useState<1 | 2 | 3 | 4| 5| 6>(1);
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
    return (
        <main className="w-[100vw] bg-bluebg bg-fixed overflow-x-hidden text-white flex justify-center">
  
            <div className="flex flex-col max-w-[1500px] w-[100vw] h-[100%] justify-center gap-5">
                <header className="w-[100vw] h-[200px] max-w-[1500px] flex items-center justify-center tablet:mt-28">
                    <div className="absolute tablet:mr-0 mr-[1200px] top-1">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1 className="text-[30px] font-bold drop-shadow-xl "></h1>
                            {user == null ? (
                   <button onClick={() => {setSelected(5) }} className={`${selected === 5 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>LOGIN</button>
                            ) : (
                                <div className="flex flex-col items-center justify-center font-bold tablet:text-[10px] text-[20px] textt-shadow">
                                <img src={user.image} className="max-w-[50px] tablet:w-[50vw]" /> <span className="flex gap-1 text-bluetext">{user.username}</span>
                                <button onClick={() => {setSelected(6) }} className={`${selected === 6 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-1 px-2 font-bold flex flex-grow justify-center items-center  tablet:h-[12vw] tablet:w-[25vw]`}>Manage Account</button>
                                </div>
                            )}
                        
                            <div className="flex gap-3 text-bluetext tablet:w-[46vw] w-[300px]">
                        
                          
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold tablet:text-[30px] text-[100px] textt-shadow">ADDON LIST</h1> 
                        <div className="flex gap-1 text-bluetext tablet:w-[95vw] w-[600px]">
                            <button onClick={() => {setSelected(2); setPage(0); setPages(1) }} className={`${selected === 2 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>MODPACKS</button>  
                            <button onClick={() => {setSelected(1); setPage(0); setPages(1) }}  className={`${selected === 1 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>ADDONS</button>  
                            <button onClick={() => {setSelected(3); setPage(0); setPages(1) }} className={`${selected === 3 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>USERS</button>

                        </div>
                    </div>
                </header>
                <div className="flex w-full items-center justify-center">

                </div>
                {selected < 4 && (
                    <SearchBar query={query} setQuery={setQuery} />
                )}
                
                
                <section className="w-[100vw] flex justify-center items-center max-w-[1500px]">
                    <div className={selected >= 4 ? "flex items-center w-full justify-center" : "grid grid-cols-2 tablet:grid-cols-1 place-items-center gap-4 mb-4"}>
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
                            user1.users.filter((user1) => user1.username.toLowerCase().includes(query.toLowerCase())).map((user1, index) => (
                                ((index < page + 4 && index >= page) || (user1.username.toLowerCase().includes(query.toLowerCase())) && query != "")  && (
                                <Link key={index} to={user1.link} className="w-[150px]  h-[150px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                               <div className="m-3 h-full w-full flex  border-4 border-t- borderww-b-2 border-blueborder">
                                        <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[128px] text-center font-bold px-1">{user1.username}</div>
                                        <img className="w-full h-full object-cover" src={user1.image} />
                                        </div>
                                </Link>
                                ) 
                            ))
                        )  : selected === 4 ? (
                            <AboutPage />
                        )  : selected === 5 ? (
                         <LoginPage />
                           
                        )  : selected === 6 ? (
                            <LoginPage />
                              
                           ) : (
                            <div>sei lá você bugou a página seu inútil</div>
                        )}
                    </div>
                </section>
                <div className="flex w-full items-center justify-center">
                <div className="flex gap-1 text-bluetext tablet:w-[95vw] w-[600px]">
                 {selected < 3 && (
                    <h1  className=" text-blueborder">+*</h1>  
                        )}
              
                {selected === 1 && addons.addons[page-4] != undefined ? (
                        <button onClick={() => voltar()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : selected === 2 && addons.addonspacks[page-4] != undefined ? (
                        <button onClick={() => voltar()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : selected < 3 ? (
                        <button onClick={() => alert("you can't go back to non-existent pages")} className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Previous Page</button>
                    ) : (
<h1></h1>
                    )}
                    <h1 className=" text-blueborder"></h1>
               
                    {selected === 1 && addons.addons[page+4] != undefined ? (
                        <button onClick={() => pular()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : selected === 2 && addons.addonspacks[page+4] != undefined ? (
                        <button onClick={() => pular()} className="hover:bg-blueborder  shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : selected < 3 ? (
                        <button onClick={() => alert("you have already reached the last page")} className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Next Page</button>
                    ) : (
<h1></h1>
                    )}
              
              {selected < 3 && (
                    <h1  className=" text-blueborder">*+</h1>  
                        )}
                </div>
                </div>
                {selected < 3 ? (
                        <div>
 <h1>- Page {pages} -</h1>
 <div className="flex flex-col w-full items-center justify-center">
 <h1>ㅤ</h1>

               <button onClick={() => {setSelected(4); setPage(0); setPages(1) }} className={`${selected === 4 ? "bg-blueborder text-black" : ""} hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center`}>ABOUT-US</button>
               Blayy Developer Website
               </div>
                        </div>
  
                    ) : (
<h1></h1>
                    )}
               <div>
            
               </div>
            </div>
      
        </main>
    )

}

export default InitialPage;
