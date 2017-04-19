import React from 'react';
import { Card } from 'material-ui/Card';
import styles from './styles';

const Posts = ({ posts }) => {

  console.log('preview is...', posts.preview)

  //{post.preview && }
	return (
		<div style={styles.postContainer}>
      {posts.map((post, i) =>
        <Card style={styles.post} key={i}>
          {post.preview &&
            <img style={styles.thumbnail} src={post.preview.images[0].source.url} />
          }
          <h2 style={styles.title}>{post.title}</h2>
        </Card>
      )}
    </div>
	)
}

export default Posts;