import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import category from "../../assets/images/category.png";
import medicine from "../../assets/images/medicine.png";
import customer from "../../assets/images/customer.png";
import cart from "../../assets/images/cart.jpg";
import account from "../../assets/images/account.png";

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [customers, setCustomers] = useState([]); // State cho customers
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Lấy dữ liệu từ cả bảng accounts và customers
                const accountsResponse = await axios.get('http://localhost:8080/accounts/getAll');
                const customersResponse = await axios.get('http://localhost:8080/customers/getAll');

                setAccounts(accountsResponse.data);
                setCustomers(customersResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (accountId) => {
        navigate(`/accounts/edit/${accountId}`);
    };

    const handleDelete = (accountId) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
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
                <h2>Account List</h2>
                <div className="">
                    <div className="search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="btn-new" onClick={() => navigate('/accounts/new')}>Add New Account</button>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Customer Name</th>
                        {/* Đổi tên cột */}
                        <th>Role ID</th>
                        <th>Action</th>
                        {/* Thêm cột Action */}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredAccounts.map(account => {
                        const customer = customers.find(c => c.customerId === account.customerId);
                        return (
                            <tr key={account.accountId}>
                                <td>{account.accountId}</td>
                                <td>{account.username}</td>
                                <td>{account.password}</td>
                                <td>{customer ? customer.fullName : 'N/A'}</td>
                                {/* Hiển thị tên khách hàng */}
                                <td>{account.role}</td>
                                <td>
                                    <button className="btn btn-warning me-2"
                                            onClick={() => handleEdit(account.accountId)}>Edit
                                    </button>
                                    <button className="btn btn-danger"
                                            onClick={() => handleDelete(account.accountId)}>Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default AccountList;
