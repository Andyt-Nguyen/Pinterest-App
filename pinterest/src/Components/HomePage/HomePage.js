import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions/actionPin';
import Masonry from 'react-masonry-component';
import Module from '../Module/Module';
import PinItem from './PinItem';
import { Container } from '../Common';

class HomePage extends Component {

	render() {
		return (
			<div style={{marginTop:'20px'}}>
				<Container>
					<Masonry className="my-gallery-class">
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
						<PinItem />
					</Masonry>
				</Container>
			</div>
		);
	}
}

export default connect(null, { userSignOut })(HomePage);

// Dummy Data
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
// 	<p>More Skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
// 	<p>Taylor Swift</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy" src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
// 	<p>This is skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://i.pinimg.com/736x/6d/08/26/6d08268c35f5f71b3e710cee25e58772--celebrity-photography-emma-watson-hair-color.jpg" />
// 	<p>Emma Watson is my dream girl</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://angelsblogdotorg.files.wordpress.com/2016/03/skateboard-pic.jpg" />
// 	<p>Skate Flip Dawg</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
// 	<p>More Skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
// 	<p>Taylor Swift</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
// <ImageWrapper>
// 	<Image alt="yoyyoyy" src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
// 	<p>This is skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://i.pinimg.com/736x/6d/08/26/6d08268c35f5f71b3e710cee25e58772--celebrity-photography-emma-watson-hair-color.jpg" />
// 	<p>Emma Watson is my dream girl</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://angelsblogdotorg.files.wordpress.com/2016/03/skateboard-pic.jpg" />
// 	<p>Skate Flip Dawg</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
// 	<p>More Skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
// 	<p>Taylor Swift</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper><ImageWrapper>
// 	<Image alt="yoyyoyy" src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
// 	<p>This is skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://i.pinimg.com/736x/6d/08/26/6d08268c35f5f71b3e710cee25e58772--celebrity-photography-emma-watson-hair-color.jpg" />
// 	<p>Emma Watson is my dream girl</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://angelsblogdotorg.files.wordpress.com/2016/03/skateboard-pic.jpg" />
// 	<p>Skate Flip Dawg</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
// 	<p>More Skateboarding</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
//
// <ImageWrapper>
// 	<Image alt="yoyyoyy"  src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
// 	<p>Taylor Swift</p>
// 	<div style={styles.saveContainer}>
// 		<span className="fa fa-thumb-tack" style={styles.text}></span>
// 		<span style={{color:'#fff'}}>Save</span>
// 	</div>
// </ImageWrapper>
