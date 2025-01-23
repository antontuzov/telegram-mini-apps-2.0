// src/modules/Share.ts



export class Share {
    static shareToStory(media_url: string, params?: StoryShareParams): void {
      window.Telegram.WebApp.shareToStory(media_url, params);
    }
  
    static shareMessage(msg_id: string, callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.shareMessage(msg_id, callback);
    }
  }