

export interface WebAppInitData {
  query_id?: string;
  user?: WebAppUser;
  receiver?: WebAppUser;
  chat?: WebAppChat;
  chat_type?: string;
  chat_instance?: string;
  start_param?: string;
  can_send_after?: number;
  auth_date: number;
  hash: string;
  signature?: string;
}

export interface WebAppUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface WebAppChat {
  id: number;
  type: string;
  title: string;
  username?: string;
  photo_url?: string;
}

export interface ThemeParams {
  bg_color?: string;
  text_color?: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
  header_bg_color?: string;
  bottom_bar_bg_color?: string;
  accent_text_color?: string;
  section_bg_color?: string;
  section_header_text_color?: string;
  section_separator_color?: string;
  subtitle_text_color?: string;
  destructive_text_color?: string;
}
export interface PopupParams {
  title?: string;
  message: string;
  buttons?: PopupButton[];
}

export interface PopupButton {
  id?: string; // Optional identifier for the button
  type: "ok" | "close" | "cancel"; // Strictly one of these values
  text?: string; // Optional button text
}

export interface HapticFeedback {
  impactOccurred(style: string): void;
  notificationOccurred(type: string): void;
  selectionChanged(): void;
}

export interface CloudStorage {
  setItem(key: string, value: string, callback?: (error: Error | null, success: boolean) => void): void;
  getItem(key: string, callback: (error: Error | null, value: string | null) => void): void;
  removeItem(key: string, callback?: (error: Error | null, success: boolean) => void): void;
}

export interface BiometricManager {
  isInited: boolean;
  isBiometricAvailable: boolean;
  biometricType: string;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  isBiometricTokenSaved: boolean;
  deviceId: string;
  init(callback?: () => void): void;
  requestAccess(params: BiometricRequestAccessParams, callback?: (granted: boolean) => void): void;
  authenticate(params: BiometricAuthenticateParams, callback?: (authenticated: boolean, token?: string) => void): void;
  updateBiometricToken(token: string, callback?: (updated: boolean) => void): void;
  openSettings(): void;
}

export interface BiometricRequestAccessParams {
  reason?: string;
}

export interface BiometricAuthenticateParams {
  reason?: string;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  altitude: number | null;
  course: number | null;
  speed: number | null;
  horizontal_accuracy: number | null;
  vertical_accuracy: number | null;
  course_accuracy: number | null;
  speed_accuracy: number | null;
}

export interface LocationManager {
  isInited: boolean;
  isLocationAvailable: boolean;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  init(callback?: () => void): void;
  getLocation(callback: (location: LocationData | null) => void): void;
  openSettings(): void;
}

export interface Accelerometer {
  isStarted: boolean;
  x: number;
  y: number;
  z: number;
  start(params: AccelerometerStartParams, callback?: (success: boolean) => void): void;
  stop(callback?: (success: boolean) => void): void;
}

export interface AccelerometerStartParams {
  refresh_rate?: number;
}

export interface DeviceOrientation {
  isStarted: boolean;
  absolute: boolean;
  alpha: number;
  beta: number;
  gamma: number;
  start(params: DeviceOrientationStartParams, callback?: (success: boolean) => void): void;
  stop(callback?: (success: boolean) => void): void;
}

export interface DeviceOrientationStartParams {
  refresh_rate?: number;
  need_absolute?: boolean;
}

export interface Gyroscope {
  isStarted: boolean;
  x: number;
  y: number;
  z: number;
  start(params: GyroscopeStartParams, callback?: (success: boolean) => void): void;
  stop(callback?: (success: boolean) => void): void;
}

export interface GyroscopeStartParams {
  refresh_rate?: number;
}

export interface SettingsButton {
  isVisible: boolean;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
}

export interface Invoice {
  open(url: string, callback?: (status: string) => void): void;
}

export interface QRScanner {
  show(params: QRScannerParams, callback?: (data: string) => void): void;
  close(): void;
}

export interface QRScannerParams {
  text?: string;
}

export interface Clipboard {
  readText(callback: (text: string | null) => void): void;
}

export interface Share {
  shareToStory(media_url: string, params?: StoryShareParams): void;
  shareMessage(msg_id: string, callback?: (success: boolean) => void): void;
}

export interface StoryShareParams {
  text?: string;
  widget_link?: StoryWidgetLink;
}

export interface StoryWidgetLink {
  url: string;
  name?: string;
}

export interface Fullscreen {
  requestFullscreen(): void;
  exitFullscreen(): void;
  isFullscreen: boolean;
}

export interface Orientation {
  lockOrientation(): void;
  unlockOrientation(): void;
  isOrientationLocked: boolean;
}

export interface HomeScreen {
  addToHomeScreen(): void;
  checkHomeScreenStatus(callback?: (status: string) => void): void;
}

export interface Events {
  onEvent(eventType: string, eventHandler: (data: any) => void): void;
  offEvent(eventType: string, eventHandler: (data: any) => void): void;
}