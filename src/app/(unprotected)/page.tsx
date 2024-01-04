import { auth } from '@/auth';
import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { buttonVariants } from '@/components/ui/button';
import {
	BarChartBigIcon,
	ClockIcon,
	DollarSignIcon,
	GiftIcon,
	HeartIcon,
	Leaf,
	LinkIcon,
	NetworkIcon,
	UserPlusIcon,
	WalletIcon,
} from 'lucide-react';
import Link from 'next/link';

const perks = [
	{
		name: 'Earn Generous Rewards',
		Icon: DollarSignIcon,
		description: `Get ready to turn your connections into cash! With Striferral, every successful referral brings you closer to lucrative rewards and exciting bonuses. The more you refer, the more you earn – it's that simple.`,
	},
	{
		name: 'Simple and Lucrative Commission Structure',
		Icon: BarChartBigIcon,
		description:
			'Our straightforward commission structure ensures that you receive fair and competitive compensation for every referral. No complicated calculations – just transparent rewards for your efforts.',
	},
	{
		name: 'Diverse Opportunities',
		Icon: NetworkIcon,
		description: `Striferral is not just about making money; it's about creating opportunities. Whether you're referring friends, colleagues, or acquaintances, there's a place for everyone in our community. Explore various referral programs tailored to different interests and industries.`,
	},
	{
		name: 'Real-Time Tracking',
		Icon: ClockIcon,
		description:
			'Stay in control of your earnings with our real-time tracking system. Monitor the progress of your referrals, track commissions, and access detailed analytics to optimize your referral strategy.',
	},
	{
		name: 'Build Long-lasting Relationships',
		Icon: HeartIcon,
		description:
			"Striferral is not just a platform; it's a community built on the foundation of meaningful connections. By referring individuals into our platform, you're not only earning rewards but also fostering long-lasting relationships. Join us in building a network that goes beyond transactions and creates a supportive community",
	},
	{
		name: 'For the Planet',
		Icon: Leaf,
		description:
			"We've pledged 1% of earnings to the preservation and restoration of the natural environment.",
	},
];
const hiws = [
	{
		name: 'Sign Up for Free',
		Icon: UserPlusIcon,
		description: `Joining Striferral is quick, easy, and completely free. Create your account, and you're on your way to earning rewards.`,
	},
	{
		name: 'Share Your Unique Referral Link',
		Icon: LinkIcon,
		description:
			'Receive a personalized referral link upon registration. Share it through social media, emails, or directly with your network.',
	},
	{
		name: 'Earn Rewards',
		Icon: GiftIcon,
		description: `Every successful referral brings you one step closer to exciting rewards. Watch your earnings grow as your network expands.`,
	},
	{
		name: 'Cash Out Anytime',
		Icon: WalletIcon,
		description:
			'Cashing out is easy! You have the flexibility to redeem your rewards at any time that suits you',
	},
];

export default async function Home() {
	const session = await auth();
	return (
		<>
			<MaxWidthWrapper>
				<div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
					<h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
						Welcome to Striferral -{' '}
						<span className='text-primary'>
							Where Referring Pays
						</span>
						!
					</h1>
					<p className='mt-6 text-lg max-w-prose text-muted-foreground'>
						Unlock a world of opportunities and rewards by
						becoming a valued member of the Striferral
						community. At Striferral, we believe in the power
						of connections, and we&apos;ve created a platform
						that not only values your network but also rewards
						you for sharing it.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 mt-6'>
						{!session?.user ? (
							<>
								<Link
									href='/sign-up'
									className={buttonVariants()}
								>
									Sign Up Now
								</Link>
								<Link
									href='/sign-in'
									className={buttonVariants({
										variant: 'ghost',
									})}
								>
									Sign In &rarr;
								</Link>
							</>
						) : (
							<Link
								href='/dashboard'
								className={buttonVariants()}
							>
								Dashboard
							</Link>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
			<section className='border-t border-foreground bg-foreground/95'>
				<MaxWidthWrapper className='py-20'>
					<div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
						{perks.map((perk) => (
							<div
								key={perk.name}
								className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
							>
								<div className='md:flex-shrink-0 flex justify-center'>
									<div className='h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary/90'>
										{
											<perk.Icon className='w-1/3 h-1/3' />
										}
									</div>
								</div>

								<div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
									<h3 className='text-base font-medium text-background/90 '>
										{perk.name}
									</h3>
									<p className='mt-3 text-sm text-muted-foreground'>
										{perk.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</section>
			<MaxWidthWrapper>
				<div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl gap-10'>
					<h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
						<span className='text-primary'>
							How Striferral works?
						</span>
					</h1>
					<div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
						{hiws.map((hiw) => (
							<div
								key={hiw.name}
								className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
							>
								<div className='md:flex-shrink-0 flex justify-center'>
									<div className='h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary/90'>
										{
											<hiw.Icon className='w-1/3 h-1/3' />
										}
									</div>
								</div>

								<div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
									<h3 className='text-base font-medium text-foreground/90 '>
										{hiw.name}
									</h3>
									<p className='mt-3 text-sm text-muted-foreground'>
										{hiw.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</>
	);
}
