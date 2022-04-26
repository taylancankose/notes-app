import React from 'react'

function Footer() {
  return (
    <div className="container"> 
    <div className="row">
    <div className="img">
            <a href="https://github.com/tecosama" target="_blank">
                <img 
                className='mt-3 mx-auto d-flex justify-content-center align-items-center'
                src={('https://avatars.githubusercontent.com/u/94180821?v=4')} 
                style={{height:'60px', borderRadius: '50%'}} 
                />
            </a>
        </div>
        <div className="text-center mt-3 mb-5">
        <span className='mx-auto  text-center justify-content-center'>
            Made with <i className="fa fa-heart pulse"></i> by <a href="https://github.com/tecosama" target="_blank">Tecosama </a>
        </span>
        </div>
    </div>
    </div>
  )
}

export default Footer