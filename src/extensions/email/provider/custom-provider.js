// src/extensions/email/providers/custom-provider.ts

export const init = (providerOptions = {}, settings = {}) => {
  return {
    send: async (options) => {
      // Implement your custom email sending logic here
      console.log('Sending email using custom provider');
    },
  };
};
