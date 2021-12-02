class DatePickerObject {
    /**
     * Navigate one year page back
     */
    getNavigateYearBack(){
        return cy.get('.vc-grid-cell-col-1 > .vc-nav-arrow > .vc-svg-icon')
    }

    /**
     * Navigate one year page forward
     */
    getNavigateYearForward(){
        return cy.get('.vc-grid-cell-col-3 > .vc-nav-arrow > .vc-svg-icon')
    }

    /**
     * Navigate one month page back
     */
    getNavigateMonthBack(){
        return cy.get(':nth-child(1) > .vc-svg-icon')
    }

    /**
     * Navigate one month page forward
     */
    getNavigateMonthForward(){
        return cy.get(':nth-child(2) > .vc-svg-icon')
    }

    /**
     * Retrieve the day section
     */
    getDay(){
        // return cy.xpath("//*[@class='vc-w-full vc-relative']")
        return cy.get('.vc-pane > .vc-grid-container')
    }

    /**
     * Select the desired day
     */
    setDay(day){
        this.getDay().contains(day).click()
    }

    /**
     * Select the desired month
     * @param {str_month} desired month to be selected
     */
    setMonth(str_month){
        let int_month = parseInt(str_month)
        switch(int_month.valueOf()) {
            case 1:
            case 2:
            case 3:
                cy.get('.vc-grid-cell-row-1.vc-grid-cell-col-'+ (int_month) + ' > .vc-w-12').click()
                break;
            case 4:
            case 5:
            case 6:
                cy.get('.vc-grid-cell-row-2.vc-grid-cell-col-'+ (int_month - 3) + ' > .vc-w-12').click()
                break;
            case 7:
            case 8:
            case 9:
                cy.get('.vc-grid-cell-row-3.vc-grid-cell-col-'+ (int_month - 6) + ' > .vc-w-12').click()
                break;
            case 10:
            case 11:
            case 12:
                cy.get('.vc-grid-cell-row-4.vc-grid-cell-col-'+ (int_month - 9) + ' > .vc-w-12').click({force: true})
                break;
            default:
                cy.log('Please correct your month input')
        }
    }

    /**
     * Retrieve the year section
     */
    getYear(){
        cy.get('.vc-title').click()
        cy.get('.vc-nav-title').click()
        return cy.get('.vc-popover-content')
    }

    /**
     * Select the desired year
     * @param {year} desired year to be selected
     */
    setYear(year){
        if(year < 2016){
            this.getYear()
            this.getNavigateYearBack().click()
        } else if (year > 2027) {
            this.getYear()
            this.getNavigateYearForward().click()
        }
        this.getYear().contains(year).click()
    }

    /**
     * Convert month number to its matched month name
     * @param {month} desired month to be converted
     */
    convertMonthNumberToName(str_month){
        let int_month = parseInt(str_month)
        let result
        switch(int_month.valueOf()) {
            case 1:
                result = 'Jan'
                break;
            case 2:
                result = 'Feb'
                break;
            case 3:
                result = 'Mar'
                break;
            case 4:
                result = 'Apr'
                break;
            case 5:
                result = 'May'
                break;
            case 6:
                result = 'Jun'
                break;
            case 7:
                result = 'Jul'
                break;
            case 8:
                result = 'Aug'
                break;
            case 9:
                result = 'Sep'
                break;
            case 10:
                result = 'Oct'
                break;
            case 11:
                result = 'Nov'
                break;
            case 12:
                result = 'Dec'
                break;
            default:
                cy.log('Please correct your month input')
        }
        return result
    }

    /**
     * Extract day, month and year from a given date in format of DD.MM.YYYY
     * @param date
     * @returns {{day, month, year}}
     */
    extractDayMonthYear(date) {
        let day = date.slice(0, date.indexOf('.'))
        let month = date.slice(date.indexOf('.') + 1, date.indexOf('.') + 3)
        let year = date.slice(date.lastIndexOf('.') + 1, date.lastIndexOf('.') + 5)
        cy.log('The desired day is: ' + day + ', Month: '+ month + ', Year: '+ year)
        return {day, month, year};
    }

    /**
     * Return weekday of today
     *
     * @returns weekday name in three letters
     */
    getTodayWeekdayName() {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        let today = new Date()
        return days[today.getDay() - 1];
    }

    /**
     * Return weekday of today
     * @param  date to evaluate its weekday name
     * @returns weekday name in three letters
     */
    getWeekdayNameForDate(date) {
        let {day, month, year} = this.extractDayMonthYear(date)
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const d = new Date(month + ' ' + day + ', ' + year);
        return days[d.getDay() - 1]
    }
}

export default DatePickerObject;