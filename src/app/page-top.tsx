'use client';

import Link from 'next/link';
import {
  ArrowDownIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, } from '@/libs/store';
import { toggleEnabled, startAnimation, stopAnimation } from '@/libs/features/animation/animationSlice';

export default function PageTop()
{
    const animationState = useSelector((state: RootState) => state.animation);
    const dispatch = useDispatch();
    const handleToggle = () => {
      dispatch(toggleEnabled());
    };

    // Pour gérer plusieurs menus indépendants
    const [openMenu, setOpenMenu] = useState<string | null>(null); // "projects", "docs", null
    const [menuStyles, setMenuStyles] = useState<{ [key: string]: { top?: string; left?: string } }>({});
    const [isNavOpen, setIsNavOpen] = useState(false);

    const refs = {
      projects: useRef<HTMLDivElement>(null),
      docs: useRef<HTMLDivElement>(null),
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => {
        setIsMobile(window.innerWidth <= 800);
      };

      check(); // important : init immédiate
      window.addEventListener('resize', check);

      return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
      if (!isMobile) {
        setIsNavOpen(false);
        setOpenMenu(null);
        setMenuStyles({});
      }
    }, [isMobile]);

    const toggleMenu = (menuName: 'projects' | 'docs') => {
    
      const labelRef = refs[menuName].current;
      if (!labelRef) return;

      const rect = labelRef.getBoundingClientRect();
      const menuWidth = 200;

      let left = rect.left + menuWidth > window.innerWidth
        ? window.innerWidth - menuWidth - 10
        : rect.left;

      setMenuStyles(prev => ({
        ...prev,
        [menuName]: {
          top: rect.bottom + 'px',
          left: left + 'px',
        }
      }));

      setOpenMenu(prev => (prev === menuName ? null : menuName));
    };

    return (
        <div id="page-top" className={ animationState.isEnabled ? 'animation' : '' }>
          <div className="wrapper">
            <Link href='/' className="link-app">
              <div className="logo">
                <img src="/logo.png" alt="ItD3VBox Logo" />
              </div>
              <div className="name">ItD3VBox</div>
            </Link>
            <button
              type="button"
              className={`btn-menu-main ${isNavOpen ? 'open' : ''}`}
              onClick={() => {
                if (!isMobile) return;
                setIsNavOpen(prev => !prev);
              }}
            >
              <span></span>
              <span></span>
            </button>
            <nav className={`${isNavOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <div className="menu-sub">
                    <div className="label" ref={refs.projects}>
                      <Link href='/projects' className='ms-item'>Projects</Link>
                      <button type="button" className='btn-menu'  onClick={() => toggleMenu('projects')}>
                        <ArrowDownIcon />
                      </button>
                    </div>
                    <div
                        className={`menu ${openMenu === 'projects' ? 'open' : ''}`}
                        style={!isMobile ? menuStyles['projects'] : undefined}
                      >
                      <Link href='/projects' className='item'>Spark Management</Link>
                      <Link href='/projects' className='item'>Spark Code</Link>
                      <Link href='/projects' className='item'>Virtual Library</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-sub">
                    <div className="label" ref={refs.docs}>
                      <Link href='/docs' className='ms-item'>Docs</Link>
                      <button type="button" className='btn-menu'  onClick={() => toggleMenu('docs')}>
                        <ArrowDownIcon />
                      </button>
                    </div>
                    <div
                        className={`menu ${openMenu === 'docs' ? 'open' : ''}`}
                        style={!isMobile ? menuStyles['docs'] : undefined}
                      >
                      <Link href='/projects' className='item'>Python</Link>
                      <Link href='/projects' className='item'>C</Link>
                      <Link href='/projects' className='item'>Web</Link>
                    </div>
                  </div>
                </li>
                {/* <li className="btn-animation">
                  <button type="button"
                    onClick={handleToggle}>
                    <PlayIcon />
                  </button>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
    )
}