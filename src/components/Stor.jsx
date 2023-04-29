import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Stor = () => {

    const phones = useLoaderData()
    console.log(phones)

    return (
        <div className='mx-20'>
            <h2 className='text-3xl text-blue-600 font-semibold mt-10 text-center'>Welcome to Phone-Hunt Stor</h2>
            <div className='grid grid-cols-5 gap-5'>
                <div className='col-span-4 grid grid-cols-4 gap-5 mt-10'>
                    {
                        phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                    }
                </div>
                <div>
                    detail
                </div>
            </div>
        </div>
    );
};

export default Stor;