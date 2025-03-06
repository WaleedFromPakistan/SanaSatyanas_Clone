import React, { useState, useRef, useContext } from 'react';
import './CSS/ItemDetail.css';
import Card from '../Components/Card/Card';
import {useParams} from 'react-router-dom';
import {ShopContext} from '../Components/Context/Context';

const ItemDetail = () => {

  const {products} = useContext(ShopContext);
  const id = useParams();
  const [count, setCount] = useState(1);
  const [image, setImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const zoomRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    if (zoomRef.current) {
      // Adjust the zoomed image position
      zoomRef.current.style.transform = `translate(-${x}%, -${y}%)`;
    }
  };

  return (
    <div >
      {
        products.map(prd =>{
          setImage(prd.image);
        })
      }
      <div className='item-detail'>
        <div className="product-images">
          <img onMouseOver={() => {
            setImage("https://www.sanasafinaz.com/media/catalog/product/s/x/sx24bsp274_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds")
          }} src="https://www.sanasafinaz.com/media/catalog/product/s/x/sx24bsp274_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds" alt="" />
          <img onMouseOver={() => {
            setImage("https://www.sanasafinaz.com/media/catalog/product/s/x/sx24bsp274_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds")
          }} src="https://www.sanasafinaz.com/media/catalog/product/s/x/sx24bsp274_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds" alt="" />
          <img onMouseOver={() => {
            setImage("https://www.sanasafinaz.com/media/catalog/product/s/x/sx24bsp274_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds")
          }} src="https://www.sanasafinaz.com/media/catalog/product/s/x/sx24bsp274_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds" alt="" />
        </div>

        <div className="product-logo" onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="Discount"><strong>16% off</strong></div>
          <img src={image} alt="Main Product" />
          {/* Zoom Preview Div */}
          {isHovered && (
            <div className="zoom-preview">
              <img ref={zoomRef} src={image} alt="Zoomed Product" />
            </div>
          )}
        </div>

        {/* Zoom preview container
        <div className={`zoom-preview ${isHovered ? 'visible' : ''}`} ref={zoomRef}>
          <img src={image} alt="Zoomed Product" />
        </div> */}

        <div className="product-detail">
          <div className="product-detail-0">
            <h3>SX24BSP274</h3>
            <p>Availability: In Stock</p>
          </div>

          <div className="product-detail-1">
            <p className='id-1'>SKU#: SX24BSP274</p>
            <p className='id-2'><i className="fa-regular fa-heart"></i> Add To Wish List</p>
          </div>

          <div className="product-detail-2">
            <p>Product Details:</p>
          </div>

          <div>
            <p><strong>Description: </strong>Vivid pink prints for a fresh look.</p>
          </div>
          <div>
            <p><strong>Color: </strong>Multi</p>
          </div>
          <div>
            <p><strong>Fabric: </strong>Lawn</p>
          </div>
          <div>
            <p><strong>Cut: </strong>Basic</p>
          </div>
          <div>
            <p><strong>Slip: </strong>Not Included</p>
          </div>
          <div>
            <p><strong>Dupatta: </strong>Not Included</p>
          </div>
          <div>
            <p><strong>Trouser: </strong>Not Included</p>
          </div>

          <hr />

          <div className='product-detail-3'>
            <span className='id-3'><strong>PKR 2,850.00</strong></span>
            <span className='id-4'>PKR 5,699.00</span>
          </div>

          <div>
            <button>SIZE CHART</button>
          </div>

          <div className="product-detail-4">
            <img src="https://baadmay.com/assets/baadmay-logo.svg" alt="" />
          </div>

          <div className='product-detail-5'>
            <p>Pay in 3 Easy Instalments of <strong>PKR 1,092.00</strong></p>
          </div>

          <div className="product-detail-6">
            <strong>Select Size</strong>
            <div className="size_container">
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <div className="product-detail-7">
            <div className="add-minus">
              <div className="minus" onClick={() => {
                setCount(prev => {
                  if (prev === 0 || prev === 1) {
                    return 1
                  } else { return prev - 1 }
                })
              }}>
                <p>-</p>
              </div>
              <div className="count">
                <p >{count}</p>
              </div>
              <div className="plus" onClick={() => { setCount(prev => prev + 1) }}>
                <p >+</p>
              </div>

            </div>
            <div className="add-button">
              <h5>ADD TO BAG </h5>
            </div>
          </div>
          <div className="product-detail-8">
            <p id='para-1'>Details</p>
            <p id='para-2'><strong>Disclaimer:</strong>Please note that the actual product and colors may appear different from the images displayed, as variations can occur based on the device you are using. Any additional fabric, patches, or embellishments that come with the product are mentioned under product description. Additionally, minor variations in measurements may occur. Thank you for your understanding.</p>
          </div>
        </div>
      </div>
      <div className='Details'>
        <p>YOU MAY ALSO LIKE</p>
      </div>
      <div className="cards-div">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
