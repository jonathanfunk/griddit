import React from 'react';

const Posts = ({ posts }) => {
	return (
		<ul>
        {posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
	)
}

export default Posts;