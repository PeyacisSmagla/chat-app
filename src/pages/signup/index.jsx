import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function Signup() {
  const { isSignUp, signUp } = useAuthStore();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          width: "70%",
          overflow: "hidden",
          borderRadius: 2,
        }}
        elevation={3}
      >
        <Box
          sx={{
            width: "50%",
            backgroundImage:
              'url("https://source.unsplash.com/600x800/?signup,technology")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Box sx={{ width: "50%", padding: 4 }}>
          <Typography variant="h5" gutterBottom align="center">
            Create Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                size="small"
                label="Full Name"
                margin="dense"
                variant="outlined"
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                size="small"
                label="Email"
                margin="dense"
                type="email"
                variant="outlined"
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                size="small"
                label="Password"
                margin="dense"
                type="password"
                variant="outlined"
                sx={{ mb: 2 }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1,
                  backgroundColor: "primary.main",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                {isSignUp ? "Loading..." : "Sign Up"}
              </Button>
            </Box>
          </form>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="text"
                  sx={{
                    color: "primary.main",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
