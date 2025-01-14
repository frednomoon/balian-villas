import { useState } from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';

const VillaDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="font-medium"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="w-full flex items-center justify-content cursor-pointer">
        The Villas{' '}
        <BiChevronDown
          size={15}
          className={`${dropdownOpen && 'rotate-180'}`}
        />
      </div>
      {dropdownOpen && (
        <ul className="absolute mt-0">
          <li
            className="p-1 text-sm hover:bg-sky-600"
            onClick={() => setDropdownOpen(false)}
          >
            <Link href="/villa-ganesha">Villa Ganesha</Link>
          </li>
          <li
            className="p-1 text-sm hover:bg-sky-600"
            onClick={() => setDropdownOpen(false)}
          >
            <Link href="/villa-nanas">Villa Nanas</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default VillaDropdown;
