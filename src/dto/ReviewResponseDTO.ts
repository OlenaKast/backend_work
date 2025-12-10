import { Review } from "../orm/entities/users/Review";

export class ReviewResponseDTO {
  id: number;
  rating: number;
  text: string;
  author: string;

  constructor(review: Review) {
    this.id = review.id;
    this.rating = review.rating;
    this.text = review.text;
    this.author = review.user ? review.user.fullName : 'Unknown';
  }
}