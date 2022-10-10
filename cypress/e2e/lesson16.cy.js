describe ('API OAuth',() => {

    const generateEmail = 'abcd1@gmail.com'

    it.only('create user', () => {
        const authToken = 'Bearer 94ba828f6efd5eb846a7a615595efb87d03846a88d320b7a77b73dacb435722d'
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: authToken
            },
            body: {
                name: 'Bob',
                gender: 'male',
                email: generateEmail,
                status: 'active'
            }

        }).then((response) => {
            expect(response).to.have.property('status',201)
        }).then((response) => {
            const userID = response.body.data.id;
            // или так
            const {id} = response.body.data
            // или так:
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    Authorization: authToken
                }
            }).then ((responseUser) => {
                expect(responseUser).to.have.property('status',201);
                expect(responseUser.body).to.have.property('email', generateEmail)
            })

        })

    })
})





// Practice

 
describe('booking process', () => {
    it('create user', () => {
    cy.request({
         method: 'POST',
         url: 'https://restful-booker.herokuapp.com/booking',
         body: {
            firstname : "Jim",
            lastname : "Brown",
            totalprice : 111,
            depositpaid : true,
            bookingdates : {
                checkin : "2018-01-01",
                checkout : "2019-01-01"
            },
            additionalneeds : "Breakfast"
        }
    }).then((response) => {
      expect(response).to.have.property('status', 200);
      expect(response.body).to.have.any.keys('bookingid');
      const bookingid = response.body.bookingid;
      cy.log(bookingid);
      cy.request({
      method: 'POST',
         url: 'https://restful-booker.herokuapp.com/auth',
         body: {
          username : "admin",
          password : "password123"
      }
    }).then((responseAuth) =>{
      const token = responseAuth.body.token;
      cy.request({
      method: 'PUT',
         url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
         body: {
          firstname : "Jim",
          lastname : "Brown",
          totalprice : 111,
          depositpaid : true,
          bookingdates : {
              checkin : "2018-01-02",
              checkout : "2019-01-02"
          },
          additionalneeds : "Breakfast"
      },
         headers: {
          Cookie: `token=${token}`
         }
        });
    });
    });
    });
    })