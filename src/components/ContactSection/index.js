import React from 'react';
// Import CSS module jika diperlukan, misal untuk gaya khusus yang tidak tersedia di Tailwind
// import styles from './ContactSection.module.css';

const ContactSection = () => {
    return (
        <div className="mt-32" id="contact">
            <div className="text-center">
                <h1 className="text-3xl font-bold lg:text-5xl">Contact Us</h1>
                <p>Tetap Terhubung dengan Kami</p>
            </div>
            <div className="w-full px-4 mb-4">
                <div className="flex items-center justify-center">
                    <div className="mx-auto w-full max-w-xl">
                        <form action="https://formbold.com/s/3Ggqa" method="POST">
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-3 text-base font-medium text-primary">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-3 text-base font-medium text-primary">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="subject" className="block mb-3 text-base font-medium text-primary">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="block mb-3 text-base font-medium text-primary">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button className="hover:shadow-lg rounded-md bg-[#c2efa8] py-3 px-8 text-base font-semibold text-black outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
