import React from 'react'
import '../styles/Loading.css';

function Loading() {
    return (
        <div className='container'>
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
