import React from 'react';
import './post.css';

const Post = ({ img }) => {
	return (
		<div className='post'>
			<img className='postImg' src={img} alt='' />
			<div className='postInfo'>
				<div className='postCats'>
					<span className='postCat'>Music</span>
					<span className='postCat'>Life</span>
				</div>
				<span className='postTitle'>Lorem ipsum, dolor sit amet</span>
				<hr />
				<span className='postDate'>1 hour ago</span>
			</div>
			<p className='postDesc'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
				perspiciatis ration
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque corporis magni autem facere quisquam illum beatae. Deserunt assumenda quos veniam at, pariatur dolores suscipit necessitatibus perferendis qui iste magni.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab odio culpa obcaecati aliquid saepe aperiam error provident voluptatem, debitis assumenda nisi recusandae ullam enim, cumque in atque vero velit.
			</p>
		</div>
	);
};

export default Post;
