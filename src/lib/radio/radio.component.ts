import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fab-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class FabricRadioComponent implements OnInit {

  ngOnInit(): void {
    console.log(`FabRadioComponent initialized`);
  }

}
