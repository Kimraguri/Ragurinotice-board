// pages/api/posts.js

const posts = [
    { id: 1, title: '첫 번째 게시글', content: '내용입니다...' },
    // 더 많은 게시글 데이터...
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(posts);
    } else if (req.method === 'POST') {
      // 새 게시글 생성 로직...
      const { title, content } = req.body;
      const newPost = { id: Date.now(), title, content };
      posts.push(newPost);
      res.status(201).json(newPost);
    }
  }
  