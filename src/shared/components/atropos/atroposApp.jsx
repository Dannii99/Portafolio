// import Atropos component
import Atropos from 'atropos/react';
  
export default function AtroposApp () {
  return (
    <div id="app">
      {/* Atropos */}
      <Atropos className="my-atropos" 
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}>
        {/* ... */}aaa
      </Atropos>
    </div>
  )
}