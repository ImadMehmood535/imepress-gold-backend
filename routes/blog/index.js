const { Router } = require("express");

const validateRequest = require("../../middlewares/validateRequestJoi.middleware");

const verifyAuthentication = require("../../middlewares/auth.middleware");
const {
  registerSchema,
  updateSchema,
  deleteSchema,
} = require("../../validations/blog");
const {
  registerBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getSingleBlogs,
} = require("../../controllers/blog/blog.controller");
const router = Router();

router.post(
  "/",
  verifyAuthentication,
  validateRequest(registerSchema),
  registerBlog
);

router.get("/", getBlog);

router.get("/:slug" , getSingleBlogs)

router.patch(
  "/:id",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateBlog
);

router.delete(
  "/:id",
  verifyAuthentication,
  validateRequest(deleteSchema),
  deleteBlog
);

module.exports = router;
