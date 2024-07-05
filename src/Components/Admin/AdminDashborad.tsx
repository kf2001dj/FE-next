import ProductForm from './ProductForm';
import styles from './AdminDashboard.module.scss';

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Manage Products</h2>
      <ProductForm />
    </div>
  );
};

export default AdminDashboard;
