import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Body } from '@/components/ui/Body';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
    return (
        <>
            <Header />
            <Body>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        className="w-full px-3 py-2 border rounded-md h-32"
                                        placeholder="Your message here"
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p>123 Tech Lane, Innovation City, IC 12345</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p>(555) 123-4567</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p>support@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    );
}
