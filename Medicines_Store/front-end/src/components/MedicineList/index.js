import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CategoryList/Category.css';
import cart from '../../assets/images/cart.jpg';
import medicine from '../../assets/images/medicine.png';
import customer from '../../assets/images/customer.png';
import account from '../../assets/images/account.png';
import category from '../../assets/images/category.png';


const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/medicines/getAll')
            .then(response => setMedicines(response.data))
            .catch(error => console.error('Error fetching Medicine:', error));
    }, []);

    const handleEdit = (medicineId) => {
        navigate(`/medicines/edit/${medicineId}`);
    };

    const handleDelete = (medicineId) => {
        if (window.confirm('Are you sure you want to delete this medicine?')) {
            axios.delete(`http://localhost:8080/medicines/delete/${medicineId}`)
                .then(() => {
                    setMedicines(medicines.filter(medicine => medicine.medicineId !== medicineId));
                    toast.success('Medicine deleted successfully!');
                })
                .catch(error => console.error('Error deleting medicine:', error));
        }
    };

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.includes(searchQuery) ||
        medicine.medicineId.toString().includes(searchQuery.toString())
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
                <h2>Medicine List</h2>
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
                    <button className="btn-new" onClick={() => navigate('/medicines/new')}>Add New Medicine
                    </button>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th style={{width: '30px', height: '50px'}}>ID</th>
                        <th>Name</th>
                        <th style={{width: '30px', height: '50px'}}>Category ID</th>
                        <th style={{width: '30px', height: '50px'}}>Manufacture ID</th>
                        <th>Price</th>
                        <th style={{width: '30px', height: '50px'}}>Quantity</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredMedicines.map(medicine => (
                        <tr key={medicine.medicineId}>
                            <td>{medicine.medicineId}</td>
                            <td>{medicine.name}</td>
                            <td>{medicine.categoryId}</td>
                            <td>{medicine.manufacturerId}</td>
                            <td>${medicine.price}</td>
                            <td>{medicine.stockQuantity}</td>
                            <td>{medicine.description}</td>
                            <td>{medicine.expirationDate}</td>
                            <td>
                                <button className="btn btn-warning me-2"
                                        onClick={() => handleEdit(medicine.medicineId)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => handleDelete(medicine.medicineId)}>Delete
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

export default MedicineList;