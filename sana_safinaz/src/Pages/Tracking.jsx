import React, { useState } from 'react';
import './CSS/track.css';

const Tracking = () => {
    const [track, setTrack] = useState('');

    const fetchOrder = async () => {
        try {
            const response = await fetch('http://localhost:4000/all-orders');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching orders:", error);
            return [];
        }
    };

    const onClick = async () => {
        const id = document.getElementById('track-input').value;
        if (id === '') {
            alert('Please Enter Order Id');
            return;
        }

        const orders = await fetchOrder();
        const order = orders.find(item => item.id === Number(id));
        console.log(order);

        if (!order) {
            setTrack('Your Order is not found');
        } else if (order.status === "Dispatch") {
            setTrack('Your Order is Dispatched and will reach you within 5 to 7 working days');
        } else if (order.status === "Pending") {
            setTrack('Your Order is under preparation and will be dispatched soon!');
        } else {
            setTrack('Your Order is not found');
        }
    };

    return (
        <div className='tracking'>
            <div className='container'>
                <h1>Track your Order Here!</h1>
                <div className='container'>
                    <p className='input-main p'>Enter your Order Id.</p>
                    <div className="input-group mb-3 input-main">
                        <input type="text" className="form-control" id='track-input' placeholder="Track your Order here" aria-label="Track Order" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type='button' onClick={onClick} id="button-addon2">Track</button>
                    </div>
                    <h3 className='track-comment'>{track}</h3>
                </div>
            </div>
        </div>
    );
};

export default Tracking;
