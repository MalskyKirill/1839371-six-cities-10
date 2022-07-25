import Comment from '../comment/comment';
import { Review } from '../../types/review';
import React from 'react';

type ListCommentProps = {
  reviews: Review[];
}

function ListComment (props: ListCommentProps) {
  const {reviews} = props;

  return (
    <React.Fragment>
      {reviews.map((review: Review) => <Comment key={review.id} review={review}/>)}
    </React.Fragment>
  );
}

export default ListComment;

