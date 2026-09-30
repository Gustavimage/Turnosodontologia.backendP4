import fs from "node:fs/promises";
import { getServiceById } from "./ServiceManager.js";

const filePath = "./src/data/bookings.json";

const readBookings = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeBookings = async (bookings) => {
    await fs.writeFile(filePath, JSON.stringify(bookings, null, 2));
};

export const getBookingById = async (id) => {
    const bookings = await readBookings();
    const booking = bookings.find((b) => b.id === Number(id));
    return booking || null;
};

export const createBooking = async (bookingData) => {
    const bookings = await readBookings();

    const newBooking = {
        id: bookings.length > 0 ? bookings[bookings.length - 1].id + 1 : 1,
        services: bookingData.services || [],
        date: bookingData.date || new Date().toISOString(),
        status: "pending",
        ...bookingData
    };

    bookings.push(newBooking);
    await writeBookings(bookings);

    return {
        status: "success",
        payload: newBooking
    };
};

export const addServiceToBooking = async (bookingId, serviceId) => {

    const service = await getServiceById(serviceId);
    if (!service) {
        return {
            status: "error",
            message: "El servicio no existe"
        };
    }

    const bookings = await readBookings();
    const bookingIndex = bookings.findIndex((b) => b.id === Number(bookingId));

    if (bookingIndex === -1) {
        return {
            status: "error",
            message: "No se encuentra reserva"
        };
    }

    const booking = bookings[bookingIndex];
    if (!booking.services) {
        booking.services = [];
    }

    booking.services.push(service);
    await writeBookings(bookings);

    return {
        status: "success",
        payload: booking
    };
};