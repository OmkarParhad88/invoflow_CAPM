import cds from "@sap/cds";


 export class HelloService extends cds.ApplicationService{

   sayHello(name: string): string {
    return `Hello ${name}`;
  }
}
