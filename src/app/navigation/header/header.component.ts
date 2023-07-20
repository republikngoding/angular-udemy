import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription?: Subscription;
  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authSrv.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      console.log(this.isAuth);

    });


  }
  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authSrv.logout();
  }

}
