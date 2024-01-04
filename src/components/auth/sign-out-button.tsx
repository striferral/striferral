'use client';
import React from 'react';
import { LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
	return (
		<div
			className='gap-2 flex items-center w-full cursor-pointer'
			onClick={() => signOut()}
		>
			Sign Out <LogOutIcon className='h-4 w-4' />
		</div>
	);
}
