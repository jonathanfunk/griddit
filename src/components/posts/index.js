import React from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Card } from 'material-ui/Card';
import styles from './styles';

const Posts = ({ posts }) => {
	return (
		<div style={styles.postContainer}>
      {posts.map((post, i) =>
        <Card style={styles.post} key={i}>
          <Toolbar>
            <ToolbarTitle text={post.title} />
          </Toolbar>
          <p>ggg</p>
        </Card>
      )}
    </div>
	)
}

export default Posts;