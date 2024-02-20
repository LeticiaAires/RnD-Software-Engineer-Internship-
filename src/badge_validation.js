async function validateBadge() {
    const input = document.getElementById('badgeInput');
    const file = input.files[0];
    const resultDiv = document.getElementById('result');
  
    if (!file) {
      resultDiv.innerHTML = '<p style="color: red;">Please select an image file.</p>';
      return;
    }
  
    try {
      const pngImage = await convertToPNG(file);
      const isValidBadge = await badgeValidation(pngImage);
  
      if (isValidBadge) {
        resultDiv.innerHTML = '<p style="color: green;">The badge is good!</p>';
      } else {
        resultDiv.innerHTML = '<p style="color: red;">Invalid badge!</p>';
      }
    } catch (error) {
      console.error('Error validating badge:', error);
      resultDiv.innerHTML = '<p style="color: red;">An error occurred while validating the badge.</p>';
    }
  }
  
  async function convertToPNG(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function () {
        const img = new Image();
        img.src = this.result;
  
        img.onload = function () {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.toBlob((blob) => {
            const reader = new FileReader();
            reader.onloadend = function () {
              resolve(new Uint8Array(reader.result));
            };
            reader.readAsArrayBuffer(blob);
          }, 'image/png');
        };
      };
  
      reader.onerror = function (error) {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }
  
  async function badgeValidation(pngImage) {
    try {
      let hasError = false;
  
      if (!badgeSizeCheck(pngImage)) {
        alert('Wrong size!');
        hasError = true;
      }
  
      const ctx = createCanvasAndDrawImage(pngImage);
  
      if (!hasError && !badgeCircleCheck(ctx)) {
        alert('Circle does not fit!');
        hasError = true;
      }
  
      if (!hasError && !verifyHappiness(ctx)) {
        alert('Not bright and vibrant colors!');
        hasError = true;
      }
  
      if (!hasError && !verifyContrast(ctx)) {
        alert('Low contrast!');
        hasError = true;
      }
  
      return !hasError;
    } catch (error) {
      console.error('Error validating badge:', error);
      return false;
    }
  }
  
  function badgeSizeCheck(png) {
    const width = new DataView(png.buffer).getUint32(16);
    const height = new DataView(png.buffer).getUint32(20);
  
    if (width !== 512 || height !== 512) {
      return false;
    } else {
      return true;
    }
  }
  
  function createCanvasAndDrawImage(pngImage) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
  
    const imageData = ctx.createImageData(512, 512);
    imageData.data.set(pngImage);
    ctx.putImageData(imageData, 0, 0);
  
    return ctx;
  }
  
  function badgeCircleCheck(ctx) {
    const imageDataCheck = ctx.getImageData(0, 0, 512, 512);
    let minX = 512;
    let minY = 512;
    let maxX = 0;
    let maxY = 0;
  
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const pixelIndex = (y * 512 + x) << 2;
        const alpha = imageDataCheck.data[pixelIndex + 3];
  
        if (alpha > 0) {
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    }
  
    const radius = Math.max((maxX - minX) / 2, (maxY - minY) / 2);
  
    if (radius <= 512 / 2 && radius <= 512 / 2) {
      return true;
    } else {
      return false;
    }
  }
  
  function verifyHappiness(ctx) {
    const imageData = ctx.getImageData(0, 0, 512, 512);
    let totalBrightness = 0;
  
    for (let i = 0; i < imageData.data.length; i += 4) {
      const red = imageData.data[i];
      const green = imageData.data[i + 1];
      const blue = imageData.data[i + 2];
  
      const brightness = (red + green + blue) / 3;
      totalBrightness += brightness;
    }
  
    const averageBrightness = totalBrightness / (imageData.data.length / 4);
    const brightnessThreshold = 5;
  
    if (averageBrightness > brightnessThreshold) {
      return true;
    } else {
      return false;
    }
  }
  
  function verifyContrast(ctx) {
    const imageData = ctx.getImageData(0, 0, 512, 512);
    let totalContrast = 0;
  
    for (let y = 0; y < 511; y++) {
      for (let x = 0; x < 511; x++) {
        const pixelIndex = (y * 512 + x) << 2;
        const nextPixelIndex = ((y + 1) * 512 + x + 1) << 2;
  
        const brightness = (
          imageData.data[pixelIndex] +
          imageData.data[pixelIndex + 1] +
          imageData.data[pixelIndex + 2]
        ) / 3;
  
        const nextBrightness = (
          imageData.data[nextPixelIndex] +
          imageData.data[nextPixelIndex + 1] +
          imageData.data[nextPixelIndex + 2]
        ) / 3;
  
        const contrast = Math.abs(brightness - nextBrightness);
        totalContrast += contrast;
      }
    }
  
    const averageContrast = totalContrast / (511 * 511);
    const contrastThreshold = 5;
  
    if (averageContrast > contrastThreshold) {
      return true;
    } else {
      return false;
    }
  }