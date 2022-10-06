import React, { useState } from "react"
import Link from "next/link"


export async function getStaticProps(){
    const respond = await fetch ('https://api.publicapis.org/categories')
    const data = await respond.json()
    console.log(data.categories)
    return{
        props: {
            categories: data.categories
        }
    }
}

function Categories({ categories }){
    return(
        <div>
            <h1>Categories</h1>
            <div className="categories">
            {categories.map((m, index) => <p key={index} className="catData">{m}</p>)}
            </div>
        </div>      
    )
}

export default Categories
