import React from 'react';
import '../../styles/color.css';

function Color() {
    return (
        <>
        
        <div  className="color-container2"> 
            <div className="color-bar3"> 
            <h1 className="color-head2">COLOR </h1><br />
            <div>
            <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
            <label class="btn btn-outline-primary color-btn" for="btn-check-outlined"></label>

            <input type="checkbox" class="btn-check" id="danger-outlined" autocomplete="off" />
            <label class="btn btn-outline-danger color-btn" for="danger-outlined"></label>

            <input type="checkbox" class="btn-check" id="dark-outlined" autocomplete="off" />
            <label class="btn btn-outline-dark color-btn" for="dark-outlined"></label>

            <input type="checkbox" class="btn-check" id="warning-outlined" autocomplete="off" />
            <label class="btn btn-outline-warning color-btn" for="warning-outlined"></label>

            <input type="checkbox" class="btn-check" id="success-outlined" autocomplete="off" />
            <label class="btn btn-outline-success color-btn" for="success-outlined"></label>

            <input type="checkbox" class="btn-check" id="secondary-outlined" autocomplete="off" />
            <label class="btn btn-outline-secondary color-btn" for="secondary-outlined"></label>
            </div>
            </div>
           </div> 
       </>
    );
}

export default Color;
