import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { inter } from '@/app/fonts';

export const metadata: Metadata = {
	title: 'Van Nuys Abortion Clinic',
};

export default function Page() {
	return (
		<div className="m-8 p-8 'text-xl md:text-2xl text-center">
			<Image
				src='/nobackground.png'
				width={7240}
				height={4318}
				className={`mb-8 rounded`}
				priority={true}
				alt='Diverse group of women smiling together'
			/>
			<h2 className='my-6 text-2xl md:text-3xl'>
				<Link href='https://hersmartchoice.com/abortion-clinic/van-nuys-women-health-center/'>
					Her Smart Choice
				</Link>{' '}
				is your local abortion clinic in Van Nuys. We offer reproductive
				healthcare and services such as abortion, birth control, and STD
				testing. Ask us about our{' '}
				<Link href='https://hersmartchoice.com/services/low-income-patients/'>
					low-income services
				</Link>
				.
			</h2>
			<div className='m-2 md:m-4 md:p-4'>
				<Link
					href='https://hersmartchoice.as.me/schedule.php?calendarID=1568124'
					className=' bg-blush-200 text-white justify-center rounded-md px-3 py-2 text-3xl font-medium'
				>
					Appointments
				</Link>
				<div
					className={`${inter.className} columns-1 text-m my-5 md:columns-2 md:m-8 p-3 md:text-lg`}
				>
					<div>
						Call <Link href='tel:8184235065'>818-423-5065</Link>
					</div>
					<div>
						or Text{' '}
						<Link href='sms:12136104519'>1 (213) 610-4519</Link>
					</div>
					<div className='mt-3'>
						<Link href='https://www.google.com/maps/place/7220+Woodman+Ave+Suite+106+-+E,+Van+Nuys,+CA+91405/@34.2019001,-118.4335529,17z/data=!3m1!4b1!4m6!3m5!1s0x80c296e6f7c556e7:0x4340bf19f21096c1!8m2!3d34.2018957!4d-118.430978!16s%2Fg%2F11n09cf_hw?entry=ttu'>
							7220 Woodman Ave Suite #106
						</Link>
					</div>
					<div>Van Nuys, CA 91405</div>
					<div className='m-3'>
						<div>Mon-Fri 8am - 8pm </div>
						<div>Saturday 8am - 3pm </div>
						<div>Closed Sunday</div>
						<div>Walk-ins Welcome</div>
					</div>
				</div>
			</div>
			<div id='services'>
				<h1 className='text-3xl mt-10 bg-blush-300 rounded-lg text-white'>
					Our Services
				</h1>
				<div className='columns-1 md:columns-2 m-5 p-5'>
					<ul>
						<li>Abortion Services</li>
						<li>IUDs</li>
						<li>Birth Control</li>
						<li>Pregnancy Testing</li>
						<li>STD Testing</li>
						<li>Available in English, Spanish, and more</li>
					</ul>
				</div>
				<div
					className={`${inter.className} text-m my-5 p-3 md:mx-20 md:text-lg md:justify-text`}
				>
					<p className='flex'>
						We understand unwanted pregnancy can put a lot of stress
						on a {`person's`} physical and mental health. In such
						situations, Termination of Pregnancy (TOP) or abortion
						can be a blessing. The termination can be safely
						performed until the end of the second trimester as per
						state law. There are two types of procedures are
						available for Termination of Pregnancy:
					</p>
					<div className='columns-1 text-m my-5 md:columns-2 md:m-4 p-3 md:text-lg'>
						<div>
							<div className='underline'>Medical Abortion</div>
							<div>
								Medicines for termination of pregnancy up to 10
								weeks or 70 days
							</div>
						</div>
						<div className='mt-4'>
							<div className='underline'>Surgical Abortion</div>
							<div>Surgeries for termination of pregnancy</div>
						</div>
					</div>
					{/* <p className='bg-brown-100 text-white rounded-lg'>
						When should I choose a medication abortion, also called
						an abortion pill?
					</p>
					<div className='grid justify-items-start'>
						<ul>
							<li>
								&#10087; If you prefer medications over a
								surgical procedure
							</li>
							<li>
								&#10087; Up to 70 days of pregnancy, it is
								considered more effective than surgical abortion
							</li>
							<li>
								&#10087; If a person has a congenital deformity
								of the uterus or narrowing of the lower part of
								the uterus (cervix)
							</li>
							<li>
								&#10087; Taking medications at home can be
								convenient
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div>
				<Link
					href='https://hersmartchoice.com/abortion-clinic/van-nuys-women-health-center/'
					className=' justify-center bg-blush-200 text-white rounded-md px-3 py-2 text-3xl font-medium'
				>
					More Info
				</Link>
			</div>
			<ul className='m-5 p-5'>
				<li>
					Free Abortion Pills for Low-Income Patients Without
					Insurance
				</li>
				<li>16+ Years of Experience!</li>
				<li>Abortion Success Rate 98%</li>
				<li>110,000+ Happy Patients</li>
			</ul>

			<div id='photos' className='my-5'>
				<h1 className='text-3xl mt-10 mb-4 bg-blush-300 rounded-lg text-white'>
					Clinic Photos
				</h1>
				<div className="md:mx-8 md:p-8 'md:text-2xl">
					<Image
						src='/Van-Nuys-1.jpg'
						width={1024}
						height={768}
						className={`mb-8 rounded-lg`}
						alt='Clinic interior'
					/>
					<Image
						src='/Van-Nuys-2.jpg'
						width={1024}
						height={768}
						className={`mb-8 rounded-lg`}
						alt='Clinic interior'
					/>
					<Image
						src='/Van-Nuys-3.jpg'
						width={1024}
						height={768}
						className={`mb-8 rounded-lg`}
						alt='Clinic interior'
					/>
					<Image
						src='/Van-Nuys-4.jpg'
						width={1024}
						height={768}
						className={`mb-8 rounded-lg`}
						alt='Clinic interior'
					/>
				</div>
			</div>
			<div>
				<footer>
					<div className='copy'>&copy; Copyright 2024</div>
					<div>
						Built with &#x2661; by&nbsp;
						<a
							href='https://cardonwebstudios.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Kristen Cardon
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
}
