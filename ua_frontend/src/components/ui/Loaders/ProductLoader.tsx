const ProductLoader = () => {
    return (
        <div className='grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 w-full my-4'>
            {[...Array(15)].map((_e, i) => (
            <div key={i} className="border border-mediumGray shadow mx-auto h-84 flex justify-evenly mb-4 items-center flex-col md:h-auto">
            <div className="animate-pulse flex flex-col w-full">
                <div className="bg-slate200 h-36 w-full md:h-64 md:w-64 lg:h-96 lg:w-96 shadow-xl"></div>
                <div className="flex-1 space-y-6 pt-1 mt-8">
                    <div className="h-12 bg-slate200 rounded"></div>
                    <div className="h-12 bg-slate200 rounded mt-8"></div>
                </div>
            </div>
        </div>
          ))}
        </div>
    )
}

export default ProductLoader