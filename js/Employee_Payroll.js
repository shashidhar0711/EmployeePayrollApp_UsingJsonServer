    // UC => 8 Setting Event Listner on Salary Range
    let salary = document.querySelector('#salary');
    let output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
    output.textContent = salary.value
    });

    // Validating Name Using Regex
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
    });

    // Function to retrieve the data
    function CreateEmployeePayroll() {
        let employeePayroll = new EmployeePayrollData();
        employeePayroll.name = getInputValueById('#name');
        employeePayroll.profilePic = getSelectedValues('[name = profilePic]').pop();
        employeePayroll.gender = getSelectedValues('[name = gender]').pop();
        employeePayroll.department = getSelectedValues('[name = department]');
        employeePayroll.salary = getInputValueById('#salary');
        employeePayroll.note = getInputValueById('#note');
        let date = getInputValueById('#day') + "-" + getInputValueById('#month') + "-" + getInputValueById('#year');
        employeePayroll.startDate = new Date(date);
        alert(employeePayroll.toString());
        alert("Added Succesfully!!");
        return employeePayroll;
    }

    function Store() {
        try {
            let employeePayroll = CreateEmployeePayroll();
        }
        catch(message) {
            alert(message);
            return;
        }
    }

    function getInputValueById(id) {
        let value = document.querySelector(id).value;
        return value;
    }

    function getSelectedValues(propertyValue) {
        let allItems = document.querySelectorAll(propertyValue);
        let selectedItems = [];
        allItems.forEach(item => {
            if (item.checked)
                selectedItems.push(item.value);
        });
        return selectedItems;
    }
