import React, { useState } from 'react';





// ! we are going to use a thirdparty library "// https://codemirror.net/" or "https://ace.c9.io/"to create the text editor instead of snippet.
export default function TextEditor({ toggle,questionNo }) {
	return (
		<div
			className={`flex items-center capitalize ${
				toggle ? 'flex' : 'hidden'
			} `}>
			<div class='textEditor group min-w-[40rem]'>
				<div class='textEditor--board border rounded'>
					<div class='textEditor--inner p-4'>
						<div class='textEditor--upper flex justify-between items-center '>
							<div className='flex gap-1 animate-pulse'>
								<div class='textEditor--circles w-3 h-3 bg-indigo-500 rounded-full'></div>
								<div class='textEditor--circles w-3 h-3 bg-yellow-500 rounded-full'></div>
								<div class='textEditor--circles w-3 h-3 bg-red-500 rounded-full'></div>
							</div><div className="textEditor--details">question {questionNo } (java)</div>
						</div>
						<div class='textEditor--body mt-3'>
							<p class=''>
								<textarea
									name='textEditor'
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
