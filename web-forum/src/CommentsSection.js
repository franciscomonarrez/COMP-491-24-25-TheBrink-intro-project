import React from 'react';
import SendCommentButton from './SendCommentButton';

function CommentsSection({ comments, postId, refreshComments }) {
  return (
    <div className="comments-section">
      <h3>Comments for Post ID {postId}</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.comment_id} className="comment">
            <p>
              <strong>User {comment.user_id}:</strong> {comment.content}
            </p>
            <small>
              <em>
                Commented on {new Date(comment.created_at).toLocaleDateString()} at{' '}
                {new Date(comment.created_at).toLocaleTimeString()}
              </em>
            </small>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
      <textarea id="makeComment" placeholder="Add a comment..." />
      <SendCommentButton postId={postId} refreshComments={refreshComments} />
    </div>
  );
}

export default CommentsSection;
