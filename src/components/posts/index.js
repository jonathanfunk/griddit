import React from 'react';
import { Card } from 'material-ui/Card';
import styles from './styles';

const Posts = ({ posts }) => {
	return (
		<div style={styles.postContainer}>
      {posts.map((post, i) =>
        <Card style={styles.post} key={i}>
          <h2 style={styles.title}>{post.title}</h2>
        </Card>
      )}
    </div>
	)
}

export default Posts;