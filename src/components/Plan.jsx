const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto px-4 py-16 grid lg:grid-cols-2 gap-4 ">
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className="row-span-3 object w-full h-full p-2" src="https://images.unsplash.com/photo-1530373443516-fd4ee1d09b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/" />
            <img className="row-span-2 object w-full h-full p-2" src="https://images.unsplash.com/photo-1612874528219-3d6f97df02ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
            <img className="row-span-2 object w-full h-full p-2" src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
            <img className="row-span-3 object w-full h-full p-2" src="https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
            <img className="row-span-2 object w-full h-full p-2" src="https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=491&q=80" alt="/" />
        </div>
        {/*Right Side*/}
        <div className="flex flex-col h-full justify-center">
            <h3 className="font-bold text-5xl md:text-6xl">Plan Your Next Trip</h3>
            <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt!</p>
            <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sint delectus, numquam dolorem ad consectetur adipisci porro odit cum ipsam?</p>
            <div>
                <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                <button className="border-black bg-black text-white hover:shadow-xl">Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan
