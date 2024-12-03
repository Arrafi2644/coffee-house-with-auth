import React from 'react';


const CoffeeType = () => {
    return (
        <div className='py-10 bg-secondary'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl w-11/12 mx-auto'>
                <div className="card card-compact">
                    <div className="px-6">
                        <img className='max-w-16 h-auto' src='https://i.ibb.co.com/hHctLVV/1.png' />
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-xl text-primary">Awesome Aroma</h2>
                        <p className=''>You will definitely be a fan of the design & aroma of your coffee.</p>
                    </div>
                </div>
                <div className="card card-compact">
                    <div className="px-6">
                        <img className='max-w-16 h-auto' src='https://i.ibb.co.com/2vZgXyj/2.png' />
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-xl text-primary">High Quality</h2>
                        <p className=''>We served the coffee to you maintaining the best quality.</p>
                    </div>
                </div>
                <div className="card card-compact ">
                    <div className="px-6">
                        <img className='max-w-16 h-auto' src='https://i.ibb.co.com/7KzSNYd/3.png' />
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-xl text-primary">Pure Grades</h2>
                        <p className=''>The coffee is made of the green coffee beans which you will love.</p>
                    </div>
                </div>
                <div className="card card-compact ">
                    <div className="px-6">
                        <img className='max-w-16 h-auto' src='https://i.ibb.co.com/1QR5H4P/4.png' />
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-xl text-primary">Proper Roasting</h2>
                        <p className=''>Your coffee is brewed by first roasting the green coffee beans.</p>
                    </div>
                </div>       
            </div>
        </div>
    );
};

export default CoffeeType;