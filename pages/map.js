import React from 'react'
import { Navbar } from '../components'

const map = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200  dark:bg-gray-700">
                <div className="w-10/12 pb-10">
                    <h1 className="text-5xl text-center font-bold py-5 dark:text-white">FIND YOUR HOME DUDE...</h1>
                    <iframe src="https://www.google.com/maps?q=Mekarjaya%2C%20Kuningan%20Regency%2C%20West%20Java%2C%20Indonesia&z=17&t=k&ie=UTF8&output=embed" width="100%" height="650"></iframe><noscript> Full functionality of this site requires JavaScript to be enabled. Learn how to <a href="https://javascriptdownload.org" />Enable JavaScriptin your browser.</noscript>
                </div>
            </div>
        </div>
    )
}

export default map
