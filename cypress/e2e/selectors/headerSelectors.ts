export const getHeaderSelectors = () => {
  const getHeaderContext = () => cy.getByDataElementorType("header");
  const getNavbar = () => getHeaderContext().children("section").eq(2); // should have a better selector
  return {
    get logo() {
      return getHeaderContext().find("a");
    },

    get navbar() {
      return getNavbar();
    },

    getNaveBarItemsTitles() {
      return getNavbar()
        .find("li")
        .then((cells) =>
          cells
            .map((_, cell) => cell.textContent?.trim())
            .toArray()
            .filter(Boolean)
        );
    },
  };
};
