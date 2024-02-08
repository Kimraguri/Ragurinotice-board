// pages/index.js

import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/create">
        <a>새 글 작성</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {
  // 여기서는 예시로 정적 데이터를 사용합니다.
  // 실제 애플리케이션에서는 데이터베이스나 외부 API에서 데이터를 불러옵니다.
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
