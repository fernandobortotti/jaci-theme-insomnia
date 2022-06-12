module.exports = {
  name: "jaci",
  displayName: "jaci",
  theme: {
    background: {
      default: "#160b17", // primary background color
      success: "#85dc5b", // POST request, 200 OK, parameter names
      notice: "#FAE3B0", // PATCH request
      warning: "#d35644", // PUT request
      danger: "#ff0000", // DELETE request
      surprise: "#ca61cb", // accent (Dashboard link, GET request,
      // SEND button, branch button, add plugin button)
      info: "#5ADBC9", // OPTIONS and HEAD request
    },
    foreground: {
      default: "#D9E0EE", // primary font color
      success: "#08070d", // secondary font color for success background
      notice: "#08070d", // secondary font color for notice background
      warning: "#08070d", // secondary font color for warning background
      danger: "#08070d", // secondary font color for danger background
      surprise: "#08070d", // secondary font color for surprise background
      info: "#08070d", // secondary font color for info background		},
    },
    highlight: {
      default: "#d3d1d3", // sidebar highlight color
    },
    // The styles object targets sub-components of the Insomnia application.
    styles: {
      sidebar: {
        background: {
          default: "#150c16", // sidebar background color
        },
      },
      dialog: {
        background: {
          default: "#120912",
        },
      },
      transparentOverlay: {
        background: {
          default: "rgba(10, 3, 46, 0.2)",
        },
      },
    },
  },
};
