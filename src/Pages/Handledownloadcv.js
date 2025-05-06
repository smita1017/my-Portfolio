import React from 'react'
const handleDownloadCV = () => {
  if (window.confirm('Do you want to download the resume?')) {
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + 'Smita_Patil_resume.pdf';
    link.download = 'Smita_Patil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};


export default handleDownloadCV