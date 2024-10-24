import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import styles from './CustomerList.module.scss';

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/accounts/getAll')
            .then(response => setAccounts(response.data))
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    const handleEdit = (accountId) => {
        navigate(`/accounts/edit/${accountId}`);
    };

    const handleDelete = (accountId) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            axios.delete(`http://localhost:8080/accounts/delete/${accountId}`)
                .then(() => {
                    setAccounts(accounts.filter(account => account.accountId !== accountId));
                    toast.success('Account deleted successfully!');
                })
                .catch(error => console.error('Error deleting account:', error));
        }
    };

    const filteredAccounts = accounts.filter(account =>
        account.accountId.toString().includes(searchQuery.toString()) ||
        account.username.toString().includes(searchQuery.toString())

    );

    return (
        <div className="container mt-5">
            <h2>Account List</h2>
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
                <button className="btn btn-primary" onClick={() => navigate('/accounts/new')}>Add New Account</button>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Account ID</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Customer ID</th>
                    <th>Role ID</th>
                </tr>
                </thead>
                <tbody>
                {filteredAccounts.map(account => (
                    <tr key={account.accountId}>
                        <td>{account.accountId}</td>
                        <td>{account.username}</td>
                        <td>{account.password}</td>
                        <td>{account.customerId}</td>
                        <td>{account.role}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => handleEdit(account.accountId)}>Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => handleDelete(account.accountId)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default AccountList