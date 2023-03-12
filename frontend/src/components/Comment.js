import React from 'react';

function Comment({deleteComment, text, id}) {

  function handleDelete(evt) {
    deleteComment(id);
  }

  return (
    <div>
      <p>
        {deleteComment && (
          <i
            className="fa fa-times text-danger mr-2"
            onClick={handleDelete}
          />
        )}

        {text}
      </p>
    </div>
  );
}

export default Comment;