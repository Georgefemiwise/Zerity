import { Link } from 'react-router-dom';

// Component for individual navigation items
export default function NavItem({ text, url, handleClick, customColor }) {
	return (
		<div>
			<Link
				to={url}
				onClick={handleClick}
				className={`gap-2 rounded-lg  hover:text-accent ${customColor}`}>
				<span className='text-sm font-medium'>{text}</span>
			</Link>
		</div>
	);
}
