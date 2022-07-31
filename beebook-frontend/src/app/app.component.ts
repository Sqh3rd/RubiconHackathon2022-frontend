import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public router: Router, private auth:AuthService) {
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

  getUserName(){
    return this.auth.getUserName();
  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
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
  tinyAlert(text: string) {
    Swal.fire({
      title: text,
      icon: 'warning'});
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
  alertConfirmation(text: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}