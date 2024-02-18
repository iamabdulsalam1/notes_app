const Notes = require("../models/Notes");
const mongoose = require("mongoose");

/**
 * GET /
 * Dashboard
 */
exports.dashboard = async (req, res) => {
  try {
    await Note.interMany([
      {
        user: "65c339ac2cb0d7dccfc96f9b",
        title: "Node js tutorial",
        body: "Node js is an Open source enviroment.",
        createdAt: "2024-02-07T08:05:00.593+00:00",
      },
    ]);
  } catch (error) {}

  const locals = {
    title: "Dashboard - My Notes",
    description: "Free NodeJs Notes app",
  };
  res.render("dashboard/index", {
    userName: req.user.firstName,
    locals,
    layout: "../views/layouts/dashboard",
  });
};
