import React from 'react';
import './singlePost.css';

const SinglePost = () => {
	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				<img
					className='singlePostImg'
					src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					alt=''
				/>
				<h1 className='singlePostTitle'>
					Lorem ipsum d sunt optio.
					<div className='singlePostEdit'>
						<i className='singlePostIcon fa-solid fa-pen-to-square'></i>
						<i className='singlePostIcon fa-solid fa-trash-can'></i>
					</div>
				</h1>
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Author: <b>Karian</b>
					</span>
					<span className='singlePostDate'>1 hour ago</span>
				</div>
				<p className='singlePostDesc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quas
					nobis? Veniam odio, sequi sint consequatur assumenda at distinctio
					recusandae laboriosam dolor dolorem reiciendis, perspiciatis eos fuga
					aspernatur minus tempore. Eveniet officia dolorem quos nemo ut, harum
					tempora explicabo ea veniam, ad sequi ab quo consequuntur? Quos
					provident vero quas a facilis deleniti perspiciatis est atque quis.
					Aspernatur, enim dicta! Vero, doloremque cum voluptatum sapiente
					praesentium ducimus nisi atque recusandae, nihil delectus, magni eius
					vel soluta incidunt consequatur nostrum qui! Porro neque molestias
					enim dolorum maiores doloremque sed nobis quos?
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
