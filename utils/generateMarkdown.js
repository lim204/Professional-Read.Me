// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'None'){
    return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;

  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "None"){
    return `## [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== "None")
  {return `# License \nThis project is licensed under the ${license} license.`;
  } 
  return ""; 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
## Description
  
${data.description}


## Table of Content

  - [Installation](#installation)

  - [Usage](#usage)

  - ${renderLicenseLink(data.license)}

  - [Credits](#credits)

  - [Test](#test)

  - [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage

${data.usage}

## Credits

${data.contribution}

## Test
\`\`\`
${data.test}
\`\`\`
${renderLicenseSection(data.license)}

## Questions

If you have questions about the repo, open an issue or contact at ${data.email
}. You can find more of my worj at [${data.github}](https://github.com/${data.github
}/).


`;
}

module.exports = generateMarkdown;
