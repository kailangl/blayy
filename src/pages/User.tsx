
import { FC, useState } from "react";
import { Params, useParams } from "react-router-dom";
import users from "../../users.json";
import addons from "../../addons.json";
import { Link } from "react-router-dom";  
const UserPage: FC = () => {
    const params = useParams<Params>();
    const itemName = params.user1;
    const user1 = users.users.find(user1 => user1.link.replace("/users/", "") === itemName);
    const [query] = useState<string>("");
   
    window.scrollTo(0, 9)
    return user1 ? (
        <>   
       
            <section className="w-[100vw] max-w-[1500vw] flex items-center justify-center overflow-x-hidden">
        
                <div className="flex flex-col items-center justify-center text-center p-3">
               
                <a href="/" target="" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">HOME</a>
            <h1 className="text-white tablet:text-[10vw] text-[100px] font-bold">{user1.username}</h1>

            <img src={user1.image} alt="" className="max-w-[500px] tablet:w-[95vw]"/>  
          
 
           
                    </div>  
                  
            </section>
            <div className="flex flex-col items-center justify-center text-center p-3">
                    <div className="text-white text-[20px] w-[25%] tablet:w-[47vw]">{user1.description}</div>
                    </div>
            <h1  className="text-white tablet:text-[10vw] text-[100px] font-bold">Posts</h1>
            <main className="w-[100vw] bg-bluebg bg-fixed overflow-x-hidden text-white flex justify-center">
            <section className="w-[100vw] flex justify-center items-center max-w-[1500px]">
            <div className="grid grid-cols-2 tablet:grid-cols-1 place-items-center gap-4 mb-4">
           
                    {addons.addons.filter((addon) => addon.title.toLowerCase().includes(query.toLowerCase())).map((addon, index) => (
                      
                           (addon.creator == user1.username && (
<Link key={index} to={addon.link} className="w-[600px] tablet:w-[95vw] h-[300px] hover:shadow-blueshadow hover:shadow-2xl transition-all duration-300 border-4 border-blueborder flex items-center justify-center">
                              <div className="m-3 h-full w-full flex border-4 border-t-0 border-b-0 border-blueborder">
                                  <div className="bg-bluebg border-b-0 border-l-0 border-blueborder text-bluetext border-4 h-[30px] absolute mt-[263px] text-center font-bold px-2">{addon.title}</div>
                                  <img className="w-full h-full object-cover" src={addon.image} />
                              </div>
                          </Link>
                           ))
                              
      
                      ))}
                         </div>
                    </section>
                    </main>
        </>
    ) : (
        <div>this user dont exists</div>
    )
}

export default UserPage;
