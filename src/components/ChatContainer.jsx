import { useTheme } from "@emotion/react";
import { Box, Skeleton } from "@mui/material";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import InputMessage from "./InputMessage";

const renderSkeletonMessages = () => {
  return Array.from({ length: 6 }).map((_, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
        mb: 1,
      }}
    >
      <Skeleton
        variant="rounded"
        width={`${60 + Math.random() * 100}px`}
        height={32}
        animation="wave"
      />
    </Box>
  ));
};

const ChatContainer = () => {
  const theme = useTheme();
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser?._id, getMessages]);

  return (
    <Box sx={{ padding: 2 }}>
      <ChatHeader />
      <Box sx={{ mt: 2 }}>
        {isMessagesLoading ? (
          renderSkeletonMessages()
        ) : (
          <Box>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.senderId === selectedUser._id
                      ? "flex-start"
                      : "flex-end",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor:
                      msg.senderId === selectedUser._id
                        ? theme.palette.grey[300]
                        : theme.palette.primary.main,
                    color:
                      msg.senderId === selectedUser._id
                        ? theme.palette.text.primary
                        : "#fff",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    maxWidth: "60%",
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <InputMessage />
    </Box>
  );
};

export default ChatContainer;
