export function latestLaunchHasErrored(bool) {
    return {
        type: 'LATEST_LAUNCH_HAS_ERRORED',
        hasErrored: bool
    };
}

export function latestLaunchIsLoading(bool) {
    return {
        type: 'LATEST_LAUNCH_IS_LOADING',
        isLoading: bool
    };
}

export function latestLaunchFetchDataSuccess(launch) {
    return {
        type: 'LATEST_LAUNCH_FETCH_DATA_SUCCESS',
        launch
    };
}
