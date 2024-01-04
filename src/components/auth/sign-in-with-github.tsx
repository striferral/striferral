'use client';
import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { GithubIcon } from 'lucide-react';

export default function SignInWithGithubButton() {
	return (
		<Button
			onClick={() =>
				signIn('github', {
					callbackUrl: `${window.location.origin}`,
				})
			}
			className='gap-2 w-52'
		>
			Sign in with Github
		</Button>
	);
}
