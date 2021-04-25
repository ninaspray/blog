import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


//types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

//components
import LikeCounter from './like-counter';

const PostEntrySummary = ({ post, user, children }) => {
  const { title, body } = post;
  const { name } = user;

  const [likeCounter, setLikeCounter] = useState(0);

  const increseLike = () => {
      setLikeCounter(previousCounter => previousCounter + 1 );
  };

  const decreaseLike = () => {
    setLikeCounter(previousCounter => previousCounter - 1 );
};

useEffect(() => {
  return () => {
      console.log(
          `component PostEntry for post ${post.id}, has been unmounted`,
      );
  };
}, [post.id]);

  return (
   <article>
    <h2>{title}</h2>
    <h3>by {name}</h3>
    <p>{body}</p>
    <div>
   <LikeCounter 
   likeCounter ={likeCounter}
   handleDecreaseLike={decreaseLike}
   handleIncreaseLike={increseLike}
   />
{children}
</div>
</article>
    );
  };

    PostEntrySummary.propTypes = {
        post: PostType.isRequired,
        user: UserType.isRequired,
        children: PropTypes.node.isRequired,
    };
    
    export default PostEntrySummary;