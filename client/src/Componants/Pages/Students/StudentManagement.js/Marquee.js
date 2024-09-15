import React from 'react'

const Marquee = () => {
  return (
    <>
          <div className='marquee'>
      <marquee behavior="scroll" direction="left" scrollamount="15" width="100%">
        Welcome To School Management Software. For Purchase Call.
      </marquee>
    </div>
    </>
  )
}

export default Marquee;