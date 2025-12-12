import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { Check, X, Trash2, LogOut, Plus, Edit, FileText, MessageSquare } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('testimonials');
    const [testimonials, setTestimonials] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showBlogForm, setShowBlogForm] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [blogFormData, setBlogFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        category: '',
        tags: '',
        image: null
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }

            try {
                const [testimonialsRes, blogsRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/api/admin/testimonials`, {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`) // Public route for reading, but we fetch here for admin list
                ]);

                setTestimonials(testimonialsRes.data);
                setBlogs(blogsRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to fetch data');
                if (error.response?.status === 401) {
                    navigate('/admin/login');
                }
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    // Testimonial Handlers
    const handleStatusUpdate = async (id, status) => {
        const token = localStorage.getItem('adminToken');
        try {
            const res = await axios.patch(`${import.meta.env.VITE_API_URL}/api/admin/testimonials/${id}`,
                { status },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setTestimonials(testimonials.map(t => t._id === id ? res.data : t));
            toast.success(`Testimonial ${status}`);
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('Failed to update status');
        }
    };

    const handleDeleteTestimonial = async (id) => {
        if (!window.confirm('Are you sure you want to delete this testimonial?')) return;

        const token = localStorage.getItem('adminToken');
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/testimonials/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTestimonials(testimonials.filter(t => t._id !== id));
            toast.success('Testimonial deleted');
        } catch (error) {
            console.error('Error deleting testimonial:', error);
            toast.error('Failed to delete testimonial');
        }
    };

    // Blog Handlers
    const handleBlogInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setBlogFormData(prev => ({ ...prev, image: files[0] }));
        } else {
            setBlogFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ]
    };

    const formats = [
        'header', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'script',
        'indent',
        'direction',
        'color', 'background',
        'font',
        'align',
        'link', 'image', 'video'
    ];

    const handleQuillChange = (content) => {
        setBlogFormData(prev => ({ ...prev, content }));
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        const data = new FormData();
        for (const key in blogFormData) {
            data.append(key, blogFormData[key]);
        }

        try {
            let res;
            if (editingBlog) {
                res = await axios.put(`${import.meta.env.VITE_API_URL}/api/blogs/${editingBlog._id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setBlogs(blogs.map(b => b._id === editingBlog._id ? res.data : b));
                toast.success('Blog updated successfully');
            } else {
                res = await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setBlogs([res.data, ...blogs]);
                toast.success('Blog created successfully');
            }
            resetBlogForm();
        } catch (error) {
            console.error('Error saving blog:', error);
            toast.error('Failed to save blog');
        }
    };

    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        setBlogFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            author: blog.author,
            category: blog.category,
            tags: blog.tags?.join(', ') || '',
            image: null // Keep existing image unless changed
        });
        setShowBlogForm(true);
    };

    const handleDeleteBlog = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;

        const token = localStorage.getItem('adminToken');
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setBlogs(blogs.filter(b => b._id !== id));
            toast.success('Blog deleted');
        } catch (error) {
            console.error('Error deleting blog:', error);
            toast.error('Failed to delete blog');
        }
    };

    const resetBlogForm = () => {
        setShowBlogForm(false);
        setEditingBlog(null);
        setBlogFormData({
            title: '',
            excerpt: '',
            content: '',
            author: '',
            category: '',
            tags: '',
            image: null
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col">
                <h1 className="text-2xl font-bold mb-8 text-emerald-400">Admin Panel</h1>
                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => setActiveTab('testimonials')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'testimonials' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                        <MessageSquare className="w-5 h-5" /> Testimonials
                    </button>
                    <button
                        onClick={() => setActiveTab('blogs')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'blogs' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                        <FileText className="w-5 h-5" /> Blogs
                    </button>
                </nav>
                <Button onClick={handleLogout} variant="outline" className="mt-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full">
                    <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto h-screen">
                {activeTab === 'testimonials' && (
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-900">Testimonial Management</h2>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100 border-b border-slate-200">
                                            <th className="p-4 font-semibold text-slate-700">Image</th>
                                            <th className="p-4 font-semibold text-slate-700">Name</th>
                                            <th className="p-4 font-semibold text-slate-700">Company</th>
                                            <th className="p-4 font-semibold text-slate-700 w-1/3">Testimonial</th>
                                            <th className="p-4 font-semibold text-slate-700">Rating</th>
                                            <th className="p-4 font-semibold text-slate-700">Status</th>
                                            <th className="p-4 font-semibold text-slate-700">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {testimonials.map((t) => (
                                            <tr key={t._id} className="border-b border-slate-100 hover:bg-slate-50">
                                                <td className="p-4">
                                                    {t.image ? (
                                                        <img
                                                            src={`${import.meta.env.VITE_API_URL}/${t.image.replace(/\\/g, '/')}`}
                                                            alt={t.name}
                                                            crossOrigin='anonymous'
                                                            className="w-10 h-10 rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs">
                                                            No Img
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="p-4 font-medium text-slate-900">{t.name}<br /><span className="text-xs text-slate-500">{t.position}</span></td>
                                                <td className="p-4 text-slate-600">{t.company}<br /><span className="text-xs text-emerald-600">{t.industry}</span></td>
                                                <td className="p-4 text-slate-600 text-sm">{t.testimonial}</td>
                                                <td className="p-4 text-amber-500">{'★'.repeat(t.rating)}</td>
                                                <td className="p-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize
                                ${t.status === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                                                            t.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                                'bg-amber-100 text-amber-800'}`}>
                                                        {t.status}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-2">
                                                        {t.status !== 'approved' && (
                                                            <button
                                                                onClick={() => handleStatusUpdate(t._id, 'approved')}
                                                                className="p-1 rounded-md bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                                                                title="Approve"
                                                            >
                                                                <Check className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                        {t.status !== 'rejected' && (
                                                            <button
                                                                onClick={() => handleStatusUpdate(t._id, 'rejected')}
                                                                className="p-1 rounded-md bg-amber-100 text-amber-600 hover:bg-amber-200"
                                                                title="Reject"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleDeleteTestimonial(t._id)}
                                                            className="p-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {testimonials.length === 0 && (
                                            <tr>
                                                <td colSpan="7" className="p-8 text-center text-slate-500">No testimonials found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'blogs' && (
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-900">Blog Management</h2>
                            <Button onClick={() => setShowBlogForm(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                <Plus className="w-4 h-4 mr-2" /> Add New Blog
                            </Button>
                        </div>

                        {showBlogForm ? (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-slate-900">{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h3>
                                    <button onClick={resetBlogForm} className="text-slate-400 hover:text-slate-600">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <form onSubmit={handleBlogSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={blogFormData.title}
                                                onChange={handleBlogInputChange}
                                                required
                                                className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                                            <input
                                                type="text"
                                                name="category"
                                                value={blogFormData.category}
                                                onChange={handleBlogInputChange}
                                                required
                                                className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
                                            <input
                                                type="text"
                                                name="author"
                                                value={blogFormData.author}
                                                onChange={handleBlogInputChange}
                                                required
                                                className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma separated)</label>
                                            <input
                                                type="text"
                                                name="tags"
                                                value={blogFormData.tags}
                                                onChange={handleBlogInputChange}
                                                className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
                                        <textarea
                                            name="excerpt"
                                            value={blogFormData.excerpt}
                                            onChange={handleBlogInputChange}
                                            required
                                            rows="3"
                                            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                                        <ReactQuill
                                            theme="snow"
                                            value={blogFormData.content}
                                            onChange={handleQuillChange}
                                            modules={modules}
                                            formats={formats}
                                            className="h-64 mb-12"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Featured Image</label>
                                        <input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={handleBlogInputChange}
                                            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                                        />
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <Button type="button" onClick={resetBlogForm} variant="outline" className="border-slate-300">Cancel</Button>
                                        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                            {editingBlog ? 'Update Blog' : 'Create Blog'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-100 border-b border-slate-200">
                                                <th className="p-4 font-semibold text-slate-700">Image</th>
                                                <th className="p-4 font-semibold text-slate-700">Title</th>
                                                <th className="p-4 font-semibold text-slate-700">Category</th>
                                                <th className="p-4 font-semibold text-slate-700">Author</th>
                                                <th className="p-4 font-semibold text-slate-700">Date</th>
                                                <th className="p-4 font-semibold text-slate-700">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {blogs.map((blog) => (
                                                <tr key={blog._id} className="border-b border-slate-100 hover:bg-slate-50">
                                                    <td className="p-4">
                                                        {blog.image ? (
                                                            <img
                                                                src={`${import.meta.env.VITE_API_URL}/${blog.image.replace(/\\/g, '/')}`}
                                                                alt={blog.title}
                                                                crossOrigin='anonymous'
                                                                className="w-10 h-10 rounded-md object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center text-slate-500 text-xs">
                                                                No Img
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="p-4 font-medium text-slate-900">{blog.title}</td>
                                                    <td className="p-4 text-slate-600">
                                                        <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                                                            {blog.category}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-slate-600">{blog.author}</td>
                                                    <td className="p-4 text-slate-500 text-sm">{new Date(blog.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => handleEditBlog(blog)}
                                                                className="p-1 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
                                                                title="Edit"
                                                            >
                                                                <Edit className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteBlog(blog._id)}
                                                                className="p-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200"
                                                                title="Delete"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {blogs.length === 0 && (
                                                <tr>
                                                    <td colSpan="6" className="p-8 text-center text-slate-500">No blogs found.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
