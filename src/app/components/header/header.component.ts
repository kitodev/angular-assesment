import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { faDog, faCat, faMouse } from '@fortawesome/free-solid-svg-icons';
import { loadCurrentPath } from 'src/app/store/data/data-actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentPath = '/';
  previousPath = '';
  destroyRef: DestroyRef = inject(DestroyRef);
  faDog = faDog;
  faCat = faCat;
  faMouse = faMouse;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.setCurrentPath();
  }

  setCurrentPath(): void {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event: NavigationEnd) => {
        if (this.currentPath !== event.urlAfterRedirects) {
          this.store.dispatch(loadCurrentPath({ path: event.urlAfterRedirects }));
        }
        this.currentPath = event.urlAfterRedirects;
      });
  }

  setHeaderClasses(): void {
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach((item: Element) => item.classList.remove('active'));

    menuItems.forEach((item: Element) => {
      const routerLink = `/${item.getAttribute('id')}`;
      if (this.currentPath === routerLink) {
        item.classList.add('active');
      }
    });
  }

  goToPage(routerLink: string, item: Element): void {
    if (item.classList.contains('not-allowed')) {
      return;
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((item: Element) => item.classList.remove('active'));

    if (routerLink === '/cats') {
      if (this.previousPath === '/mice') {
        item.classList.add('active');
        this.router.navigateByUrl(routerLink);
      }
      return;
    }

    this.previousPath = routerLink;
    item.classList.add('active');
    this.router.navigateByUrl(routerLink);
  }

  onMouseEnter(): void {
    const statisticsLink = document.querySelector('#cats');
    this.previousPath === '/mice'
      ? statisticsLink?.classList.remove('not-allowed')
      : statisticsLink?.classList.add('not-allowed');
  }
}
