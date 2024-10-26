import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Medicine.css';

const MedicineForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { medicineId } = useParams();

    useEffect(() => {
        if (medicineId) {
            axios.get(`http://localhost:8080/medicines/getMedicine/${medicineId}`)
                .then(response => {
                    const medicine = response.data;
                    setValue('name', medicine.name);
                    setValue('categoryId', medicine.categoryId);
                    setValue('manufactureId', medicine.manufactureId);
                    setValue('price', medicine.price);
                    setValue('stockQuantity', medicine.stockQuantity);
                    setValue('description', medicine.description);
                    setValue('description', medicine.expirationdate);
                })
                .catch(error => console.error('Error fetching medicine:', error));
        }
    }, [medicineId, setValue]);

    const onSubmit = (data) => {
        const medicine = {
            ...data,

        };

        if (medicineId) {
            axios.put(`http://localhost:8080/medicines/update/${medicineId}`, medicine)
                .then(() => {
                    toast.success('Medicine updated successfully!');
                    setTimeout(() => navigate('/medicines'), 2000);
                })
                .catch(error => console.error('Error updating medicine:', error));
        } else {
            axios.post('http://localhost:8080/medicines/create', medicine)
                .then(() => {
                    toast.success('Medicine created successfully!');
                    setTimeout(() => navigate('/medicines'), 2000);
                })
                .catch(error => console.error('Error creating medicine:', error));
        }
    };

    return (
        <div className="form-container">
            <h2>{medicineId ? 'Edit Medicine' : 'New Medicine'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        {...register('name', {required: 'Medicinea is required'})}
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="categoryId" className="form-label">Category ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="categoryId"
                        {...register('categoryId', {required: 'Category is required'})}
                    />
                    {errors.categoryId && <span className="form-error">{errors.categoryId.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="manufactureId" className="form-label">Manufacture ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="manufactureId"
                        {...register('manufactureId', {required: 'Manufacture is required'})}
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-input"
                        id="price"
                        {...register('price', {required: 'Price is required'})}
                    />
                    {errors.price && <span className="form-error">{errors.price.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="stockQuantity" className="form-label">Quantity </label>
                    <input
                        type="text"
                        className="form-input"
                        id="stockQuantity"
                        {...register('stockQuantity', {required: 'Quantity is required'})}
                    />
                    {errors.stockQuantity && <span className="form-error">{errors.stockQuantity.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description </label>
                    <input
                        type="text"
                        className="form-input"
                        id="description"
                        {...register('description', {required: 'Description is required'})}
                    />
                    {errors.description && <span className="form-error">{errors.description.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="expirationDate" className="form-label">ExpirationDate </label>
                    <input
                        type="date"
                        className="form-input"
                        id="expirationDate"
                        {...register('expirationDate', {required: 'ExpirationDate is required'})}
                    />
                    {errors.expirationDate && <span className="form-error">{errors.expirationDate.message}</span>}
                </div>


                <div className="d-flex justify-content-end">
                    <button type="submit" className="button-save">Save</button>
                    <button type="button" className="button-cancel" onClick={() => navigate('/medicines')}>Cancel
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default MedicineForm;