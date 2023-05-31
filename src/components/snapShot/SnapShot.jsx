import React, { useState } from 'react';

export default function SnapShot({ toggle }) {
	

	return (
		<div
			
			className={`flex items-center capitalize ${
				toggle ? 'flex' : 'hidden'
			} `}>
			<div class='snapshot group min-w-[40rem]'>
				<div class='snapshot--board border rounded'>
					<div class='snapshot--inner p-4'>
						<div class='snapshot--upper flex gap-1 animate-pulse'>
							<div class='snapshot--circles w-3 h-3 bg-indigo-500 rounded-full'></div>
							<div class='snapshot--circles w-3 h-3 bg-yellow-500 rounded-full'></div>
							<div class='snapshot--circles w-3 h-3 bg-red-500 rounded-full'></div>
						</div>
						<div class='snapshot--body mt-3'>
							<p class=''>
								<textarea
									name=''
									id=''
									className='snapsshot--code w-full min-h-[20rem] p-2'
									placeholder="console.log('hello world')
								"></textarea>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
