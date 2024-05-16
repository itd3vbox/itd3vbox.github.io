'use client';

import { useSelector } from 'react-redux';
import { RootState, } from '@/libs/store';

export default function PageMain({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)
{
    const animationState = useSelector((state: RootState) => state.animation);

    return (
        <div id="page-main" className={ animationState.isEnabled ? 'animation' : '' }>
          {children}
        </div>
    )
}