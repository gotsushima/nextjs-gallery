import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/logo.png" width={55} height={40} alt="logo" />
        </Link>

        <ul className="flex-center gap-x-3 md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="https://github.com/gotsushima" target="_blank">
              Github
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="mailto:gotsushima@gmail.com">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar