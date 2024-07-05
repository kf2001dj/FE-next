import Header from '@/Components/Common/Header';
import Footer from '@/Components/Common/Footer';
import styles from '../../styles/user/Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to our Home Page</h1>
        <p>This is the home page content.</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
