import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  const handleAddCoffee = e => {
    e.preventDefault();
  
  const form = e.target;
  const name = form.name.value;
  const chef = form.chef.value;
  const price = form.price.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const details = form.details.value;
  const photo = form.photo.value;

  const coffee = {name, chef, price, supplier, taste, details, photo}
  // console.log(coffee);

  fetch('https://coffee-house-server-iota.vercel.app/coffees', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(coffee)
  })
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    if(data.insertedId){
      Swal.fire({
        title: "Added!",
        text: "Coffee added successfully.",
        icon: "success"
      });
    }
  })

  }
  return (
    <div className="hero bg-base-200 min-h-screen py-6">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary">Add a coffee!</h1>
          <p className="py-6 w-4/5 mx-auto">
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleAddCoffee} className="card-body w-full">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Name</span>
                </label>
                <input name='name' type="text" placeholder="Coffee name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Chef</span>
                </label>
                <input name='chef' type="text" placeholder="Coffee chef" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Price</span>
                </label>
                <input name='price' type="text" placeholder="Coffee price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Supplier</span>
                </label>
                <input name='supplier' type="text" placeholder="Coffee Supplier" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Taste</span>
                </label>
                <input name='taste' type="text" placeholder="Coffee taste" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base">Details</span>
                </label>
                <input name='details' type="text" placeholder="Coffee details" className="input input-bordered" required />
              </div>
              <div className="form-control col-span-1 md:col-span-2">
                <label className="label">
                  <span className="label-text font-semibold text-base">Photo URL</span>
                </label>
                <input name='photo' type="text" placeholder="Coffee photo url" className="input input-bordered" required />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-yellow-950 text-white text-base">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;