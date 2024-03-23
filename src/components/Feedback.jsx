import { Button } from '@mui/material';
import React,{useState} from 'react';

function Feedback(){
    const[feedback,setFeedback] = useState('');
    const[rating,setRating] = useState(0);
    const[submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDrfault();

        console.log("Feeedbach:", feedback);
        console.log("Rating:", rating);
        setSubmitted(true);
    };
    return(
        <div>
            <h1>Feedback</h1>
            {submitted ?(
                <p>thank you for your feedback!</p>

            ):(
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea
                        id="feedback"
                        
                        value={feedback}
                        onChange={(e)=> setFeedback(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <br /><br />
                        <label htmlFor="rating">Rating:</label>
                        <input
                        type="number"
                        id="rating"
                        value={rating}
                        min="1"
                        max="5"
                        onChange={(e)=> setRating(e.target.value)}
                        required
                        />
                    </div>
                    <br /><br />
                    <Button variant='contained'>Submit</Button>
                </form>
            )}
        </div>
    );
}
export default Feedback;