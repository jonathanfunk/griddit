import React from 'react';
import { Card } from 'material-ui/Card';
import styles from './styles';

const Posts = ({ posts }) => {

	return (
		<div style={styles.postContainer}>
      {posts.map((post, i) =>
        <Card style={styles.post} key={i}>
          <div style={styles.postWrap}>
            {post.preview &&
             <img style={styles.thumbnail} src={post.preview.images[0].source.url} />
            }
          <h2 style={styles.title}>{post.title}</h2>
          </div>
        </Card>
      )}
    </div>
	)
}

export default Posts;