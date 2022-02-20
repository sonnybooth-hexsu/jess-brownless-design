/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.viewport("macbook-13"); // Set viewport to 375px x 667px
    cy.visit("/");
  });

  it("Open treatments nav", () => {
    cy.get("[data-cy=subLinkMenu-Treatments]").click();
    cy.get("[data-cy=subLinkViewAll-Treatments]").click();
  });
});
