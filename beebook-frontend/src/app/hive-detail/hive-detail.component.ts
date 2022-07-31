import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { bee_hive, own_bee_hives } from '../bee_hive';

@Component({
  selector: 'app-hive-detail',
  templateUrl: './hive-detail.component.html',
  styleUrls: ['./hive-detail.component.css']
})
export class HiveDetailComponent implements OnInit {

  @Input() selectedHive: bee_hive;
  @Input() selectedHives: bee_hive[];
  @Output() selectedHivesChange = new EventEmitter<bee_hive[]>();
  location: google.maps.LatLngLiteral = {lat: 0, lng: 0};

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
