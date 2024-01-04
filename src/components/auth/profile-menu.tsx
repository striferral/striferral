import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { LogInIcon, LogOutIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { auth } from '@/auth';
import { getInitials } from '@/lib/utils';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import SignOutButton from './sign-out-button';
import Link from 'next/link';

export default async function ProfileMenu() {
	const session = await auth();
	if (!session?.user)
		return (
			<Link
				href='/sign-in'
				className={buttonVariants({
					size: 'icon',
					variant: 'outline',
				})}
			>
				<LogInIcon className='h-[1.2rem] w-[1.2rem]' />
				<span className='sr-only'>Toggle theme</span>
			</Link>
		);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={session?.user?.image || ''} />
					<AvatarFallback>
						{getInitials(session?.user?.name || 'User Name')}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<SignOutButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
