import React from 'react'
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

export default function LandingSection() {

	const { push } = useHistory();

	return (
		<div className='landing-container'>
		<video src='/videos/video-1hd.mp4' autoPlay loop muted poster='/videos/img.jpg' playsinline="true" disablePictureInPicture="true" />
		<h1>CO|MAKE</h1>
		<p>Assist your community.</p>
		<div className='landing-btns'>
		  	<Button
				className='btns'
				buttonstyle='btn--outline'
				buttonsize='btn--large'
				onClick={() => push('/issues')}
		  	>
			 What's Happening?
		  </Button>
		  <Button
			 className='btns'
			 buttonstyle='btn--primary'
			 buttonsize='btn--large'
			 onClick={() => push('/about')}
		  >
			 How We Do It  <i className='fa fa-address-card' aria-hidden="true"/>
		  </Button>
		</div>
	 </div>
	)
}