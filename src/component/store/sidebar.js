import React from 'react';
import '../../styles/sidebar.css';
import {Sidebardata} from './sidebardata';



function Sidebar() {
    return (
        <div  className="acc-container1">
            <div className="acc-bar1">
                <h1 className="acc-head1">ACCESORIES</h1>
                <ul className="acc-sidebarlist">
                    {Sidebardata.map((val, key) => {
                    return (
                        <li className="acc-row1" key={key}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                        <div id="acc-title1">{val.title}</div> <div id="acc-total1">{val.total}</div>
                        </li>
                    )
                    })}
                </ul>
            </div>
            
        </div>
                

                 


 
    );
}

export default Sidebar;
