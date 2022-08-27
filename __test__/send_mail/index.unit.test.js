const { handler } = require('../../src/send_mail/index');

const event = {
  detail: {
    operationType: 'update',
    fullDocument: {
      _id: '',
      name: 'game of thrones part 3',
      homepage: 'newhomepage.com',
      created_by: [
        {
          name: 'chuck_lorri',
        },
      ],
      type: 'ty series',
      show_id: 'vFZ6VUq',
      updated_at: '2022-08-27T04:50:55.27Z',
      overview: 'this is a tale of epic proportions, for all time',
    },
    fullDocumentBeforeChange: {
      name: 'game of thrones',
      homepage: 'thrones@gmail.com',
      created_by: [],
      type: 'ty series',
      show_id: 'vFZ6VUq',
      updated_at: '2022-08-27T04:50:55.27Z',
    },
    ns: {
      db: 'trail_balance',
      coll: 'shows',
    },
    updateDescription: {
      updatedFields: {
        created_by: [
          {
            name: 'chuck_lorri',
          },
        ],
        homepage: 'newhomepage.com',
        name: 'game of thrones part 3',
        overview: 'this is a tale of epic proportions, for all time',
      },
      removedFields: [],
      truncatedArrays: [],
    },
  },
};

describe('lambda function should send an email', () => {
  it('sendmail/index', async () => {
    process.env.OUTLOOK_PASSWORD = 'pass';
    process.env.OUTLOOK_EMAIL = 'user';
    const response = await handler(event);
    expect(response.isSuccessful).toBe(true);
  });
  it('sendmail/index /w wrong password', async () => {
    process.env.OUTLOOK_PASSWORD = 'mypass';
    process.env.OUTLOOK_EMAIL = 'myuser';
    const response = await handler(event);
    expect(response.isSuccessful).toBe(false);
  });
});
