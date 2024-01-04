import NavBar from '@/components/layout/navbar';

export default function UnprotectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col w-full'>
			<NavBar />
			{children}
		</div>
	);
}
