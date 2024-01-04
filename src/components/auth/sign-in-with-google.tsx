'use client';
import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

export default function SignInWithGoogleButton() {
	return (
		<Button
			onClick={() =>
				signIn('google', {
					callbackUrl: `${window.location.origin}`,
				})
			}
			className='gap-2 w-52'
		>
			Sign in with Google
		</Button>
	);
}
