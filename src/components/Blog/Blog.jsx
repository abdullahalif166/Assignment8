import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import './Blog.css';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookmarkedList, setBookmarkedList] = useState(null)
    const [initialReadTime, setInitialReadTime] = useState(0)

    useEffect(() => {
        fetch('Info.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        setBookmarkedList(JSON.parse(localStorage.getItem('item')))
    }, [])
    useEffect(() => {
        const handleReload = () => {
            const item = localStorage.getItem('item')
            if (item !== null) localStorage.removeItem('item')

        };

        window.addEventListener('beforeunload', handleReload);

        return () => {
            window.removeEventListener('beforeunload', handleReload);
        };
    }, []);
    const listHandler = () => {
        setBookmarkedList(JSON.parse(localStorage.getItem('item')))
    }
    const executeTime = (currentTime) => {
        setInitialReadTime((prevState) => prevState + currentTime)
    }
    return (
        <div className='Container'>
            <div className='blogs-Container'>
                {

                    blogs.map(blog => <Content
                        key={blog.id}
                        blog={blog}
                        listHandler={listHandler}
                        executeTime={executeTime}
                    ></Content>)

                }
            </div>
            <div className='bookmark-Container'>
                <h2 className='timeSpent'>Spent Time On Read: {initialReadTime} min{initialReadTime > 0 ? 's' : null}</h2>
                <h2>Bookmarked Blogs: {bookmarkedList ? bookmarkedList.length : 0}</h2> <br />
                <ul>
                    {bookmarkedList && bookmarkedList.map(
                        (item) =>

                            <li>{item.title}</li>

                    )}

                </ul>
            </div>

        </div>
    );
};

export default Blog;