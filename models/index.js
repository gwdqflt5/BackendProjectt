const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Models
const VenueType = require("./venue_typevenue.models")(sequelize, Sequelize);
const Booking = require("./booking")(sequelize, Sequelize);
const Customer = require("./customer")(sequelize, Sequelize);
const Event = require("./event")(sequelize, Sequelize);
const Venue = require("./venue")(sequelize, Sequelize);
const PaymentMethod = require("./payment_method.models")(sequelize, Sequelize);
const DeliveryMethod = require("./delivery_method.models")(sequelize, Sequelize);
const TicketStatus = require("./ticket_status.model")(sequelize, Sequelize);
const EventType = require("./event_type.models")(sequelize, Sequelize);
const HumenCategory = require("./humen_category.models")(sequelize, Sequelize);
const Lang = require("./lang.models")(sequelize, Sequelize);
const Region = require("./region.moduls")(sequelize, Sequelize);
const District = require("./districk.models")(sequelize, Sequelize);
const VenuePhoto = require("./venue_photo.models")(sequelize, Sequelize);
const CustomerCard = require("./customerCard.models")(sequelize, Sequelize);
const Admin = require("./admin.models")(sequelize, Sequelize);
const SeatType = require("./seat_type.models")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const CartItem = require("./cart_item.model")(sequelize, Sequelize);
const CustomerAddress = require("./customer_address.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const TicketType = require("./ticket.type.model.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Flat = require("./flat.mode")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);


Booking.associate(sequelize.models);
Cart.associate(sequelize.models);
PaymentMethod.associate(sequelize.models);
CartItem.associate(sequelize.models);
CustomerAddress.associate(sequelize.models);
CustomerCard.associate(sequelize.models);
Customer.associate(sequelize.models);
District.associate(sequelize.models);
Event.associate(sequelize.models);
Lang.associate(sequelize.models);
Venue.associate(sequelize.models);
HumenCategory.associate(sequelize.models);
EventType.associate(sequelize.models);
Seat.associate(sequelize.models);
TicketType.associate(sequelize.models);
Ticket.associate(sequelize.models);
Status.associate(sequelize.models);
VenuePhoto.associate(sequelize.models);


module.exports = {
  Booking,
  Discount,
  Flat,
  VenueType,
  Status,
  Gender,
  Ticket,
  TicketType,
  Country,
  District,
  CartItem,
  Lang,
  Region,
  VenuePhoto,
  HumenCategory,
  Seat,
  Cart,
  SeatType,
  CustomerAddress,
  Admin,
  CustomerCard,
  PaymentMethod,
  EventType,
  DeliveryMethod,
  TicketStatus,
  Customer,
  Event,
  Venue,
  sequelize
};

