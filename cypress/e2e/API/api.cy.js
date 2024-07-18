describe("API Test ", () => {

  var id;

  it("Get Request", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        //commands
       cy.expect_status_200(response)
        response = response.body[4]
        id = response.id
        cy.log('id',id);
        cy.log("Get success");
      }
    );
  });
  it("Post Request", () => {
    cy.request({
      method: "Post",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "API",
        body: "Cypress",
        userId: 9,
      },
    }).then((response) => {
      expect(response.status).to.be.oneOf([201, 202]);
      expect(response.body.title).to.eql("API");
      expect(response.body.body).to.eql("Cypress");
      expect(response.body.userId).to.eql(9);
      cy.log(JSON.stringify(response.body));
      cy.log("Post success");
      
    });
   
  });
  it("Put Request", () => {
    cy.log(id);
    cy.request({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      body: {
        title: "bbbb",
        body: "yyyy",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.title).to.eql("bbbb")
      expect(response.body.body).to.eql("yyyy")
      expect(response.body.userId).to.eql(1)
      cy.log(JSON.stringify(response.body));
      cy.log("Update successful:");
    });
  });
  it('Delete Request', () => {
    cy.request({
      method: 'Delete',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    }).then((response)=>{
      expect(response.status).to.equal(200);
      cy.log("Delete successful:");
    });
    
  });
});
