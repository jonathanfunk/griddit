import React from 'react';
import { Card } from 'material-ui/Card';
import styles from './styles';
import moment from 'moment'


// var date = 1492724881;
// console.log('moment test...', moment(date * 1000).fromNow())

const Posts = ({ posts }) => {

	return (
		<div style={styles.postContainer}>
      {posts.map((post, i) =>
        <Card style={styles.post} key={i}>
          <div style={styles.postWrap}>
            {post.preview &&
             <img style={styles.thumbnail} src={post.preview.images[0].source.url.replace(/amp;/g,'')} />
            }
          <h2 style={styles.title}>{post.title}</h2>
          <p>Posted by {post.author} for {post.subreddit_name_prefixed}.</p>
          </div>
        </Card>
      )}
    </div>
	)
}

export default Posts;