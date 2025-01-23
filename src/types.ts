export interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chart?: WebAppChat;
    chart_type?: string;
    chart_instance?: string;
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
    titel: string;
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
  export interface PopupButton {
    id?: string;
    type: "ok" | "close" | "cancel"; // Update this line
    text?: string;
  }
  
  export interface PopupParams {
    title?: string;
    message: string;
    buttons?: PopupButton[];
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
