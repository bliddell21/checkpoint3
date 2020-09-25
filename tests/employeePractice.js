//test plan available at https://docs.google.com/document/d/1YnG5iNszvWcjRWMLkim4J1mbt7ny4TMvdGG69ksE_D4/edit
var employeeArray= require('../testAssets/employeeNameAsset')
var employeePage={}



module.exports = {
    beforeEach: browser => {
        employeePage=browser.page.employeeManagerPage()
        employeePage
            .navigate()
            .waitForElementPresent("#root")
    },
    after: browser=> {
        employeePage.end()
    },
        
        
 'Add Test': browser => {
     employeeArray.forEach(test=> {
         employeePage.addEmployee(test)
     })
 } ,  

        
    
'Save Changes': browser => {
    employeeArray.forEach(test=> {
        employeePage.editEmployee(test)
    })

},
   
'Cancel Changes Test': browser => {
    employeeArray.forEach(test=> {
        employeePage.cancelChanges(test)
    })

},
   
'Search Test': browser => {
    employeeArray.forEach(test=> {
        employeePage.searchEmployee(test)
    })

},
   
'Delete Test': browser => {
    employeeArray.forEach(test=> {
        employeePage.deleteEmployee(test)
    })

},

}

