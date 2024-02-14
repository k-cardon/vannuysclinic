import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Van Nuys Abortion Clinic',
};

export default function Page() {
  return (
  <main>
    <h1 className={`m-8 px-8 text-xl md:text-2xl`}>
      Van Nuys Abortion Clinic
    </h1>
    <div className="m-8 p-8">
      <Image
        src='/no-background.png'
        width={7240}
        height={4318}
        className={`my-8`}
        alt='Diverse group of women smiling together'
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nisi, feugiat sit amet tortor vitae, lacinia luctus nibh. Nulla facilisi. Donec volutpat dolor non egestas iaculis. Nullam ligula ipsum, bibendum a orci sit amet, vehicula consectetur nibh. Nam ornare nisl tempor porta suscipit. Nam ultrices nulla eget mauris gravida, quis lobortis erat lobortis. Morbi sapien sem, luctus a eros non, interdum tempor nibh.     </p>
      <br></br>
      <p>Ut molestie venenatis lectus, eleifend aliquam justo convallis sed. Vivamus eleifend laoreet facilisis. Fusce tincidunt augue in mattis rutrum. Duis auctor efficitur nisi, sit amet commodo tortor porttitor quis. Duis ultrices lacus eu elit consectetur convallis vitae a sapien. Ut posuere vehicula orci, nec auctor nunc fringilla eu. Donec hendrerit mattis orci sed placerat. Maecenas et enim vel erat porttitor faucibus ut at metus. Integer pulvinar nibh libero, at dapibus augue semper a. Nulla neque tortor, pretium eget erat in, suscipit feugiat arcu. Cras molestie velit in mauris mattis maximus. In hac habitasse platea dictumst. Nullam in ipsum convallis, tincidunt quam non, aliquet est.</p>
      <br></br>
      <p>Pellentesque consectetur mauris ex, non varius mauris ullamcorper eget. Nam in purus leo. Morbi vulputate augue ac velit imperdiet, ac interdum lorem laoreet. Donec erat augue, ornare sed interdum suscipit, laoreet a tortor. Fusce iaculis erat sed velit dapibus lobortis. Donec varius libero sit amet dolor malesuada faucibus. Integer dictum ante in turpis ornare interdum. Mauris accumsan orci diam. Quisque euismod est at ex condimentum, in interdum orci hendrerit. Etiam vestibulum, dui eget aliquet bibendum, felis quam egestas felis, eget feugiat quam urna id ex. Quisque commodo nunc quis orci dictum, a tempor mauris convallis. Ut commodo mi id velit sagittis, eu faucibus purus sagittis. Etiam consectetur eget massa consectetur ornare.</p>
    </div>
  </main>
  );
}