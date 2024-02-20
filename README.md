# Avatar Badge Validator

JavaScript project designed to seamlessly validate and convert avatar badges. Our aim is to offer users an effortless solution for uploading badges that meet specific criteria. The codebase is structured for readability and maintainability.

## Table of Contents

- [Introduction](#avatar-badge-validator)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [License](#license)

## Features

1. **Badge Validator Function:**
   - JavaScript function to validate avatar badges.
     - Ensures size is 512x512 pixels.
     - Confines non-transparent pixels within a circular region.
     - Evaluates colors for a "happy" feeling.

2. **Image Converter Function:**
   - Parallel function to convert images of any format into the specified badge object.

3. **Clean Repository Structure:**
   - Organized directory structure for clarity.
   - Well-documented code for ease of understanding.

4. **Test Suite:**
   - Comprehensive test suite for validating the correctness of functions.

## Getting Started

### Installation

Clone the repository:

```
git clone https://github.com/LeticiaAires/RnD-Software-Engineer-Internship-.git
````
Install dependencies:
````
npm install
to be updated
````
### Usage
Integrate the basge validator and image converter functions into your project. Here's a quick example:
````
// Example code
const { validateBadge, convertToBadge } = require('avatar-badge-validator');

// code here...
````
## License
This project is licensed under the [Apache License 2.0.](LICENSE) See the [LICENSE](LICENSE) file for details.