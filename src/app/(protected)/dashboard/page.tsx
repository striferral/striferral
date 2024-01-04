import { auth } from '@/auth';
import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function DashboardPage() {
	const session = await auth();
	if (!session?.user)
		return redirect('api/auth/signin?callbackUrl=/dashboard');
	return (
		<MaxWidthWrapper className='py-20'>
			Dashboard Page
			<div className=''>
				<Avatar>
					<AvatarImage src={session.user.image || ''} />
					<AvatarFallback>
						{getInitials(session.user.name || '')}
					</AvatarFallback>
				</Avatar>
			</div>
			<div className=''>{session.user.name}</div>
			<div className=''>{session.user.email}</div>
			<div className=''>
				{getInitials(session.user.name || '').toUpperCase()}
			</div>
		</MaxWidthWrapper>
	);
}
