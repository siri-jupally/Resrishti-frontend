import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

import 'react-quill-new/dist/quill.snow.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${slug}`);
                setBlog(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!blog) return <div className="min-h-screen flex items-center justify-center">Blog not found</div>;

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            <main className="pt-24 pb-16">
                {/* Article Header */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/blogs" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Insights
                    </Link>

                    <header className="mb-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-6"
                        >
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                {blog.category}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">{new Date(blog.createdAt).toLocaleDateString()}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
                        >
                            {blog.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center gap-6 text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center text-slate-500 font-bold">
                                    {blog.author.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-slate-900">{blog.author}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                        </motion.div>
                    </header>

                    {/* Featured Image */}
                    {blog.image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={`${import.meta.env.VITE_API_URL}/${blog.image.replace(/\\/g, '/')}`}
                                alt={blog.title}
                                crossOrigin='anonymous'
                                className="w-full h-[500px] object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Article Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="ql-snow">
                                <div
                                    className="ql-editor !p-0 !overflow-visible"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags?.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8">
                            {/* Share Widget */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Share2 className="w-4 h-4" /> Share this article
                                </h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                        className="p-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all"
                                        title="Share on LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`, '_blank')}
                                        className="p-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all"
                                        title="Share on Twitter"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}`, '_blank')}
                                        className="p-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all"
                                        title="Share on WhatsApp"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white">
                                <h3 className="font-bold text-lg mb-2">Subscribe to Insights</h3>
                                <p className="text-emerald-100 text-sm mb-4">Get the latest scientific breakthroughs in waste management delivered to your inbox.</p>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white mb-3"
                                />
                                <button className="w-full bg-white text-emerald-700 font-bold py-2 rounded-lg hover:bg-emerald-50 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </aside>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;
