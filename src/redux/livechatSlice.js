import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../Constants";

const livechatSlice = createSlice({
    name: "livechat",
    initialState: {
        messages: []
    },
    reducers: {
        addmessage : (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addmessage} = livechatSlice.actions;
export default livechatSlice.reducer;