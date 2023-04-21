import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'settings', class: '' },
    { path: '/user-profile', title: 'Configuration',  icon:'forum', class: '' },
    { path: '/table-list', title: 'Enhancement DQA',  icon:'computer', class: '' },
    { path: '/typography', title: 'Reports',  icon:'trending_up', class: '' },
    { path: '/icons', title: 'Additional Tasks',  icon:'build', class: '' },
    { path: '/maps', title: 'Quality Assurance',  icon:'thumb_up', class: '' },
    { path: '/notifications', title: 'TM Reports',  icon:'timeline', class: '' },
    { path: '/upgrade', title: 'Sampling Reports',  icon:'trending_up', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
      sub_menu: [],
    },
    {
      link_name: 'Configuration',
      link: null,
      icon: 'settings',
      sub_menu: [
        {
          link_name: 'TM Configuration',
          link: '/user-profile',
          icon: 'settings',
        },
        {
          link_name: 'Menter Mentee Assosiation',
          link: '/javascript',
          icon: 'settings',
        },
        {
          link_name: 'Sampling Setup',
          link: '/php-n-mysql',
        },
        {
          link_name: 'Calibration Setup',
          link: '/php-n-mysql',
        },
        {
          link_name: 'Sampling Setup - CTC',
          link: '/php-n-mysql',
        },
        {
          link_name: 'Sampling Data Upload',
          link: '/php-n-mysql',
        },
        {
          link_name: 'TM Configuration Replica',
          link: '/php-n-mysql',
        },
      ],
    },
    {
      link_name: 'Forms',
      link: null,
      icon: 'forum',
      sub_menu: [
        // {
        //   link_name: 'Web Design',
        //   link: '/posts/web-design',
        // },
        // {
        //   link_name: 'Login Form',
        //   link: '/posts/login-form',
        // },
        // {
        //   link_name: 'Card Design',
        //   link: '/posts/card-design',
        // },
      ],
    },
    {
      link_name: 'Enhancement DQA',
      link: '/analytics',
      icon: 'computer',
      sub_menu: [],
    },
    {
      link_name: 'Reports',
      link: '/chart',
      icon: 'trending_up',
      sub_menu: [],
    },
    {
      link_name: 'Additional Tasks',
      link: null,
      icon: 'thumb_up',
      sub_menu: [
        // {
        //   link_name: 'UI Face',
        //   link: '/ui-face',
        // },
        // {
        //   link_name: 'Pigments',
        //   link: '/pigments',
        // },
        // {
        //   link_name: 'Box Icons',
        //   link: '/box-icons',
        // },
      ],
    },
    {
      link_name: 'Quality Assurance',
      link: '/explore',
      icon: 'timeline',
      sub_menu: [],
    },
    {
      link_name: 'TM Reports',
      link: '/history',
      icon: 'trending_up',
      sub_menu: [],
    },
    {
      link_name: 'Sampling Reports',
      link: '/setting',
      icon: 'trending_up',
      sub_menu: [],
    },
  ];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
