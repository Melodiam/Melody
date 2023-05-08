import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from "@/store";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'waiting';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {} as UserProfile,
    statusByName: {} as Record<string, RequestState | undefined>,
  },
  reducers: {},
  // extraReducers: (builder) => {

  //     builder.addCase(fetchRecentlyPlayedTracks.pending, (state) => {
  //         state.statusByName['recentlyPlayed'] = "pending";
  //     });

  //     builder.addCase(fetchRecentlyPlayedTracks.fulfilled, (state, action) => {
  //         state.statusByName['recentlyPlayed'] = "fulfilled";
  //         state.recentlyPlayed = action.payload;
  //     });

  //     builder.addCase(fetchRecentlyPlayedTracks.rejected, (state, action) => {
  //         state.statusByName['recentlyPlayed'] = "rejected";
  //     });

  //     builder.addCase(refreshSpotifyToken.fulfilled, (state) => {
  //         let queue: Array<RequestState> = Object.keys(state.statusByName) as Array<RequestState>;
  //         queue = queue.filter(key => state.statusByName[key] === "waiting");

  //         queue.forEach(key => {
  //             state.statusByName[key] = undefined;
  //         });
  //     })
  // }
});

// export const selectStatusByName = (state: RootState, name: string) => state.spotify.statusByName[name];
// export const selectRecentlyPlayed = (state: RootState) => state.spotify.recentlyPlayed;
