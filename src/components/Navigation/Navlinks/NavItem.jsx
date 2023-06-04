// Component for individual navigation items
export default function NavItem({ text, url }) {
	return (
		<div>
			<a
				href={url}
				className='flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-100 '>
				<span className='text-sm font-medium'>{text}</span>
			</a>
		</div>
	);
}
