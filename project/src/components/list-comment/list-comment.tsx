import Comment from '../comment/comment';
import { Review } from '../../types/review';
import React from 'react';
import {sortCommentsByDate} from '../../utils';

type ListCommentProps = {
  reviews: Review[];
}

const MAX_REVIEWS = 10;

function ListComment (props: ListCommentProps) {
  const {reviews} = props;


  const sortedComments = reviews.slice().sort(sortCommentsByDate);

  return (
    <React.Fragment>
      {sortedComments.slice(0, MAX_REVIEWS).map((review: Review) => <Comment key={review.id} review={review}/>)}
    </React.Fragment>
  );
}

export default ListComment;

