import { PropsWithChildren } from 'react';
import './styles.css'

type ChildrenProps = PropsWithChildren

function Container({children}:ChildrenProps) {
  return (
    <div className='container'>
        {children}
    </div>
  );
}

export { Container };
