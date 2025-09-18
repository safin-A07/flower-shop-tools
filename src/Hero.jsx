import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-[#ecd6d6] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="../src/assets/pngwing 8.png"
                    className="max-w-sm rounded-lg shadow-2xl ml-5"
                />
                <div>
                    <h1 className="text-5xl font-bold">Let's make <br /> beautiful flowers a <br /> part of your life.</h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be distracted by the readable <br />
                         content of a page when looking at its layout. The point of using Lorem Ipsum is <br /> that it has a more-or-less normal distribution of letters.
                    </p>
                    <button className="btn bg-[#E55473] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;