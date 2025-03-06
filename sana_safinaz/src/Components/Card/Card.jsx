import { useState } from 'react'
import './Card.css'

function Card() {
  const [like , setlike] = useState(false);
  const [image , setImage] = useState(false)
  function toggleLike() {
    setlike(!like);
  }

  function toggleImage() {
    setImage(!image);
  }
  return (
    <>
      
      <div className="Card-container-main">
        <div className="Card-container">
          <div className="like-button" onClick={toggleLike}>{like ? <i class="fa-solid fa-heart" style={{color: 'red'}}></i> : <i class="fa-regular fa-heart"></i>}</div>
          <div className="discount-data"><strong>16% off</strong></div>
          <div onMouseEnter={toggleImage} onMouseLeave={toggleImage}>
            {image ? <img className='product-image' src="https://www.sanasafinaz.com/media/catalog/product/s/s/ss24bsp185p2t_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1200&width=774&canvas=774:1200" alt="card_image" /> : <img className='product-image' src="https://www.sanasafinaz.com/media/catalog/product/s/s/ss24bsp185p2t_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1200&width=774&canvas=774:1200" alt="card_image" /> }
          </div>
        </div>
        <div className="Card-add">
          <h5><i class="fa-regular fa-bag-shopping"></i> Add to Bag</h5>
        </div>
      </div>
      <div className="data-container">
        <div>
          <a href="" className="id">SS24BSP185P2T</a>
        </div>
        <div className="Price_data">
          <span><strong>PKR 4,815.00</strong> </span>
           <span><p>PKR 6,879.00</p></span>
        </div>
        <div className="size_container">
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
        </div>
      </div>
    </>
  )
}

export default Card