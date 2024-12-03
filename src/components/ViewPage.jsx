import React from 'react';
import { FaLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const ViewPage = () => {
    const coffee = useLoaderData();
    const {_id, name, chef, supplier, price, taste, details, photo} = coffee

    return (
        <div className='bg-viewBg bg-cover bg-center py-8'>
            <div className='max-w-7xl w-11/12 mx-auto'>
            <Link className='btn rounded-lg bg-none mb-6 text-primary' to='/'> <span><FaLeftLong></FaLeftLong></span> Back To Home</Link>
            <div className=' flex gap-6 items-center font-raleway bg-secondary p-8 rounded-lg'>
               <div className='w-1/4'>
                <img src={photo} alt="" />
               </div>
               <div className='text-left grow'>
                <h3>Name: {name}</h3>
                <h3>Chef: {chef}</h3>
                <h3>Supplier: {supplier}</h3>
                <h3>Price: {price}</h3>
                <h3>Taste: {taste}</h3>
                <h3>Details: {details}</h3>
               </div>
            </div>
            </div>
        </div>
    );
};

export default ViewPage;