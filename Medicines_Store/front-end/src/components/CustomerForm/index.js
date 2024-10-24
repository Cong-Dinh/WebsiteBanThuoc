import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { customerId } = useParams();

    useEffect(() => {
        if (customerId) {
            axios.get(`http://localhost:8080/customers/getCustomer/${customerId}`)
                .then(response => {
                    const customer = response.data;
                    setValue('fullName', customer.fullName);
                    setValue('email', customer.email);
                    setValue('phoneNumber', customer.phoneNumber);
                    setValue('address', customer.address);

                })
                .catch(error => console.error('Error fetching customer:', error));
        }
    }, [customerId, setValue]);

    const onSubmit = (data) => {
        const customer = {
            ...data,

        };

        if (customerId) {
            axios.put(`http://localhost:8080/customers/update/${customerId}`, customer)
                .then(() => {
                    toast.success('Customer updated successfully!');
                    setTimeout(() => navigate('/customers'), 2000);
                })
                .catch(error => console.error('Error updating customer:', error));
        } else {
            axios.post('http://localhost:8080/customers/create', customer)
                .then(() => {
                    toast.success('Customer created successfully!');
                    setTimeout(() => navigate('/customers'), 2000);
                })
                .catch(error => console.error('Error creating customer:', error));
        }
    };

    return (
        <div className="container mt-5">
            <h2>{customerId ? 'Edit Customer' : 'New Customer'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        {...register('fullName', { required: 'Name is required' })}
                    />
                    {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        {...register('phoneNumber', { required: 'Phone is required' })}
                    />
                    {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && <span className="text-danger">{errors.address.message}</span>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success me-2">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/customers')}>Cancel</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CustomerForm;