# Avatar Badge Validator - Usage Documentation

The Avatar Badge Validator is a JavaScript project designed to validate and convert avatar badges. Follow the instructions below to integrate and use the provided functions in your project.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/LeticiaAires/R-D-Software-Engineer-Internship-.git
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

## Using the Functions

### Badge Validator Function

#### Function: `validateBadge(imagePath: string): boolean`

The `validateBadge` function takes the path to a PNG image as input and verifies that the badge meets the specified criteria:

- Size: 512x512 pixels
- Non-transparent pixels confined within a circular region
- Colors evoke a "happy" feeling

**Example:**
```javascript
const { validateBadge } = require('./src/badgeValidator');

const imagePath = 'path/to/your/badge.png';
const isValid = validateBadge(imagePath);

console.log(`Badge is valid: ${isValid}`);
```

### Image Converter Function

#### Function: `convertToBadge(imagePath: string): object`

The `convertToBadge` function converts an image of any format into the specified badge object.

**Example:**
```javascript
const { convertToBadge } = require('./src/imageConverter');

const imagePath = 'path/to/your/image.jpg';
const badgeObject = convertToBadge(imagePath);

console.log('Badge Object:', badgeObject);
```

## Running Tests

Ensure the correctness of the functions by running the provided test suite:

```bash
npm test
```
## License

This project is licensed under the [Apache License](LICENSE). See the [LICENSE](LICENSE) file for details.

---

For any questions or issues, please reach out to us. Happy coding! 🚀
```

Feel free to customize this documentation further based on the specific features and functionalities of your project.
