export const launchReferralCampaign = async (campaignData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Campaign launched:", campaignData);
      resolve({ status: "ok", message: "Campaign launched successfully!" });
    }, 1000);
  });
};
