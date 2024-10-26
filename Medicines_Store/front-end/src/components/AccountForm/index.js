import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../MedicineForm/Medicine.css';

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
        <div className="form-container">
            <h2>{accountId ? 'Edit Account' : 'New Account'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-input"
                        id="username"
                        {...register('username', {required: 'UserName is required'})}
                    />
                    {errors.username && <span className="form-error">{errors.username.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-input"
                        id="password"
                        {...register('password', {required: 'Password is required'})}
                    />
                    {errors.password && <span className="form-error">{errors.password.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="customerId" className="form-label">Customer ID</label>
                    <input
                        type="customerId"
                        className="form-input"
                        id="customerId"
                        {...register('customerId', {required: 'Customer is required'})}
                    />
                    {errors.customerId && <span className="form-error">{errors.customerId.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select
                        className="form-input"
                        id="role"
                        {...register('role', {required: 'Role is required'})} // Giữ nguyên đăng ký với react-hook-form
                    >
                        <option value="">Select Role</option>
                        {/* Tùy chọn mặc định */}
                        <option value="1">Admin</option>
                        {/* Giá trị cho Admin */}
                        <option value="2">Customer</option>
                        {/* Giá trị cho Customer */}
                    </select>
                    {errors.role &&
                        <span className="form-error">{errors.role.message}</span>} {/* Hiển thị lỗi nếu có */}
                </div>


                <div className="d-flex justify-content-end">
                    <button type="submit" className="button-save">Save</button>
                    <button type="button" className="button-cancel" onClick={() => navigate('/accounts/')}>Cancel
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AccountForm;