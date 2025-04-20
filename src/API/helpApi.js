export const sendHelpRequest = (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Your message has been received. Our team will get back to you shortly.',
          data: formData,
        });
      }, 1000); // simulate 1 second delay
    });
  };
  