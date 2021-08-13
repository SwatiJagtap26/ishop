import React from 'react';
import '../../styles/brand.css';
import {Branddata} from '../store/branddata';



function Brand() {
    return (
        <>
        <div  className="brand-container3">
            <div className="brand-bar4">
                <h1 className="brand-head3">BRAND</h1>
                <ul className="brand-brandlist">
                    {Branddata.map((val, key) => {
                    return (
                        <li className="brand-row1" key={key}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                        <div id="brand-title1">{val.title}</div> <div id="brand-total1">{val.total}</div>
                        </li>
                    )
                    })}
                </ul>
            </div>
        
            
        </div>
        
        <div className="more-cont">
        <h1 className="more-head4">MORE</h1>

        </div> 
        </>

                 


 
    );
}

export default Brand;
