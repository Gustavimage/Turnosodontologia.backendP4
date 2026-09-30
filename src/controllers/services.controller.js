import {
    getServices,
    getServiceById,
    addService,
    updateService,
    deleteService
} from "../managers/ServiceManager.js";

export const getServicesController = async (req, res) => {
    try {
        const { category } = req.query;
        let services = await getServices();

        if (category) {
            services = services.filter((service) => service.category === category);
        }

        res.status(200).json({
            status: "success",
            payload: services
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const getServiceByIdController = async (req, res) => {
    try {
        const { sid } = req.params;
        const service = await getServiceById(sid);

        if (!service) {
            return res.status(404).json({
                status: "error",
                message: "No se encuentra servicio"
            });
        }

        res.status(200).json({
            status: "success",
            payload: service
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const addServiceController = async (req, res) => {
    try {
        const result = await addService(req.body);
        if (result.status === "error") {
            return res.status(400).json(result);
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const updateServiceController = async (req, res) => {
    try {
        const { sid } = req.params;
        const result = await updateService(sid, req.body);

        if (result.status === "error") {
            return res.status(404).json(result);
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const deleteServiceController = async (req, res) => {
    try {
        const { sid } = req.params;
        const result = await deleteService(sid);

        if (result.status === "error") {
            return res.status(404).json(result);
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};