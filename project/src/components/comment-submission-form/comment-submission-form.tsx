import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addCommentAction } from '../../store/api-actions';

function CommentSubmissionForm () {

  const dispatch = useAppDispatch();
  const param = useParams();
  const currentId = Number(param.id);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isFormDisabled, setFormDisabled] = useState(false);

  const MIN_COMMENT_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 300;

  const isSubmitButtonDisabled: boolean = rating === 0 || comment.length < MIN_COMMENT_LENGTH || comment.length > MAX_COMMENT_LENGTH;

  const resetForm = () => {
    setRating(0);
    setComment('');
    setFormDisabled(false);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
    setError(null);
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setComment(value);
    setError(null);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);

    try {
      const result: any = await dispatch(addCommentAction({ id: currentId, comment, rating }));

      if (result?.error === undefined) {
        resetForm();
      } else {
        setError(result.error.message);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };


  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleRatingChange} checked={rating === 5} disabled={isFormDisabled} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChange} checked={rating === 4} disabled={isFormDisabled} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChange} checked={rating === 3} disabled={isFormDisabled} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChange} checked={rating === 2} disabled={isFormDisabled} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChange} checked={rating === 1} disabled={isFormDisabled} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
        disabled={isFormDisabled}
      >
      </textarea>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentSubmissionForm;
