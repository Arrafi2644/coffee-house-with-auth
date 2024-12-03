import React, { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';

const Coffees = () => {

    const [coffees, setCoffees] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
    }, [])

    return (
        <div className='max-w-7xl w-11/12 mx-auto my-16'>
            <p className='text-center'>--- Sip & Savor ---</p>
            <h2 className='font-bold text-3xl text-primary text-center mb-8'>Our Popular Products</h2>
        
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                         key={coffee._id} 
                         coffee={coffee}
                         coffees={coffees}
                         setCoffees={setCoffees}
                         ></CoffeeCard>
                    )
                }
            </div>
        </div>
    );
};

export default Coffees;