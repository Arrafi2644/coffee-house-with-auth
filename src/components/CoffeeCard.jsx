import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaEye, FaTrash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, price, supplier, taste, details, photo } = coffee

    const handleDeleteCoffee = (_id) => {
        // console.log("Delete", _id);
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-house-server-iota.vercel.app/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            // alert("Deleted successfully")
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remainingCoffees)
                        }
                    })

            }
        });


    }

    return (
        <div className='flex gap-6 justify-between items-center font-raleway bg-secondary p-6 rounded-lg'>
            <div className='w-1/3'>
                <img className='w-full h-full object-cover' src={photo} alt="" />
            </div>
            <div className='grow'>
                <h3>Name: {name}</h3>
                <h3>Chef: {chef}</h3>
                <h3>Price: {price} Tk</h3>
            </div>
            <div className='flex flex-col gap-2 '>
                <Link to={`/viewPage/${_id}`} className="btn text-xl text-white bg-[#D2B48C]"><FaEye></FaEye></Link>
                <Link to={`/updateCoffee/${_id}`} className="btn text-xl text-white bg-primary"><FaRegEdit></FaRegEdit></Link>
                <button onClick={() => handleDeleteCoffee(_id)} className="btn text-xl text-white bg-red-500"><FaTrash></FaTrash></button>
            </div>
        </div>
    );
};

export default CoffeeCard;