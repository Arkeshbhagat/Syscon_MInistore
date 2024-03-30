import React from 'react'

const Section = () => {
    return (
        <div className="py-12" style={{ backgroundColor: "#EDF1F3"}}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="">
                        <h2 className="text-lg  mb-10" style={{ fontSize: "80px", letterSpacing: "4px", lineHeight: "90px" ,marginTop: "30%"}}>Your Product are Great</h2>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Click Me
                        </button>
                    </div>
                    <div className="">
                        <img
                            src="https://demo.templatesjungle.com/ministore/images/banner-image.png"
                        />
                    </div>
                </div>
            </div>
        </div>)
}

export default Section