import React from 'react'

const AboutPage = () => {
    return (
        <div className='min-h-screen'>

            <div className='m-4 sm:m-9 mt-4 sm:mt-20 mb-4 sm:mb-15 flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg'>
                <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 mb-6'>About Us</h1>
                <div className='flex flex-col justify-center items-center text-center space-y-4'>
                    <p className='text-lg sm:text-xl text-gray-600'>
                        Welcome to our company! We are dedicated to providing the best service possible.
                    </p>
                    <p className='text-lg sm:text-xl text-gray-600'>
                        Our team is composed of experienced professionals who are passionate about their work.
                    </p>
                    <p className='text-lg sm:text-xl text-gray-600'>
                        We believe in continuous improvement and always strive to exceed our clients expectations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage