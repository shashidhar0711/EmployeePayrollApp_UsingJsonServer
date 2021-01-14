    // UC => 8 Setting Event Listner on Salary Range
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    let salary = document.querySelector('#salary');
    let output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

});
    //let employeePayrollArray = [];
    // Function to retrieve the data
    const CreateEmployeePayroll = () => {
        let employeePayrollData = new EmployeePayrollData();
        try {
            employeePayrollData.name = getInputValueById('#name');
        } catch (e) {
            setTextValue('.text_error', e);
            throw e;
        }
        employeePayrollData.profile = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]');
        employeePayrollData.salary = getInputValueById('#salary');
        employeePayrollData.notes = getInputValueById('#notes');
        let date = getInputValueById('#day') + "-" + getInputValueById('#month') + "-" + getInputValueById('#year');
        employeePayrollData.startDate = new Date(Date.parse(date));
        alert(employeePayrollData.toString());
        alert("Added Succesfully!!");
        return employeePayrollData;
    }
    // Function to Store
    const save = () => {
        try {
            let EmployeePayrollData = CreateEmployeePayroll();
            CreateAndUpdateStorage(EmployeePayrollData);
        }
        catch(e) {
            // alert(message);
            return;
        }
    }
    // Method to store the employee data into the local storage
    function CreateAndUpdateStorage(EmployeePayrollData) {
        let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
        if(employeePayrollList != undefined) {
            employeePayrollList.push(EmployeePayrollData);
        } else {
            employeePayrollList = [EmployeePayrollData];
        } 
        alert(employeePayrollList.toString());
        alert("Added Successfully in local storage!!");
        localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
    }

    // Get Input Values
    const getInputValueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
    }
    // Get Selected Values
    const getSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        let selectedItems = [];
        allItems.forEach(item => {
            if (item.checked)
                selectedItems.push(item.value);
        });
        return selectedItems;
    }

    const resetForm = () => {
        setValue('#name','');
        unsetSelectedValues('[name=profile]');
        unsetSelectedValues('[name=gender]');
        unsetSelectedValues('[name=department]');
        setSalaryValue('#salary','');
        setSalaryValue('.salary-output','');
        setTextValue('#notes','');
        setTextValue('#day','1');
        setTextValue('#month','january');
        setTextValue('#year','2020');
    }

    const unsetSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        allItems.forEach(item => {
            item.checked = false;
        });
    }
    
    const setSalaryValue = (id, value) => {
        let salary = document.querySelector('#salary');
        let output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        const element = document.querySelector(id);
        element.value = value;
    }

    const setTextValue = (id,value) => {
        const element = document.querySelector(id);
        element.value = value;
    }

    const setValue = (id,value) => {
        const element = document.querySelector(id);
        element.value = value;
    }


