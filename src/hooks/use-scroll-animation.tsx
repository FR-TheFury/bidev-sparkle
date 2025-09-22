import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Component wrapper pour faciliter l'utilisation
interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: string;
  duration?: string;
  className?: string;
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade-in',
  delay = '0ms',
  duration = '600ms',
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out opacity-0`;
    const visibleClasses = 'opacity-100';
    
    const animationStyles = {
      'fade-in': {
        hidden: 'translate-y-8',
        visible: 'translate-y-0'
      },
      'slide-up': {
        hidden: 'translate-y-16',
        visible: 'translate-y-0'
      },
      'scale-in': {
        hidden: 'scale-95',
        visible: 'scale-100'
      },
      'slide-left': {
        hidden: 'translate-x-16',
        visible: 'translate-x-0'
      },
      'slide-right': {
        hidden: '-translate-x-16',  
        visible: 'translate-x-0'
      }
    };

    const currentAnimation = animationStyles[animation];
    
    return `${baseClasses} ${isVisible ? `${visibleClasses} ${currentAnimation.visible}` : currentAnimation.hidden}`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: delay,
        transitionDuration: duration
      }}
    >
      {children}
    </div>
  );
};