import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import useMediaQuery from '../hooks/useMediaQuery';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} hover:text-yellow transition duration-500`} href={`${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isPageTop, selectedPage, setSelectedPage }) => {
  const [isMenu, setIsMenu] = useState(false);
  const isAboveSmallScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const navBackground = isPageTop ? '' : 'bg-pink-900';
  return (
    <nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className=' font-playfair text-3xl  font-bold'>Software developer</h4>

        {/* Desktop Nav  */}
        {isAboveSmallScreen ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold '>
            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button
            className='rounded-full bg-red p-2'
            onClick={() => {
              setIsMenu(!isMenu);
            }}
          >
            <AiOutlineMenu />
          </button>
        )}

        {/* Mobile Menu Popup */}
        {!isAboveSmallScreen && isMenu && (
          <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
            {/* closr button */}
            <div className='flex justify-end p-12'>
              <button
                onClick={() => {
                  setIsMenu(!isMenu);
                }}
              >
                <IoMdClose />
              </button>
            </div>

            {/* Menu items */}
            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
