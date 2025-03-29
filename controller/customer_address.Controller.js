const { CustomerAddress, Customer, District, Country, Region } = require("../models");
const { validateCustomerAddress } = require("../validations/customer_addressValidation");


exports.createCustomerAddress = async (req, res) => {
    console.log("Request body:", req.body);

    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const address = await CustomerAddress.create(req.body);
        res.status(201).send(address);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomerAddresses = async (req, res) => {
    try {
        const customerAddresses = await CustomerAddress.findAll();
        res.status(200).send(customerAddresses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomerAddressById = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customer",
                },
                {
                    model: Country,
                    as: "country",
                },
                {
                    model: Region,
                    as: "region",
                },
                {
                    model: District,
                    as: "district",
                },
            ],
        });

        if (!customerAddress) return res.status(404).send("Customer Address not found");

        res.status(200).send(customerAddress);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const address = await CustomerAddress.findByPk(req.params.id);
        if (!address) return res.status(404).send("Address not found");

        await address.update(req.body);
        res.status(200).send(address);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).send("Customer Address not found");

        const customerAddressData = customerAddress.toJSON();
        await customerAddress.destroy();
        res.status(204).send(customerAddressData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
