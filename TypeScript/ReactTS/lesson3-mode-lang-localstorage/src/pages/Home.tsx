import React, { useContext } from 'react'
import productaz from '../data/productaz'
import { LangContext } from '../context/LangContext'
import producten from '../data/producten';

const Home = () => {
  const [lang] = useContext(LangContext);
  
  return (
  <>
        <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
        </div>
        <ol>
          {lang === 'az' ? productaz.map(item=>{
            return <li>{item.title}</li>
          }): producten.map(item=>{
            return <li>{item.title}</li>
          })}
        </ol>
        </div>
   
  </>

  )
}

export default Home