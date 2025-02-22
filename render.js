document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('filePath');

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      // Create a URL for the selected file
      const objectUrl = URL.createObjectURL(file);

      // Navigate to viewer.html with the file URL as a query parameter
      window.location.href = `viewer.html?file=${encodeURIComponent(objectUrl)}`;
    } else {
      alert('Please select a valid PDF file.');
    }
  });
});