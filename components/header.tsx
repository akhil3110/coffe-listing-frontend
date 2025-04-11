const Header = () => {
    return ( 
        <div className=" w-full h-full mt-20">
          <div className="flex justify-center relative">
            <img
              src="./vector.svg"
              alt="Vector background"
              className="absolute left-1/2 -top-12 z-10 opacity-80"
            />
            <div  className="flex flex-col gap-y-2 z-20">
              <div className="text-3xl font-semibold text-[#FEF7EE] text-center">
                Our Collection
              </div>
              <div className="text-[#6F757C] text-center max-w-xl">
                Introducing our Coffee Collection, a selection of unique coffees <br />
                from different roast types and origins, expertly roasted in small <br />
                batches and shipped fresh weekly.
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Header;
