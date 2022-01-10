import React from 'react';
import Josh from '../assets/josh.jpg'
import Wes from '../assets/wes.jpg'
import Trevor from '../assets/trevor.jpg'
import Seth from '../assets/seth.jpg'

import {Jumbotron, 
    Button, 
    Card, 
    CardImg,  
    CardBody,
    CardTitle, 
    CardSubtitle,} 
    from 'reactstrap'
    


    
    const MemberCard = (props) => {
        const {member}= props
        return (
          <div>
            <Card id='team-card'>
              <CardImg top width="100%" src={member.img} alt="CO|MAKE Team Member" />
              <CardBody>
                <CardTitle><b>{member.name}</b></CardTitle>
                <CardSubtitle>{member.role}</CardSubtitle>
                
                <Button id='hire-me' onClick={() => window.open(member.url, "_blank")}>Hire Me</Button>
              </CardBody>
            </Card>
          </div>
        );
      };

      
    



const About = () => {
    const teamMembers = [
        { 
            name: 'Seth Bradshaw', 
            img: Seth, 
            url: 'https://github.com/seth-bradshaw', 
            role: 'Frontend React'
        }, 
        { 
            name: 'Wesley White', 
            img: Wes, 
            url: 'https://github.com/Wesley-Ryan', 
            role: 'Frontend React'
    }, 
    { 
        name: 'Trevor Armes', 
        img: Trevor, 
        url: 'https://github.com/tarmes', 
        role: 'Frontend React II'
    }, 
    { 
        name: 'Josh Glantz', 
        img: Josh, 
        url: 'https://github.com/Jahteo', 
        role: 'Backend NodeJS'
    }]



    return ( 
    
    <div className='about-page'> 
        <Jumbotron>
        <h1 className="display-3">Co|Make</h1>
        <p className="lead">
           <b>Make your voice heard in your community.</b> 
        </p>
        <hr className="my-2" />
        <p>
            Our goal is to make it easy for local governments to find out what they need to do to better serve their citizens. That's why we created a space for you to let your town know what they should be prioritizing. Post anytime, anywhere. Add a suggestion to someone else's issue. Discuss details in comments. Speak up and be heard.
        </p>
        <p>
           <b>Coming soon: </b> 
             Governement officials will be able to show official responses including the status of an issue. They will let you know if an issue is new, has been heard, is pending, is resolved, exactly what stage it's in, and how they're working on it.
        </p>
        <p>
            It's up to all of us to make our neighborhoods, our towns, and our cities better. Start by helping us find where to start.
        </p>
      </Jumbotron>

      <h2>Meet The Team </h2>
      <div className='team-container'>

        {teamMembers.map((member, idx) => { 
            return <MemberCard member={member} key={idx} />
        })}
      </div>

      
    </div>);
}
 
export default About;