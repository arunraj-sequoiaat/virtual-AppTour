export const tourSteps = [
    {
      elementSelector: "#home",
      content: "This is the name of the author on the Home page",
      elementType: "normal",
      hasBackButton: false,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      nextElement: "#edit",
    },
    {
      elementSelector: "#edit",
      content: "This is the slogan section on the Home page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      nextElement: "#save",
    },
    {
      elementSelector: "#save",
      content: "This is the welcome section on the Home page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      nextElement: "#save-as",
    },
    {
      elementSelector: "#save-as",
      content: "This is the link to join section on the about page",
      elementType: "link",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      nextPage: "/about",
      nextElement: "#highlights",
    },
    {
      elementSelector: "#delete",
      content: "This is the highlight section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      previousPage: null,
      previousElement: "#save-as",
      nextElement: "#open",
    },
    {
      elementSelector: "#open",
      content: "This is the certificates section on the Home page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      previousElement: "#delete",
    },
    {
      elementSelector: "#file",
      content: "This is the why section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      nextPage: null,
    },
    {
      elementSelector: "#zoom",
      content: "This is the home tab on the Home page",
      elementType: "link",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      nextPage: "/home",
      previousPage: "/about",
      previousElement: "#file",
    },
    {
      elementSelector: "#hide",
      content: "This is the company profile section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
      previousPage: "/home",
      previousElement: "#about1",
      nextElement: "#certificates",
    },
    {
      elementSelector: "#download",
      content: "This is the process section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
      previousPage:null,
      previousElement: "#zoom",
      nextPage: null,
    },
    {
      elementSelector: "#image",
      content: "This is the process page section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
    },
    {
      elementSelector: "#heading",
      content: "This is the processed section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
    },
    {
      elementSelector: "#description",
      content: "This is the products section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
      previousPage: null,
      previousElement: "#heading",
      nextPage: null,
    },
    {
      elementSelector: "#heading1",
      content: "This is the  product details section on the About page",
      elementType: "normal",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
    },
    {
      elementSelector: "#descreption1",
      content: "This is the  contact section on the About page",
      elementType: "link",
      hasBackButton: true,
      hasNextButton: true,
      backButtonLabel: "Back",
      nextButtonLabel: "Next",
      buttonAction: "moveToNextStep",
      previousPage: "/products",
      previousElement: "#product-id",
      nextPage: "/contact",
    },
    
  ];
  