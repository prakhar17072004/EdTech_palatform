import React from 'react'

import { FaArrowRight } from "react-icons/fa6";
import {Link} from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText.jsx"
const Home = ()=>{
    return(
    <div>
        {/*section1*/}
        <div className="relative text-white mx-auto flex flex-col w-11/12 items-center 
          justify-between     ">
         <Link to={"/singUp"}>
             <div className=' group mt-16 p-1 mx-auto rounded-full font-bold text-slate-300 transition-none duration-200 hover:scale-95 ww-fit  ' >
                 <div className=" group-hover:bg-slate-500 flex flex-row items-center gap-3 rounded-full px-10 py-[10px]">
                     <p>Become an Instructor </p>
                     <FaArrowRight />
     
                 </div>
             </div>
         </Link>

         <div>
           Empower your future with 
           <HighlightText text={"Coding Skills"}/>

         </div>
        </div>
         {/*section2*/}
          {/*section3*/}
           {/*footer*/}
     
         </div>
     )
    
    }
export default Home