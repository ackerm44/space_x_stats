import { combineReducers } from 'redux';
import { latestLaunch, latestLaunchHasErrored, latestLaunchIsLoading } from './latestLaunch';
import { rocketsHasErrored, rocketsIsLoading, rockets} from './rockets'

export default combineReducers({
    latestLaunch,
    latestLaunchHasErrored,
    latestLaunchIsLoading,
    rocketsHasErrored,
    rocketsIsLoading,
    rockets,
    launchpadsHasErrored,
    launchpadsIsLoading,
    launchpads
});
