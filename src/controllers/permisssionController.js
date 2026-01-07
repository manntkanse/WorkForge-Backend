import permission from "../models/permissionmodel.js";
import STATUS from "../config/enum/status.js";

const { HTTP_STATUS_CODES, } = STATUS;
const { OK, CREATED, NO_CONTENT, BAD_REQUEST, NOT_FOUND,INTERNAL_SERVER_ERROR } = HTTP_STATUS_CODES;

/**
 * @description Create a new permission
 * @route POST /api/permissions
 * @access Public
 */
 const createPermission = async (req, res) => {
  try {
    const { key, description, category } = req.body;
    const normalizedKey = key.trim().toUpperCase();

    // Validate required fields
    if (!key || !description || !category) {
      return res.status(BAD_REQUEST).json({ message: "All fields are required." });
    }

    // Check for existing permission with the same key
    const existingPermission = await permission.findOne({ key:normalizedKey });
    if (existingPermission) {
      return res.status(BAD_REQUEST).json({ message: "Permission with this key already exists." });
    }

    // Create new permission
    const newPermission = new permission({ key:normalizedKey, description, category });
    await newPermission.save();

    return res.status(CREATED).json({ message: "Permission created successfully.", permission: newPermission });
  } catch (error) {
    console.error("Error creating permission:", error);
    return res.status(INTERNAL_SERVER_ERROR).json({ message: "Server error." });
  }
}; 
/**
 * @description Get all permissions
 * @route GET /api/permissions
 * @access Public
 */
const getAllPermissions = async (req, res) => {
  try {
    const permissions = await permission.find();
    return res.status(OK).json({ permissions });
  } catch (error) {
    console.error("Error fetching permissions:", error);
    return res.status(INTERNAL_SERVER_ERROR).json({ message: "Server error." });
  }
};

export default {
  createPermission,
  getAllPermissions,
};