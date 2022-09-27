const API = "https://jsonplaceholder.typicode.com/posts";

export default function Home(props) {
  return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {props.posts?.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(API);
  const posts = await res.json();

  return {
    props: { posts },
  };
}