class dashboardPage{
getDashboardTitle(){
    return cy.get("[class*=topbar-header-breadcrumb-module]",{timeout:2000})
}
getUserDropdown(){
    return cy.get("[class*=userdropdown-name]",{timeout:2000})
}
getLogoutOption(){
 return cy.xpath('//a[text()="Logout"]',{timeout:2000})
}
}
export default dashboardPage;