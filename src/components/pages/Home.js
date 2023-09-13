import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';

function Home() {
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">home</a>
    </div>
    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Home
