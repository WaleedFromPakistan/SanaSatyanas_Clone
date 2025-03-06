import React , {useState , useEffect} from 'react';
import './ListAllProduct.css'
import { Link } from 'react-router-dom'
import edit from '../../assets/Edit.svg';
import info from '../../assets/info-circle.svg';
const ListAllClothing = () => {
    const [productData, setProductData] = useState([]);
    const product_info = async () => {
      const response = await fetch('http://localhost:4000/all-Clothings')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProductData(data)
        });
    }
    useEffect(() => {
      product_info();
    }, [])

    const remove = async(id)=>{
      const res = await fetch('http://localhost:4000/remClothing',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id})
      })
      await product_info();
    }
  return (
    <div className='ListAllProduct'>
        <h1>Clothings List</h1>
        <div className='ListAllProduct-table'>
          <table className="table">
            <thead>
              <tr>
                <th className="col-1">#</th>
                <th className="col-2">Title</th>
                <th className="col-2">Price</th>
                <th className='col-2'>Category</th>
                <th className='col-2'>Available</th>
                <th className='col-3'>Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              { productData ?(
                productData.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className="col-1">{product.id}</td>
                      <td className="col-2">{product.title}</td>
                      <td className="col-2">${product.new_price}</td>
                      <td className="col-2">{product.Category}</td>
                      <td className="col-2">{product.available}</td>
                      <td className="col-1"><button id='btn1'><img src={edit} alt='edit'/></button></td>
                      <td className="col-1"><button id='btn' onClick={()=>{
                        remove(product.id)
                        console.log("Product id",product.id);
                      }
                        }>❌</button></td>
                      <td className="col-1"  ><Link to={`/all-Clothings/more-info/${product.id}`  }><img  id='btn1' src={info} alt="" /></Link></td>
                      

                    </tr>
                  )

                })
              ):
              (<tr><td>Loading...</td></tr>)

              }
            </tbody>
          </table>
        </div>

      </div>
  );
}

export default ListAllClothing;
