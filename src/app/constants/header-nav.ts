import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface NavItem {
  title: string;
  link: string;
  className: string;
}

export const navItems: NavItem[] = [
  {
    title: 'About',
    link: '',
    className: 'link',
  },
  {
    title: 'Services',
    link: '',
    className: 'link',
  },
  {
    title: 'Portfolio',
    link: '',
    className: 'link',
  },
  {
    title: 'Contact Me',
    link: '',
    className: 'btn-contact',
  },
];

export const sidenavAnimations = trigger('slideInOut', [
  state(
    'in',
    style({
      transform: 'translate3d(0,0,0)',
    })
  ),
  state(
    'out',
    style({
      transform: 'translate3d(100%, 0, 0)',
    })
  ),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out')),
]);
