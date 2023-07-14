const ResponsiveWrapper = (Component) =>
  function HOC(props) {
    // Define responsive styles based on viewport width
    const getResponsiveStyles = (viewportWidth) => {
      if (viewportWidth < 768) {
        // Styles for small screens (e.g., mobile devices)
        return {
          fontSize: '14px',
          padding: '10px',
        };
      } else if (viewportWidth >= 768 && viewportWidth < 1024) {
        // Styles for medium screens (e.g., tablets)
        return {
          fontSize: '16px',
          padding: '20px',
        };
      } else {
        // Styles for larger screens (e.g., desktops)
        return {
          fontSize: '18px',
          padding: '30px',
        };
      }
    };

    // Get the current viewport width
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Calculate responsive styles based on the viewport width
    const responsiveStyles = getResponsiveStyles(viewportWidth);

    // Apply responsive styles to the wrapped component
    const wrappedComponentProps = {
      style: responsiveStyles,
      ...props,
    };

    return <Component {...wrappedComponentProps} />;
  };

export default ResponsiveWrapper;
