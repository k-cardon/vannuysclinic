import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Clinic Photos',
};

export default function Page() {
  return (
  <main>
    {/* <h1 className={`m-8 px-8 text-xl md:text-2xl`}>
      Van Nuys Abortion Clinic
    </h1> */}
    <div className="m-8 p-8 'md:text-2xl sm:text-xl' text-center">
      <Image
        src='/Van-Nuys-1.jpg'
        width={1024}
        height={768}
        className={`mb-8`}
        alt='Clinic interior'
      />
      <Image
        src='/Van-Nuys-2.jpg'
        width={1024}
        height={768}
        className={`mb-8`}
        alt='Clinic interior'
      />
      <Image
        src='/Van-Nuys-3.jpg'
        width={1024}
        height={768}
        className={`mb-8`}
        alt='Clinic interior'
      />
      <Image
        src='/Van-Nuys-4.jpg'
        width={1024}
        height={768}
        className={`mb-8`}
        alt='Clinic interior'
      />
    </div>
  </main>
  );
}