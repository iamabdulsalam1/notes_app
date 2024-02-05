/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: " My Notes",
    description: "Free NodeJs Notes app",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

/**
 * GET /
 * About
 */
exports.about = async (req, res) => {
  const locals = {
    title: " About - My Notes",
    description: "Free NodeJs Notes app",
  };
  res.render("about", locals);
};
