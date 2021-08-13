import React, { Component }  from 'react'; 
import '../styles/store.css';
import Sidebar from './store/sidebar';
import Prices from './store/prices';
import Color from './store/color';
import Brand from './store/brand';
import Subheader from './store/subheader';
import Card1 from './store/card1';
 class Store extends Component{
   render (){
     return(
       <>
       <div>
            <Subheader />
            <div className="store-mainpage">
              <div className="storepage1">
                <Sidebar />
                <Prices />
                <Color />
                <Brand />
              </div>
              <div className="Storepage2">
                <Card1 />
              </div>
            </div>
        </div>
       </>
     );
 }
}
 export default Store;