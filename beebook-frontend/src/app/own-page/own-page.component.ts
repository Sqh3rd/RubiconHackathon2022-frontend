import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

import { bee_hive } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';

@Component({
  selector: 'app-own-page',
  templateUrl: './own-page.component.html',
  styleUrls: ['./own-page.component.css']
})
export class OwnPageComponent implements OnInit {

  own_bee_hives: bee_hive[] = [];

  @Output() selectedHiveChange = new EventEmitter<bee_hive>;

  @Input() selectedHive: bee_hive;

  constructor(private beeService: ManageBeehivesService) { }

  ngOnInit(): void {
    this.getHives();
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('change');
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
  }

  getHives(){
    this.beeService.fetchOwnHives().subscribe(hives => this.own_bee_hives = hives);
  }

  onSelect(hive:bee_hive){
    this.selectedHiveChange?.emit(hive);
    this.selectedHive = hive;
  }
}
