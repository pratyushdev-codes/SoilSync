import React from 'react';

function Banner() {
  return (
    <div style={{ position: 'relative' }}>
      <img src='./images/c.png' style={{ width: '100%', height: '100%' }} alt="Banner" />
      <div style={{ position: 'absolute', top: '52%', left: '13%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black', fontSize: '24px' }}>
      <button type="button" className="btn btn-primary" style={{
  borderRadius: "20px",
  width: "150px",
  background: "linear-gradient(to right, #12A957, #1287A9)", // Gradient from #12A957 to #1287A9
  borderColor: "white",
  height:"40px",
  color: "white" // Ensuring text color contrasts with the gradient background
}}>Explore More  </button> <button type="button" className="btn btn-primary" style={{
  borderRadius: "20px",

  background: "linear-gradient(to right, #12A957, #1287A9)", // Gradient from #12A957 to #1287A9
  borderColor: "white",
  color: "white" // Ensuring text color contrasts with the gradient background
}}> &#8599;</button>

      </div>
    </div>
  )
}

export default Banner;
