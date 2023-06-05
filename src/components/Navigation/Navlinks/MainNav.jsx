import NavSection from './NavSection';
import NavItem from './NavItem';

// Component for the main navigation section

export default function MainNav() {
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
					{ text: 'Banned Users', url: '/teams/banned' }, // Example URL for Banned Users
					{ text: 'Calendar', url: '/teams/calendar' }, // Example URL for Calendar
				]}
			/>
			<NavSection
				sectionName='Account'
				items={[
					{ text: 'Details', url: '/account/details' }, // Example URL for Details
					{ text: 'Security', url: '/account/security' }, // Example URL for Security
				]}
			/>
			<NavItem
				text='Billing'
				url='/billing'
			/>
			<NavItem
				text='Invoices'
				url='/invoices'
			/>
		</nav>
	);
}
