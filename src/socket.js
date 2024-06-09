import { io } from 'socket.io-client'

export const useSocketIO = () => {
  const socket = io('wss://asgenius-api-production.up.railway.app/notifications', {
    transports: ['websocket'],
    auth: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWZkNDYzZjI2Y2FhYWU1M2Y4YjBkOTYiLCJlbWFpbCI6InJheWRlbDkyMDZAZ21haWwuY29tIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNzE3OTIxOTUzLCJleHAiOjE3MTc5MjU1NTN9.zhCSyQzni5hDs-Wf5IlrjIcBEQ-n54RW9D9X_0B5dtQ'
    }
  })
  return {
    socket
  }
}
