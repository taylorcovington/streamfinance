import { testData } from "../../../test/seed/data";
import { request, graphql } from "../../../test/request";

describe(`currentUser`, () => {
  it(`should return null when unauthenticated`, async () => {
    expect(
      await request(
        graphql`
          {
            currentUser {
              id
            }
          }
        `
      )
    ).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "currentUser": null,
          },
        }
    `);
  });

  it(`should return the current user data when authenticated`, async () => {
    expect(
      await request(
        graphql`
          {
            currentUser {
              id
              name
              email
              role
            }
          }
        `,
        {
          context: {
            user: testData.users[0],
          },
        }
      )
    ).toMatchInlineSnapshot(`
          Object {
            "data": Object {
              "currentUser": Object {
                "email": "test@test.com",
                "id": "test",
                "name": "Tester",
                "role": "USER",
              },
            },
          }
      `);
  });
});

describe(`updateUser`, () => {
  it(`should update the user's name and email`, async () => {
    // Right name initially
    expect(
      await request(
        graphql`
          {
            currentUser {
              id
              name
              email
            }
          }
        `,
        {
          context: {
            user: testData.users[0],
          },
        }
      )
    ).toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "currentUser": Object {
            "email": "test@test.com",
            "id": "test",
            "name": "Tester",
          },
        },
      }
    `);

    // Update name
    expect(
      await request(
        graphql`
          mutation updateUser($userId: String!) {
            updateUser(
              userId: $userId
              name: "New name"
              email: "newemail@test.com"
            ) {
              id
              name
              email
            }
          }
        `,
        {
          context: {
            user: testData.users[0],
          },
          variables: {
            userId: testData.users[0].id,
          },
        }
      )
    ).toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "updateUser": Object {
            "email": "newemail@test.com",
            "id": "test",
            "name": "New name",
          },
        },
      }
    `);

    // Updated name
    expect(
      await request(
        graphql`
          {
            currentUser {
              id
              name
              email
            }
          }
        `,
        {
          context: {
            user: testData.users[0],
          },
        }
      )
    ).toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "currentUser": Object {
            "email": "newemail@test.com",
            "id": "test",
            "name": "New name",
          },
        },
      }
    `);
  });
});
