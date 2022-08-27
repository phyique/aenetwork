const createTransport = (values) => {
  if (values.auth.user !== 'user' && values.auth.pass !== 'pass') {
    return {};
  }
  return {
    sendMail: async (opts) => opts,
  };
};

module.exports = { createTransport };
