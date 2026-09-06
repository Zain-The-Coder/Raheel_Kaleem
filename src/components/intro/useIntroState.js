"use client";
import { useState, useEffect } from 'react';

export function useIntroState() {
  const [showIntro, setShowIntro] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasPlayed = sessionStorage.getItem('intro_played');
    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  const completeIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('intro_played', 'true');
  };

  const skipIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('intro_played', 'true');
  };

  return { showIntro, skipIntro, completeIntro, isMounted };
}
