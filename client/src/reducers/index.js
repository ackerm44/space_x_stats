import { combineReducers } from 'redux';
import { latestLaunch, latestLaunchHasErrored, latestLaunchIsLoading } from './latestLaunch';
import { rocketsHasErrored, rocketsIsLoading, rockets} from './rockets'
import { launchpadsHasErrored, launchpadsIsLoading, launchpads} from './launchpads'
import { upcomingLaunchesHasErrored, upcomingLaunchesIsLoading, upcomingLaunches} from './upcomingLaunches'

export default combineReducers({
    latestLaunch,
    latestLaunchHasErrored,
    latestLaunchIsLoading,
    rocketsHasErrored,
    rocketsIsLoading,
    rockets,
    launchpadsHasErrored,
    launchpadsIsLoading,
    launchpads,
    upcomingLaunchesHasErrored,
    upcomingLaunchesIsLoading,
    upcomingLaunches
});
