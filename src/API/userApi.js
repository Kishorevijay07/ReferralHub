import man2image from './../images/man2image.jpeg';

export const getUserProfile = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            name: "Kadin Stanton",
            email: "kadinstanton@gmail.com",
            phone: "1234567890",
            avatar: man2image,
          },
        });
      }, 500);
    });
  
  export const updateUserProfile = (data) =>
    new Promise((resolve) => {
      console.log("Updated user:", data);
      setTimeout(() => {
        resolve({
          success: true,
          message: "User profile updated.",
        });
      }, 500);
    });
  