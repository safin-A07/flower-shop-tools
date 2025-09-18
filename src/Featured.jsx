import React from 'react';

const Featured = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h2 className="text-3xl font-bold">Our Featured Flowers</h2>
                <p className="py-6">
                    It is a long established fact that a reader will be distracted by the readable <br />
                    content of a page when looking at its layout.
                </p>
            </div>
            <div className='flex gap-5 justify-center'>
                {/* Card 1 */}
                <div className="card bg-base-100 rounded-t-full w-96 shadow-sm">
                    <figure className="h-64 flex items-center justify-center bg-fuchsia-300">
                        <img
                            className="h-full  object-contain"
                            src="https://i.ibb.co.com/v6qFTYCh/pngwing-6.png"
                            alt="Pink Flower"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-center mt-4">
                            <a className="underline" href="#">Pink flower tree</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-100 rounded-t-full w-96 shadow-sm">
                    <figure className="h-64 flex items-center justify-center bg-yellow-100">
                        <img
                            className="h-full object-contain"
                            src="https://i.ibb.co.com/chm147hy/pngwing-7.png"
                            alt="Pink Flower"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-center mt-4">
                            <a className="underline" href="#">Pink flower tree</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-100 rounded-t-full w-96 shadow-sm">
                    <figure className="h-64 flex items-center justify-center bg-red-100">
                        <img
                            className="h-full object-contain"
                            src="https://i.ibb.co.com/3mvzXBWD/pngwing-10.png"
                            alt="Pink Flower"
                        />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-center mt-4">
                            <a className="underline" href="#">Pink flower tree</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
