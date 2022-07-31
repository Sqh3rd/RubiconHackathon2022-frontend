import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

import { bee_hive, full_name } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';

@Component({
  selector: 'app-own-page',
  templateUrl: './own-page.component.html',
  styleUrls: ['./own-page.component.css']
})
export class OwnPageComponent implements OnInit {

  @Output() selectedHiveChange = new EventEmitter<bee_hive>;

  @Input() selectedHive: bee_hive;
  @Input() selectedHives: bee_hive[];

  constructor(private beeService: ManageBeehivesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('change');
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
    if ('selectedHives' in changes){
      this.selectedHives = changes['selectedHives'].currentValue;
    }
  }

  onSelect(hive:bee_hive){
    this.selectedHiveChange?.emit(hive);
    this.selectedHive = hive;
  }
}
