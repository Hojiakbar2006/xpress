import React from 'react'
import "./NotFound.css"
import notFound from "../../Assets/images/notFound.png"

export function NotFound() {
  return (
    <section id='notFound'>
        <figure>
            <h1>
                ErrorName : 404
            </h1>
            <img src={notFound} alt="" />
        </figure>
    </section>
  )
}
