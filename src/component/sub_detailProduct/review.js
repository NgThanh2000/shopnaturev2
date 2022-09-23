import React from 'react';
import Rating from '@mui/material/Rating';
function Review(props){

    return(
        <div className="review grid">
            <div className="rating_count">
                <h2>{props.thisProduct.rating_count} REVIEW FOR KOBO ORANGE</h2>
            </div>
            <div className='dispatch_review'>
                <h2>ADD A REVIEW</h2>
                <div className='from_review'>
                    <div className='rating rating_star'>
                        <h5>Your rating *</h5>
                        <Rating name="simple-controlled" size="large" precision={0.5} />
                    </div>
                    <div className='rating rating_from'>
                        <form>
                            <label>Your review *</label>
                            <textarea name="isGoing" type="textarea"></textarea>
                            <br />
                            <label>Name*</label> <input name="name" type="input"/>
                            <br />
                            <label>Email*</label><input name="email" type="input"/>
                            <br />
                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                            <input id='checkbox' name="email" type="checkbox"/>
                            <br />
                            <button type="submit" name="submit_review">Submit Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review;