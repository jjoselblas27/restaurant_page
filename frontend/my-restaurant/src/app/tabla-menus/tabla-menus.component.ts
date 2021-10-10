import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-tabla-menus',
  templateUrl: './tabla-menus.component.html',
  styleUrls: ['./tabla-menus.component.scss']
})
export class TablaMenusComponent implements OnInit { 
  elements = [
    {
      nombre: "",
      precio: ""
      
    }
  ]

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      this.elements = data;
    })
  }
}
