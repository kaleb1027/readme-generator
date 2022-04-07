// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = [
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  ]
  switch (license) {
    case 'Apache License 2.0':
      return badges[0]
    case 'ISC':
      return badges[1]
    case 'MIT':
      return badges[2]
    case 'none':
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    Apache: "https://www.apache.org/licenses/LICENSE-2.0",
    ISC: "https://opensource.org/licenses/ISC",
    MIT: "https://opensource.org/licenses/MIT"
  }

  switch (license){
    case 'Apache License 2.0':
      return links.Apache;
    case 'ISC':
      return links.ISC;
    case 'MIT':
      return links.MIT;
    case 'none':
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const agreements = {
    MIT: `Copyright <YEAR> <COPYRIGHT HOLDER>

          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
          to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
          and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
          WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
