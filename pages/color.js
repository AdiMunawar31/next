import Head from "next/head"
import { Layout } from "../components"

const About = () => {
    return (
        <div>
            <Layout title="Colors">
                <div className="flex justify-between">
                    <button type="submit" className="bg-red-500 hover:bg-red-400 text-white rounded px-5 py-2 shadown flex focus:outline-none focus:ring-2 ring-red-200">
                        Danger
                </button>
                    <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-white rounded px-5 py-2 shadown flex focus:outline-none focus:ring-2 ring-yellow-200">
                        Warning
                </button>
                    <button type="submit" className="bg-green-600 hover:bg-green-500 text-white rounded px-5 py-2 shadown flex focus:outline-none focus:ring-2 ring-green-200">
                        Success
                </button>
                    <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white rounded px-5 py-2 shadown flex focus:outline-none focus:ring-2 ring-gray-200">
                        Dark
                </button>
                </div>
            </Layout>
        </div>
    )
}

export default About