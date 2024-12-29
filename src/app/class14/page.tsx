import Link from "next/link"


export default async function PlaceHolder() {
    const placeholder = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await placeholder.json()

    return (
        <div>
            <h1 className="font-bold text-3xl text-center" >API (Application Programming Interface) </h1>
            <div className=" cursor-pointer my-10  " >
                {res.map((place: any , index : number) =>
                    <div key={index} className="px-10 flex gap-5 " >
                        <h1 className="text-2xl " >{place.id }</h1>
                       <Link href={`${place.id}`} > 
                        <h2> {place.title} </h2>
                        </Link>
                    </div>
                )}
          </div>
        </div>
    )
}


