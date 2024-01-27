import { setupCounter } from './counter.ts'
// import './topics/01-basic-types';
import './topics/02-object-interface';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola mundo`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
