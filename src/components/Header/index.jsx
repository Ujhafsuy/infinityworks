import { useState, useEffect } from 'react';
import Switch from '../Switch';
import logo from '../../assets/images/logo.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Header(className) {
    return(
        <header className={`${className.className} flex items-center justify-around w-[100%] pt-[1rem]`}>
            <img src={logo} alt="logo" className='w-[4rem] h-[4rem]' />
            <nav className='text-[1.5rem] font-semibold text-[#fff] flex flex-row justify-between gap-[3rem]'>
                <a href="">Notícias</a>
                <a href="">Nossa Missão</a>
                <a href="">Portfólio</a>
                <a href="">Time</a>
                <a href="">Contato</a>
            </nav>
            <Tippy content="Permitir Intro?" placement='bottom' >
                <div>
                    <Switch className={className.className} />
                </div>
            </Tippy>
        </header>
    )
}

export default Header