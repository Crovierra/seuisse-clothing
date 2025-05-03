

const Footer = () => {
  return (
    <footer className='mt-[5%] relative bottom-0 left-0 right-0 bg-teal-950 text-white'>
        <div className='flex flex-col w-full h-[400px] px-[10%] pt-[2%] max-md:h-[350px] max-xl:px-[4%]'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-evenly gap-8 w-[20%] py-4 max-md:w-[100%] max-xl:w-[50%] max-md:items-center'>
                <h2 className='text-6xl font-bold'>Suisse</h2>
                <p className="max-md:text-center">We have clothes that suits your style and which you're proud to wear. From women to men</p>
                <ul className='flex flex-row gap-4 justify-between items-center'>
                    <li><a href="https://www.linkedin.com/in/hanskristtian/"><img src="/images/white-linkedin.png" alt="" className="w-[30px] h-[30px]"/></a></li>
                    <li><a href="https://www.upwork.com/freelancers/~012e2d634d49d3ea26"><img src="/images/upwork.png" alt="" className="w-[30px] h-[30px]"/></a></li>
                    <li><a href="https://instagram.com/hanskristtian"><img src="/images/instagram.png" alt="" className="w-[30px] h-[30px]"/></a></li>
                    <li><a href="https://github.com/crovierra"><img src="/images/github.png" alt="" className="w-[30px] h-[30px]"/></a></li>
                </ul>
                </div>
                <div className='flex flex-row justify-between mx-[5%] w-full pt-[3%] max-md:hidden'>
                    <ul className='flex flex-col gap-5'>
                        <li className='font-semibold'>COMPANY</li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Works</a></li>
                        <li><a href="/">Career</a></li>
                    </ul>
                    <ul className='flex flex-col gap-5 max-xl:pl-[10px]'>
                        <li className='font-semibold'>HELP</li>
                        <li><a href="/">Customer Support</a></li>
                        <li><a href="/">Delivery Details</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                    <ul className='flex flex-col gap-5 max-xl:pl-[5px]'>
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
            <div className='flex flex-row max-md:justify-center'>
                <p className="text-start max-md:text-center">Suisse Co 2025. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer