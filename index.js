function hexToRGB(hex) {
    
    hex = hex.replace(/^#/, '');

    
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

  function updateColor() {
    const hexInput = document.getElementById('hexInput');
    const colorBox = document.getElementById('colorBox');

    const hexValue = hexInput.value;
    const rgbValue = hexToRGB(hexValue);

    colorBox.style.backgroundColor = `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
  }