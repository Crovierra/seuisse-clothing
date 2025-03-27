import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-[5%] relative bottom-0 left-0 right-0 bg-black opacity-55 text-white'>
        <div className='flex flex-col w-full h-[400px] px-[10%] pt-[2%]'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-evenly gap-8 w-[20%] py-4'>
                <h2 className='text-6xl font-bold'>Suisse</h2>
                <p>We have clothes that suits your style and which you're proud to wear. From women to men</p>
                <ul className='flex flex-row'>
                    <li>TWITTER</li>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>GITHUB</li>
                </ul>
                </div>
                <div className='flex flex-row justify-between mx-[5%] w-full pt-[3%]'>
                    <ul className='flex flex-col gap-5'>
                        <li className='font-semibold'>COMPANY</li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Works</a></li>
                        <li><a href="/">Career</a></li>
                    </ul>
                    <ul className='flex flex-col gap-5'>
                        <li className='font-semibold'>HELP</li>
                        <li><a href="/">Customer Support</a></li>
                        <li><a href="/">Delivery Details</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                    <ul className='flex flex-col gap-5'>
                        <li className='font-semibold'>FAQ</li>
                        <li><a href="/">Account</a></li>
                        <li><a href="/">Manage Deliveries</a></li>
                        <li><a href="/">Orders</a></li>
                        <li><a href="/">Payments</a></li>
                    </ul> 
                    <ul className='flex flex-col gap-5'>
                        <li className='font-semibold'>RESOURCES</li>
                        <li><a href="/">Free eBooks</a></li>
                        <li><a href="/">Development Tutorial</a></li>
                        <li><a href="/">How to - Blog</a></li>
                        <li><a href="/">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
            <hr className='mt-7 mb-5'></hr>
            <div className='flex flex-row justify-between'>
                <p>Suisse Co 2025. All Rights Reserved.</p>
                <ul className='flex flex-row'>
                    <li>LG1</li>
                    <li>LG2</li>
                    <li>LG3</li>
                    <li>LG4</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer