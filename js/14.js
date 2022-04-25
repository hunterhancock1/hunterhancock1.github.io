// Problem 1
let employees = {
    "data": [
        {
            "fname": "Sam",
            "dept": "Tech",
            "desig": "Manager",
            "salary": 40000,
            "raise": true
        },
        {
            "fname": "Mary",
            "dept": "Finance",
            "desig": "Trainee",
            "salary": 18500,
            "raise": true
        },
        {
            "fname": "Bill",
            "dept": "HR",
            "desig": "Executive",
            "salary": 21200,
            "raise": false
        }
    ]
}

console.log("Problem 1: ");
console.log(employees);

// Problem 2
let company = {
    "cname": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees
}

console.log("Problem 2: ");
console.log(company);

// Problem 3
function addEmployee(fname, dept, desig, salary, raise, empl) {
    let employee = {
        "fname": fname,
        "dept": dept,
        "desig": desig,
        "salary": salary,
        "raise": raise
    };
    empl['data'].push(employee);
}

addEmployee("Anna", "Tech", "Executive", 25600, false, employees);
console.log("Problem 3: ");
console.log(employees);
company.employees = employees; 

// Problem 4
function totalSalary(comp) {
    sum = 0;
    for (var i = 0; i < 4; i++) {
        sum = sum + comp.employees.data[i].salary;
    }
    return sum;
}

total = totalSalary(company);
console.log("Problem 4: ");
console.log(total);

// Problem 5
function giveRaise(comp, empl) {
    for (var i = 0; i < 4; i++) {
        if (comp.employees.data[i].raise) {
            comp.employees.data[i].salary = comp.employees.data[i].salary * 1.1;
            comp.employees.data[i].raise = false;
        }        
    }
    empl.data = comp.employees.data;
}

giveRaise(company);
console.log("Problem 5: ");
console.log(company);

// Problem 6
employees.data[0]["wfh"] = true;
employees.data[1]["wfh"] = false;
employees.data[2]["wfh"] = false;
employees.data[3]["wfh"] = true;
company.employees.data = employees.data;

console.log("Problem 5: ");
console.log(company);