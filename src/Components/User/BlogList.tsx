import styles from './BlogList.module.scss';

const BlogList = () => {
  const blogs = [
    { id: 1, title: 'Blog Post 1', content: 'Content of blog post 1' },
    { id: 2, title: 'Blog Post 2', content: 'Content of blog post 2' },
    // Add more blog posts as needed
  ];

  return (
    <div className={styles.blogList}>
      {blogs.map(blog => (
        <div key={blog.id} className={styles.blog}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
