import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

const Intro = ({ steps }) => {
  const introInstance = useRef(null);

  useEffect(() => {
    introInstance.current = introJs();

    const startIntro = () => {
      introInstance.current.setOptions({ steps });
      introInstance.current.start();
    };

    startIntro();

    return () => {
      introInstance.current.exit();
    };
  }, [steps]);

  return null;
};

Intro.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Intro;

  