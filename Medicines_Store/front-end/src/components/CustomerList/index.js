import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import styles from './CustomerList.module.scss';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/customers/getAll')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    const handleEdit = (customerId) => {
        navigate(`/customers/edit/${customerId}`);
    };

    const handleDelete = (customerId) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            axios.delete(`http://localhost:8080/customers/delete/${customerId}`)
                .then(() => {
                    setCustomers(customers.filter(customer => customer.customerId !== customerId));
                    toast.success('Customer deleted successfully!');
                })
                .catch(error => console.error('Error deleting customer:', error));
        }
    };

    const filteredCustomers = customers.filter(customer =>
        customer.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phoneNumber.includes(searchQuery) ||
        customer.email.includes(searchQuery) ||
        customer.address.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container mt-5">
            <h2>Customer List</h2>
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
                <button className="btn btn-primary" onClick={() => navigate('/customers/new')}>Add New Customer</button>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredCustomers.map(customer => (
                    <tr key={customer.customerId}>
                        <td>{customer.fullName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phoneNumber}</td>
                        <td>{customer.address}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => handleEdit(customer.customerId)}>Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => handleDelete(customer.customerId)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default CustomerList;