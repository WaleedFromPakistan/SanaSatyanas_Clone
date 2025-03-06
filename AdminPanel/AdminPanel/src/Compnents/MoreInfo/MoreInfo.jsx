import React, { useState, useEffect } from 'react';
import './MoreInfo.css';
import { useParams } from 'react-router-dom';

const MoreInfo = () => {
    const { id } = useParams(); // Correct extraction of id
    const [Data, setData] = useState([]);

    const product_info = async () => {
        try {
            const response = await fetch('http://localhost:4000/all-Accessories');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        product_info();
    }, []);

    return (
        <div className='MoreInfo container mt-4' id='More_info'>
            <h2>Product Info</h2>
            <div className='table-responsive'>
                {
                    Data.filter(product => String(product.id) === String(id)).map((prd, index) => (
                        <table key={index} className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th scope='row'>Title</th>
                                    <td>{prd.title  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Image URL (main)</th>
                                    <td>{prd.img_main  || 'N/A'}</td>
                                </tr>
                              
                                <tr>
                                    <th scope='row'>Description</th>
                                    <td>{prd.description || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Disclaimer</th>
                                    <td>{prd.disclaimer || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Delivery Notes</th>
                                    <td>{prd.delivery_note || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>How it Works?</th>
                                    <td>{prd.how_it_work || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Old Price</th>
                                    <td>${prd.old_price || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>New Price</th>
                                    <td>${prd.new_price  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Available</th>
                                    <td>{prd.available ? 'Available' : 'Not Available'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Dimension</th>
                                    <td>{prd.dimension || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Material</th>
                                    <td>{prd.material || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Category</th>
                                    <td>{prd.Category  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Sub Category</th>
                                    <td>{prd.sub_category  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Image 1</th>
                                    <td>{prd.img1  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Image 2</th>
                                    <td>{prd.img2  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Image 3</th>
                                    <td>{prd.img3  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Image 4</th>
                                    <td>{prd.img4  || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Image 5</th>
                                    <td>{prd.img5  || 'N/A'}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    ))
                }
            </div>
        </div>
    );
};

export default MoreInfo;
