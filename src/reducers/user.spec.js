import userSlice, * as fromUser from "./user";

describe("user reducer", () => {
  it("should return initial state on first run", () => {
    const initialState = {
      currUser: "",
      usersStats: {},
    };

    const result = userSlice.reducer(undefined, {});

    expect(result).toEqual(initialState);
  });

  it("should correctly set currUser and create new stats at each new login", () => {
    const loginPayload = { username: "test" };

    const userState = userSlice.reducer(
      undefined,
      userSlice.actions.login(loginPayload)
    );

    const mockedUserStats = {
      nGames: 0,
      points: 0,
    };

    expect(fromUser.getCurrUser(userState)).toEqual(loginPayload.username);
    expect(fromUser.getUserStats(userState, loginPayload.username)).toEqual(
      mockedUserStats
    );
  });

  it("should not reset the stats at login if a user is already stored", () => {
    const initialState = {
      currUser: "",
      usersStats: { user: { nGames: 2, points: 4 } },
    };
    const loginPayload = { username: "user" };

    const userState = userSlice.reducer(
      initialState,
      userSlice.actions.login(loginPayload)
    );

    expect(fromUser.getCurrUser(userState)).toEqual(loginPayload.username);
    expect(fromUser.getUserStats(userState, loginPayload.username)).toEqual(
      initialState.usersStats.user
    );
  });

  it("should not reset the stats at logout but remove the currUser", () => {
    const initialState = {
      currUser: "user",
      usersStats: { user: { nGames: 2, points: 4 } },
    };

    const userState = userSlice.reducer(
      initialState,
      userSlice.actions.logout()
    );

    expect(fromUser.getCurrUser(userState)).toBe("");
    expect(fromUser.getUserStats(userState, initialState.currUser)).toEqual(
      initialState.usersStats.user
    );
  });

  it("should correctly delete the stats for a certain user", () => {
    const initialState = {
      currUser: "user",
      usersStats: { user: { nGames: 2, points: 4 } },
    };

    const userState = userSlice.reducer(
      initialState,
      userSlice.actions.delUserStats({ username: initialState.currUser })
    );

    expect(fromUser.getCurrUser(userState)).toBe("");
    expect(fromUser.getUserStats(userState, initialState.currUser)).toEqual(
      undefined
    );
  });

  it("should correctly update the stats for a certain user", () => {
    const initialState = {
      currUser: "user",
      usersStats: { user: { nGames: 2, points: 4 } },
    };

    const userState = userSlice.reducer(
      initialState,
      userSlice.actions.updateUserStats({
        username: initialState.currUser,
        points: 2,
      })
    );

    expect(fromUser.getCurrUser(userState)).toBe("user");
    expect(fromUser.getUserStats(userState, initialState.currUser)).toEqual({
      nGames: 3,
      points: 6,
    });
  });
});
