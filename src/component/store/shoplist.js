import React from 'react';

function shoplist() {
    return (
     <>     <div className="shoplist-container">
                <div className="shoplist-row"> 
                    <div className="col-1">
                    <img className="shop-imgs" src="../img/ipod.jpg"  alt="apple" />
                    </div>
                    <div className="col-2">
                    <img className="shop-imgs" src="../img/smartwatch2.jpg"  alt="apple" />
                    </div>
                    <div className="col-3">
                    <img className="shop-imgs" src="../img/smartwatch2.0.jpg"  alt="apple" />
                    </div>
                </div>
            </div>
     </>
    );
}

export default shoplist
