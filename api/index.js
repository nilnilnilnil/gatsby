module.exports = async (req, res) => {
  const { body } = req;
  const contactAddress = "baixiejia@hotmail.com"

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: 'xiejiabai@gmail.com',
    pass: 'u87441194',
  },
})

mailer.sendMail(
    {
      from: ${body.from},
      to: contactAddress,
      subject:'test',
      html:'test',
    }
  )

  res.send(`Hello ${body.from}!!!!`);
};
