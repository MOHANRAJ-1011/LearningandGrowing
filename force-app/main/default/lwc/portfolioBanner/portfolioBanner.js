import { LightningElement, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
export default class PortfolioBanner extends LightningElement {
    

    linkedinUrl = 'https://www.linkedin.com/in/mohanrajtr'
    githubUrl = 'https://github.com/MOHANRAJ-1011'
    trailheadUrl = 'https://www.salesforce.com/trailblazer/mohtr7 '

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;

    recordId = 'a09dM00000a6lnXQAQ';
    @wire(getRecord, { recordId: '$recordId', fields: [FULLNAME, COMPANY_NAME, COMPANY_LOCATION, DESIGNATION] })
    portfolioRecord;

    get fullName() {
        return getFieldValue(this.portfolioRecord.data, FULLNAME);
    }

    get companyName() {
        return getFieldValue(this.portfolioRecord.data, COMPANY_NAME);
    }

    get companyLocation() {
        return getFieldValue(this.portfolioRecord.data, COMPANY_LOCATION);
    }

    get designation() {
        return getFieldValue(this.portfolioRecord.data, DESIGNATION);
    }
}