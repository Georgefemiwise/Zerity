import React from 'react';
import LayoutTopBar from './LayoutTopBar';

export default function Layout() {
	return (
		<>
			<div className='relative'>
				<LayoutTopBar>top</LayoutTopBar>
				<div className='py-1  border border-t-0 grid grid-cols-12 grid-flow-col gap-2 h-screen'>
					<div className='bg-white/50 p-10 border '>
						side bar
					</div>

					<div className='bg-white/50 p-10 border col-span-4'>
						question
					</div>
					<div className='bg-white/50 p-10 border col-span-7'>
						text editor
					</div>
				</div>
					<div className='bg-white/50  border'>footer</div>
			</div>
		</>
	);
}
