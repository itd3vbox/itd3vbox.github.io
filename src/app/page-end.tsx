'use client';

import { useSelector } from 'react-redux';
import { RootState, } from '@/libs/store';

export default function PageEnd()
{
    const animationState = useSelector((state: RootState) => state.animation);

    return (
        <footer id="page-end" className={ animationState.isEnabled ? 'animation' : '' }>
            <div className="wrapper">
              <div className="app-name">ItD3VBox</div>
              <div className="theme">
                <div className="name">From Zero</div>
                <div className="version">V. 1.0.0</div>
              </div>
            </div>
        </footer>
    )
}