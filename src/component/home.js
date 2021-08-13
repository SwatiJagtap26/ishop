import '../styles/home.css';
import {Link} from 'react-router-dom';
import Logo from './../img-data/iphone-x-pictures-45223.png';
import Logo1 from './../img-data/iphone-x-pictures-45224.png';
import Tumb1 from './../img-data/lap-1.jpg';
import Tumb2 from './../img-data/lap-3.jpg';
import Tumb3 from './../img-data/lap-4.jpg';
import Tumb4 from './../img-data/mob-1.jpg';
import Tumb5 from './../img-data/mob-2.jpg';
import Tumb6 from './../img-data/ipad-1.jpg';
import Tumb7 from './../img-data/smartwatch2.jpg';
import Tumb8 from './../img-data/mob-3.jpg';
//import Carousel from 'react-elastic-carousel';

 
function Home (){
    
   return(
        <>
          {/* Main Container */}
            <div className="main-container">
                {/* Pink Advertise */}
                    
                    <div className="Pink-color-img" >
                    <div className=" inner-container ">
                            <h1 className="red-heading">iPhone X</h1>
                            <p className="red-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                           <Link className="red-more">MORE</Link>
                            <img src={Logo} className="rounded  backimg" alt="logo"/>
                        </div>
                    </div>
                    
                {/* Best Seller */}
                    <div className="top-div">
                        <div className="sellereHead">
                            <h5 className="bs">BEST SELLER</h5>
                            </div>
                            
                            
                            <div className="seller-dropdown">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown mac-list">
                    <Link className="nav-link active dropdown-toggle"  to="/en" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >MAC</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/en">iPhone</Link></li>
                            <li><hr className="dropdown-divider" /></li>   
                      <li><Link className="dropdown-item" to="/hindi" >iPad</Link></li> 
                      <li><Link className="dropdown-item" to="/spanish" >iPod</Link></li>
                      <li><Link className="dropdown-item" to="/bengali" >Accessories</Link></li>
                      <li><Link className="dropdown-item" to="/marathi" >All</Link></li>
                    </ul>
                  </li>
                   </ul>
                   </div>
                   
                        <div className="nav-one">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/all">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mac">Mac</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/iphone">iPhone</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ipad">iPad</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ipod">iPod</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/accessories">Accessories</Link>
                                </li>
                            </ul>
                        </div>
                    {/* Home Cards */}
                        <div className="card-container">
                            <div className="Cards">
                                <div className="row row-cols-1 row-cols-md-4 g-4">
                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="cards-label">HOT</div>
                                            <div className="card-thumb">
                                            <img src={Tumb1} className="card-img-top thumb" alt="..." />
                                            </div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            <div className="color-star">
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star"></i>
                                           </div>
            
                                                 <table className="card-price-tag">
                                                   <tbody>
                                                     <tr>
                                                       <td className="card-price">$499:
                                                         <span className="card-price-2"> $599</span>
                                                       </td>
                                                     </tr>
                                                   </tbody>
                                                 </table>                                   
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"> <img src={Tumb2} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            <div className="color-star">
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star"></i>
                                          </div>
            
                                                <table className="card-price-tag">
                                                  <tbody>
                                                    <tr>
                                                      <td className="card-price">$499:
                                                        <span className="card-price-2"> $599</span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>                                  
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"><img src={Tumb3} className="card-img-top thumb" alt="..."/></div>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Air</h5>
                                            <div className="color-star">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star"></i>
                                        </div>
            
                                              <table className="card-price-tag">
                                                <tbody>
                                                  <tr>
                                                    <td className="card-price">$499:
                                                      <span className="card-price-2"> $599</span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>    
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"> <img src={Tumb4} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple iPhone 11</h5>
                                            <div className="color-star">
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star"></i>
                                         </div>
            
                                               <table className="card-price-tag">
                                                 <tbody>
                                                   <tr>
                                                     <td className="card-price">$499:
                                                       <span className="card-price-2"> $599</span>
                                                     </td>
                                                   </tr>
                                                 </tbody>
                                               </table>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"><img src={Tumb5} className="card-img-top thumb" alt="..." /></div>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            <div className="color-star">
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star-fill"></i>
                                                   <i class="bi bi-star"></i>
                                           </div>
            
                                                 <table className="card-price-tag">
                                                   <tbody>
                                                     <tr>
                                                       <td className="card-price">$499:
                                                         <span className="card-price-2"> $599</span>
                                                       </td>
                                                     </tr>
                                                   </tbody>
                                                 </table>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"> <img src={Tumb6} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Ipad</h5>
                                            <div className="color-star">
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star-fill"></i>
                                                 <i class="bi bi-star"></i>
                                         </div>
            
                                               <table className="card-price-tag">
                                                 <tbody>
                                                   <tr>
                                                     <td className="card-price">$499:
                                                       <span className="card-price-2"> $599</span>
                                                     </td>
                                                   </tr>
                                                 </tbody>
                                               </table>                                 
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"> <img src={Tumb7} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Watch 21-1</h5>
                                            <div className="color-star">
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star-fill"></i>
                                                  <i class="bi bi-star"></i>
                                          </div>
            
                                                <table className="card-price-tag">
                                                  <tbody>
                                                    <tr>
                                                      <td className="card-price">$499:
                                                        <span className="card-price-2"> $599</span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb">
                                        <img src={Tumb8} className="card-img-top thumb" alt="..."/>
                                        </div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple iPod 2A</h5>
                                            <div className="color-star">
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                                                        <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star"></i>
                                            </div>
            
                                                  <table className="card-price-tag">
                                                    <tbody>
                                                      <tr>
                                                        <td className="card-price">$499:
                                                          <span className="card-price-2"> $599</span>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
              
                        </div>
                    {/* Load More */}
                            <ul className="nav load justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link active navload" aria-current="page" to="/load_more">LOAD MORE</Link>
                                </li>
                            </ul>
                    </div>
                {/* Blue Advertise */}
                    <div className="Blue-color-img" >
                        <div className="inner-container ">
                            <div className="advertise blue1 ">
                                <h1 className="adv-head">iPhone 6 Plus</h1>
                                <p className="adv-infom">Performance and design. Taken <br/>right to the edge.</p>
                                <Link className="nav-link link-adv-ip6" aria-current="page" to="/shopnow">SHOP NOW</Link>
                            </div>
                            <div className="advertise adv-two-img blue2">
                            
                            <img src={Logo1} className="rounded backimg1" alt="logo"/>
                            </div>
                        </div>
                    </div>
                {/* Shipping Process */}
                    <div className="shipping">
                        <div className="shipping-div">
                        <article className="bottom-flex3">
                            <i className="fas fas-icon fa-shipping-fast"></i>
                            <h5 className="bottom-abc">FREE SHIPPING</h5>
                            <p className="info-flex3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                        </article>
                        
                        <article className="bottom-flex3">
                            <i className="fas fas-icon fa-dollar-sign"></i>
                            <h5 className="bottom-abc">100% REFUND</h5>
                            <p className="info-flex3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                        </article>
                        
                        <article  className="bottom-flex3">
                            <i className="fas fas-icon fa-headset"></i>
                            <h5 className="bottom-abc">SUPPORT 24/7</h5>
                            <p className="info-flex3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, maxime rerum. Maxime ullam voluptatibus fuga aliquid commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed.</p>
                        </article>
                        </div>
                    </div>
                    
                {/* Feature Product */}
                   <div className="feapro">
                        <div className="fea-prod">
                                <h5 className="pro-header">FEATURED PRODUCTS</h5>
                        </div>
                    </div>
                    {/* slide images */}
                    <div>
                   {/* <Carousel>
                   <div className="col">
                                        <div className="card h-100">
                                        <div className="cards-label">HOT</div>
                                        <div className="card-thumb"> <img src={Tumb2} className="card-img-top thumb" alt="..."/></div>
                                       
                                        <div className="card-body">
                                            <h5 className="card-title thumb-title">Apple Macbook Pro</h5>
                                            </div>
                                            </div>
                                            </div>
            
                   </Carousel> */}
                    
                    </div>
            </div>
        </>
    )

   }
export default Home;