import {
    createBooking,
    getBookingById,
    addServiceToBooking
} from "../managers/BookingManager.js";

export const createBookingController = async (req, res) => {
    try {
        const result = await createBooking(req.body);
        if (result.status === "error") {
            return res.status(400).json(result);
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const getBookingByIdController = async (req, res) => {
    try {
        const { bid } = req.params;
        const booking = await getBookingById(bid);

        if (!booking) {
            return res.status(404).json({
                status: "error",
                message: "No se encuentra reserva"
            });
        }

        res.status(200).json({
            status: "success",
            payload: booking
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const addServiceToBookingController = async (req, res) => {
    try {
        const { bid } = req.params;
        const { serviceId } = req.body;

        if (!serviceId) {
            return res.status(400).json({
                status: "error",
                message: "Falta el campo obligatorio: serviceId"
            });
        }

        const result = await addServiceToBooking(bid, serviceId);

        if (result.status === "error") {
            const statusCode = result.message.includes("no encontrada") ? 404 : 400;
            return res.status(statusCode).json(result);
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};