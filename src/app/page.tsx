import Link from "next/link";
import PlaceHolder from "./class14/page";

export default async function  Page() {
  // const url = await fetch("https://simple-books-api.glitch.me/books")
  // const res = await url.json()   

  return (
    <div>
       {/* <h1> Hello world </h1>
            {res.map((books :any )=> 
            <div className="px-10 " >
              <Link href={`${books.id} `} >
               <h1 className="text-2xl " >{  books.name} </h1>
               </Link>
                </div>
                
             )} */}
          <PlaceHolder />            
             
    
    </div>
  )
}


