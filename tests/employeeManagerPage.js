var employeeManagerCommands = {
    editEmployee: function(data){
            this
                .useXpath()
                .click(`//li[text()="${data.Name}"]`)
                .pause(2000)
                .clearValue('@phoneField')
                .setValue('@phoneField', "1234567897")
                .clearValue('@titleField')
                .setValue('@titleField', "Bacon")
                .click('@saveButton')
                .click('@otherEmployee')
                .useXpath()
                .click(`//li[text()="${data.Name}"]`)
                .useCss()
                .pause(1000)
                .verify.valueContains('@nameField',data.Name)
                .verify.valueContains('@phoneField',"1234567897")
                .verify.valueContains('@titleField',"Bacon")
                return this
    },
    cancelChanges: function(data) {
        this
        .useXpath()
         .click(`//li[text()="${data.Name}"]`)
        .useCss()
        .clearValue('@nameField')
        .setValue('@nameField', "charlie")
        .click('@cancelButton')
        .expect.element('@nameField').value.to.not.contain("Charlie")
        return this


    },
    searchEmployee: function(data){
        this
        .setValue('@searchField',data.Name)
        .verify.containsText('@searchResults', data.Name)
        .click('@clearButton')
        .verify.containsText('@searchResults', data.Name)
        .verify.containsText('@searchResults', 'Mike Wheeler')
        return this
    },
    deleteEmployee: function(data){
        this.useXpath()
        this.click(`//li[text()="${data.Name}"]`)
        this.useCss()
        .click('@deleteButton')
        this.api.acceptAlert()
        this.expect.element('@searchResults').text.to.not.contain(data.Name)
        return this

         
    },
    addEmployee: function(data){
        this
        .click('@addButton')
        .click('@newEmployee')
        .clearValue('@nameField')
        .setValue('@nameField',data.Name)
        .clearValue('@phoneField')
        .setValue('@phoneField',data.phone)
        .clearValue('@emailField')
        .setValue('@emailField', data.email)
        .clearValue('@titleField')
        .setValue('@titleField',data.title)
        .pause(2000)
        .click('@saveButton')
        .click('@otherEmployee')
        this.useXpath()
        this.click(`//li[text()="${data.Name}"]`)
        this.useCss()
        .verify.valueContains('@nameField',data.Name)
        .verify.valueContains('@phoneField',data.phone)
        .verify.valueContains('@emailField',data.email)
        .verify.valueContains('@titleField',data.title)



}
}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManagerCommands],
    elements: {
        versionNumber: 'footer',
        addButton: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        emailField: 'input[name="emailEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        searchField: 'input[name="searchBox"]',
        clearButton: 'button[name="clearSearch"]',
        deleteButton:'button[name="delete"]',
        cancelButton: 'button[name="cancel"]',
        searchResults: '.listContainer',
        otherEmployee: {
            selector: '//li[text()="Mike Wheeler"]',
            locateStrategy: 'xpath'
        }
    }
}

