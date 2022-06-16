import { Link } from 'react-router-dom';
import { API_IMAGE_URL } from '../../api/apiurl';
import './post.css';

const Post = ({ post }) => {
	const PF = API_IMAGE_URL;

	return (
		<Link className='link' to={`/post/${post._id}`}>
			<div className='post'>
				{post.photo && <img className='postImg' src={PF + "/" + post.photo} alt='' />}

				<div className='postInfo'>
					<div className='postCats'>
						{post.categories.map((c, index) => (
							<span key={index} className='postCat'>
								{c.name}
							</span>
						))}
					</div>

					<span className='postTitle'>{post.title}</span>
					<hr />
					<span className='postDate'>
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className='postDesc'>{post.desc}</p>
			</div>
		</Link>
	);
};

export default Post;
