import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { accountId } = useParams();

    useEffect(() => {
        if (accountId) {
            axios.get(`http://localhost:8080/accounts/getAccount/${accountId}`)
                .then(response => {
                    const account = response.data;
                    setValue('username', account.username);
                    setValue('customerId', account.customerId);
                    setValue('role', account.role);
                })
                .catch(error => console.error('Error fetching Account:', error));
        }
    }, [accountId, setValue]);

    const onSubmit = (data) => {
        const account = {
            ...data,

        };

        if (accountId) {
            axios.put(`http://localhost:8080/accounts/update/${accountId}`, account)
                .then(() => {
                    toast.success('Account updated successfully!');
                    setTimeout(() => navigate('/accounts/'), 2000);
                })
                .catch(error => console.error('Error updating account:', error));
        } else {
            axios.post('http://localhost:8080/accounts/create', account)
                .then(() => {
                    toast.success('Account created successfully!');
                    setTimeout(() => navigate('/accounts/'), 2000);
                })
                .catch(error => console.error('Error creating account:', error));
        }
    };

    return (
        <div className="container mt-5">
            <h2>{accountId ? 'Edit Account' : 'New Account'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        {...register('username', {required: 'UserName is required'})}
                    />
                    {errors.username && <span className="text-danger">{errors.username.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        {...register('password', {required: 'Password is required'})}
                    />
                    {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="customerId" className="form-label">Customer ID</label>
                    <input
                        type="customerId"
                        className="form-control"
                        id="customerId"
                        {...register('customerId', {required: 'Customer is required'})}
                    />
                    {errors.customerId && <span className="text-danger">{errors.customerId.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <input
                        type="role"
                        className="form-control"
                        id="role"
                        {...register('role', {required: 'role is required'})}
                    />
                    {errors.role && <span className="text-danger">{errors.role.message}</span>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success me-2">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/accounts/')}>Cancel
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AccountForm;