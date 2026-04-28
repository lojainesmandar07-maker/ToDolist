import { useState, useEffect } from 'react';
import localforage from 'localforage';

export function useLocalForage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    localforage.getItem<T>(key).then((storedValue) => {
      if (storedValue !== null) {
        setValue(storedValue);
      } else {
        // Fallback migration from localStorage
        const old = localStorage.getItem(key);
        if (old) {
          try {
            const parsed = JSON.parse(old);
            setValue(parsed);
          } catch {
            // Assume string if JSON parse fails
            if (!old.startsWith('blob:')) {
              setValue(old as any);
            }
          }
        }
      }
    }).catch(e => console.error('LocalForage load error:', e));
  }, [key]);

  const setValueAndSave = (newValue: T | ((curr: T) => T)) => {
    setValue((prev) => {
      const next = typeof newValue === 'function' ? (newValue as Function)(prev) : newValue;
      localforage.setItem(key, next).catch(e => console.error('LocalForage save error:', e));
      return next;
    });
  };

  return [value, setValueAndSave] as const;
}

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
