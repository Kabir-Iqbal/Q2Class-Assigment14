// Class 13

// async function Page(props: any) {
//     const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.slug}`)
//     const res = await url.json()

//     return (
//         <div>
//               {props.params.slug} <br/>
//               {res.name}    <br/>
//               {res.author }  <br/>

//         </div>
//     )
// }

// export default Page


// Class 14

async function Page(props: any) {

    const Id = props.params.slug

    const placeholder = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await placeholder.json()

    const post = res.find((i: any) => i.id === parseInt(Id))

    if (!post) {
        <h1 className="text-4xl font-bold" >Page Not Found </h1>
    }

    return (
        <div className="my-20 " >
            <h1 className="text-cent text-center font-semibold text-2xl px-6 sm:px-14 md:px-16 lg:px-48" >{post.title} </h1>
            <p className="text-center my-2 mb-7  " > {` Paragraph ${Id}`} </p>
            <p className=" px-4 sm:px-5 md:px-10 lg:px-36 font-serif text-xl text-slate-800 my-5 leading-9 " > {post.body} </p>
        </div>

    )
}

export default Page

