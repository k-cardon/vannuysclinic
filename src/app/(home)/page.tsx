import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Van Nuys Abortion Clinic',
};

export default function Page() {
  return (
  <main>
    {/* <h1 className={`m-8 px-8 text-xl md:text-2xl`}>
      Van Nuys Abortion Clinic
    </h1> */}
    <div className="m-8 p-8 'md:text-2xl sm:text-xl text-center">
      <Image
        src='/no-background.png'
        width={7240}
        height={4318}
        className={`mb-8`}
        alt='Diverse group of women smiling together'
      />
      <h2 className='md:text-3xl sm:text-lg'><Link href='https://hersmartchoice.com/abortion-clinic/van-nuys-women-health-center/' className='text-blush-300'
      >Her Smart Choice</Link> is your local abortion clinic in Van Nuys. We offer reproductive healthcare and services such as abortion, birth control, and STD testing. Ask us about our <Link href='https://hersmartchoice.com/services/low-income-patients/' className='text-blush-300'
      >low-income services</Link>.</h2>
      <br></br>
        <div className='mb-4 p-4'>
          <Link href='https://hersmartchoice.as.me/schedule.php?calendarID=1568124'className='bg-blush-200 text-white rounded-md px-3 py-2 text-2xl font-medium'
          >Appointments</Link>
            <div className='md:columns-2 sm:columns-1 m-8 p-4'>
              Call <Link href='tel:8184235065' className='text-blush-300'
              >818-423-5065</Link> 
              <br></br>
              or Text <Link href="sms:12136104519" className='text-blush-300'
              >1 (213) 610-4519</Link>
              <br></br>
              <br></br>
              <Link href='https://www.google.com/maps/place/7220+Woodman+Ave+Suite+106+-+E,+Van+Nuys,+CA+91405/@34.2019001,-118.4335529,17z/data=!3m1!4b1!4m6!3m5!1s0x80c296e6f7c556e7:0x4340bf19f21096c1!8m2!3d34.2018957!4d-118.430978!16s%2Fg%2F11n09cf_hw?entry=ttu'
              className='text-blush-300'
              >7220 Woodman Ave Suite #106</Link>
              <br></br>
              Van Nuys, CA 91405
              <br></br>
              <br></br>
              Mon-Fri 8am - 8pm
              <br></br>
              Saturday 8am - 3pm
              <br></br>
              Closed Sunday 
              <br></br>
              Walk-ins Welcome
            </div>
        </div>
    </div>
  </main>
  );
}