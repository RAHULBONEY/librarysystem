import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import './Home.css'; // Import the CSS file

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='home-container'>
            <div className='header'>
                <h1>Books List</h1>
                <Link to='/books/create' className='add-button'>
                    <MdOutlineAddBox />
                </Link>
            </div>
            {loading ? (
                <div className='spinner-container'>
                    <Spinner />
                </div>
            ) : (
                <div className='cards-container'>
                    {books.map((book) => (
                        <div key={book._id} className='card'>
                            <div className='card-content'>
                                <div className='card-info'>
                                    <h2>{book.bookName}</h2>
                                    <p>{book.description}</p>
                                    <p>Quantity: {book.quantity}</p>
                                    <p>Amount: ${book.amount}</p>
                                </div>
                                <div className='card-actions'>
                                    <Link to={`/books/details/${book._id}`} title='View Details'>
                                        <BsInfoCircle />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`} title='Edit Book'>
                                        <AiOutlineEdit />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`} title='Delete Book'>
                                        <MdOutlineDelete />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
