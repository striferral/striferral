import SignInWithGithubButton from '@/components/auth/sign-in-with-github';
import SignInWithGoogleButton from '@/components/auth/sign-in-with-google';
import Image from 'next/image';

const Page = () => {
	return (
		<>
			<div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col items-center space-y-2 text-center'>
						<Image
							src='/logo.png'
							alt='Striferral Logo'
							height={80}
							width={80}
							className='h-20 w-20 dark:invert'
						/>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Sign in to your account
						</h1>

						<SignInWithGithubButton />
						<SignInWithGoogleButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
