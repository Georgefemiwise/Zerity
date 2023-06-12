import SideNavigationBar from '../components/Navigation/SideNavigationBar';
import TopNavigationBar from '../components/Navigation/TopNavigationBar';
import RandomNumberDiv from './FloatinfDiv';

export default function Home() {
	return (
		<div>
			{/* <SideNavigationBar /> */}
			{/* <RandomNumberDiv /> */}
			<TopNavigationBar />
			
			<section class=' text-white'>
				<div class='mx-auto max-w-screen-xl px-4 py-32 lg:flex min-h-screen lg:items-center'>
					<div class='mx-auto max-w-3xl text-center'>
						<h1 class='text-white/80 text-3xl font-extrabold sm:text-5xl'>
							"Embrace Interactive Coding!
							<span class='sm:block'>
								Unlock Exam Success!"
							</span>
						</h1>

						<p class='mx-auto mt-4 max-w-xl s text-white/40 font-mono'>
							"Unleash Exam Success: Code, Execute,
							Visualize!
							<br /> Embrace Paper-free Interactive
							Coding!"
						</p>

						<div class='mt-8 flex flex-wrap justify-center gap-4'>
							<a
								class='block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
								href='/login'>
								Get Involved
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
