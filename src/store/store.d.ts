/**
 * UserProfile State
 */
interface UserProfile {
  name?: string;
  email?: string;
}

/**
 * HTTP Request States
 */
type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'waiting';
