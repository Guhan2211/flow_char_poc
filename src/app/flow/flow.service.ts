import { Injectable } from '@angular/core';
import { App, flownode } from './flow.model';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  constructor() { }




  private apps:App[] =[

    {
      name:"mobile",
      appservers:['app1','app2','app3'],
      jumpserver:['js1','js2'],
      proxyserver:['p1','p2'],
      webserver:['wb1','wb2'],
      fs:['fs1']

    },

    {
      name:"bne",
      appservers:['app1','app2','app3'],
      jumpserver:[],
      proxyserver:['p1','p2'],
      webserver:['wb1','wb2'],
      fs:[]

    },

    {
      name:"avatar",
      appservers:['app1','app2','app3'],
      jumpserver:['js1','js2'],
      proxyserver:[],
      webserver:['wb1','wb2'],
      fs:['fs1']

    },



  ];


  getapps(){
    return this.apps.slice();
  }

  createflow(appname:string){

    const selectedapplist =this.apps.filter(app=>app.name===appname);
    const selectedapp=selectedapplist[0];

    let nodes:flownode[]=[];
    let fn:flownode={
      name: appname,
      // parent:null,
      cssClass: 'ngx-org-head',
      title: '',
      childs:[]
    }
      if(selectedapp.appservers.length>0){

        let fn2:flownode={

          name: appname,
          // parent:null,
          cssClass: 'ngx-org-head',
          title: '',
          childs:[]

        }


        }


      //   this.flow.push("appservers")


      // if( selectedapp.jumpserver.length>0){
      //   this.flow.push("jumpserver")
      // }

      // if( selectedapp.proxyserver.length>0){
      //   this.flow.push("proxyserver")
      // }

      // if( selectedapp.webserver.length>0){
      //   this.flow.push("webserver")
      // }
      // if( selectedapp.fs.length>0){
      //   this.flow.push("fs")
      // }





  }







}
