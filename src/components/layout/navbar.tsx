import Image from 'next/image';
import Link from 'next/link';
import ProfileMenu from '../auth/profile-menu';
import { ModeToggle } from '../dark-mode-toggle';
import MaxWidthWrapper from './max-width-wrapper';

export default function NavBar() {
	return (
		<MaxWidthWrapper className='bg-primary h-16 fixed w-full'>
			<div className='flex items-center justify-between max-w-5xl w-full mx-auto h-full'>
				<div>
					<Link href={'/'}>
						<Image
							src='/logo.png'
							alt='Striferral Logo'
							height={40}
							width={40}
							className='h-10 w-10 dark:invert'
						/>
					</Link>
				</div>
				<div className='hidden md:block'>
					{/* <NavigationMenu>
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
					</NavigationMenu> */}
				</div>
				<div className='flex gap-1'>
					<ProfileMenu />
					<ModeToggle />
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
