import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Category.css';


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
        category.categoryName.includes(searchQuery)
    );

    return (
        <div className="container mt-5">
            <h2>Category List</h2>
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
                <button className="btn btn-primary" onClick={() => navigate('/categories/new')}>Add New Category</button>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                </tr>
                </thead>
                <tbody>
                {filteredCategories.map(category => (
                    <tr key={category.categoryId}>
                        <td>{category.categoryId}</td>
                        <td>{category.categoryName}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => handleEdit(category.categoryId)}>Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => handleDelete(category.categoryId)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default CategoryList;