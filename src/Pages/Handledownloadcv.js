import React from 'react'

    const handleDownloadCV = () => {
        // Simple confirmation dialog
        if(window.confirm('Do you want to download the resume?')) {
          // Create temporary link
          const link = document.createElement('a');
          link.href = '/resume.pdf'; // Path to your PDF in public folder
          link.download = 'Smta Patil_resume.pdf'; // Set desired filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }

export default handleDownloadCV