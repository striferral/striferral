'use client';
import React from 'react';
import { ModeToggle } from '../dark-mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { Header } from '../notification/bell';
import { cn } from '@/lib/utils';
import { COMPONENTS } from '../../../data';

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';

export default function NavBar() {
	return (
		<div className='bg-primary h-16 fixed w-full'>
			<div className='flex items-center justify-between max-w-5xl w-full mx-auto h-full'>
				<div>
					<Link href={'/'}>Striferral</Link>
				</div>
				<div>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link
									href='/about'
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										ABOUT
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									COMPONENTS
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
										{COMPONENTS.map(
											(component) => (
												<ListItem
													key={
														component.title
													}
													title={
														component.title
													}
													href={
														component.href
													}
												>
													{
														component.description
													}
												</ListItem>
											)
										)}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href='/docs'
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										BLOG
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className='flex gap-4'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>SR</AvatarFallback>
					</Avatar>
					<ModeToggle />
					{/* <Header /> */}
				</div>
			</div>
		</div>
	);
}
