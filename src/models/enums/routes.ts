export const Routes = [
  {
    name: "Works",
    route: "/works",
    items: [
      { name: "Selected", route: "/works/selected" },
      {
        name: "Architecture",
        route: "/works/architecture",
        items: [
          { name: "Mixed-Use", route: "/works/architecture/mixed" },
          { name: "Residential", route: "/works/architecture/residential" },
          { name: "Health-care", route: "/works/architecture/health" },
          { name: "Office & Retails", route: "/works/architecture/office" },
        ],
      },
      {
        name: "Interior",
        route: "/works/interior",
        items: [
          { name: "Hospitality", route: "/works/interior/hospitality" },
          { name: "Residential", route: "/works/interior/residential" },
          { name: "Entertainment", route: "/works/interior/entertainment" },
          { name: "Religious", route: "/works/interior/religious" },
          { name: "Office & Retails", route: "/works/interior/office" },
        ],
      },
      {
        name: "Ideas",
        route: "/works/ideas",
        items: [
          { name: "Hospitality", route: "/works/ideas/hospitality" },
          { name: "Museum", route: "/works/ideas/museum" },
          { name: "Residential", route: "/works/ideas/residential" },
          { name: "Entertainment", route: "/works/ideas/entertainment" },
          { name: "Mixed-Use", route: "/works/ideas/mixed" },
          { name: "Office & Retails", route: "/works/ideas/office" },
        ],
      },
    ],
  },
  {
    name: "Studio",
    route: "/studio",
    items: [
      { name: "About", route: "/studio/about" },
      {
        name: "People",
        route: "/studio/people",
        items: [{ name: "Namit Rajput", route: "/studio/people/namit" }],
      },
      { name: "Contact", route: "/studio/contact" },
    ],
  },
];
