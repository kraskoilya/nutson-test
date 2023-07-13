import { AuthState } from '@nutson-test/features/auth/store/redusers';
import { FeedState } from '@nutson-test/features/feed/store/redusers';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
}
