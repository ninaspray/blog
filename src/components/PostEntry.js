import React from 'react';
import { useParams } from 'react-router-dom';

//components
import PostEntrySummary from './PostEntrySummary';
import Comment from './Comment';
import CommentInput from './CommentInput';

// custom hooks
import { useFetch } from '../hooks/useFetch';

// consts
const API = process.env.REACT_APP_JSON_PLACEHOLDER_API;

const PostEntry = () => {
    const { id } = useParams();
    const [post] = useFetch(`${API}/posts/${id}`);
    const [user] = useFetch(post ? `${API}/users/${post.userId}` : undefined);
    const [comments, addComment] = useFetch(
        post ? `${API}/comments/?postId=${post.id}` : undefined,
    );

    return (
        <>
            {post && user && <PostEntrySummary post={post} user={user} />}
            {comments && (
                <>
                    <CommentInput addComment={addComment} postId={post.id} />
                    <ul>
                        {comments.map(comment => (
                            <Comment comment={comment} />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default PostEntry;