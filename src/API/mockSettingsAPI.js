// mockSettingsAPI.js

let promoterSettings = {
    reward: '10%',
    referralLimit: '100',
  };
  
  let leadsSettings = {
    captureSource: 'All Channels',
    autoAssign: true,
  };
  
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  
  export const getPromoterSettings = async () => {
    await delay(200);
    return { status: 'ok', data: promoterSettings };
  };
  
  export const updatePromoterSettings = async (updated) => {
    await delay(200);
    promoterSettings = { ...promoterSettings, ...updated };
    return { status: 'ok' };
  };
  
  export const getLeadsSettings = async () => {
    await delay(200);
    return { status: 'ok', data: leadsSettings };
  };
  
  export const updateLeadsSettings = async (updated) => {
    await delay(200);
    leadsSettings = { ...leadsSettings, ...updated };
    return { status: 'ok' };
  };
  