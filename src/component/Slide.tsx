import React from 'react'

type Props = {}

const Slide = (props: Props) => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.klassenid.com/wp-content/uploads/2017/12/klassenid-m10-audi-r8-banner-gallery.jpg" className="d-block w-100 h-50" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/736x/77/af/c8/77afc81fa109d65e131358c1abb1973e.jpg" className="d-block w-100 h50" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://png.pngtree.com/background/20230519/original/pngtree-audi-r8-youtube-3d-images-picture-image_2664362.jpg" className="d-block w-100 h-50" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden" >Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Slide