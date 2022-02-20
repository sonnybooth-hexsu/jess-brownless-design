/// <reference types="cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("/");
    cy.get("main");
    cy.injectAxe();
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
