export class Utility {
    getUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'local')
            return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";  // required local URL
        else if (envi == 'staging')
            return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        else if (envi == 'qa')
            return "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    }
}