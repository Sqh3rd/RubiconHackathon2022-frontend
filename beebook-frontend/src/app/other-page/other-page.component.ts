import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { bee_hive, full_name } from '../bee_hive';
import { ManageBeehivesService } from '../manage-beehives.service';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css']
})
export class OtherPageComponent implements OnInit {

  other_bee_hives: bee_hive[];

  @Output() selectedHiveChange = new EventEmitter<bee_hive>();

  @Input() selectedHive: bee_hive;

  @Input() selectedHives: bee_hive[];

  constructor(private beeService: ManageBeehivesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
    if ('selectedHives' in changes){
      this.selectedHives = changes['selectedHives'].currentValue;
    }
  }

  onSelect(hive:bee_hive){
    this.selectedHiveChange.emit(hive);
    this.selectedHive = hive;
  }
}
