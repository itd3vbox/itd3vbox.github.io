'use client';

import Link from 'next/link';
import {
  PlayIcon,
} from '@heroicons/react/24/outline';

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

    return (
        <div id="page-top" className={ animationState.isEnabled ? 'animation' : '' }>
          <div className="wrapper">
            <Link href='/' className="link-app">
              <div className="logo"></div>
              <div className="name">It.D3vBox</div>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href='/projects'>Projects</Link>
                  <Link href='/docs'>Docs</Link>
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