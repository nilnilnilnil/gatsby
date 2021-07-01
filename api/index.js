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

mailer.sendMail(
    {
      from: ${body.from},
      to: [contactAddress],
      subject:  "[No subject]",
      html: "[No message]",
    },
    function(err, info) {
      if (err) res.send(err)
      res.json({ success: true })
    }
  )

  res.send(`Hello ${body.name}, you just parsed the request body!`);
};
