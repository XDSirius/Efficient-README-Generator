// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({creation,project,languages,goal,installation,link,usage,credits,licenses}) {
  return `# ${project} ![license](${renderLicenseBadge(licenses)})
  ${creation} .We used ${languages} to completete this project. Our ${goal}.
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ${link}
  ## Credits
  ${credits}
  ## Licenses
  ${licenses}
  `
}

module.exports = generateMarkdown;
