import { Component, OnInit } from '@angular/core';
import { App } from './flow.model';
import * as $ from 'jquery';
import { FlowService } from './flow.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],

})
export class FlowComponent implements OnInit {

  constructor(public fs:FlowService) {
    this.app=this.fs.getapps();
  }

  ngOnInit(): void {

    this.app=this.fs.getapps();

  }

  app:App[];
  selectedapp:any;
  flow:string[]=[]
  showflow:boolean=false;




  nodes: any = [
    {
      name: 'Appname',
      cssClass: 'ngx-org-ceo',

      title: '',
      childs: [
        {
          name: 'Appservers',
          cssClass: 'ngx-org-ceo',

          title: 'ap1,ap2',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',

          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',

              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',

              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',

              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',

          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',

              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    },

  ];

  createflow(appname:any){

this.showflow=false;

      // this.nodes=this.fs.createflow(appname);

// this.showflow=true;


    const selectedapps:App[] =this.app.filter(selected=>selected.name == appname)
    if(selectedapps?.length>0){
     this.selectedapp=selectedapps[0];

      // this.showflow=false;
      this.flow=[];

      if(this.selectedapp.appservers.length>0){
        this.flow.push("appservers")
      }

      if( this.selectedapp.jumpserver.length>0){
        this.flow.push("jumpserver")
      }

      if( this.selectedapp.proxyserver.length>0){
        this.flow.push("proxyserver")
      }

      if( this.selectedapp.webserver.length>0){
        this.flow.push("webserver")
      }
      if( this.selectedapp.fs.length>0){
        this.flow.push("fs")
      }




    this.showflow=true;



    }




  }

  test($event:any){
    console.log($event)
  }

  openModal(step:string){
    console.log(step);

    const modalToggle = document.getElementById(step);
   console.log(modalToggle);

  }

}
