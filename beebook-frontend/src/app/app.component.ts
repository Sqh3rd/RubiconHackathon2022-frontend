import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public router: Router) {
    router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd){
        try{
          const navbarLinks = document.getElementsByClassName('navbar-links')[0];
          navbarLinks.classList.remove('active');
        }catch{}
      } 
    });
  }
  title = 'beebook-frontend';
  goToHome() {
    this.router.navigate(['/', 'home']);
  }
  goToLogin() {
    this.router.navigate(['/', 'login']);
  }

  ngOnInit() {
    console.info("this is an init");
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    const dropdowns = document.getElementsByClassName('dropdown');
    navbarLinks.classList.remove('active');

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    })

    for(let i = 0; i < dropdowns.length; i++){
        let item = dropdowns[i];
        item.addEventListener('click', () => {
            if(navbarLinks.classList.contains('active')){
                item.classList.toggle('selected');
            }
        });
    }

    window.addEventListener('mouseup', (e) => {
        if (navbarLinks.classList.contains('active') && !document.getElementsByClassName("navbar")[0].contains(e.target as Element)) {
            navbarLinks.classList.remove('active');
            for(let i = 0; i < dropdowns.length; i++){
                let item = dropdowns[i];
                item.classList.remove('selected');
            }
        }
    })
  }
}