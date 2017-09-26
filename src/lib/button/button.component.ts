import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fb-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class FbButtonComponent implements OnInit {
    
    ngOnInit(): void {
        console.log('Button component successfully created');
    }

}