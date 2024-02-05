/**
 * GET /
 * Dashboard
 */
exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard - My Notes",
    description: "Free NodeJs Notes app",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
