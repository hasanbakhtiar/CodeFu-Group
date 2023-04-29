import React from 'react'

const About = () => {
  return (
<div className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
      <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
      </div>
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
    </div>
  </div>
</div>

  )
}

export default About