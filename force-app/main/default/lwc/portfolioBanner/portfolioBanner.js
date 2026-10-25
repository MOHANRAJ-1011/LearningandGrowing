import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioBanner extends LightningElement {
    

    linkedinUrl = 'https://www.linkedin.com/in/mohanrajtr'
    githubUrl = 'https://github.com/MOHANRAJ-1011'
    trailheadUrl = 'https://www.salesforce.com/trailblazer/mohtr7 '

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
}