# Avatar Badge Validator - Usage Documentation

The Avatar Badge Validator is a JavaScript project designed to validate and convert avatar badges. Follow the instructions below to integrate and use the provided functions in your project.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/LeticiaAires/RnD-Software-Engineer-Internship-.git
   ```

2. **Install Dependencies:**
   ```
   npm install jpgjs canvas
   ```

## Using the Functions

1. **validateBadge:**
   - Takes no arguments.
   - Retrieves the input element with the id 'badgeInput'.
   - Extracts the first file from the input.
   - Retrieves the result div with the id 'result'.
   - If no file is selected, displays an error message in the result div.
   - Tries to convert the selected file to PNG format using `convertToPNG`.
   - Validates the badge using `badgeValidation`.
   - Displays appropriate messages in the result div based on the validation result.

2. **convertToPNG(file):**
   - Takes a file as an argument.
   - Returns a Promise that resolves to a Uint8Array representing the PNG image.
   - Reads the file using `FileReader` and converts it to a data URL.
   - Creates an image element and sets its source to the data URL.
   - Draws the image on a canvas and converts the canvas to a PNG blob.
   - Reads the blob as an ArrayBuffer and resolves the promise with the resulting Uint8Array.

3. **badgeValidation(pngImage):**
   - Takes a Uint8Array representing a PNG image as an argument.
   - Validates the badge based on its size, circle, happiness (color brightness), and contrast.
   - Displays appropriate error alerts using `alert` if any validation checks fail.
   - Returns `true` if the badge is valid, `false` otherwise.

4. **badgeSizeCheck(png):**
   - Takes a Uint8Array representing a PNG image as an argument.
   - Checks if the width and height of the image are both 512 pixels.
   - Returns `true` if the size is correct, `false` otherwise.

5. **createCanvasAndDrawImage(pngImage):**
   - Takes a Uint8Array representing a PNG image as an argument.
   - Creates a canvas with dimensions 512x512 and draws the PNG image on it.
   - Returns the 2D rendering context of the canvas.

6. **badgeCircleCheck(ctx):**
   - Takes a 2D rendering context of a canvas as an argument.
   - Checks if the non-transparent pixels form a circle within the canvas.
   - Returns `true` if the circle is within the canvas bounds, `false` otherwise.

7. **verifyHappiness(ctx):**
   - Takes a 2D rendering context of a canvas as an argument.
   - Calculates the average brightness of the pixels in the image.
   - Returns `true` if the average brightness is above a threshold, `false` otherwise.

8. **verifyContrast(ctx):**
   - Takes a 2D rendering context of a canvas as an argument.
   - Calculates the average contrast between adjacent pixels in the image.
   - Returns `true` if the average contrast is above a threshold, `false` otherwise.

## License

This project is licensed under the [Apache License](LICENSE). See the [LICENSE](LICENSE) file for details.

---

For any questions or issues, please reach out to us. Happy coding! 🚀
```

Feel free to customize this documentation further based on the specific features and functionalities of your project.
