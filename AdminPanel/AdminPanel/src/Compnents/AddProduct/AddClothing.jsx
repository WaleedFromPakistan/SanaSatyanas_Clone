import React, { useState } from 'react';
import './AddProduct.css';
const AddClothing = () => {

    const [formData, setFormData] = useState({
        title: '',
        img_main: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        description: '',
        disclaimer: '',
        color: '',
        size: '',
        trouser: '',
        fabric: '',
        slip: '',
        cut: '',
        dupatta: '',
        old_price: '',
        new_price: '',
        available: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Add Product info into the database
    const addProduct = async () => {
        try {
            const response = await fetch('http://localhost:4000/addClothing', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                alert('Product added successfully');
                console.log(data);
                setFormData({
                    title: '',

                    img_main: '',
                    img1: '',
                    img2: '',
                    img3: '',
                    img4: '',
                    img5: '',
                    
                    description: '',
                    disclaimer: '',
                    color: '',
                    size: '',
                    trouser: '',
                    fabric: '',
                    slip: '',
                    cut: '',
                    dupatta: '',
                    old_price: '',
                    new_price: '',
                    available: '',
                    category: ''
                });
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Something went wrong', error);
            alert('Something went wrong');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple form validation
        if (!formData.title || !formData.img_main || !formData.new_price || !formData.available || !formData.category) {
            alert('Please fill in all required fields.');
            return;
        }
        addProduct();
    };


    return (
        <div className='AddProduct-form'>
            <h1>Add New Clothing</h1>
            <form className="row g-3">

                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Title</label><span>*</span>
                    <input type="text" name='title' onChange={handleChange} value={formData.title} className="form-control" id="title" required />
                </div>
                <div className="col-3">
                    <label htmlFor="fabric" className="form-label">Fabric</label>
                    <input type="text" className="form-control" name='fabric' value={formData.fabric} onChange={handleChange} id="fabric" />
                </div>
                <div className="col-3">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input type="text" className="form-control" name='color' value={formData.color} onChange={handleChange} id="color" placeholder="color" />
                </div>


                <div className="col-md-3">
                    <label htmlFor="dupatta" className="form-label">Dupatta</label><span></span>
                    <input type="text" name='dupatta' onChange={handleChange} value={formData.dupatta} className="form-control" id="dupatta"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="trouser" className="form-label">Trouser</label>
                    <input type="text" name='trouser' onChange={handleChange} value={formData.trouser} className="form-control" id="trouser"/>
                </div>
                <div className="col-4">
                    <label htmlFor="cut" className="form-label">Cut</label>
                    <input type="text" className="form-control" name='cut' value={formData.cut} onChange={handleChange} id="cut" placeholder="cut" />
                </div>



                <div className="col-4">
                    <label htmlFor="oldPrice" className="form-label">Old Price</label>
                    <input type="text" className="form-control" name='old_price' value={formData.old_price} onChange={handleChange} id="oldPrice" />
                </div>
                <div className="col-4">
                    <label htmlFor="newPrice" className="form-label">New Price</label><span>*</span>
                    <input type="text" className="form-control" name='new_price' value={formData.new_price} onChange={handleChange} id="newPrice" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="category" className="form-label">Category</label><span>*</span>
                    <input type="text" name='category' onChange={handleChange} value={formData.category} className="form-control" id="category" required />
                </div>



                <div className="col-3">
                    <label htmlFor="available" className="form-label">Available</label><span>*</span>
                    <select id="available" className="form-select" name='available' value={formData.available} onChange={handleChange} required>
                        <option value="">Select an Option</option>
                        <option value='Available'>Available ✅</option>
                        <option value='N/A'>Not Available ❌</option>
                    </select>
                </div>
                <div className="col-5">
                    <label htmlFor="disclaimer" className="form-label">Disclaimer</label>
                    <input type="textArea" className="form-control" name='disclaimer' onChange={handleChange} value={formData.disclaimer} id="disclaimer" placeholder="Disclaimer" />
                </div>
                <div className="col-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type='text' className="form-control" name='description' value={formData.description} onChange={handleChange} id="description" placeholder="Description" />
                </div>




                <div className="col-md-4">
                    <label htmlFor="img_main" className="form-label">Image Main (URL)</label><span>*</span>
                    <input type="text" className="form-control" id="img_main" name='img_main' value={formData.img_main} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="img1" className="form-label">Image 1 (URL)</label><span></span>
                    <input type="text" className="form-control" id="img1" name='img1' value={formData.img1} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="img2" className="form-label">Image 2 (URL)</label><span></span>
                    <input type="text" className="form-control" id="img2" name='img2' value={formData.img2} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="img3" className="form-label">Image 3 (URL)</label><span></span>
                    <input type="text" className="form-control" id="img3" name='img3' value={formData.img3} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="img4" className="form-label">Image 4 (URL)</label><span></span>
                    <input type="text" className="form-control" id="img4" name='img4' value={formData.img4} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="img5" className="form-label">Image 5 (URL)</label><span></span>
                    <input type="text" className="form-control" id="img5" name='img5' value={formData.img5} onChange={handleChange} />
                </div>
              
                
              
             
               
              
               
              
               
             
              
                
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" onClick={handleSubmit} id='add_btn' className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
}

export default AddClothing;
