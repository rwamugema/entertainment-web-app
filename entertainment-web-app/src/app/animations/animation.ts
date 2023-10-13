import { animate, state, style, transition, trigger } from "@angular/animations";


export const FadeIn = trigger('fadeIn',[
    transition('void => *', [
    style({opacity: 0}),
    animate('5000ms  ease-in-out')
    ]),
    ])