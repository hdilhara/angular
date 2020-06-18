import { trigger,state,style,transition,animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
    state( 'void', style({opacity: 0 }) ),
    transition('void => *', [
      style({ backgroundColor: 'green'}),
      animate(1000)
    ]),
    transition('* => void',[
        style({ backgroundColor: 'red' }),
      animate(1000)
    ])
  ]);

  export let slide = trigger('slide', [
      transition(':enter',[style({transform: 'translateX(-2%)'}), animate(500)]),
      transition(':leave',[animate('2000ms 0s cubic-bezier(.94,.09,.83,.67)',style({transform: 'translateX(-100%)'}))])
  ]);

 export let bounce = trigger('bounce',[
     transition('*=>void',[
         animate(500, keyframes([
             style({
                 offset: .2,
                 opacity: 1,
                 transform: 'scale3d(0.9, 0.9, 0.9)'
             }),
             style({
                offset: .5,
                opacity: 0,
                transform: 'scale3d(1.1, 1.1, 1.1)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'scale3d(0.3, 0.3, 0.3)'
            })
         ]))
     ]),
     transition('void=>*',[
        animate(500, keyframes([
            style({
                offset: 0,
                opacity: 0,
                transform: 'translate3d(0, -3000px, 0) scaleY(3)'
            }),
            style({
                offset: .6,
                opacity: 1,
                transform: 'translate3d(0, 25px, 0) scaleY(0.9)'
            }),
            style({
                offset: .75,
                transform: 'translate3d(0, -10px, 0) scaleY(0.95)'
            }),
            style({
                offset: .90,
                transform: 'translate3d(0, 5px, 0) scaleY(0.985)'
            })
        ]))
    ])
 ]); 

export let swing = trigger('swing',[
    transition('void=>*',[
        animate(2000,keyframes([
            style({
                offset: .2,
                transform: 'rotate3d(0, 0, 1, 15deg)'
            }),
            style({
                offset: .4,
                transform: 'rotate3d(0, 0, 1, -10deg)' 
            }),
            style({
                offset: .6,
                transform: 'rotate3d(0, 0, 1, 5deg)' 
            }),
            style({
                offset: .8,
                transform: 'rotate3d(0, 0, 1, -5deg)'
            })
        ]))
    ])
]);

