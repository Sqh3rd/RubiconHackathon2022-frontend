import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { bee_hive } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';
import { full_name } from '../bee_hive';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {

  @Output() selectedHiveChange = new EventEmitter<bee_hive>();

  @Input() selectedHive: bee_hive;
  @Input() selectedHives: bee_hive[];

  constructor(private beeService: ManageBeehivesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
    if ('selectedHives' in changes){
      this.selectedHives = changes['selectedHives'].currentValue;
    }
  }

  onSelect(hive:bee_hive){
    this.selectedHive = hive;
    this.selectedHiveChange.emit(hive);
  }
}
