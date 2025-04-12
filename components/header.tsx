"use client"
import useDataStore from "@/store/data-store";
import {  useState } from "react";

const Header = () => {

    const [productState,setProductState] = useState<"all" | "available">("all")

    const {data, setData} = useDataStore()

    const handleAllProductsClick =async () => {
        if(productState === "all"){
            return
        }

        setProductState("all")
        fetch(
            "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
              console.log(error)
            });

    }

    const handleAvailableProductsClick = async () => {
        if(productState === "available"){
            return
        }
        setProductState("available")
        const availableProducts = data.filter((a) => a.available === true)
        setData(availableProducts)
    }

    return ( 
      <div className="w-full h-full">
        {/* Outer wrapper to restrict horizontal overflow only */}
        <div className="relative overflow-x-hidden">
          <div className="flex justify-center relative">
            <img
              src="./vector.svg"
              alt="Vector background"
              className="absolute -right-1/12 sm:left-1/2 top-12 z-10 opacity-80 pointer-events-none"
            />
            <div className="flex flex-col gap-y-2 z-20 mt-20">
              <div className="text-3xl font-semibold text-[#FEF7EE] text-center">
                Our Collection
              </div>
              <div className="text-[#6F757C] text-center max-w-xl text-xs md:text-base">
                Introducing our Coffee Collection, a selection of unique coffees <br />
                from different roast types and origins, expertly roasted in small <br />
                batches and shipped fresh weekly.
              </div>
              <div className="flex justify-center gap-x-4 w-full mt-2">
                <button 
                    className={`px-4 py-1.5 cursor-pointer rounded-md transition-colors duration-300 ease-in-out ${productState === "all" ? "bg-[#4D5562]" : "bg-transparent"}`}
                    onClick={handleAllProductsClick}
                >
                  All Products
                </button>
                <button 
                    className={`px-4 py-1.5 cursor-pointer rounded-md transition-colors duration-300 ease-in-out ${productState === "available" ? "bg-[#4D5562]" : "bg-transparent"}`}
                    onClick={handleAvailableProductsClick}
                >
                  Available Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
   
  export default Header;
  