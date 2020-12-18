    // UC => 8 Setting Event Listner on Salary Range
    let salary = document.querySelector('#salary');
    let output = document.querySelector('.salary-output');
    salary.addEventListener('input', function () {
    output.textContent = salary.value
    });

    // Function to retrieve the data
    function CreateEmployeePayroll() {
        let employeePayroll = new EmployeePayrollData();
        employeePayroll.name = getInputValueById('#name');
        employeePayroll.profilePic = getSelectedValues('[name = profilePic]').pop();
        employeePayroll.gender = getSelectedValues('[name = gender]').pop();
        employeePayroll.department = getSelectedValues('[name = department]');
        employeePayroll.salary = getInputValueById('#salary');
        employeePayroll.note = getInputValueById('#notes');
        let date = getInputValueById('#day') + "-" + getInputValueById('#month') + "-" + getInputValueById('#year');
        employeePayroll.startDate = new Date(date);
        alert(employeePayroll.toString());
        alert("Added Succesfully!!");
        return employeePayroll;
    }
    // Function to Store
    function Store() {
        try {
            let employeePayroll = CreateEmployeePayroll();
        }
        catch(message) {
            alert(message);
            return;
        }
    }
    // Get Input Values
    function getInputValueById(id) {
        let value = document.querySelector(id).value;
        return value;
    }
    // Get Selected Values
    function getSelectedValues(propertyValue) {
        let allItems = document.querySelectorAll(propertyValue);
        let selectedItems = [];
        allItems.forEach(item => {
            if (item.checked)
                selectedItems.push(item.value);
        });
        return selectedItems;
    }
