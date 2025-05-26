import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const ChatContainer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="h6" color="primary" gutterBottom>
        Chat Messages
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.paper,
          // borderRadius: theme.shape.borderRadius,
          p: 2,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          overflowY: "auto",
        }}
      >
        <Typography variant="body1">Chat message content goes here.</Typography>
      </Box>
    </Box>
  );
};

export default ChatContainer;
