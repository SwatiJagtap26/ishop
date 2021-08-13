import React from 'react';
import '../../styles/card1.css';
import {Link} from 'react-router-dom';
import logo from './../../img-data/img/p2.png';
import Tumb1 from './../../img-data/img/ipod.jpg';
import Tumb2 from './../../img-data/img/smartwatch2.jpg';
import Tumb3 from './../../img-data/img/smartwatch2.0.jpg';
import Tumb4 from './../../img-data/img/homepod.webp';
import Tumb5 from './../../img-data/img/Apple Airpods Max.jpg';
import Tumb6 from './../../img-data/img/Apple Camera.webp';
import Tumb7 from './../../img-data/img/iPhone Lightning Dock - Gold.jpg';
import Tumb8 from './../../img-data/img/Apple Magic Trackpad 2.png';
import Tumb9 from './../../img-data/img/Apple Macbook Pro1.jpg';
import Tumb10 from './../../img-data/img/New Apple Mac Mini.webp';
import Tumb11 from './../../img-data/img/Apple Smartwatch Magic.webp';
import Tumb12 from './../../img-data/img/Apple Airpods.webp';

function Card1() {
          return (
        <>
        <div className="Accessories">
        <div >
         <div className="small-container">
            <h1>iPhone 8</h1>
            <p className="row-1">Performance and design, Taken right<br /> to the edge.</p>
            <p className="row-2"> Shop now</p>
            <div className="card-img">
            <img className="card-imgs" src={logo} alt="apple" />
            </div>
            
        </div>
        
        </div>

         <div className="navb-app8">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid navb-card">
  <a class="navbar-brand" href="/">13 Items</a>
    
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Sort By</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Name     </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle " to="/" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Show    12{/*<button className="btn button-primary dropdown-toggle" type="button" data-toggle="dropdown" > 12 </button>*/} </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">12 </Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">1</Link></li>
            <li><Link className="dropdown-item" to="/">2</Link></li>
            <li><Link className="dropdown-item" to="/">3</Link></li>
            <li><Link className="dropdown-item" to="/">4</Link></li>
            <li><Link className="dropdown-item" to="/">5</Link></li>
            <li><Link className="dropdown-item" to="/">6</Link></li>
            <li><Link className="dropdown-item" to="/">7</Link></li>
            <li><Link className="dropdown-item" to="/">8</Link></li>
            <li><Link className="dropdown-item" to="/">9</Link></li>
            <li><Link className="dropdown-item" to="/">10</Link></li>
            <li><Link className="dropdown-item" to="/">11</Link></li>
            <li><Link className="dropdown-item" to="/">12</Link></li>
          </ul>
        </li>
      </ul>
      <ul className="nav two-item ">
        <li className="nav-item">
        <Link className="nav-link active"  to="/"><i className="bi-card bi-grid-3x3-gap"></i></Link>
         </li>
        <li className="nav-item">
        <Link className="nav-link active"  to="/"><i className="bi-card bi-list"></i></Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
         </div>
         <div className="card-app8">
         <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 col1">
      <img src={Tumb1} className="card-img-top img-card" alt="..."/>
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Ipod</h5>
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
    <div className="card h-100 col1 ">
      <img src={Tumb2} className="card-img-top img-card" alt="..." />
      <div className="card-body">
      <br />
        <h5 className="card-title storecard-title">Apple Smartwatch2</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb3} className="card-img-top img-card" alt="..." />
      <div className="card-body">
      <br />
        <h5 className="card-title storecard-title">Apple Smartwatch2.0</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb4} className="card-img-top img-card" alt="..."/>
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple homepod mini</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb5} className="card-img-top img-card" alt="..." />
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Airpods Max</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb6} className="card-img-top img-card" alt="..." />
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Camera</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb7} className="card-img-top img-card" alt="..."/>
      <div className="card-body">
        <h5 className="card-title storecard-title">iPhone Lightning Dock - Gold</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb8} className="card-img-top img-card" alt="..." />
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Magic Trackpad 2</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb9} className="card-img-top img-card" alt="..." />
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Macbook Pro</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb10} className="card-img-top img-card" alt="..."/>
      <div className="card-body">
        <h5 className="card-title storecard-title">New Apple Mac Mini</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb11} className="card-img-top img-card" alt="..." />
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Smartwatch Magic</h5>
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
    <div className="card h-100 col1">
      <img src={Tumb12} className="card-img-top img-card" alt="..." />
      <div className="card-body">
        <h5 className="card-title storecard-title">Apple Airpods</h5>
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


         <div className="pagging">
         <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    
    <li className="page-item"><Link className="page-link" to="/">1</Link></li>
    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
    <li className="page-item "><Link className="page-link active-page-number" to="/">3</Link></li>
    <li className="page-item"><Link className="page-link" to="/">4</Link></li>
    <li className="page-item"><Link className="page-link" to="/">5</Link></li>
    
  </ul>
</nav>
         </div>
         
        </div>
        </>
    )
}

export default Card1
