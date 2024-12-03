import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(users);

    const handleDeleteUser = (_id) => {

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

                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                          });
                          const remainingUsers= users.map(user => user._id !== _id)
                          setUsers(remainingUsers)
                    }
                })


            
            } 
          });




       
    }

    return (
        <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <h2 className='text-center text-3xl font-bold text-primary'>Users</h2>
            <p className='text-center w-full md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non eum repudiandae earum quam. Similique nam ex expedita accusantium commodi.</p>
            <div className='my-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Last login time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <tr key={user._id}>
                                    <th>{users.indexOf(user) + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.lastSignInTime}</td>
                                    <td>
                                        <button className="btn mr-2"><FaEdit></FaEdit></button>
                                        <button onClick={()=>handleDeleteUser(user._id)} className="btn "><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;