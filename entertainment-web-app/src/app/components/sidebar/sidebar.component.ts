import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface Icons {
 iconOn: string;
 src: string; 
iconOnHover: string;
path: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 icons:Icons[] =  [{
   iconOn: '../../../assets/icon-nav-home.svg',
   path: '/posts',
   src: '../../../assets/icon-nav-home.svg',
   iconOnHover: '../../../assets/icon-home-hover.svg'
  },{
  iconOn: '../../../assets/icon-nav-movies.svg',
  path: '/posts/movies',
  src: '../../../assets/icon-nav-movies.svg',
  iconOnHover: '../../../assets/icon-movie-hover.svg'
},{
  iconOn: '../../../assets/icon-nav-tv-series.svg',
  path: '/posts/tv-series',
  src: '../../../assets/icon-nav-tv-series.svg',
  iconOnHover: '../../../assets/icon-tv-hover.svg'
},{
  iconOn: '../../../assets/icon-bookmark-empty.svg',
  path: '/posts/bookmarked',
  src: '../../../assets/icon-bookmark-empty.svg',
  iconOnHover: '../../../assets/icon-bookmark-hover.svg'
},
]
activeRoute: string = ''
 constructor( private router: Router){
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.activeRoute = event.url;
    }
  });
 }

 isActive(route: string): boolean{
  console.log(this.router.url, route);
  
  return this.router.url === route

 }
}
