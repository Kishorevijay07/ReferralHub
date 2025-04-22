// src/API/subscriptionApi.js

export const getSubscriptionDetails = async () => {
  // Simulate an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          currentPlan: {
            name: "Basic",
            description: "A simple start for everyone",
            price: "$25",
            isPopular: true,
            renewDate: "May 09, 2025",
            daysUsed: 12,
            totalDays: 30,
          },
          paymentMethods: ["card", "paypal"],
          cards: [
            {
              name: 'Tom McBride',
              mask: '**** **** 9856',
              color: 'bg-red-500',
              label: 'Primary',
              expires: '12/26',
            },
            {
              name: 'Mildred Wagner',
              mask: '**** **** 5896',
              img: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
              expires: '10/27',
            },
          ],
          billingHistory: [
            { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Pending", color: "bg-red-100 text-red-500" },
            { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Failed", color: "bg-orange-100 text-orange-500" },
            { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid", color: "bg-green-100 text-green-600" },
            { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid", color: "bg-green-100 text-green-600" },
            { plan: "Standard Plan", amount: "$25", date: "28/09/2024", status: "Paid", color: "bg-green-100 text-green-600" },
          ]
        }
      });
    }, 400); // Simulate delay
  });
};
