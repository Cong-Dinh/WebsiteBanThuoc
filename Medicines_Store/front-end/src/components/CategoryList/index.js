import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Category.css';
import account from '../../assets/images/account.png';
import cart from '../../assets/images/cart.jpg';
import medicine from '../../assets/images/medicine.png';
import customer from '../../assets/images/customer.png';
import category from '../../assets/images/category.png';


const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/categories/getAll')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleEdit = (categoryId) => {
        navigate(`/categories/edit/${categoryId}`);
    };

    const handleDelete = (categoryId) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            axios.delete(`http://localhost:8080/categories/delete/${categoryId}`)
                .then(() => {
                    setCategories(categories.filter(category => category.categoryId !== categoryId));
                    toast.success('Category deleted successfully!');
                })
                .catch(error => console.error('Error deleting category:', error));
        }
    };

    const filteredCategories = categories.filter(category =>
        category.categoryName.includes(searchQuery) ||
        category.categoryId.toString().includes(searchQuery.toString())
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
                <h2>Category List</h2>
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
                    <button className="btn-new" onClick={() => navigate('/categories/new')}>Add New Category
                    </button>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCategories.map(category => (
                        <tr key={category.categoryId}>
                            <td>{category.categoryId}</td>
                            <td>{category.categoryName}</td>
                            <td>
                                <button className="btn btn-warning me-2"
                                        onClick={() => handleEdit(category.categoryId)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => handleDelete(category.categoryId)}>Delete
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

export default CategoryList;