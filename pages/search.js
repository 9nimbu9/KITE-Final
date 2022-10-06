import React, { useState } from "react"
import Link from "next/link"
import Axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Card from "../components/Card";


function Search(){
    const router = useRouter();
    const data1 = router.query;
    console.log(data1)

    const [data, setData] = useState([])
    const [name, setName] = useState()
  
    function type(event){
        setName(event.target.value)
    }

    function click(){
        setName("")
    }

    function api(){
        Axios.get("https://api.publicapis.org/entries?description="+data1.search).then(
        (respond) => {
            setData(respond.data.entries)
        })
    }

    useEffect(() => {
        api()
    },[])

    console.log(data)

    return(
        <div>
            <input onChange={type} type="text"/>
            <Link
                href={{
                pathname: '/search',
                query: {search: name}
                }}
            ><button onClick={click} type="submit">Click</button></Link>
            <Link
                    href={{
                    pathname: '/categories'
                    }}
            ><button type="submit">categories</button></Link>
            <h1>{data1.search}</h1>
            <div className="data">
                {data.map((m,index) => <Card key={index} api={m.API} description={m.Description} auth={m.Auth} https={m.HTTPS}
                cors={m.Cors} link={m.Link} category={m.Category}/>)}
            </div>
        </div>
    )
}

export default Search
