import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cep: string;

  constructor() {
    this.cep = '';
  }

  ngOnInit() {
  }

}
