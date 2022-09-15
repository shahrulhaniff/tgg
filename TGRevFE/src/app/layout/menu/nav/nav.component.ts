import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import swal from 'sweetalert2';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { navbarData } from '../menu-data';

interface SideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
          )
      ]),
      transition(':leave',[
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
          )
      ])
    ]),
    
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)',offset: '0'}),
            style({transform: 'rotate(2turn)',offset: '1'})
          ])
          )
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  cl = false;
  screenWidth = 0;
  navData = navbarData;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void { 
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  toggleCL(){
    this.cl = !this.cl;
    
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  logoutTimer: any;

  constructor(
    private router: Router,
    private bnIdle: BnNgIdleService
  ) {
    
    this.bnIdle.startWatching(3000).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        //this.modalIdle.show();
        const self = this;
        this.logoutTimer = setTimeout(function(){
          swal({
            title: "sessionTimeout",//self.translate.instant('general.sessionTimeout'),
            text: "timeoutMsg",//self.translate.instant('general.timeoutMsg'),
            type: 'warning',
          }).catch(swal.noop);
          self.logout();
        }, 5000);


      }
    });
   }


  logout() {
    if (sessionStorage.getItem('role') === 'tg-admin-only') {
      this.router.navigate(['/assalamualaikum']);
    } else if (sessionStorage.getItem('role') === 'partner') {
      this.router.navigate(['/partnerlogin']);
    } else {
      this.router.navigate(['/login']);
    }
    console.error("logout success");
    sessionStorage.clear();
    //this.socket.disconnect();
    this.bnIdle.stopTimer();
  }

  stay() {
    clearTimeout(this.logoutTimer);
    //this.modalIdle.hide();
    this.bnIdle.resetTimer();
  }

}
