'use client';
import {useEffect,useRef} from 'react';
import {useMotionValue,useReducedMotion,useScroll,useSpring,useTransform,type Variants} from 'framer-motion';
export const EASE:[number,number,number,number]=[.22,.61,.36,1];
export const stagger=(staggerChildren=.07,delayChildren=.1):Variants=>({hidden:{},show:{transition:{staggerChildren,delayChildren}}});
export const rise:Variants={hidden:{opacity:0,y:22},show:{opacity:1,y:0,transition:{duration:.85,ease:EASE}}};
export const fade:Variants={hidden:{opacity:0},show:{opacity:1,transition:{duration:1.1,ease:EASE}}};
export const bloom:Variants={hidden:{opacity:0,scale:1.05},show:{opacity:1,scale:1,transition:{duration:1.4,ease:EASE}}};
export const wipe=(radius=40):Variants=>({hidden:{opacity:0,y:34,clipPath:`inset(16% 0% 0% 0% round ${radius}px)`},show:{opacity:1,y:0,clipPath:`inset(0% 0% 0% 0% round ${radius}px)`,transition:{duration:1,ease:EASE}}});
export const maskWord:Variants={hidden:{y:'115%'},show:{y:'0%',transition:{duration:.95,ease:EASE}}};
export function useHeroParallax(cols:number){const sectionRef=useRef<HTMLElement>(null),stageRef=useRef<HTMLDivElement>(null),unit=useMotionValue(1),reduced=!!useReducedMotion();useEffect(()=>{const el=stageRef.current;if(!el)return;const measure=()=>unit.set(el.clientWidth/cols);measure();const observer=new ResizeObserver(measure);observer.observe(el);return()=>observer.disconnect()},[cols,unit]);const {scrollYProgress}=useScroll({target:sectionRef,offset:['start start','end start']});const smooth=useSpring(scrollYProgress,{stiffness:90,damping:24,restDelta:.0005});const plane=(distance:number)=>useTransform([smooth,unit],([p,un])=>reduced?0:Number(p)*distance*Number(un));return {sectionRef,stageRef,y:{far:plane(132),mid:plane(86),brain:plane(48),near:plane(-34),front:plane(-66)},progress:smooth,reduced}}
