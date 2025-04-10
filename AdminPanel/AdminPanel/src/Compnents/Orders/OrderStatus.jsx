import React, { useEffect, useState } from 'react';
import '../ListAllProduct/ListAllProduct'
import { Link } from 'react-router-dom'
import edit from '../../assets/Edit.svg';
import info from '../../assets/info-circle.svg';

const OrderStatus = (props) => {

    const [orderData, setOrderData] = useState([]);
    const order_info = async () => {
        const response = await fetch(`http://localhost:4000/all-${props.status}-orders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrderData(data)
            });
    }
    useEffect(() => {
        order_info();
    }, [])

    //   const remove = async(id)=>{
    //     const res = await fetch('http://localhost:4000/remOrder',{
    //       method:'POST',
    //       headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json'
    //       },
    //       body:JSON.stringify({id:id})
    //     })
    //     await order_info();
    //   }

    const update =async (id) =>{
        const res= await fetch('http://localhost:4000/update-status',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await order_info();
    }
    return (
        <div className='ListAllProduct'>
            <h1>{`${props.status} List`}</h1>
            <div className='ListAllProduct-table'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-1">Order Id</th>
                            <th className="col-2">User Id</th>
                            <th className="col-2">Date</th>
                            <th className="col-2">Total Amount</th>
                            <th className='col-2'>Status</th>
                            <th className='col-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {orderData ? (
                            orderData.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="col-1">{product.id}</td>
                                        <td className="col-2">{product.user_id}</td>
                                        <td className="col-1">{product.date}</td>
                                        <td className="col-2">{product.total}</td>
                                        <td className="col-1">{product.status}</td>
                                        

                                        <td className="col-1"><div   onClick={()=>{
                                            update(product.id)
                                            console.log("Status Updated")
                                        }}><img src={edit} alt='edit' /></div></td>
                                        {/* <td className="col-1"><button id='btn' onClick={()=>{
                                             remove(product.id)
                                             console.log("Order id",product.id);
                                            }
                                              }>❌</button></td> */}
                                        {/* <td className="col-1"  ><Link to={`/all-accessories/more-info/${product.id}`  }><img  id='btn1' src={info} alt="" /></Link></td> */}


                                    </tr>
                                )

                            })
                        ) :
                            (<tr><td>Loading...</td></tr>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default OrderStatus;
