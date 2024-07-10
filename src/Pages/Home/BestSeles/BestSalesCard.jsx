

const BestSalesCard = ({ bestSale }) => {
    const { name, image, price } = bestSale;
    return (
        <div>
            {/* <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                    <div className="w-full overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img src={image} alt="Product 1" className="" />
                    </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                    <h4 className="text-lg text-gray-800 font-bold mt-6">$ {price} 
                    </h4>

                    <button type="button"
                        className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                            <path
                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                data-original="#000000"></path>
                        </svg>
                        Add to cart</button>
                </div>
            </div> */}

            <div className="bg-gray-100 p-2 overflow-hidden">
                <div className="bg-white flex flex-col h-full">
                    <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img src={image} alt="food1"
                            className="h-full w-full object-cover" />
                    </div>

                    <div className="p-6 text-center flex-1">
                        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                        <h4 className="text-xl text-gray-800 font-bold mt-3">$ {price}</h4>
                    </div>
                    <button type="button" className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default BestSalesCard;