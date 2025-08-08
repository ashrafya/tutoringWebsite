import { Box } from '@chakra-ui/react';

export default function StatusIndicator() {
  return (
    <>
      <style>
        {`
          @keyframes pulseRing {
            0% {
              transform: scale(0.33);
            }
            30% {
              transform: scale(0.66);
            }
            40%, 50%, 100% {
              opacity: 0;
            }
          }
          .pulse-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.33);
            width: 300%;
            height: 300%;
            box-sizing: border-box;
            border-radius: 50%;
            background-color: #22c55e;
            opacity: 0.6;
            animation: pulseRing 2.25s cubic-bezier(0.455,0.03,0.515,0.955) infinite;
            z-index: 1;
          }
        `}
      </style>
      <Box
        position="fixed"
        bottom="32px"
        right="32px"
        zIndex={9999}
        as="div"
        h="28px"
        w="28px"
        bgColor="green.500"
        borderRadius="50%"
        boxShadow="0 0 0 4px rgba(34,197,94,0.15)"
        border="3px solid white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="visible"
      >
        <span className="pulse-ring" />
      </Box>
    </>
  );
}