module.exports = async (req, res) => {
  const { body } = req;
  const contactAddress = "baixiejia@hotmail.com"

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: xiejiabai,
    pass: u87441194,
  },
})

  res.send(`Hello ${body.name}, you just parsed the request body!`);
};
