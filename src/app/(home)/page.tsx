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
    <div className="m-8 p-8">
      <Image
        src='/no-background.png'
        width={7240}
        height={4318}
        className={`mb-8`}
        alt='Diverse group of women smiling together'
      />
      <p>We are your local abortion clinic in Southern California. We offer reproductive healthcare and services, such as abortion, birth control, and STD testing. Ask us about our low-income services.</p>
      <br></br>
      <p>Pellentesque consectetur mauris ex, non varius mauris ullamcorper eget. Nam in purus leo. Morbi vulputate augue ac velit imperdiet, ac interdum lorem laoreet. Donec erat augue, ornare sed interdum suscipit, laoreet a tortor. Fusce iaculis erat sed velit dapibus lobortis. Donec varius libero sit amet dolor malesuada faucibus. Integer dictum ante in turpis ornare interdum. Mauris accumsan orci diam. Quisque euismod est at ex condimentum, in interdum orci hendrerit. Etiam vestibulum, dui eget aliquet bibendum, felis quam egestas felis, eget feugiat quam urna id ex. Quisque commodo nunc quis orci dictum, a tempor mauris convallis. Ut commodo mi id velit sagittis, eu faucibus purus sagittis. Etiam consectetur eget massa consectetur ornare.</p>
    </div>
  </main>
  );
}