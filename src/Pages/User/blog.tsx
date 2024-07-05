import Header from '@/Components/Common/Header';
import Footer from '@/Components/Common/Footer';
import BlogList from '@/Components/User/BlogList';
import styles from '../../styles/user/Blog.module.scss';

const Blog = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Blog</h1>
        <BlogList />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
