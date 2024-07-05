import Header from '@/Components/Common/Header';
import Footer from '@/Components/Common/Footer';

import AdminDashboard from '@/Components/Admin/AdminDashborad';

import styles from '../../styles/admin/Admin.module.scss';

const Admin = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Admin Dashboard</h1>
        <AdminDashboard />
      </main>
      <Footer />
    </>
  );
};

export default Admin;
