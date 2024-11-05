import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Body } from '@/components/ui/Body';

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: 'First Blog Post',
            excerpt: 'This is the first blog post of our website.',
            date: 'June 1, 2023',
        },
        {
            id: 2,
            title: 'Second Blog Post',
            excerpt: 'Here comes the second blog post with some interesting content.',
            date: 'July 15, 2023',
        },
        {
            id: 3,
            title: 'Third Blog Post',
            excerpt: 'Our third blog post with more exciting information.',
            date: 'August 20, 2023',
        }
    ];

    return (
        <>
            <Header />
            <Body>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Blog</h1>
                    <div className="space-y-6">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-gray-600 mb-2">{post.date}</p>
                                <p>{post.excerpt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    );
}
