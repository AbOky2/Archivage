import Link from 'next/link';

import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className='p-4 border shadow-lg sticky'>
            <ul className=' flex items-center gap-4'>
                <li >
                    <Link href="/">
                        <a className='text-[26px] font-semibold  hover:text-green-900'>Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/add-post">
                        <a className='text-[26px] font-semibold hover:text-green-900'>Ajout des postes</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}