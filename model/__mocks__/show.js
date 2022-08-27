class Schema {
  // eslint-disable-next-line class-methods-use-this
  save(callback) {
    return callback(null);
  }
}
Schema.find = () => {
  return {
    lean() {
      return { value: true };
    },
  };
};

Schema.findOneAndUpdate = () => {
  return {
    lean() {
      return {
        data: {
          name: 'game of thrones part 3',
          homepage: 'newhomepage.com',
          created_by: [
            {
              name: 'chuck_lorri',
            },
          ],
          overview: 'this is a tale of epic proportions, for all time',
        },
        isSuccessful: true,
      };
    },
  };
};

Schema.deleteOne = () => {
  return {
    acknowledged: true,
    deletedCount: 1,
  };
};

module.exports = Schema;
