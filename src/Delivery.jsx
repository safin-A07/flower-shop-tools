import React from 'react';

const Delivery = () => {
    return (
        <div className="flex items-center justify-around bg-[#e5e1de] h-80 w-10/12 mx-auto my-20 rounded-xl">
            <div className="flex flex-col items-center">
                <img src="https://i.ibb.co.com/tTZdYTNp/Group-57.png" alt="" className="w-20 h-20" />
                <p className="mt-3 text-lg font-semibold">Free Shipping</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://i.ibb.co.com/8ncT3jBK/Group-59.png" alt="" className="w-20 h-20" />
                <p className="mt-3 text-lg font-semibold">Express Delivery</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://i.ibb.co.com/CpY45SjR/Group-58.png" alt="" className="w-20 h-20" />
                <p className="mt-3 text-lg font-semibold">Same Day Delivery</p>
            </div>
        </div>
    );
};

export default Delivery;
