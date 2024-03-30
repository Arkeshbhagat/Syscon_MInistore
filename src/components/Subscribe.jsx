import React from 'react'

const Subscribe = () => {
    return (
        <div className="container mx-auto py-24">

            <div className="items-center grid grid-cols-1 lg:grid-cols-2 bg-gray-800 justify-between px-3 pt-14 pb-14">
                <div className="pl-0 lg:pl-10 lg:text-left text-center">
                    <h1 className="text-white text-3xl md:text-4xl uppercase font-small mb-2">Subscribe Us Now</h1>
                    <p className="text-gray-500 text-1.2em mb-4">Get latest news, updates and deals directly mailed to your inbox.</p>
                </div>
                <div className="pl-10 pr-10 lg:pl-10 lg:pr-0">

                    <label for="hs-trailing-button-add-on" className="sr-only">Label</label>
                    <div class="flex rounded-lg shadow-sm">
                        <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" 
                        className="py-3 px-4 block w-full lg:w-2/3 border-gray-200 shadow-sm 
                        text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                        placeholder="Enter your email" />
                        <button type="button" className="px-12 py-3 uppercase tracking-custom 
                        inline-flex justify-center items-center gap-x-2 text-custom font-semibold 
                        border-transparent bg-[#72AEC7] text-[#f8f9fa] 
                        hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none 
                        dark:focus:ring-1 dark:focus:ring-gray-600">
                            Subscribe
                        </button>
                    </div>
                </div>


                {/* <div className="flex flex-col">
                        <input
                            type="text"
                            className="block border-gray-300 px-2 py-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email" size={40}
                        />
                        <button className="inline-flex uppercase tracking-wider bg-blue-500 text-white px-12 py-3 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Subscribe
                        </button>
                    </div>   */}
        </div>

        </div>
    )
}

export default Subscribe