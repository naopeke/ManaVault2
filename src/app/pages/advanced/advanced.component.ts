import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Colors {
  name: string,
  code: string
}

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, MultiSelectModule, InputIconModule, IconFieldModule, CommonModule],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css'
})
export class AdvancedComponent implements OnInit{


  colors!: Colors[];
  selectedColors!: Colors[];
  selectedColorsCommander!: Colors[];

  manaCost!:Colors[];
  selectedManaCost!: Colors[];


  ngOnInit() {
      this.colors = [
          {name: 'White', code: 'W'},
          {name: 'Blue', code: 'U'},
          {name: 'Black', code: 'B'},
          {name: 'Red', code: 'R'},
          {name: 'Green', code: 'G'},
          {name: 'Colorless', code: 'C'}
      ];

      this.manaCost = [
        {name: '1 white mana', code: '{W}'},
        {name: '1 blue mana', code: '{U}'},
        {name: '1 black mana', code: '{B}'},
        {name: '1 red mana', code: '{R}'},
        {name: '1 green mana', code: '{G}'},
        {name: '1 colorless mana', code: '{C}'},
        {name: 'X generic mana', code: '{X}'},
        {name: '0 mana', code: '{0}'},
        {name: '1 generic mana', code: '{1}'},
        {name: '2 generic mana', code: '{2}'},
        {name: '3 generic mana', code: '{3}'},
        {name: '4 generic mana', code: '{4}'},
        {name: '5 generic mana', code: '{5}'},
        {name: '6 generic mana', code: '{6}'},
        {name: '7 generic mana', code: '{7}'},
        {name: '8 generic mana', code: '{8}'},
        {name: '9 generic mana', code: '{9}'},
        {name: '10 generic mana', code: '{10}'},
        {name: '11 generic mana', code: '{11}'},
        {name: '12 generic mana', code: '{12}'},
        {name: '13 generic mana', code: '{13}'},
        {name: '14 generic mana', code: '{14}'},
        {name: '15 generic mana', code: '{15}'},
        {name: '16 generic mana', code: '{16}'},
        {name: '1 white or blue mana', code: '{W/U}'},
        {name: '1 white or black mana', code: '{W/B}'},
        {name: '1 black or red mana', code: '{B/R}'},
        {name: '1 black or green mana', code: '{B/G}'},
        {name: '1 blue or black mana', code: '{U/B}'},
        {name: '1 blue or red mana', code: '{U/R}'},
        {name: '1 red or green mana', code: '{R/G}'},
        {name: '1 red or white mana', code: '{R/W}'},
        {name: '1 green or white mana', code: '{G/W}'},
        {name: '1 green or blue mana', code: '{G/U}'},
        {name: '1 green, blue mana or 2 life ', code: '{G/U/P}'},
        {name: '1 green, white mana or 2 life ', code: '{G/W/P}'},
        {name: '1 colorless or white mana', code: '{C/W}'},
        {name: '1 colorless or blue mana', code: '{C/U}'},
        {name: '1 colorless or black mana', code: '{C/B}'},
        {name: '1 colorless or red mana', code: '{C/R}'},
        {name: '1 colorless or green mana', code: '{C/G}'},
        {name: '2 generic mana or 1 white mana', code: '{2/W}'},
        {name: '2 generic mana or 1 blue mana', code: '{2/U}'},
        {name: '2 generic mana or 1 black mana', code: '{2/B}'},
        {name: '2 generic mana or 1 red mana', code: '{2/R}'},
        {name: '2 generic mana or 1 green mana', code: '{2/G}'},
        {name: '1 white mana or 2 life', code: '{W/P}'},
        {name: '1 blue mana or 2 life', code: '{U/P}'},
        {name: '1 black mana or 2 life', code: '{B/P}'},
        {name: '1 red mana or 2 life', code: '{R/P}'},
        {name: '1 green mana or 2 life', code: '{G/P}'},
        {name: '1 snow mana', code: '{S}'},























      
    ];
  }

}
