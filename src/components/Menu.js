import logo from '../logo.svg';
import { Planet } from 'react-planet';

export const Menu = (props) => {
    return (
      
      <Planet centerContent={
        <div 
            style={{
                height: 200,
                width: 200,
                borderRadius: '50%',
                backgroundImage:'url("../public/profile.jpg")',
                backgroundSize: 200,
                textAlign: 'center',
        }}/>}
        open
        autoClose
        bounceOnClose
        bounceOnOpen
        rotation={110}
        orbitRadius={150}
        hideOrbit
    >
    
        <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundImage: 'url("../public/web-icon.png")',
                backgroundSize: '3rem',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
        
            }}
        />
        <div />
        <div />
        <div />
        <div />

        <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundImage: 'url("../public/credits-icon.png")',
                backgroundSize: '3rem',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }}
            mass={3}
            tension={300}
        />
         <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundImage: 'url("../public/contact-icon.png")',
                backgroundSize: '4rem',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }}
            mass={5}
            tension={500}
        />
        
    </Planet>
 
    );
  };
