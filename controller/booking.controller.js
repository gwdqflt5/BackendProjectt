const { Booking, Status, Discount, DeliveryMethod, Cart, PaymentMethod } = require("../models");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookingById = async (req, res) => {

  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Status,
          as: "status",
        },
        {
          model: Cart,
          as: "cart",
        },
        {
          model: PaymentMethod,
          as: "paymentmetod",
        },
        {
          model: DeliveryMethod,
          as: "deliveryMethod",
        },
        {
          model: Discount,
          as: "discount",
        },

      ],
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    await booking.update(req.body);
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    await booking.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
