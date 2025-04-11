"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import CoffeCard from "./coffe-card";


interface dataType {
    available: boolean
    id: number
    image: string
    name: string
    popular: boolean
    price: string
    rating: string | null
    votes: number
}

const Content = () => {

    const [data,setData] =  useState<dataType[]>([])


    useEffect(() => {

        const getData = async () => {
            fetch(
                "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
              )
                .then((response) => response.json())
                .then((data) => {
                    const a = [{
                        "id": 6,
                        "name": "Valentine Special",
                        "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg",
                        "price": "$5.50",
                        "rating": null,
                        "votes": 0,
                        "popular": false,
                        "available": true
                      },
                      {
                        "id": 5,
                        "name": "Chocolate Coffee",
                        "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
                        "price": "$4.00",
                        "rating": "4.65",
                        "votes": 122,
                        "popular": false,
                        "available": false
                      },
                      {
                        "id": 5,
                        "name": "Chocolate Coffee",
                        "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
                        "price": "$4.00",
                        "rating": "4.65",
                        "votes": 122,
                        "popular": false,
                        "available": false
                      }
                    ]
                    setData(data)
                })
                .catch((error) => {
                  // Handle any errors here
                });
        }
        
        getData()
    }, [])

    return ( 
        <div className="w-full h-full flex justify-center mt-10 mb-10">
            <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
                {data.map((c) => (
                    <div className="col-span-1 cursor-pointer">
                        <CoffeCard
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