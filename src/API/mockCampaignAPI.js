// mockCampaignAPI.js

let campaigns = [
    {
      id: 1,
      name: 'Summer Referral Program',
      dateRange: '5/31/2024 - 8/30/2024',
      referrals: '245',
      conversion: '32%',
      roi: '287%',
      status: 'Active',
      tip: 'Increase reward by 10% to boost conversion rates during peak season',
    },
    {
      id: 2,
      name: 'Early Bird Special',
      dateRange: '8/20/2024 - 9/19/2024',
      referrals: '300',
      conversion: '40%',
      roi: '320%',
      status: 'Inactive',
      tip: 'Extend your campaign! Strong engagement suggests higher conversions with more time.',
    },
  ];
  
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  
  export const getCampaigns = async () => {
    await delay(300);
    return { status: 'ok', data: campaigns };
  };
  
  export const createCampaign = async (newCampaign) => {
    await delay(300);
    const id = Date.now();
    campaigns.push({ id, ...newCampaign });
    return { status: 'ok' };
  };
  
  export const updateCampaign = async (id, updatedData) => {
    await delay(300);
    campaigns = campaigns.map((c) => (c.id === id ? { ...c, ...updatedData } : c));
    return { status: 'ok' };
  };
  
  export const deleteCampaign = async (id) => {
    await delay(300);
    campaigns = campaigns.filter((c) => c.id !== id);
    return { status: 'ok' };
  };
  