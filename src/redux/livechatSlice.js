import { createSlice } from "@reduxjs/toolkit";

const livechatSlice = createSlice({
    name: "livechat",
    initialState: {
        messages: []
    },
    reducers: {
        addmessage : (state, action) => {
            state.messages.slice(2,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addmessage} = livechatSlice.actions;
export default livechatSlice.reducer;