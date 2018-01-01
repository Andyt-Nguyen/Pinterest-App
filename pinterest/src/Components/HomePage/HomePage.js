import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions/actionPin';
import Masonry from 'react-masonry-component';
import Wrapper from './Styles/Wrapper';

class HomePage extends Component {

	userSignOut() {
		this.props.userSignOut();
	}

	render() {
		return (
			<div style={{marginTop:'20px' }}>
				<button onClick={this.userSignOut.bind(this)}>Sign out</button>
				<Masonry
					className="my-gallery-class">
						<div style={{border:'1px solid #ebebeb', borderRadius:'5px', padding: '10px'}}>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://i.pinimg.com/736x/6d/08/26/6d08268c35f5f71b3e710cee25e58772--celebrity-photography-emma-watson-hair-color.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://angelsblogdotorg.files.wordpress.com/2016/03/skateboard-pic.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="http://lsco.scene7.com/is/image/lsco/2017_H1_LP_Skate_Video_Detroit_Placeholder_DESKTOP?$full-jpeg$&fmt=pjpeg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://video-images.vice.com/articles/59faae46d67a982c4ac9ee77/lede/1509603390203-DSC_4652.jpeg?crop=0.6675xw:1xh;0xw,0xh&resize=0:*" />
						</div>
						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://i.pinimg.com/736x/6d/08/26/6d08268c35f5f71b3e710cee25e58772--celebrity-photography-emma-watson-hair-color.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://angelsblogdotorg.files.wordpress.com/2016/03/skateboard-pic.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="http://lsco.scene7.com/is/image/lsco/2017_H1_LP_Skate_Video_Detroit_Placeholder_DESKTOP?$full-jpeg$&fmt=pjpeg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://video-images.vice.com/articles/59faae46d67a982c4ac9ee77/lede/1509603390203-DSC_4652.jpeg?crop=0.6675xw:1xh;0xw,0xh&resize=0:*" />
						</div>
						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://img.wennermedia.com/featured-promo-724/lacey-baker-profile-rolling-stone-2017-ec439dfb-a2ff-49e2-b85b-54750fb93b8c.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://i.pinimg.com/736x/6d/08/26/6d08268c35f5f71b3e710cee25e58772--celebrity-photography-emma-watson-hair-color.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://angelsblogdotorg.files.wordpress.com/2016/03/skateboard-pic.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="http://www.trbimg.com/img-573233c8/turbine/la-me-freeway-skateboarding-20160510-snap" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://media1.popsugar-assets.com/files/thumbor/SN1fQ4qPbYH4ApttcRzffMdVkGI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/10/25/697/n/1922564/1725c44359f0b13323c094.34428259_edit_img_image_44181220_1508940982/i/Girl-Who-Dresses-Like-Taylor-Swift.jpg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="http://lsco.scene7.com/is/image/lsco/2017_H1_LP_Skate_Video_Detroit_Placeholder_DESKTOP?$full-jpeg$&fmt=pjpeg" />
						</div>

						<div>
							<img alt="yoyyoyy" style={{borderRadius:'3px', boxSizing:'border-box', width:"236px"}} src="https://video-images.vice.com/articles/59faae46d67a982c4ac9ee77/lede/1509603390203-DSC_4652.jpeg?crop=0.6675xw:1xh;0xw,0xh&resize=0:*" />
						</div>
				</Masonry>
			</div>
		);
	}
}

export default connect(null, { userSignOut })(HomePage);
