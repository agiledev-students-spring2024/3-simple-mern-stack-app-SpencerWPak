// Correct the import statement for React
import React from 'react';
import photo from './image.jpg';

const AboutUs = props => {
  return (
    <div className="aboutMe">
      <h1>About Us</h1>
      <p>Hello! my name is Spencer Pak. I am currently a senior studying computer science at New York University. I was born in Honolulu, Hawaii and lived there until the 7th grade. I then moved to a town in the Seattle area called Kenmore. A few hobbies of mine include watching movies and hanging out with my friends. I also enjoy listening to all types of music, but my most knowledge is about rap.</p>
      <p>Here is a photo of me and my friend with the rapper Westside Gunn.</p>
      <img src={photo} alt="Spencer Pak and friend with Westside Gunn" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}

export default AboutUs;
