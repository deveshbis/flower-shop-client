import { useEffect } from "react";
import { useState } from "react";
import BestSalesCard from "./BestSalesCard";


const BestSeles = () => {

    const [bestSales, setBestSales] = useState([]);

    useEffect( ()=>{
        fetch("http://localhost:5000/bestSales")
        .then(res => res.json())
        .then(data => setBestSales(data))
    }, [])

    console.log(bestSales);
    return (
        <div>
            <div className="font-[sans-serif] py-4 mx-auto ">
                <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-12">Best Seles</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        bestSales.map(bestSale => <BestSalesCard key={bestSale._id} bestSale={bestSale}></BestSalesCard> )
                    }

                </div>
            </div>
        </div>
    );
};

export default BestSeles;