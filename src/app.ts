class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ItDepartament extends Department{
    admins: string[];
    constructor(id:string, admins: string[]){
      super(id, 'IT') 
      this.admins = admins
    }
  }
  class AccountingDepartment extends Department{
    private lastReport:string;

    constructor(id: string,private reports: string[]){
      super(id,"Account")
      this.lastReport = reports[0];
    }
    addEmployeeName(name: string) {
      if (name ==='Tomate'){
        return
      }
      this.employees.push(name)
    }
    addReport(text:string){
      this.reports.push(text)
    }
    getReports(){
      console.log(this.reports)
    }
  }

   const it = new ItDepartament('d1', ['tomate']);
  
  it.addEmployee('Tomate');
  it.addEmployee('Manu');
  
  // accounting.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'Tomatao NAME';
  it.printEmployeeInformation();
  console.log(it)
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  const account = new AccountingDepartment('d2',[]);
  account.addReport('reportado')
  account.getReports()
  account.addEmployeeName('ola')