import dayjs from 'dayjs';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ blog }) => {
    const navigate = useNavigate()

    return(
    <div onClick={()=>navigate(`/blog/${blog.slug}`)} className="max-w-sm h-full cursor-pointer select-none rounded-lg overflow-hidden shadow-md bg-white border border-gray-200">
        <img
            className="w-full h-48 object-cover"
            src={blog.blog_media}
            alt="Car"
        />
        <div className="p-4">
            <h2 className="text-lg font-medium leading-7 text-gray-800 mb-2">
                {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{dayjs(blog.created_at).format('MMM, YYYY')}</p>
            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {blog.content}
            </p>
            <a
                href="#"
                className="text-[var(--main)] font-semibold flex items-center gap-1 hover:text-blue-800"
            >
                Learn More <span className="text-xl">→</span>
            </a>
        </div>
    </div>
)};

export default ArticleCard
