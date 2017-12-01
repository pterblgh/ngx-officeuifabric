import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fab-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class FabricTagComponent implements OnInit {

  ngOnInit(): void {
    console.log(`FabricTagComponent initialized`);
  }

}
