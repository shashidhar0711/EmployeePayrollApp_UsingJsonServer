class EmployeePayrollData {
    
    // getters and setters
    get id() { return this._id; }
    set id(id) {
        return this._id; }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Name is InCorrect!"
        }
    }

    get profile() { return this._profile; }
    set profile(profile) {
        this._profile = profile;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let current = new Date();
        if(startDate > current) {
            throw "Given date is future date";
        } else {
            this._startDate = startDate;
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "Id : " + this.id 
                + ", Name : " + this.name 
                + ", profile : " + this.profile 
                + ", Gender : " + this.gender
                + ", Department : " + this.department
                + ", Salary : " + this.salary 
                + ", StartDate : " + empDate
                + ", Notes : " + this.notes;
    }
}