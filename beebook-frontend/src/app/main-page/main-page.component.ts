import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap, MapCircle } from '@angular/google-maps';
import { ViewEncapsulation } from '@angular/core';
import { bee_hive } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  zoom = 12;
  center: google.maps.LatLngLiteral = {lat:0, lng:0};
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 25,
    minZoom: 3
  };
  
  circleOptions: google.maps.CircleOptions = {
    fillColor: "green",
    strokeColor: "green"
  };

  sickCircleOptions: google.maps.CircleOptions = {
    fillColor: "red",
    strokeColor: "red"
  };

  selectedHive: bee_hive;

  markerOptions: google.maps.MarkerOptions = {
    icon:{
      url: 'assets/Beehive.png',
      scaledSize: new google.maps.Size(110,110),
      anchor : new google.maps.Point(60,63)
    },
    animation: google.maps.Animation.DROP,
  };
  selectedMarkerOptions: google.maps.MarkerOptions = {
    icon:{
      url: 'assets/Beehive-Selected.png',
      scaledSize: new google.maps.Size(110,110),
      anchor : new google.maps.Point(60,63)
    },
    animation: google.maps.Animation.DROP
  }
  sickMarkerOptions: google.maps.MarkerOptions = {
    icon:{
      url: 'assets/Beehive-Siick.png',
      scaledSize: new google.maps.Size(110,110),
      anchor : new google.maps.Point(60,63)
    },
    animation: google.maps.Animation.DROP
  }

  selectedHives: bee_hive[];
  selected: number;
  canBeEdited: boolean;
  location: google.maps.LatLngLiteral;

  constructor(private hiveService:ManageBeehivesService, private router: Router, private route: ActivatedRoute) {}

  mouseY: number;
  draggingMenu = false;

  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.onSelect(0);
    this.selectedHive = this.selectedHives[0];
    let mouseY = this.mouseY;
    let draggingMenu = this.draggingMenu;
    document.getElementById("menu")?.addEventListener("mousedown",function(e){
      mouseY = e.clientY;
      draggingMenu = true;
    });
    document.addEventListener("mouseup",function(e){
      if(draggingMenu){
        draggingMenu = false;
        if(mouseY - e.clientY > 5){
            document.getElementById("main")?.style.setProperty("--map-height","20%");
        }else if (e.clientY - mouseY > 5){
              document.getElementById("main")?.style.setProperty("--map-height","80%");
        }
      }
    });
    
  }

  onSelect(n:number){
    this.selected = n;
    if (n === 0){
      this.hiveService.fetchOwnHives().subscribe(hives => this.selectedHives = hives);
      this.router.navigate(['./own-hives'], {relativeTo: this.route});
      this.canBeEdited = true;
    }
    else if (n === 1){
      this.hiveService.fetchOtherHives().subscribe(hives => this.selectedHives = hives);
      this.router.navigate(['./other-hives'], {relativeTo: this.route});
      this.canBeEdited = false;
    }
    else{
      this.hiveService.fetchFavHives().subscribe(hives => this.selectedHives = hives);
      this.router.navigate(['./fav-hives'], {relativeTo: this.route});
      this.canBeEdited = false;
    }
    this.selectedHive = this.selectedHives[0];
  }

  onSelectHive(hive:bee_hive){
    this.selectedHive = hive;
    console.log(this.selectedHive);
  }

  selectedHivesEvent(hives:bee_hive[]){
    this.selectedHives = hives;
  }

  create(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    let hive: bee_hive = {id:14, name:"Neu", user_owner: "Max Mustermann", is_favorite: false, loc: this.location, bee_type: "Honigbiene", sickness: "", small_radius: 5, big_radius: 10}
    this.hiveService.appendOwnHive(hive);
  }

  delete(){
    this.hiveService.deleteOwnHive(this.selectedHive.id);
  }
}
