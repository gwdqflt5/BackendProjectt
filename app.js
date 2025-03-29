const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const customerRoutes = require("./routes/customerRout");
const eventRout = require("./routes/eventRout");
const bookingRout = require("./routes/bookingRout");
const venueRout = require("./routes/venueRout");
const payment_methodRoutes = require("./routes/payment_methodRoutes");
const delivery_methodRoutes = require("./routes/delivery_methodRoutes")
const ticket_statusRoutes = require("./routes/ticket_statusRoutes")
const ticket = require("./routes/ticket.rout")
const ticketType = require("./routes/ticket_type.Rout")
const event_typeRoutes = require("./routes/event_typeRoutes")
const humen_category = require('./routes/Humen_categoryRoutes')
const regionRoutes = require('./routes/regionRoutes')
const venue_typevenueRoutes = require("./routes/venue_typevenueRoutes")
const districtRoute = require("./routes/destrictRoute");
const venuePhotoRoute = require("./routes/venue_photoRoute");
const customerCardRoute = require("./routes/customerCardRoute");
const adminRoute = require("./routes/adminRoute");
const seat_typeRoute = require("./routes/seat_typeRoute");
const langRoutes = require("./routes/langRoutes")
const cartItemRoutes = require("./routes/cartItemRoutes")
const cartRoutes = require("./routes/cartRoutes")
const customer_addressRoutes = require("./routes/customer_addressRoutes")
const seatRoutes = require("./routes/seatRoutes")
const flatRoutes = require("./routes/flatRout")
const country = require("./routes/country")
const gender = require("./routes/gender.rout")
const status = require("./routes/status.rout")
const discount = require("./routes/discountRout")
const setupSwagger = require("./swagger/swager");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);


app.use("/api", customerRoutes);
app.use("/api", eventRout);
app.use("/api", venueRout);
app.use("/api", bookingRout);
app.use("/api", venue_typevenueRoutes)
app.use("/api", regionRoutes)
app.use("/api", langRoutes)
app.use("/api", humen_category)
app.use("/api", event_typeRoutes)
app.use("/api", payment_methodRoutes);
app.use("/api", delivery_methodRoutes);
app.use("/api", ticket_statusRoutes)
app.use("/api/districts", districtRoute);
app.use("/api", venuePhotoRoute);
app.use("/api", customerCardRoute);
app.use("/api", adminRoute);
app.use("/api", seat_typeRoute);
app.use("/api", cartItemRoutes)
app.use("/api", cartRoutes)
app.use("/api", customer_addressRoutes)
app.use("/api", seatRoutes)
app.use("/api", ticket)
app.use("/api", ticketType)
app.use("/api", country)
app.use("/api", flatRoutes)
app.use("/api", gender)
app.use("/api", status)
app.use("/api", discount)
setupSwagger(app);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})