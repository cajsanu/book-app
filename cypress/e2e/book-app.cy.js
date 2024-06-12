describe("Book-app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:5173");
  });
  it("front page can be opened", function () {
    cy.contains("OmaKirja");
    cy.contains("Cajsa Nummelin");
  });
  it("navigating to Users-page works", function () {
    cy.contains("Users").click();
    cy.contains("Cajsa");
    cy.contains("Alex");
  });
  it("navigating to a users books works", function () {
    cy.visit("http://localhost:5173/users");
    cy.contains("Cajsa's books").click();
    cy.contains("In order to live");
  });
  it("logging in works", function () {
    cy.get("#username").type("Kekkonen");
    cy.get("#password").type("0123456789");
    cy.get("#signIn").click();
    cy.contains("Welcome Kekkonen");
  });
});
