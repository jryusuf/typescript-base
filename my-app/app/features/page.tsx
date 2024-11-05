import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Body } from '@/components/ui/Body';

export default function FeaturesPage() {
    return (
        <>
            <Header />
            <Body>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Features</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
                            <p>Description of feature 1 goes here.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
                            <p>Description of feature 2 goes here.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
                            <p>Description of feature 3 goes here.</p>
                        </div>
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    );
}
