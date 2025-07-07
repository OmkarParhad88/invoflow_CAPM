import cds from "@sap/cds";


 export class HelloService extends cds.ApplicationService{

  async sayHello(name: string): Promise<string> {
    return `Hello ${name}`;
  }
}
