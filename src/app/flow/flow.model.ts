export interface App{
  name:string;
  appservers:string[];
  jumpserver:string[];
  proxyserver:string[];
  webserver:string[];
  fs:string[];

}


export interface flownode{
      name: string,
      cssClass: string,
      title: string,
      childs:flownode[]
      // parent:flownode|null
}


