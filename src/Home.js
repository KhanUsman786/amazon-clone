import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>

          <div className='home_container'>
              
              <img className='home_image'
              src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
              />

              <div class="home-row">
              <Product 
              id='123456'
              title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
              price={489}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              rating={5}
              />

              <Product 
              id='2'
              title='AmazonBasics Nylon Braided USB A to Lightning Compatible Cable -'
              price={799.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/41TEawIMRfL._AC_US436_FMwebp_QL65_.jpg"
              rating={3}
              />
              
    
              </div>

              <div class="home-row">
              <Product 
              id='3'
              title='Amazon Echo (3rd Gen)'
              price={4999.00}
              image="https://m.media-amazon.com/images/I/71xaI+n5CSL._AC_UY436_FMwebp_QL65_.jpg"
              rating={4}
              />


              <Product 
              id='4'
              title='Apple iPhone 11 Pro Max (512GB) - Space Grey'
              price={99000}
              image="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY436_FMwebp_QL65_.jpg"
              rating={5}
              />
              <Product 
              id='5'
              title='Aart Store Foldable Sofa Cum Bed One Seater - Perfect for Guests -'
              price={14000}
              image="https://m.media-amazon.com/images/I/71BY8DIDvZL._AC_UL640_FMwebp_QL65_.jpg"
              rating={4}
              />
              </div>

              <div class="home-row">
              <Product 
              id='6'
              title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'
              price={50000}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              rating={5}
              />
              </div>



          </div>
          

            
        </div>
    )
}

export default Home
