'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
  },
  { 
    name: 'Photos', 
    href: '/photos',
  },
];
 
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className='flex space-x-4 md:space-x-6'>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-neutral-100 p-3 text-sm font-medium hover:bg-blush-200 hover:text-neutral-100 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-blush-50 text-blush-200': pathname === link.href,
                },
              )}
            >
              <p>{link.name}</p> 
            </Link>
          );
        })}
    </div>
  );
}

// className="hidden md:block" from link.name