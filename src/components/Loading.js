import React from 'react'
import '../styles/Loading.css';

function Loading() {
    return (
        <div className='container container_loading'>

             <div className="container_shootingstart-1">
             <div className="shootingstart-1"></div>
             </div>
             <div className="container_shootingstart-1">
             <div className="shootingstart-2"></div>
             </div>
             <div className="container_shootingstart-1">
             <div className="shootingstart-3"></div>
             </div>

             {/* <div className="shootingstart-2"></div>
             <div className="shootingstart-3"></div> */}

             <div className="star-1"></div>
                <div className="star-2"></div>
                <div className="star-3"></div>
                <div className="star-4"></div>
                <div className="star-5"></div>
                <div className="star-6"></div>
                <div className="star-7"></div>
                <div className="star-8"></div>
                <div className="star-9"></div>
                <div className="star-10"></div>
                <div className="star-11"></div>
            <div className='loading'>
                <svg xmlns="http://www.w3.org/2000/svg"	 width="500px" height="800px">
                    <path class="path" stroke="#64ffda" stroke-width="6" d="M205,103 264.756,137.5 264.756,206.5 205,241 145.244,206.5 145.244,137.5Z" stroke-linecap="round" fill="none" stroke-linejoin="round" />
                </svg>
            <div class="loadingBar"></div>
            </div>
        </div>
    )
}

export default Loading
