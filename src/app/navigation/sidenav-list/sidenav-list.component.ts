import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {


  @Output() closeSideNav = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription?: Subscription;
  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authSrv.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      console.log(this.isAuth);
    });
  }

  onClose() {
    this.closeSideNav.emit();
  }

  onLogout() {
    this.onClose();
    this.authSrv.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
