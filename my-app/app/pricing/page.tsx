import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Body } from '@/components/ui/Body';

export default function PricingPage() {
    return (
        <>
            <Header />
            <Body>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Pricing</h1>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
                            <p className="text-2xl font-bold mb-4">$9.99/month</p>
                            <ul className="space-y-2 mb-4">
                                <li>Basic features</li>
                                <li>Limited support</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Pro Plan</h2>
                            <p className="text-2xl font-bold mb-4">$19.99/month</p>
                            <ul className="space-y-2 mb-4">
                                <li>Advanced features</li>
                                <li>Priority support</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Enterprise Plan</h2>
                            <p className="text-2xl font-bold mb-4">Custom Pricing</p>
                            <ul className="space-y-2 mb-4">
                                <li>Full feature set</li>
                                <li>Dedicated support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    );
}
