import NavSection from './NavSection';
import NavItem from './NavItem';

// Component for the main navigation section

export default function MainNav() {
	const navStyles =
		'flex px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black';

	return (
		<nav
			aria-label='Main Nav'
			className='mt-6 flex flex-col space-y-1'>
			<a
				href='#'
				className='flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700'>
				<span className='text-sm font-medium'>General</span>
			</a>

			<NavSection
				sectionName='Teams'
				items={[
					{
						text: 'Banned Users',
						url: '/teams/banned',
						customColor: navStyles,
					},
					{
						text: 'Calendar',
						url: '/teams/calendar',
						customColor: navStyles,
					},
				]}
			/>

			<NavSection
				sectionName='Account'
				items={[
					{
						text: 'Details',
						url: '/account/details',
						customColor: navStyles,
					},
					{
						text: 'Security',
						url: '/account/security',
						customColor: navStyles,
					},
				]}
			/>

			<NavItem
				text='Billing'
				customColor={navStyles}
				url='/billing'
			/>
			<NavItem
				customColor={navStyles}
				text='Invoices'
				url='/invoices'
			/>
		</nav>
	);
}
