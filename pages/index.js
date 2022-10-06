import React, { useState } from "react"
import Link from "next/link"
import Card from "../components/Card"

export async function getStaticProps(){
  const respond = await fetch ('https://api.publicapis.org/entries')
  const data = await respond.json()
  return{
      props: {
          entries: data.entries
      }
  }
}

function Home({ entries }){
  const [name, setName] = useState()
  
  function type(event){
      setName(event.target.value)
  }

  function click(){
    setName("")
  }

  return(
      <div>
          <h1>Entries</h1>
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
          <div className="data">
            {entries.map((m, index) => <Card key={index}  api={m.API} description={m.Description} auth={m.Auth} https={m.HTTPS}
              cors={m.Cors} link={m.Link} category={m.Category}/>)}
          </div>
          
      </div>
      
  )
}

export default Home