"use client"

import { useEffect } from "react";
import CoffeCard from "./coffe-card";
import useDataStore from "@/store/data-store";


const Content = () => {

    const {data,setData} = useDataStore()


    useEffect(() => {

        const getData = async () => {
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
        
        getData()
    }, [setData])

    return ( 
        <div className="max-w-7xl px-10 h-full flex justify-center mt-10 mb-10">
            <div className="grid grid-cols-3 gap-x-3 lg:gap-x-10 gap-y-10 mt-10">
                {data.map((c) => (
                    <div className="col-span-3 md:col-span-1 cursor-pointer">
                        <CoffeCard
                            key={c.id}
                            name= {c.name}
                            rating= {c.rating}
                            popular= {c.popular}
                            votes= {c.votes}
                            image= {c.image}
                            available={c.available}
                            price={c.price}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Content;