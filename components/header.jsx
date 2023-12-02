import {Roboto, Julius_Sans_One } from 'next/font/google'
import styles from "../styles/header.module.css";
import Link from 'next/link';
import Icon_ep from "./logo";

const julius = Julius_Sans_One({ 
    weight: '400',
    subsets: ['latin'],
});

export const Header = () => {
return (
    <header className={`${styles.header} ${julius.className}`}>
        <div>
            <Icon_ep />
        </div>
        <ul>
            <li><Link href="">INICIO</Link></li>
            <li><Link href="">SOBRE EL PROYECTO</Link></li>
            <li><Link href="">UBICACIONES</Link></li>
            <li><Link href="">CONTACTO</Link></li>
        </ul>
    </header>
);
};