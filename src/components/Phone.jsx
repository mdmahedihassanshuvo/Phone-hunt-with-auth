import React from 'react';

const Phone = ({phone}) => {
    // console.log(phone)
    const {name, price, image, description} = phone
    return (
        <div className='border border-slate-200 p-3 '>
            <div className=''>
                <img className='mx-auto mb-2' src={image} alt="" />
                <h3 className='font-semibold'>Name: {name}</h3>
                <p><span className='font-semibold'>Price</span>: ${price}</p>
            </div>
        </div>
    );
};

export default Phone;