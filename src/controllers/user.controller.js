import { registerService } from "../services/user.services.js";

export const registerController = async (req, res) => {
  const result = await registerService(req.body);

  res.status(201).json({
    success: true,
    message:
      "User created successfully. Please check your email to verify your account.",
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  });
};


// export const loginController = async (req, res) => {
//     const result = await loginService(req.body);
//     res.status(200).json({
//         success: true,
//         message: "Login successful",
//         data: {
//             user: result.user,
//             accessToken: result.accessToken,
//         },
//     });
// }