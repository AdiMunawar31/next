import Link from 'next/Link'
import { useEffect } from 'react';
const Navbar = () => {

    const setTheme = val => {

        localStorage.setItem('theme', val);

        const html = document.querySelector('html');
        html.classList.add(localStorage.getItem('theme'))

        if (val == 'dark') {
            html.classList.remove('light')
        } else {
            html.classList.remove('dark')
        }
    }

    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    })
    return (
        <div className="bg-blue-500 bg-gradient-to-r from-pink-500 to-purple-600">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <a className="text-white text-3xl">D2Y NEXT</a>
                        </Link>
                        <Link href="/">
                            <a className="text-blue-100 text-lg hover:text-white mb-5 pl-10">Home</a>
                        </Link>
                        <Link href="/color">
                            <a className="text-blue-100 text-lg hover:text-white pb-5 px-5">Colors</a>
                        </Link>
                        <Link href="/map">
                            <a className="text-blue-100 text-lg hover:text-white pb-5 px-5">Map</a>
                        </Link>
                        <Link href="/covid">
                            <a className="text-blue-100 text-lg hover:text-white pb-5 px-5">Covid19</a>
                        </Link>
                        <Link href="/crypto">
                            <a className="text-blue-100 text-lg hover:text-white pb-5 px-5">Crypto</a>
                        </Link>
                        <Link href="/yt">
                            <a className="text-blue-100 text-lg hover:text-white pb-5 px-5">Youtube</a>
                        </Link>
                    </div>
                    <div className="flex items-center">


                        <Link href="/login">
                            <a className="text-blue-100 text-lg hover:text-white py-5 px-4">Login</a>
                        </Link>
                        <Link href="/register">
                            <a className="text-blue-100 text-lg hover:text-white py-5 px-4">Register</a>
                        </Link>
                        <button className="focus:outline-none text-2xl" onClick={() => setTheme('light')}>🌝</button>
                        <button className="focus:outline-none text-2xl" onClick={() => setTheme('dark')}>🌚</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
