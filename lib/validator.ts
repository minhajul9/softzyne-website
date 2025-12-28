import * as z from "zod";

export const addEmplyeeSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().trim().min(4, {
    message: "Password must be at least 4 characters long.",
  }),
});
export type addEmployeeValues = z.infer<typeof addEmplyeeSchema>;

export const loginSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().trim().min(4, {
    message: "Password must be at least 4 characters long.",
  }),
});
export type loginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Please enter a valid email address.",
  }),
  number: z.string().trim().length(11, {
    message: "Number must be 11 character long.",
  }),
  speed: z.number().gt(0, "Select a package"),
  address: z.string().trim().min(1, {
    message: "Please provide your address",
  }),
  district: z.string().trim().min(1, {
    message: "Select a district",
  }),
  thana: z.string().trim().min(1, {
    message: "Select a Thana",
  }),
});
export type registerValues = z.infer<typeof registerSchema>;

export const changePasswordSchema = z.object({
  id: z.string().trim().min(1, {
    message: "Missing user Id",
  }),
  password: z.string().trim().min(4, {
    message: "Password must be at least 4 characters long.",
  }),
});

export type changePasswordValues = z.infer<typeof changePasswordSchema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const imageSchema = z
  .any()
  .nullable()
  .refine((file) => file !== null && file !== undefined, "Image is required")
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg and .png formats are supported."
  );

export const paymentSchema = z.object({
  image: imageSchema,
  merchant: z.boolean().default(false)
});
export type paymentValue = z.infer<typeof paymentSchema>;

export const packageSchema = z.object({
  image: imageSchema,
  title: z.string().trim().min(1, {
    message: "Title is required.",
  }),
  speed: z.coerce.number().gt(0, "Must be greater then zero"),
  price: z.coerce.number().gt(0, "Must be greater then zero"),
  lists: z
    .array(
      z.object({ description: z.string().trim().min(1, "Must Fill the input") })
    )
    .min(1, {
      message: "Name is required.",
    }),
});
export type packageValue = z.infer<typeof packageSchema>;

export const packageUpdateSchema = z.object({
  id: z.string(),
  image: z
    .any()
    .refine(
      (file) => file === null || file?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (file) => file === null || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg and .png formats are supported."
    ),
  secure_url: z.string().trim().min(1, {
    message: "secure_url is required.",
  }),
  public_id: z.string().trim().min(1, {
    message: "public_id is required.",
  }),
  title: z.string().trim().min(1, {
    message: "Title is required.",
  }),
  speed: z.coerce.number().gt(0, "Must be greater then zero"),
  price: z.coerce.number().gt(0, "Must be greater then zero"),
  lists: z
    .array(
      z.object({ description: z.string().trim().min(1, "Must Fill the input") })
    )
    .min(1, {
      message: "Name is required.",
    }),
});
export type packageUpdateValue = z.infer<typeof packageUpdateSchema>;

export const bannerSchema = z.object({
  image: imageSchema,
});
export type bannerValue = z.infer<typeof bannerSchema>;

export const liveSchema = z.object({
  logo: imageSchema,
  popup: imageSchema,
  link: z.string().trim().min(1, "Must give a link"),
});

export type liveValue = z.infer<typeof liveSchema>;

export const editLiveSchema = z.object({
  logo: z
    .any()
    .refine(
      (file) => file === null || file?.size <= 1024 * 1024,
      `Max image size is 1MB.`
    )
    .refine(
      (file) => file === null || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg and .png formats are supported."
    ),
  popup: z
    .any()
    .refine(
      (file) => file === null || file?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (file) => file === null || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg and .png formats are supported."
    ),
  link: z.string().trim().min(1, "Must give a link"),
});
export type editLiveValue = z.infer<typeof editLiveSchema>;

export const serverSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  link: z.string().trim().min(1, {
    message: "Link is required.",
  }),
  icon: z.enum(["MonitorPlay", "Clapperboard", "RadioTower"], {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errorMap: (issue, ctx) => {
      return { message: "Please select icon type" };
    },
  }),
});
export type serverValues = z.infer<typeof serverSchema>;
