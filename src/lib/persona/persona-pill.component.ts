import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fab-persona-pill',
  templateUrl: './persona-pill.component.html',
  styleUrls: ['./persona-pill.component.css']
})
export class FabricPersonaPillComponent implements OnInit {

  ngOnInit(): void {
    console.log(`FabricPersonaPillComponent initialized`);
  }

}
