exports.getIndex = (req, res) => {
  res.status(200).render("index", {
    title: "Homepage",
  });
};
