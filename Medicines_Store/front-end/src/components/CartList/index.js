import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import styles from './CustomerList.module.scss';
import '../CategoryList/Category.css';
import cart from "../../assets/images/cart.jpg";
import medicine from "../../assets/images/medicine.png";
import account from "../../assets/images/account.png";
import customer from '../../assets/images/customer.png';
import category from '../../assets/images/category.png';

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
        cart.medicineId.toString().includes(searchQuery.toString()) ||
        cart.quantity.toString().includes(searchQuery.toString())
    );

    return (
        <div>
            <div id="mySidenav">
                <div className="sidenav">
                    <p className="logo"><span>Medi</span>-Store</p>
                    {/* <Link to="/dashboard" className="icon-a"><img src="/Images/controlpanel.png" alt="menu" className="icons"/><span>Dashboard</span></Link> */}
                    <Link to="/categories" className="icon-a"><img src={category} alt="menu"
                                                                   className="icons"/><span>Category</span></Link>
                    <Link to="/medicines" className="icon-a"><img src={medicine} alt="menu"
                                                                  className="icons"/><span>Medicines</span></Link>
                    <Link to="/customers" className="icon-a"><img src={customer} alt="menu"
                                                                  className="icons"/><span>Customers</span></Link>
                    <Link to="/carts" className="icon-a"><img src={cart} alt="menu"
                                                              className="icons"/><span>Carts</span></Link>
                    <Link to="/accounts" className="icon-a"><img src={account} alt="menu"
                                                                 className="icons"/><span>Accounts</span></Link>

                    {/* <Link to="/settings" className="icon-a"><img src="/Images/settings.png" alt="menu" clasclassNames="icons"/><span>Settings</span></Link>
                    <Link to="" className="icon-a"><img src="/Images/logout.png" alt="menu" className="icons"/><span>Logout</span></Link> */}
                </div>
            </div>
            <div className="container mt-5">
                <h2>Cart List</h2>
                <div className="">
                    <div className="search">
                        <input
                            type="text"
                            className=" "
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="btn-new" onClick={() => navigate('/carts/new')}>Add New Cart</button>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>Medicine ID</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCarts.map(cart => (
                        <tr key={cart.cartId}>
                            <td>{cart.accountId}</td>
                            <td>{cart.medicineId}</td>
                            <td>{cart.quantity}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => handleEdit(cart.cartId)}>Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(cart.cartId)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default CartList;