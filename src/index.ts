import { playSound } from './sounds';
import './toastly.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';
export type ToastTheme = 'light' | 'dark';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastlyOptions {
  title?: string;
  message: string;
  type?: ToastType;
  theme?: ToastTheme;
  variant?: 'default' | 'swift' | 'chat' | 'minimal' | 'outline';
  position?: ToastPosition;
  duration?: number; // In seconds
  sound?: boolean;
  logoUrl?: string;
}

export interface ToastlyGlobalConfig {
  theme?: ToastTheme;
  variant?: 'default' | 'swift' | 'chat' | 'minimal' | 'outline';
  position?: ToastPosition;
  duration?: number;
  sound?: boolean;
}

const ICONS = {
  success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
  warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
};

export class Toastly {
  private static containers: Record<string, HTMLElement> = {};
  private static globalConfig: ToastlyGlobalConfig = {
    theme: 'light',
    variant: 'default',
    position: 'top-right',
    duration: 5,
    sound: false
  };

  public static config(options: ToastlyGlobalConfig) {
    this.globalConfig = { ...this.globalConfig, ...options };
  }

  private static ensureContainer(position: ToastPosition) {
    if (!this.containers[position]) {
      const container = document.createElement('div');
      container.className = `toastly-container toastly-pos-${position}`;
      document.body.appendChild(container);
      this.containers[position] = container;
    }
    return this.containers[position];
  }

  public static show(options: ToastlyOptions | string) {
    if (typeof window === 'undefined') return;

    const opts: ToastlyOptions = typeof options === 'string' ? { message: options } : options;
    
    const type = opts.type || 'default';
    const theme = opts.theme || this.globalConfig.theme || 'light';
    const variant = opts.variant || this.globalConfig.variant || 'default';
    const position = opts.position || this.globalConfig.position || 'top-right';
    
    const rawDuration = opts.duration !== undefined ? opts.duration : this.globalConfig.duration;
    const duration = rawDuration !== undefined ? rawDuration : 5;
    
    const playAudio = opts.sound !== undefined ? opts.sound : this.globalConfig.sound;

    const container = this.ensureContainer(position);

    if (playAudio) {
      playSound(type);
    }

    const toast = document.createElement('div');
    toast.className = `toastly toastly-type-${type} toastly-theme-${theme} toastly-variant-${variant}`;
    
    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'toastly-icon';

    // Content
    const content = document.createElement('div');
    content.className = 'toastly-content';
    if (opts.title) {
      const title = document.createElement('h4');
      title.className = 'toastly-title';
      title.innerText = opts.title;
      content.appendChild(title);
    }
    const message = document.createElement('p');
    message.className = 'toastly-message';
    message.innerText = opts.message;
    content.appendChild(message);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toastly-close';
    closeBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    if (variant === 'swift') {
      const middleWrapper = document.createElement('div');
      middleWrapper.className = 'toastly-middle';
      
      const iconWrapperSwift = document.createElement('div');
      iconWrapperSwift.className = 'toastly-icon-swift';
      iconWrapperSwift.innerHTML = ICONS[type] || ICONS.default;
      middleWrapper.appendChild(iconWrapperSwift);
      
      const msg = document.createElement('p');
      msg.className = 'toastly-swift-message';
      msg.innerText = opts.message;
      middleWrapper.appendChild(msg);

      middleWrapper.appendChild(closeBtn);
      toast.appendChild(middleWrapper);
    } else if (variant === 'chat') {
      const chatWrapper = document.createElement('div');
      chatWrapper.className = 'toastly-chat-wrapper';
      
      if (opts.logoUrl) {
        const avatar = document.createElement('img');
        avatar.src = opts.logoUrl;
        avatar.className = 'toastly-chat-avatar';
        chatWrapper.appendChild(avatar);
      } else {
        const defaultAvatar = document.createElement('div');
        defaultAvatar.className = 'toastly-chat-avatar';
        defaultAvatar.innerHTML = ICONS[type] || ICONS.default;
        chatWrapper.appendChild(defaultAvatar);
      }

      const contentBox = document.createElement('div');
      contentBox.className = 'toastly-chat-content';
      
      if (opts.title) {
        const title = document.createElement('p');
        title.className = 'toastly-chat-title';
        title.innerText = opts.title;
        contentBox.appendChild(title);
      }
      
      const msg = document.createElement('p');
      msg.className = 'toastly-chat-message';
      msg.innerText = opts.message;
      contentBox.appendChild(msg);
      
      chatWrapper.appendChild(contentBox);
      chatWrapper.appendChild(closeBtn);
      toast.appendChild(chatWrapper);
    } else if (variant === 'minimal') {
      const minimalWrapper = document.createElement('div');
      minimalWrapper.className = 'toastly-minimal-wrapper';
      const msg = document.createElement('p');
      msg.className = 'toastly-minimal-message';
      msg.innerText = opts.message;
      minimalWrapper.appendChild(msg);
      minimalWrapper.appendChild(closeBtn);
      toast.appendChild(minimalWrapper);
    } else {
      // Default & Outline styles use the standard DOM structure
      if (opts.logoUrl) {
        const img = document.createElement('img');
        img.src = opts.logoUrl;
        img.alt = 'logo';
        iconWrapper.appendChild(img);
      } else {
        iconWrapper.innerHTML = ICONS[type] || ICONS.default;
      }
      toast.appendChild(iconWrapper);
      toast.appendChild(content);
      toast.appendChild(closeBtn);
    }

    // Progress
    let progressInterval: number | undefined;
    if (duration > 0) {
      const progress = document.createElement('div');
      progress.className = 'toastly-progress';
      toast.appendChild(progress);

      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateProgress = () => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        const percentage = (remaining / (duration * 1000)) * 100;
        progress.style.width = `${percentage}%`;

        if (remaining > 0) {
          progressInterval = requestAnimationFrame(updateProgress);
        }
      };
      progressInterval = requestAnimationFrame(updateProgress);
    }

    // Insert at top if position is top-* otherwise append
    if (position.startsWith('top-')) {
      container.insertBefore(toast, container.firstChild);
    } else {
      container.appendChild(toast);
    }

    let isRemoving = false;
    const removeToast = () => {
      if (isRemoving) return;
      isRemoving = true;
      if (progressInterval) cancelAnimationFrame(progressInterval);
      
      toast.classList.add('toastly-exit');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300); // Wait for exit animation
    };

    closeBtn.addEventListener('click', removeToast);

    if (duration > 0) {
      setTimeout(() => {
        removeToast();
      }, duration * 1000);
    }
  }

  // Shorthands
  public static success(message: string, options?: Omit<ToastlyOptions, 'message'|'type'>) {
    this.show({ ...options, message, type: 'success' });
  }
  public static error(message: string, options?: Omit<ToastlyOptions, 'message'|'type'>) {
    this.show({ ...options, message, type: 'error' });
  }
  public static info(message: string, options?: Omit<ToastlyOptions, 'message'|'type'>) {
    this.show({ ...options, message, type: 'info' });
  }
  public static warning(message: string, options?: Omit<ToastlyOptions, 'message'|'type'>) {
    this.show({ ...options, message, type: 'warning' });
  }
}

export default Toastly;
