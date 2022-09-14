
function toggle(lista) {
    let id = 0;
    return function toogle2 (){
      if (id >= lista.length)
        id = 0
      console.log(lista[id])
      id++
    }
  }
  
  const hello = toggle(['hello']);
  const onOff = toggle(['on', 'off']);
  let speed = toggle(['slow', 'medium', 'fast']);
  
  hello(); // "hello"
  hello(); // "hello"
  
  onOff(); // "on"
  onOff(); // "off"
  onOff(); // "on"
  onOff(); // "off"
  
  speed(); // "slow"
  speed(); // "medium"
  speed(); // "fast"
  speed(); // "slow"