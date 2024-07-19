describe("Add Product to chat", () => {
    beforeEach(() => {
        cy.visit("https://www.uniqlo.com/th/th/");
        cy.viewport(1920, 1080);
    });
    it("Add Product", () => {
        const data = "airism";
        cy.get('[title="ค้นหา"]').click()
        cy.findByPlaceholderText('ค้นหาสินค้า').type(data);
        cy.get('[aria-label="ค้นหาสินค้า"]').click();
        cy.get('[class="title mb-s search-condition"]').should('contain', data);
        
    });

});
