import React from 'react'

const Ivan = () => {
    return (<div>
        <div className={"bg-blue-300"}><img className={"mx-auto"} src={"https://picsum.photos/300/400"}
                                            alt={"Placeholder"}/>
        </div>
        <h1 className={"text-3xl font-serif py-14 bg-blue-500"}>Nice to meet you! I'm Ivan</h1>
        {/*not centered lol*/}
        <div className={"grid grid-cols-3 p-10 bg-blue-500 content-center"}>
            <div><img className={"hover:scale-125"} src={"https://picsum.photos/200/300"} alt={"Activity one"}/></div>
            <div><img className={"hover:scale-125"} src={"https://picsum.photos/200/300"} alt={"Activity two"}/></div>
            <div><img className={"hover:scale-125"} src={"https://picsum.photos/200/300"} alt={"Activity three"}/></div>
        </div>
    </div>)
}

export default Ivan