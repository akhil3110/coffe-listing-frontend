
interface CoffeCardProps {
    image: string
    name: string
    popular: boolean
    price: string
    rating: string | null
    votes: number
    available: boolean
}

const CoffeCard = ({
    name,
    rating,
    popular,
    votes,
    image,
    available,
    price
}: CoffeCardProps) => {   
    return ( 
        <div className="flex flex-col gap-y-2 justify-center relative">
            {popular && (
                <div className="bg-[#F6C768] absolute top-3 left-3 rounded-lg text-[#302522] px-1.5 py-0.5 text-xs font-semibold">
                    Popular
                </div>
            )}
            <img src={image} alt="coffe_image" className="w-[320px] h-[200px] rounded-md" />
            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-y-1">
                    <div className="font-semibold ">
                        {name}
                    </div>
                    <div className="flex gap-x-0.5 text-md">
                        {rating ? 
                        <>
                            <img src="./Star_fill.svg" alt="" />
                            {rating} ({votes} votes)
                        </> 
                        : 
                        <>
                            <img src="./Star.svg" alt="" />
                            No Rattings
                        </> 
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="bg-[#BEE3CC] text-black py-0.5 px-1.5 text-center text-sm rounded-md">
                        {price}
                    </div>
                    {!available && (
                        <div  className="text-[#ED735D]">
                            Sold Out
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default CoffeCard;