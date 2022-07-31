import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { bee_hive } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';

@Component({
  selector: 'app-hive-detail',
  templateUrl: './hive-detail.component.html',
  styleUrls: ['./hive-detail.component.css']
})
export class HiveDetailComponent implements OnInit {

  @Input() selectedHive: bee_hive;
  @Input() selectedHives: bee_hive[];
  @Output() selectedHivesChange = new EventEmitter<bee_hive[]>();

  @Input() canBeEdited: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
    if ('selectedHives' in changes){
      this.selectedHives = changes['selectedHives'].currentValue;
    }
  }
}
