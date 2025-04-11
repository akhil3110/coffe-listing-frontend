
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
        <div className="flex flex-col gap-y-2 justify-center">
            <img src={image} alt="coffe_image" className="w-[320px] h-[200px] rounded-md" />
            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-y-1">
                    <div className="font-semibold ">
                        {name}
                    </div>
                    {rating ? 
                        <div className="flex gap-x-0.5 text-md">
                            <img src="./Star_fill.svg" alt="" />
                            {rating} ({votes} votes)
                        </div> 
                        : 
                        <div className="flex gap-x-0.5 text-md">
                            <img src="./Star.svg" alt="" />
                            No Rattings
                        </div> }
                </div>
                <div className="bg-[#BEE3CC] text-black py-0.5 px-1.5 h-full text-sm rounded-md">
                    {price}
                </div>
            </div>
        </div>
     );
}
 
export default CoffeCard;