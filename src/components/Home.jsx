import React from 'react'
import Bar from './Bar';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold ">Application design studio</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4 text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-info btn-lg px-4 me-sm-3 fw-bold">View PDF</button>
          {/* <button type="button" class="btn btn-light btn-lg px-4">Read more</button> */}
        </div>
      </div>
    </div>
  </div>
  <Bar></Bar>
  <Footer></Footer>
    </div>
    
  )
}

export default Home;
