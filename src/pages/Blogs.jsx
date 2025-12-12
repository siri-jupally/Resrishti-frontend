import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Circular Economy', 'Technology', 'Sustainability', 'Industry Insights'];

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    console.error('API returned non-array data:', data);
                    setPosts([]);
                    setError('Invalid data format received from server');
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setPosts([]);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-20">
                {loading ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
                    </div>
                ) : error ? (
                    <div className="min-h-screen flex items-center justify-center text-red-600">
                        Error: {error}
                    </div>
                ) : (
                    <>
                        {/* Hero Section */}
                        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>

                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-5xl md:text-7xl font-bold mb-6"
                                >
                                    Insights & News
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                        on Sustainability
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
                                >
                                    Expert perspectives on waste management, circular economy, and environmental sustainability.
                                </motion.p>

                                {/* Search Bar */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="max-w-2xl mx-auto"
                                >
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search articles..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        {/* Categories */}
                        <section className="py-8 bg-white border-b border-slate-200">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                                ? 'bg-emerald-600 text-white shadow-lg'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Blog Posts Grid */}
                        <section className="py-16">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPosts.map((post, index) => (
                                        <motion.article
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={post.image ? `${import.meta.env.VITE_API_URL}/${post.image.replace(/\\/g, '/')}` : "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"}
                                                    alt={post.title}
                                                    crossOrigin='anonymous'
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <User className="w-4 h-4" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                </div>

                                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h2>

                                                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.tags?.map((tag, idx) => (
                                                        <span key={idx} className="flex items-center gap-1 text-xs text-slate-500">
                                                            <Tag className="w-3 h-3" />
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-slate-500">5 min read</span>
                                                    <Link to={`/blogs/${post.slug}`} className="flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-800 group-hover:gap-3 transition-all">
                                                        Read More
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>

                                {filteredPosts.length === 0 && (
                                    <div className="text-center py-20">
                                        <p className="text-xl text-slate-500">No articles found matching your search.</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Newsletter CTA */}
                        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
                                <p className="text-xl mb-8 text-emerald-100">
                                    Subscribe to our newsletter for the latest insights on sustainability and circular economy.
                                </p>
                                <div className="flex gap-4 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
                                    />
                                    <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg whitespace-nowrap">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Blogs;
