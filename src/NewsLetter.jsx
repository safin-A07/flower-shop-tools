import React from 'react';

const NewsLetter = () => {
    return (
        <div
            className="hero min-h-96 my-20"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/hTvVctn/Rectangle-9.png)",
            }}
        >
            <div className="bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h2 className="text-3xl text-black font-bold mb-4">Get The Latest Deals</h2>
                    <p className="mb-6 text-black">
                        $30 coupon for first shopping
                    </p>
                    <div className="join">
                        <input 
                            type="email" 
                            placeholder="Enter your email here.." 
                            className="input text-black input-bordered join-item w-64" 
                        />
                        <button className="btn bg-pink-500 join-item ml-3">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
