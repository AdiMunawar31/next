import React from 'react'
import { Navbar } from '../components'

const covid = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200  dark:bg-gray-700">
                <div className="w-10/12 pb-10">
                    <h1 className="text-5xl text-center font-bold py-5 dark:text-white">My Videos</h1>
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="643" type="text/html" src="https://www.youtube.com/embed/cY5LrlfMfIc?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/de/">youtubeembedcode.com/de/</a></small></div><div><small><a href="https://www.jubler.org/">buy bulk traffic</a></small></div></iframe>
                </div>
            </div>

        </div>
    )
}

export default covid
