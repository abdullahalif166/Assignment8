import React from 'react';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const Content = (props) => {

    const { AuthorName, BlogTitle, BlogCoverImg, personImg, id, readTime, PublishDate } = props.blog;
    const { listHandler, executeTime } = props
    const bookmarkHandler = () => {
        let items = localStorage.getItem('item')

        if (items !== null) {

            items = JSON.parse(items)
            let isFound = false


            items.map((item, ind, arr) => {
                console.log(item)
                if (item.id === id) {
                    isFound = true
                    return
                }
            })
            if (!isFound) {
                toast.success("Successfully Bookmarked")
            }
            else {
                toast.warn("Already Bookmarked")

            }
            items.push({ "id": id, "title": BlogTitle })
            localStorage.setItem('item', JSON.stringify(items))

        }
        else if (items === null) {
            console.log('im here new');

            let newItem = []
            newItem.push({ "id": id, "title": BlogTitle })
            console.log(newItem)
            localStorage.setItem('item', JSON.stringify(newItem))
            toast.success("Successfully Bookmarked")
        }
        listHandler()
    }
    const bookmarkRemoveHandler = () => {

    }
    const timeHandler = () => {

        executeTime(readTime)
    }
    return (
        <div className='content-Info'>
            <img src={BlogCoverImg} alt="" /><br />
            <div className='personimg'>
                <img id='personImg' src={personImg} alt="" />

                <div><p>{AuthorName}</p>
                    <small>{PublishDate} (4 Days ago)</small></div>
                <p id='text'>{readTime} min read &nbsp;
                    <FontAwesomeIcon onClick={bookmarkHandler} id='icon' icon={faBookmark} />


                </p>
            </div>
            <h2>{BlogTitle}</h2>

            <p id='hashTag'>#beginners #Programming</p>

            <p onClick={timeHandler} id='markButton'>Mark as read</p>

        </div>
    );
};

export default Content;