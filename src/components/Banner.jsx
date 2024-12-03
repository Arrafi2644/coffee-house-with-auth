import React from 'react';
import bannerBg from '../assets/images/more/3.png'

const Banner = () => {
    return (
        <div
        className="hero md:min-h-96 lg:min-h-[calc(100vh-4rem)] bg-bgImage">
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-yellow-950 text-white">Learn more</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;