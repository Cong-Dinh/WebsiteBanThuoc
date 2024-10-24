import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            axios.get(`http://localhost:8080/categories/getCategory/${categoryId}`)
                .then(response => {
                    const category = response.data;
                    setValue('categoryName', category.categoryName);
                })
                .catch(error => console.error('Error fetching category:', error));
        }
    }, [categoryId, setValue]);

    const onSubmit = (data) => {
        const category = {
            ...data,

        };

        if (categoryId) {
            axios.put(`http://localhost:8080/categories/update/${categoryId}`, category)
                .then(() => {
                    toast.success('Category updated successfully!');
                    setTimeout(() => navigate('/categories'), 2000);
                })
                .catch(error => console.error('Error updating category:', error));
        } else {
            axios.post('http://localhost:8080/categories/create', category)
                .then(() => {
                    toast.success('Customer created successfully!');
                    setTimeout(() => navigate('/categories'), 2000);
                })
                .catch(error => console.error('Error creating category:', error));
        }
    };

    return (
        <div className="container mt-5">
            <h2>{categoryId ? 'Edit Category' : 'New Category'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        {...register('categoryName', { required: 'Category is required' })}
                    />
                    {errors.categoryName && <span className="text-danger">{errors.categoryName.message}</span>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success me-2">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/categories')}>Cancel</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CategoryForm;