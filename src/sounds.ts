export function playSound(type: 'success' | 'error' | 'info' | 'warning' | 'default') {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Default simple 'pop' sound
    let freq1 = 400;
    let freq2 = 600;
    let typeWave: OscillatorType = 'sine';

    if (type === 'success') {
      freq1 = 600;
      freq2 = 1200;
      typeWave = 'sine';
    } else if (type === 'error') {
      freq1 = 300;
      freq2 = 150;
      typeWave = 'sawtooth';
    } else if (type === 'warning') {
      freq1 = 400;
      freq2 = 300;
      typeWave = 'square';
    } else if (type === 'info') {
      freq1 = 800;
      freq2 = 800;
      typeWave = 'sine';
    }

    osc.type = typeWave;
    
    // Envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    // Pitch sweep for some types
    osc.frequency.setValueAtTime(freq1, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq2, ctx.currentTime + 0.1);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    // Ignore audio errors (e.g. user hasn't interacted with document yet)
    console.warn('Toastex audio playback failed:', e);
  }
}
