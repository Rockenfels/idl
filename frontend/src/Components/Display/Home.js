import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to Idl!</h1>
            <p>
                    The phrase "The devil makes work for idle hands to do" has been around for centuries, but
                its meaning can still be applied in a modern context. Finding yourself worrying without cause, 
                your mind wandering to darker corners, and your body pacing as you try to outwalk the shadows 
                chasing you are all common feelings to those who struggle with anxiety, depression, attention
                deficit disorders, and other mental health challenges. With any or all of those feelings taking
                up space in your mind, it can be difficult to put them aside and even easier to find the first 
                distraction (positive or otherwise) that will help take your mind off your troubles. </p>

                <p>Idl was created to give users positive outlets for their stress by providing alternatives
                to walking a circular path in both your mind and floor. Here we encourage people to take that 
                energy and channel it into creative/constructive outlets through educational and enabling
                videos. You'll find videos on here that cover topics ranging from mountain biking and homesteading
                tutorials, to yoga practices, craft instructionals, and everything in between. Learn something
                new about what you're already passionate about or broaden your horizons- whatever piques your 
                interests and keeps you from idle worry and anxiety.</p>
            <p>
                Get up. Get active. Get better.
            </p>
            <Link to="/videos" >Get Started</Link>
        </div>
    )
}
export default Home;