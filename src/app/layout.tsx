import type { Metadata } from 'next';
import { arsenal } from '@/app/fonts';
import './globals.css';
import NavBar from '@/app/ui/navigation/navbar';

export const metadata: Metadata = {
	title: 'Van Nuys Abortion Clinic',
	description: 'Reproductive Health Services in Van Nuys, Los Angeles',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${arsenal.className} antialiased w-full flex-none `}
			>
				<NavBar />
				<div className='md:mx-20 md:px-10'>{children}</div>
			</body>
		</html>
	);
}
