import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card } from 'material-ui/Card';
import styles from './styles';
import RaisedButton from 'material-ui/RaisedButton';

const dateCreated = date => moment(date * 1000).fromNow();

const urlDecode = (url) => {
  const div = document.createElement('div');
  div.innerHTML = url;
  return div.innerText;
};

const Posts = ({ posts }) => (
  <div style={styles.postContainer}>
    {posts.map((post, i) =>
      <Card style={styles.post} key={i}>
        <div style={styles.postWrap}>
          {post.preview &&
            <div style={styles.imageWrap}>
              <img
                alt={post.title}
                style={!post.over_18 ? styles.thumbnail : styles.sfwThumbnail}
                src={urlDecode(post.preview.images[0].resolutions.slice(-1)[0].url)}
              />
            </div>
          }
          <h2 style={styles.title}>{post.title}</h2>
          <p>Posted by <a href={`https://www.reddit.com/user/${post.author}`} target="_blank">{post.author}</a> {dateCreated(post.created_utc)} for <a href={`https://www.reddit.com/${post.subreddit_name_prefixed}`} target="_blank">{post.subreddit_name_prefixed}</a>.</p>
          <div style={styles.linkWrap}>
            <RaisedButton
              href={post.url}
              target="_blank"
              icon={<i className="fa fa-link" aria-hidden="true" />}
            />
            <RaisedButton
              href={`https://www.reddit.com${post.permalink}`}
              target="_blank"
              icon={<i className="fa fa-comments" aria-hidden="true" />}
            />
          </div>
        </div>
      </Card>,
    )}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
