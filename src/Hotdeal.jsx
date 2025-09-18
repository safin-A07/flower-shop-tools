import React from 'react';

const Hotdeal = () => {
    return (
        <div className="hero bg-[#f1e6e8] min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/r25mv9GB/Flower-01.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='text-center content-center'>
                    <h1 className="text-5xl font-bold">Hot Deal ! Sale Up To 25% <strong className='text-pink-500'>Off</strong></h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be distracted by <br />the readable content of a page when looking at its layout.
                    </p>
                    <button className="btn bg-pink-700 text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Hotdeal;