import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { bee_hive } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {

  fav_bee_hives: bee_hive[];

  @Output() selectedHiveChange = new EventEmitter<bee_hive>();

  @Input() selectedHive: bee_hive;

  constructor(private beeService: ManageBeehivesService) { }

  ngOnInit(): void {
    this.getHives();
  }

  ngOnChanges(changes:SimpleChanges){
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
  }
  
  getHives(){
    this.beeService.fetchFavHives().subscribe(hives => this.fav_bee_hives = hives);
  }

  onSelect(hive:bee_hive){
    this.selectedHive = hive;
    this.selectedHiveChange.emit(hive);
  }
}
