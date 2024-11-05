import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Body } from '@/components/ui/Body';

export default function AboutPage() {
    return (
        <>
            <Header />
            <Body>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">About Us</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                            <p className="mb-4">
                                We are a passionate team dedicated to creating innovative solutions
                                that make a difference in the world of technology.
                            </p>
                            <p>
                                Founded with a vision to simplify complex problems, our company
                                has been growing and evolving since its inception.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p>
                                To empower businesses and individuals through cutting-edge technology
                                and user-friendly solutions that drive success and innovation.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="font-semibold">John Doe</h3>
                                <p className="text-gray-600">Founder & CEO</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">CTO</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="font-semibold">Mike Johnson</h3>
                                <p className="text-gray-600">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    );
}
