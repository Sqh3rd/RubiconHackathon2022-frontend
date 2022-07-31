import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { bee_hive } from '../bee_hive';
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

  constructor(private beeService: ManageBeehivesService) { }

  ngOnInit(): void {
    this.getHives();
  }

  ngOnChanges(changes: SimpleChanges): void{
    if ('selectedHive' in changes){
      this.selectedHive = changes['selectedHive'].currentValue;
    }
  }

  getHives(){
    this.beeService.fetchOtherHives().subscribe(hives => this.other_bee_hives = hives);
  }

  onSelect(hive:bee_hive){
    this.selectedHiveChange.emit(hive);
    this.selectedHive = hive;
  }
}
