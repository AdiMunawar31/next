import React from 'react'
import { Navbar } from '../components'

const crypto = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200  dark:bg-gray-700">
                <div className="w-10/12 pb-10">
                    <h1 className="text-5xl text-center font-bold py-5 dark:text-white">Cryptocurrency Tracker</h1>
                    <div style={{ paddingBottom: '40px', height: '669px', backgroundColor: '#1D2330', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #262B38', padding: '0px', margin: '0px', width: '100%' }}><div style={{ height: '649px', padding: '0px', margin: '0px', width: '100%' }}><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=10&pref_coin_id=1505&graph=yes" width="100%" height="645px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{ border: 0, margin: 0, padding: 0 }} /></div></div>

                    <div className="py-5"></div>

                    <div style={{ paddingBottom: '40px', height: '560px', backgroundColor: '#1D2330', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -1px 0 0 #262B38', padding: '0px', margin: '0px', width: '100%' }}><div style={{ height: '540px', padding: '0px', margin: '0px', width: '100%' }}><iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{ border: 0, margin: 0, padding: 0, lineHeight: '14px' }} /></div></div>

                    <div className="py-5"></div>

                    <div style={{ paddingBottom: '40px', width: '100%', height: '335px', backgroundColor: '#232937', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '335px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #262B38', margin: '0px', padding: '0px' }}><div style={{ height: '315px', padding: '0px', margin: '0px', width: '100%' }}><iframe src="https://widget.coinlib.io/widget?type=converter&theme=dark" width='100%' height="310px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{ border: 0, margin: 0, padding: 0 }} /></div></div>
                </div>
            </div>

        </div >
    )
}

export default crypto
