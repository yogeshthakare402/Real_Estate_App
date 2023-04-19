import React, { useEffect } from 'react'

function Progress({track}) {
    useEffect(()=>{
        // console.log(track)
        let one = document.getElementById('one');
        let two = document.getElementById('two');
        let three = document.getElementById('three');
        let four = document.getElementById('four');
        // console.log(one.classList)
        if(track===1){
            two.classList.remove('activebar');
            one.classList.add('activebar');
        }else if(track===2){
            one.classList.remove('activebar');
            three.classList.remove('activebar');
            two.classList.add('activebar');
        }else if(track===3){
            two.classList.remove('activebar');
            four.classList.remove('activebar')
            three.classList.add('activebar')
        }else if(track===4){
            three.classList.remove('activebar')
            four.classList.add('activebar')
        }
    },[track])
    return (
        <div>
            <div id='progress' className='container-fluid mt-md-5 bg-dark' style={{maxWidth:"820px", borderRadius:"20px"}}>
                <ul className="nav nav-dark flex-row flex-nowrap nav-pills nav-fill" id='progressbar'>
                    <li className="nav-item">
                        <div id='one' className="nav-link text-white d-flex flex-row flex-nowrap align-items-center justify-content-center">
                            <span className='pr-2 pl-2 text-dark bg-white rounded-circle'>1</span>
                            <span className='ms-1 ml-3 d-none d-lg-inline'>Basic Info</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div id='two' className="nav-link text-white d-flex flex-row align-items-center justify-content-center">
                            <span className='pr-2 pl-2 text-dark bg-white rounded-circle'>2</span>
                            <span className='sm-1 ml-3 d-none d-lg-inline'>Property Detail</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div id='three' className="nav-link text-white d-flex flex-row align-items-center justify-content-center">
                            <span className='pr-2 pl-2 text-dark bg-white rounded-circle'>3</span>
                            <span className='ms-1 ml-3 d-none d-lg-inline'>General Info</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div id='four' className="nav-link text-white d-flex flex-row align-items-center justify-content-center">
                            <span className='pr-2 pl-2 text-dark bg-white rounded-circle'>4</span>
                            <span className='ms-1 ml-3 d-none d-lg-inline'>Location Info</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Progress