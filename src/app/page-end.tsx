'use client';

import { useSelector } from 'react-redux';
import { RootState, } from '@/libs/store';

export default function PageEnd()
{
    const animationState = useSelector((state: RootState) => state.animation);

    return (
        <footer id="page-end" className={ animationState.isEnabled ? 'animation' : '' }>
            <div className="wrapper">
              <div className="app-name">ItD3vBox</div>
              <div className="theme">
                <div className="name">Prototype</div>
                <div className="version">V. 0.0.1</div>
              </div>
            </div>
        </footer>
    )
}