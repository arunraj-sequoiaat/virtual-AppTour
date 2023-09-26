"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
require("../style/VirtualTour.css");
var _tourStep = require("./tourStep");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const VirtualTour = _ref => {
  let {} = _ref;
  const [currentStep, setCurrentStep] = (0, _react.useState)(0);
  const [highlightedElement, setHighlightedElement] = (0, _react.useState)(null);
  const [tourClosed, setTourClosed] = (0, _react.useState)(false);
  const [tourPosition, setTourPosition] = (0, _react.useState)({
    top: 0,
    left: 0
  });
  const tourRef = (0, _react.useRef)(null);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const tourSteps = _tourStep.workflows || [];

  // next button functionality
  const nextStep = () => {
    console.log("currentStep", currentStep);
    if (currentStep < tourSteps.length - 1) {
      const step = tourSteps[currentStep];
      if (step.elementType === "link") {
        // window.location.href = step.nextPage;
        navigate(step.nextPage);
        setCurrentStep(currentStep + 1);
      } else {
        navigate(step.nextElement);
        setCurrentStep(currentStep + 1);
      }
    }
  };
  //back button functionality
  const handleBackButton = (previousPage, previousElement) => {
    if (previousPage) {
      navigate(previousPage);
      setTimeout(() => {
        const stepIndex = tourSteps.findIndex(step => step.elementSelector === previousElement);
        if (stepIndex !== -1) {
          setCurrentStep(stepIndex);
          const elementToHighlight = document.querySelector(previousElement);
          if (elementToHighlight) {
            setHighlightedElement(elementToHighlight);
          }
        }
      }, 100);
    } else {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    }
  };
  const closeTour = () => {
    setTourClosed(true);
    if (highlightedElement) {
      highlightedElement.classList.remove("highlighted");
    }
  };
  //positioning of the tour div according to the element position
  const calculateTourPosition = () => {
    if (highlightedElement) {
      const elementRect = highlightedElement.getBoundingClientRect();
      const tourDiv = tourRef.current;
      const tourRect = tourDiv.getBoundingClientRect();
      const distanceFromElement = 1;
      if (elementRect.left >= tourRect.width + distanceFromElement) {
        setTourPosition({
          top: elementRect.top + window.scrollY,
          left: elementRect.left - tourRect.width - distanceFromElement
        });
        window.scrollTo({
          left: elementRect.left - tourRect.width - distanceFromElement,
          top: elementRect.top + window.scrollY,
          behavior: "smooth"
        });
      } else if (elementRect.right + tourRect.width + distanceFromElement <= window.innerWidth) {
        setTourPosition({
          top: elementRect.top + window.scrollY,
          left: elementRect.right + distanceFromElement
        });
        window.scrollTo({
          left: elementRect.right + distanceFromElement,
          top: elementRect.top + window.scrollY,
          behavior: "smooth"
        });
      } else if (elementRect.top >= tourRect.height + distanceFromElement) {
        setTourPosition({
          top: elementRect.top - tourRect.height - distanceFromElement + window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2
        });
        window.scrollTo({
          top: elementRect.top - tourRect.height - distanceFromElement + window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2,
          behavior: "smooth"
        });
      } else if (elementRect.bottom + tourRect.height + distanceFromElement <= window.innerHeight) {
        setTourPosition({
          top: elementRect.bottom + distanceFromElement + window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2
        });
        window.scrollTo({
          top: elementRect.bottom + distanceFromElement + window.scrollY,
          left: elementRect.left + elementRect.width / 2 - tourRect.width / 2,
          behavior: "smooth"
        });
      } else {
        setTourPosition({
          top: elementRect.top + window.scrollY,
          left: elementRect.left - tourRect.width - distanceFromElement
        });
        window.scrollTo({
          left: elementRect.left - tourRect.width - distanceFromElement,
          top: elementRect.top + window.scrollY,
          behavior: "smooth"
        });
      }
    }
  };
  (0, _react.useEffect)(() => {
    const showStep = () => {
      const step = tourSteps[currentStep];
      const element = document.querySelector(step.elementSelector);
      if (element) {
        calculateTourPosition();
        element.classList.add("highlighted");
        setHighlightedElement(element);
      }
    };
    showStep();
    return () => {
      if (highlightedElement) {
        highlightedElement.classList.remove("highlighted");
      }
    };
  }, [currentStep, tourSteps, highlightedElement]);
  if (tourClosed) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", null, !tourClosed && /*#__PURE__*/_react.default.createElement("div", {
    className: "blurred-overlay"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "virtual-tour ".concat(tourClosed ? "closed" : ""),
    style: {
      top: tourPosition.top,
      left: tourPosition.left
    },
    ref: tourRef
  }, highlightedElement && /*#__PURE__*/_react.default.createElement("div", {
    className: "highlighted-element-info"
  }, highlightedElement.id), /*#__PURE__*/_react.default.createElement("span", {
    className: "close-icon",
    onClick: closeTour
  }, "x"), /*#__PURE__*/_react.default.createElement("div", {
    className: "tour-content"
  }, /*#__PURE__*/_react.default.createElement("p", null, tourSteps[currentStep].content)), /*#__PURE__*/_react.default.createElement("div", {
    className: "tour-navigation"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tour-buttons"
  }, tourSteps[currentStep].hasBackButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "tour-button",
    onClick: () => handleBackButton(tourSteps[currentStep].previousPage, tourSteps[currentStep].previousElement)
  }, tourSteps[currentStep].backButtonLabel || "Back"), currentStep < tourSteps.length - 1 && /*#__PURE__*/_react.default.createElement("button", {
    className: "tour-button",
    onClick: nextStep
  }, tourSteps[currentStep].hasNextButton ? tourSteps[currentStep].nextButtonLabel : "Next")))));
};
var _default = VirtualTour;
exports.default = _default;