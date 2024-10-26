import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../MedicineForm/Medicine.css';

const CartForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { cartId } = useParams();

    useEffect(() => {
        if (cartId) {
            axios.get(`http://localhost:8080/carts/getCart/${cartId}`)
                .then(response => {
                    const cart = response.data;
                    setValue('accountId', cart.accountId);
                    setValue('medicineId', cart.medicineId);
                    setValue('quantity', cart.quantity);

                })
                .catch(error => console.error('Error fetching cart:', error));
        }
    }, [cartId, setValue]);

    const onSubmit = (data) => {
        const cart = {
            ...data,

        };

        if (cartId) {
            axios.put(`http://localhost:8080/carts/update/${cartId}`, cart)
                .then(() => {
                    toast.success('Cart updated successfully!');
                    setTimeout(() => navigate('/carts/'), 2000);
                })
                .catch(error => console.error('Error updating cart:', error));
        } else {
            axios.post('http://localhost:8080/carts/create', cart)
                .then(() => {
                    toast.success('Cart created successfully!');
                    setTimeout(() => navigate('/carts/'), 2000);
                })
                .catch(error => console.error('Error creating cart:', error));
        }
    };

    return (
        <div className="form-container">
            <h2>{cartId ? 'Edit Cart' : 'New Cart'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="accountId" className="form-label">Account ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="accountId"
                        {...register('accountId', { required: 'Account ID is required' })}
                    />
                    {errors.accountId && <span className="form-error">{errors.accountId.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="medicineId" className="form-label">Medicines ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="shoeId"
                        {...register('medicineId', { required: 'Medicine ID is required' })}
                    />
                    {errors.shoeId && <span className="form-error">{errors.shoeId.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                        type="text"
                        className="form-input"
                        id="quantity"
                        {...register('quantity', { required: 'Quantity is required' })}
                    />
                    {errors.quantity && <span className="form-error">{errors.quantity.message}</span>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="button-save">Save</button>
                    <button type="button" className="button-cancel" onClick={() => navigate('/carts')}>Cancel</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CartForm;