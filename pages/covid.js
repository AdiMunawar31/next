import React from 'react'
import { Navbar } from '../components'

const covid = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200  dark:bg-gray-700">
                <div className="w-10/12 pb-10">
                    <h1 className="text-5xl text-center font-bold py-5 dark:text-white">COVID19 TRACKER</h1>
                    <iframe src="https://public.domo.com/cards/aMk4Q" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
                </div>
            </div>

        </div>
    )
}

export default covid
