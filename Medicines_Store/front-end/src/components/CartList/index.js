import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import styles from './CustomerList.module.scss';

const CartList = () => {
    const [carts, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/carts/getAll')
            .then(response => setCart(response.data))
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    const handleEdit = (cartId) => {
        navigate(`/carts/edit/${cartId}`);
    };

    const handleDelete = (cartId) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            axios.delete(`http://localhost:8080/carts/delete/${cartId}`)
                .then(() => {
                    setCart(carts.filter(cart => cart.cartId !== cartId));
                    toast.success('Customer deleted successfully!');
                })
                .catch(error => console.error('Error deleting customer:', error));
        }
    };

    const filteredCarts = carts.filter(cart =>
        cart.cartId.toString().includes(searchQuery.toString()) ||
        cart.shoeId.toString().includes(searchQuery.toString()) ||
        cart.quantity.toString().includes(searchQuery.toString())
    );

    return (
        <div className="container mt-5">
            <h2>Cart List</h2>
            <div className="">
                <div className="mb-3">
                    <input
                        type="text"
                        className=" "
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={() => navigate('/carts/new')}>Add New Cart</button>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Account ID</th>
                    <th>Shoe ID</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {filteredCarts.map(cart => (
                    <tr key={cart.cartId}>
                        <td>{cart.accountId}</td>
                        <td>{cart.shoeId}</td>
                        <td>{cart.quantity}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => handleEdit(cart.cartId)}>Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => handleDelete(cart.cartId)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default CartList;